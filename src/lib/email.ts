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
