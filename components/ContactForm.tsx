'use client'

import { useActionState } from 'react'
import { submitContactForm, type ContactState } from '@/app/actions/contact'

interface ContactFormProps {
  categories?: string[]
}

const DEFAULT_CATEGORIES = ['Option1', 'Option2', 'Option3']

const initialState: ContactState = { status: 'idle', message: '' }

export default function ContactForm({
  categories = DEFAULT_CATEGORIES,
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState)

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
        <label className="contact-form-label" htmlFor="category">Category</label>
        <select
          className="contact-form-input contact-form-list"
          id="category"
          name="category"
        >
          <option value="">Select a category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="firstname">First Name</label>
        <input
          className="contact-form-input"
          id="firstname"
          name="firstname"
          type="text"
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="lastname">Last Name</label>
        <input
          className="contact-form-input"
          id="lastname"
          name="lastname"
          type="text"
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="email">
          Email <span aria-hidden="true">*</span>
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
        <label className="contact-form-label" htmlFor="subject">Subject</label>
        <input
          className="contact-form-input"
          id="subject"
          name="subject"
          type="text"
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          className="contact-form-input w-80 h-30"
          id="message"
          name="message"
          required
        />
      </div>

      <button className="submit-btn" type="submit" disabled={pending}>
        {pending ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
