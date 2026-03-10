import { NextRequest, NextResponse } from 'next/server'

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

    // In production: send to CRM, email service, or database here.
    // For now, log to console and return success.
    console.log('[Careers Application]', {
      fullName, email, phone, city, startDate, branch,
      experience, licences, contactMethod,
      workHistory, aboutYourself, healthIssues, accHistory,
      howDidYouHear, casualConfirm,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
