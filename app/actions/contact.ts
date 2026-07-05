'use server'

import nodemailer from 'nodemailer'
import { getDictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/locales'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitContactForm(
  lang: Locale,
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const dict = (await getDictionary(lang)).common.contactForm

  const email     = (formData.get('email')     as string | null)?.trim() ?? ''
  const firstname = (formData.get('firstname') as string | null)?.trim() ?? ''
  const lastname  = (formData.get('lastname')  as string | null)?.trim() ?? ''
  const category  = (formData.get('category')  as string | null)?.trim() ?? ''
  const subject   = (formData.get('subject')   as string | null)?.trim() ?? ''
  const message   = (formData.get('message')   as string | null)?.trim() ?? ''

  // --- Validation --------------------------------------------------------
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: dict.validationEmail }
  }
  if (!subject) {
    return { status: 'error', message: dict.validationSubject }
  }
  if (!message) {
    return { status: 'error', message: dict.validationMessage }
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
    ``,
    `Message:`,
    message,
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
      subject,
      text:     textBody,
      html:     htmlBody,
    })
    return {
      status: 'success',
      message: dict.successMessage,
    }
  } catch (err) {
    console.error('[contact] mail error:', err)
    return {
      status: 'error',
      message: dict.errorMessage,
    }
  }
}
