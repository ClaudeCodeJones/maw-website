import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, branch, message } = body

    await sendEmail({
      to: { email: "office@menatwork.co.nz", name: "Men at Work Office" },
      subject: `Men at Work Website Enquiry - ${name}`,
      replyTo: { email },
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Branch:</strong> ${branch}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}