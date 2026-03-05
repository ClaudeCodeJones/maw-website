import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      firstName, lastName, email, phone, city, startDate, branch,
      experience, licences, contactMethod,
      workHistory, aboutYourself, healthIssues, accHistory,
      howDidYouHear, casualConfirm,
    } = body

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !city || !branch ||
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
      firstName, lastName, email, phone, city, startDate, branch,
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
