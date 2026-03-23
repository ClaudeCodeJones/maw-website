import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"
import { buildEmailTemplate, row, rowHtml, section } from "@/lib/emailTemplate"
import { escapeHtml } from "@/lib/escapeHtml"
import { checkRateLimit, quoteLimiter } from "@/lib/rateLimit"

function yn(val: string) {
  return val === 'yes' ? 'Yes' : val === 'no' ? 'No' : val || '-'
}

export async function POST(req: Request) {
  if (!await checkRateLimit(quoteLimiter, req)) {
    return NextResponse.json({ success: false, message: 'Too many requests. Please try again shortly.' }, { status: 429 })
  }

  try {
    const body = await req.json()
    const {
      fullName, companyName, title, phone, email, hasAccount, branch,
      projectName, projectTiming, location, plantNeeded, workTimes, unattendedSite,
      selfTM, selfTMDetail, wantsTMP, wantsCAR,
      costType, onsiteMeeting, meetingDate, meetingTime,
      otherInfo, fileData, turnstileToken, companyPhone,
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

    const meetingInfo = onsiteMeeting === 'yes' && meetingDate
      ? `${meetingDate} at ${meetingTime}`
      : yn(onsiteMeeting) === 'No' ? 'No' : '-'

    const fileInfo = fileData ? fileData.name : 'Not provided'

    // Build email — all user values are escaped via row().
    // rowHtml is used only for the mailto link with pre-escaped parts.
    const escapedEmail = escapeHtml(email)
    const content = `
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #1f2d3d;">
        ${section('Client Details', `
          ${row('Name', fullName)}
          ${row('Company', companyName)}
          ${row('Title', title)}
          ${row('Phone', phone)}
          ${rowHtml('Email', `<a href="mailto:${escapedEmail}" style="color:#fd4f00;text-decoration:none;">${escapedEmail}</a>`)}
          ${row('Existing Account', yn(hasAccount))}
          ${row('Branch', branch)}
        `)}
        ${section('Project Details', `
          ${projectName ? row('Project Name', projectName) : ''}
          ${projectTiming ? row('Expected Timing', projectTiming) : ''}
          ${row('Location', location)}
          ${row('Location File', fileInfo)}
          ${row('Plant Required', plantNeeded)}
          ${row('Work Times', workTimes)}
          ${row('Unattended Site', yn(unattendedSite))}
          ${row('Self TM', yn(selfTM))}
          ${selfTM === 'yes' ? row('Self TM Detail', selfTMDetail) : ''}
          ${row('Wants TMP', yn(wantsTMP))}
          ${wantsTMP === 'yes' ? row('Wants CAR', yn(wantsCAR)) : ''}
          ${row('Cost Type', costType)}
          ${row('Onsite Meeting', meetingInfo)}
          ${otherInfo ? row('Other Information', otherInfo) : ''}
        `)}
      </table>
    `

    const html = buildEmailTemplate("Website Quote Request", content)

    const branchCode: Record<string, string> = {
      Christchurch: 'CHC',
      Wellington: 'WLG',
      Timaru: 'TIU',
      Blenheim: 'BHE',
      Nelson: 'NSN',
    }
    const code = branchCode[branch] ?? branch

    const subject = `Estimate - ${projectName} (${companyName}) - ${code}`

    await sendEmail({
      to: { email: "nathan.jones@menatwork.co.nz", name: "Nathan Jones" },
      subject,
      replyTo: { email },
      html,
      attachments: fileData
        ? [{ fileName: fileData.name, content: fileData.base64, contentType: fileData.type }]
        : undefined,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
