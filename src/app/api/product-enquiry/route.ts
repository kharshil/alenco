import { NextRequest, NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { sendProductEnquiryEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, productName, productCode, quantity, message } = body

    // Validate required fields
    if (!name || !email || !phone || !productName || !productCode || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
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
    const enquiryEntry = await payload.create({
      collection: 'product-enquiries',
      data: {
        name,
        email,
        phone,
        company: company || '',
        productName,
        productCode,
        quantity: quantity || '',
        message,
        status: 'new',
      },
    })

    // Send email notification
    try {
      await sendProductEnquiryEmail({ name, email, phone, company, productName, productCode, quantity, message })
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the request if email fails, the data is already saved
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been submitted successfully. We will get back to you soon!',
        id: enquiryEntry.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing product enquiry:', error)
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again later.' },
      { status: 500 }
    )
  }
}
