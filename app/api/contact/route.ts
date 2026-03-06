import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, phone, branch, message } = await req.json()

  if (!name || !email || !phone || !branch || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Men at Work Website" <${process.env.SMTP_USER}>`,
    to: 'office@menatwork.co.nz',
    subject: 'New Website Contact Form Submission',
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Branch: ${branch}`,
      `Message:\n${message}`,
    ].join('\n\n'),
    html: `
      <table style="font-family:Arial,sans-serif;font-size:14px;color:#333;width:100%;max-width:600px;">
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;"><strong>Name</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee;">${name}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;"><strong>Email</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee;">${email}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;"><strong>Phone</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee;">${phone}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #eee;"><strong>Branch</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee;">${branch}</td></tr>
        <tr><td style="padding:8px 0;" valign="top"><strong>Message</strong></td><td style="padding:8px 0;">${message.replace(/\n/g, '<br>')}</td></tr>
      </table>
    `,
  })

  return NextResponse.json({ success: true })
}
