import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"
import { buildEmailTemplate, row, rowHtml, section } from "@/lib/emailTemplate"
import { escapeHtml } from "@/lib/escapeHtml"
import { checkRateLimit, contactLimiter } from "@/lib/rateLimit"

export async function POST(req: Request) {
  if (!await checkRateLimit(contactLimiter, req)) {
    return NextResponse.json({ success: false, message: 'Too many requests. Please try again shortly.' }, { status: 429 })
  }

  try {
    const body = await req.json()
    const { name, email, phone, branch, message, turnstileToken, companyPhone } = body

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

    // Message validation
    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: 'Please enter a more detailed message.' }, { status: 400 })
    }

    // Build email — all user values are escaped.
    // rowHtml is used for the email address so we can render a mailto link;
    // the interpolated value is escaped before insertion.
    const escapedEmail = escapeHtml(email)
    const content = `
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #1f2d3d;">
        ${section('Enquiry Details', `
          ${row('Name', name)}
          ${rowHtml('Email', `<a href="mailto:${escapedEmail}" style="color:#fd4f00;text-decoration:none;">${escapedEmail}</a>`)}
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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
