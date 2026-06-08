import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, date, agreedToTerms } = await req.json()

    if (!name || !email || !date || !agreedToTerms) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log the submission (replace with email service — e.g. Resend, Nodemailer — when ready)
    console.log('New membership application:', { name, email, date, submittedAt: new Date().toISOString() })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
