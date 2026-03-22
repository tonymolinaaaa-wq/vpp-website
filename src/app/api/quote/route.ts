import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, phone, howHeard } = await request.json()

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      )
    }

    // If Resend API key is configured, send email
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'VPP Website <onboarding@resend.dev>',
          to: 'valleypaintingprosllc@gmail.com',
          subject: `New Cabinet Quote Request — ${name}`,
          text: `New cabinet refinishing quote request:\n\nName: ${name}\nPhone: ${phone}\nHow they heard about us: ${howHeard || 'Not specified'}\n\nSubmitted from valleypaintingpros.com`,
        }),
      })

      if (!res.ok) {
        console.error('Resend API error:', await res.text())
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }
    } else {
      // Log to console if no email service configured
      console.log('New quote request (no email service configured):')
      console.log(`  Name: ${name}`)
      console.log(`  Phone: ${phone}`)
      console.log(`  How heard: ${howHeard || 'Not specified'}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Quote form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
