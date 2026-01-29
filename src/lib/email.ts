import nodemailer from 'nodemailer'

interface DistributorFormData {
  name: string
  email: string
  phone: string
  city: string
  message: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendDistributorEmail(data: DistributorFormData) {
  const { name, email, phone, city, message } = data
  const contactEmail = process.env.CONTACT_EMAIL || 'archanlathiya222@gmail.com'

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2bb249; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #2bb249; }
        .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Distributor Inquiry</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${phone}</div>
          </div>
          <div class="field">
            <div class="label">City:</div>
            <div class="value">${city}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Alenco website distributor inquiry form.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: `"Alenco Website" <${process.env.SMTP_USER}>`,
    to: contactEmail,
    subject: `New Distributor Inquiry from ${name}`,
    html: htmlContent,
    replyTo: email,
  }

  return transporter.sendMail(mailOptions)
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface ProductEnquiryFormData {
  name: string
  email: string
  phone: string
  company?: string
  productName: string
  productCode: string
  quantity?: string
  message: string
}

export async function sendProductEnquiryEmail(data: ProductEnquiryFormData) {
  const { name, email, phone, company, productName, productCode, quantity, message } = data
  const contactEmail = process.env.CONTACT_EMAIL || 'archanlathiya222@gmail.com'

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2bb249; color: white; padding: 20px; text-align: center; }
        .product-info { background: #e8f5e9; padding: 15px; margin: 20px 0; border-radius: 8px; }
        .product-name { font-size: 18px; font-weight: bold; color: #2bb249; margin: 0 0 5px; }
        .product-code { font-size: 14px; color: #666; margin: 0; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #2bb249; }
        .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Product Enquiry</h1>
        </div>
        <div class="product-info">
          <p class="product-name">${productName}</p>
          <p class="product-code">Product Code: ${productCode}</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Customer Name:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${phone}</div>
          </div>
          ${company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${company}</div>
          </div>
          ` : ''}
          ${quantity ? `
          <div class="field">
            <div class="label">Quantity Required:</div>
            <div class="value">${quantity}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Alenco website product enquiry form.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: `"Alenco Website" <${process.env.SMTP_USER}>`,
    to: contactEmail,
    subject: `Product Enquiry: ${productName} (${productCode})`,
    html: htmlContent,
    replyTo: email,
  }

  return transporter.sendMail(mailOptions)
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, phone, subject, message } = data
  const contactEmail = process.env.CONTACT_EMAIL || 'archanlathiya222@gmail.com'

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2bb249; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #2bb249; }
        .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Inquiry</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${phone}</div>
          </div>
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${subject}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Alenco website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: `"Alenco Website" <${process.env.SMTP_USER}>`,
    to: contactEmail,
    subject: `Contact Inquiry: ${subject}`,
    html: htmlContent,
    replyTo: email,
  }

  return transporter.sendMail(mailOptions)
}
