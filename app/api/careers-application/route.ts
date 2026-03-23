import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from "@/lib/email"
import { buildEmailTemplate, row, rowHtml, section } from "@/lib/emailTemplate"
import { escapeHtml } from "@/lib/escapeHtml"
import { checkRateLimit, careersLimiter } from "@/lib/rateLimit"

export async function POST(req: NextRequest) {
  if (!await checkRateLimit(careersLimiter, req)) {
    return NextResponse.json({ success: false, message: 'Too many requests. Please try again shortly.' }, { status: 429 })
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

    // Turnstile verification
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

    // Basic required field validation
    if (!fullName || !email || !phone || !city || !branch ||
        !experience || !licences?.length || !contactMethod ||
        !workHistory || !aboutYourself || !healthIssues || !accHistory) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // Build email — all user values are escaped via row().
    // rowHtml is used only for the mailto link with pre-escaped parts.
    const escapedEmail = escapeHtml(email)
    const content = `
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #1f2d3d;">
        ${section('Applicant Details', `
          ${row('Name', fullName)}
          ${rowHtml('Email', `<a href="mailto:${escapedEmail}" style="color:#fd4f00;text-decoration:none;">${escapedEmail}</a>`)}
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
