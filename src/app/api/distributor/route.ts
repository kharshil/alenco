import { NextRequest, NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { sendDistributorEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, city, message } = body

    // Validate required fields
    if (!name || !email || !phone || !city || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to Payload CMS
    const payload = await getPayloadClient()
    const distributorEntry = await payload.create({
      collection: 'distributors',
      data: {
        name,
        email,
        phone,
        city,
        message,
        status: 'new',
      },
    })

    // Send email notification
    try {
      await sendDistributorEmail({ name, email, phone, city, message })
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the request if email fails, the data is already saved
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been submitted successfully. We will contact you soon!',
        id: distributorEntry.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing distributor inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again later.' },
      { status: 500 }
    )
  }
}
