import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

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

// ── Email routing ─────────────────────────────────────────────────────────────
// Update sendTo per branch as needed. Currently all branches route to the same address.
// To route by branch, replace the static value below with a lookup:
//   const sendTo = branchEmail[branch] ?? "quotes@menatwork.co.nz"

const sendTo = "quotes@menatwork.co.nz"

function yn(val: string) {
  return val === 'yes' ? 'Yes' : val === 'no' ? 'No' : val || '—'
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 16px;background:#0d1b2a;color:#7a8fa3;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;white-space:nowrap;border-bottom:1px solid #1f2d3d;">${label}</td>
      <td style="padding:10px 16px;background:#162435;color:#fff;font-size:14px;border-bottom:1px solid #1f2d3d;">${value || '—'}</td>
    </tr>`
}

function section(heading: string, rows: string) {
  return `
    <tr>
      <td colspan="2" style="padding:16px 16px 8px;background:#0a1628;color:#f26522;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;border-bottom:2px solid #f26522;">
        ${heading}
      </td>
    </tr>
    ${rows}`
}

export async function POST(req: Request) {
  if (!checkRateLimit(req)) {
    return new Response('Too many requests', { status: 429 })
  }

  try {
    const body = await req.json()
    const {
      fullName, companyName, title, phone, email, hasAccount, branch,
      projectName, location, plantNeeded, workTimes, unattendedSite,
      selfTM, selfTMDetail, wantsTMP, wantsCAR,
      costType, onsiteMeeting, meetingDate, meetingTime,
      otherInfo, fileData, turnstileToken, companyPhone,
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

    const meetingInfo = onsiteMeeting === 'yes' && meetingDate
      ? `${meetingDate} at ${meetingTime}`
      : yn(onsiteMeeting) === 'No' ? 'No' : '—'

    const fileInfo = fileData
      ? `${fileData.name} (attached)`
      : 'Not provided'

    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
      <body style="margin:0;padding:0;background:#070f1b;font-family:Inter,Arial,sans-serif;">
        <div style="max-width:680px;margin:0 auto;padding:32px 16px;">

          <div style="background:#f26522;padding:20px 24px;border-radius:4px 4px 0 0;">
            <p style="margin:0;color:#fff;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;opacity:0.85;">Men at Work Traffic Management</p>
            <h1 style="margin:6px 0 0;color:#fff;font-size:22px;font-weight:700;">New Estimate Request</h1>
          </div>

          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #1f2d3d;border-top:none;">
            ${section('Client Details', `
              ${row('Name', fullName)}
              ${row('Company', companyName)}
              ${row('Title', title)}
              ${row('Phone', phone)}
              ${row('Email', email)}
              ${row('Existing Account', yn(hasAccount))}
              ${row('Branch', branch)}
            `)}
            ${section('Project Details', `
              ${projectName ? row('Project Name', projectName) : ''}
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

          <div style="background:#0a1628;padding:16px;border:1px solid #1f2d3d;border-top:none;border-radius:0 0 4px 4px;">
            <p style="margin:0;color:#7a8fa3;font-size:12px;">
              Reply directly to this email to respond to ${fullName} at <a href="mailto:${email}" style="color:#f26522;">${email}</a>
            </p>
          </div>

        </div>
      </body>
      </html>`

    const subject = projectName
      ? `Men at Work Website Request – ${projectName} [${companyName}]`
      : `Men at Work Website Request – [${companyName}]`

    await sendEmail({
      to: { email: sendTo, name: "Men at Work Quotes" },
      subject,
      replyTo: { email },
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
