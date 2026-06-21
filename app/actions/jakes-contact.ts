'use server'

import nodemailer from 'nodemailer'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const email     = (formData.get('email')     as string | null)?.trim() ?? ''
  const firstname = (formData.get('firstname') as string | null)?.trim() ?? ''
  const lastname  = (formData.get('lastname')  as string | null)?.trim() ?? ''
  const category  = (formData.get('category')  as string | null)?.trim() ?? ''
  const subject   = (formData.get('subject')   as string | null)?.trim() ?? ''
  const message   = (formData.get('message')   as string | null)?.trim() ?? ''
  const date      = (formData.get('date')      as string | null)?.trim() ?? ''

  // --- Validation --------------------------------------------------------
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'A valid email address is required.' }
  }
  if (!subject) {
    return { status: 'error', message: 'Subject is required.' }
  }
  if (!message) {
    return { status: 'error', message: 'Message is required.' }
  }

  // --- Transport ---------------------------------------------------------
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // --- Body --------------------------------------------------------------
  const bodyLines = [
    `Category:   ${category || '(none)'}`,
    `First Name: ${firstname || '(none)'}`,
    `Last Name:  ${lastname  || '(none)'}`,
    `Email:      ${email}`,
    `Subject:   ${subject}`,
    `Event date:   ${date}`,
    `Message:   ${message}`,
  ]
  const textBody = bodyLines.join('\n')
  const htmlBody = bodyLines
    .map(l => (l === '' ? '<br>' : `<p style="margin:0">${l}</p>`))
    .join('\n')

  // --- Send --------------------------------------------------------------
  try {
    await transporter.sendMail({
      from:     `"Contact Form" <${process.env.SMTP_USER}>`,
      to:       'jacob@charladdy.com',
      replyTo:  email,
      subject:  subject,
      text:     textBody,
      html:     htmlBody,
    })
    return {
      status: 'success',
      message: "Your message has been sent! We'll be in touch soon.",
    }
  } catch (err) {
    console.error('[contact] mail error:', err)
    return {
      status: 'error',
      message: 'Something went wrong sending your message. Please try again later.',
    }
  }
}
