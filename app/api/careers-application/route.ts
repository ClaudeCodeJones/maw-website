import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from "@/lib/email"
import { buildEmailTemplate, row, section } from "@/lib/emailTemplate"

const rateLimitMap = new Map<string, { count: number; lastRequest: number }>()

function checkRateLimit(req: NextRequest): boolean {
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown'
  const now = Date.now()
  const windowMs = 60 * 1000
  const limit = 5
  const record = rateLimitMap.get(ip)
  if (record && now - record.lastRequest < windowMs) {
    if (record.count >= limit) return false
    record.count++
    record.lastRequest = now
    rateLimitMap.set(ip, record)
  } else {
    rateLimitMap.set(ip, { count: 1, lastRequest: now })
  }
  return true
}

export async function POST(req: NextRequest) {
  if (!checkRateLimit(req)) {
    return new Response('Too many requests', { status: 429 })
  }

  try {
    const body = await req.json()
    const {
      fullName, email, phone, city, startDate, branch,
      experience, licences, contactMethod,
      workHistory, aboutYourself, healthIssues, accHistory,
      howDidYouHear, casualConfirm, turnstileToken, companyPhone,
      rightToWork, visaExpiry, drugAlcoholConfirm, criminalHistoryConfirm,
      experienceOther, interviewDay, interviewTime,
    } = body

    // Honeypot check
    if (companyPhone) {
      return NextResponse.json({ success: true })
    }

    // Verify Turnstile token
    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    })
    const verifyData = await verifyResponse.json()
    if (!verifyData.success) {
      return NextResponse.json({ error: 'Turnstile verification failed' }, { status: 400 })
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s]{7,20}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number format' }, { status: 400 })
    }

    // Basic validation
    if (!fullName || !email || !phone || !city || !branch ||
        !experience || !licences?.length || !contactMethod ||
        !workHistory || !aboutYourself || !healthIssues || !accHistory) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    const content = `
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #1f2d3d;">
        ${section('Applicant Details', `
          ${row('Name', fullName)}
          ${row('Email', `<a href="mailto:${email}" style="color:#F26522;text-decoration:none;">${email}</a>`)}
          ${row('Phone', phone)}
          ${row('City', city)}
          ${row('Branch', branch)}
          ${row('Available From', startDate || 'Not specified')}
          ${row('Right to Work', rightToWork || 'Not specified')}
          ${visaExpiry ? row('Visa Expiry', visaExpiry) : ''}
        `)}
        ${section('Experience & Eligibility', `
          ${row('Experience', experience)}
          ${experienceOther ? row('Experience Detail', experienceOther) : ''}
          ${row('Licences', Array.isArray(licences) ? licences.join(', ') : licences)}
        `)}
        ${section('Additional Information', `
          ${row('Work History', workHistory)}
          ${row('About Yourself', aboutYourself)}
          ${row('Health Issues', healthIssues)}
          ${row('ACC History', accHistory)}
        `)}
        ${section('Interview Preference', `
          ${row('Preferred Day', interviewDay || 'No preference')}
          ${row('Preferred Time', interviewTime || 'No preference')}
          ${row('Preferred Contact', contactMethod)}
          ${row('How Did You Hear', howDidYouHear || 'Not specified')}
        `)}
        ${section('Declarations', `
          ${row('Casual Worker Guide', casualConfirm ? 'Confirmed' : 'Not confirmed')}
          ${row('Drug & Alcohol Policy', drugAlcoholConfirm ? 'Confirmed' : 'Not confirmed')}
          ${row('Criminal History', criminalHistoryConfirm ? 'Confirmed' : 'Not confirmed')}
        `)}
      </table>
    `

    const html = buildEmailTemplate("Website Job Application", content)

    await sendEmail({
      to: { email: "nathan.jones@menatwork.co.nz", name: "Nathan Jones" },
      subject: `Job Application - ${fullName} (${branch}, ${experience})`,
      replyTo: { email },
      html,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
