'use client'

import { useActionState } from 'react'
import { submitContactForm, type ContactState } from '@/app/actions/contact'
import type { Locale } from '@/lib/i18n/locales'

interface ContactFormDict {
  category: string
  selectCategory: string
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  sending: string
  submit: string
}

interface ContactFormProps {
  lang: Locale
  dict: ContactFormDict
  categories: string[]
}

const initialState: ContactState = { status: 'idle', message: '' }

export default function ContactForm({ lang, dict, categories }: ContactFormProps) {
  const boundAction = submitContactForm.bind(null, lang)
  const [state, formAction, pending] = useActionState(boundAction, initialState)

  if (state.status === 'success') {
    return (
      <div className="contact-form-success" role="status">
        <p>{state.message}</p>
      </div>
    )
  }

  return (
    <form className="contact-form" action={formAction} noValidate>
      {state.status === 'error' && (
        <p className="contact-form-error" role="alert">
          {state.message}
        </p>
      )}

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="category">{dict.category}</label>
        <select
          className="contact-form-input contact-form-list"
          id="category"
          name="category"
        >
          <option value="">{dict.selectCategory}</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="firstname">{dict.firstName}</label>
        <input
          className="contact-form-input"
          id="firstname"
          name="firstname"
          type="text"
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="lastname">{dict.lastName}</label>
        <input
          className="contact-form-input"
          id="lastname"
          name="lastname"
          type="text"
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="email">
          {dict.email} <span aria-hidden="true">*</span>
        </label>
        <input
          className="contact-form-input"
          id="email"
          name="email"
          type="email"
          required
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="subject">{dict.subject}</label>
        <input
          className="contact-form-input"
          id="subject"
          name="subject"
          type="text"
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="message">
          {dict.message} <span aria-hidden="true">*</span>
        </label>
        <textarea
          className="contact-form-input w-80 h-30"
          id="message"
          name="message"
          required
        />
      </div>

      <button className="submit-btn" type="submit" disabled={pending}>
        {pending ? dict.sending : dict.submit}
      </button>
    </form>
  )
}
