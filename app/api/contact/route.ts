import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"
import { buildEmailTemplate, row, section } from "@/lib/emailTemplate"

let globalEmailCount = 0
const MAX_EMAILS_PER_DEPLOYMENT = 200

const rateLimitMap = new Map<string, { count: number; lastRequest: number }>()

function checkRateLimit(req: Request): boolean {
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

export async function POST(req: Request) {
  // 1. Rate limit
  if (!checkRateLimit(req)) {
    return new Response('Too many requests', { status: 429 })
  }

  // 2. Global email cap
  if (globalEmailCount >= MAX_EMAILS_PER_DEPLOYMENT) {
    console.warn('Email cap reached:', globalEmailCount)
    return NextResponse.json(
      { error: 'Email limit reached. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const body = await req.json()
    const { name, email, phone, branch, message, turnstileToken, companyPhone } = body

    // 3. Honeypot check
    if (companyPhone) {
      return NextResponse.json({ success: true })
    }

    // 4. Turnstile verification
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

    // Message validation
    if (!message || message.trim().length < 10) {
      return new Response(
        JSON.stringify({ error: "Please enter a more detailed message." }),
        { status: 400 }
      )
    }

    // 4 & 5. Process and send email
    const content = `
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #1f2d3d;">
        ${section('Enquiry Details', `
          ${row('Name', name)}
          ${row('Email', `<a href="mailto:${email}" style="color:#F26522;text-decoration:none;">${email}</a>`)}
          ${row('Phone', phone)}
          ${row('Branch', branch)}
          ${row('Message', message)}
        `)}
      </table>
    `

    const html = buildEmailTemplate("Website Enquiry", content)

    await sendEmail({
      to: { email: "office@menatwork.co.nz", name: "Men at Work Office" },
      subject: `Men at Work Website Enquiry - ${name} (${branch})`,
      replyTo: { email },
      html,
    })

    globalEmailCount++
    console.log('Global email count:', globalEmailCount)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
