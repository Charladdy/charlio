'use client'

import { useActionState } from 'react'
import { submitContactForm, type ContactState } from '@/app/actions/jakes-contact'

interface ContactFormProps {
  categories?: string[]
}

const DEFAULT_CATEGORIES = ['Option1', 'Option2', 'Option3']

const initialState: ContactState = { status: 'idle', message: '' }

export default function ContactFormJakes({
  categories = DEFAULT_CATEGORIES,
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState)

  if (state.status === 'success') {
    return (
      <div className="w-2xl m-auto mt-5 font-bold contact-form-success" role="status">
        <p>{state.message}</p>
      </div>
    )
  }

  return (
    <form className="contact-form" action={formAction} noValidate>
      {state.status === 'error' && (
        <p className="w-2xl m-auto mt-5 font-bold contact-form-error" role="alert">
          {state.message}
        </p>
      )}

      <div className="contact-form-field">
        <div className="contact-form-label"><label htmlFor="date">Preferred Date:</label></div>
        <input
          className="contact-form-input"
          id="date"
          name="date"
          type="date"
        />
      </div>

      <div className="contact-form-field">
        <div  className="contact-form-label"><label htmlFor="category">Number of guests</label></div>
        <select
          className="contact-form-input contact-form-list"
          id="category"
          name="category"
        >
          <option value="">Number of guests</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="contact-form-field">
        <div  className="contact-form-label"><label htmlFor="firstname">First Name</label></div>
        <input
          className="contact-form-input"
          id="firstname"
          name="firstname"
          type="text"
        />
      </div>

      <div className="contact-form-field">
        <div  className="contact-form-label"><label htmlFor="lastname">Last Name</label></div>
        <input
          className="contact-form-input"
          id="lastname"
          name="lastname"
          type="text"
        />
      </div>

      <div className="contact-form-field">
        <div  className="contact-form-label"><label htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </label></div>
        <input
          className="contact-form-input"
          id="email"
          name="email"
          type="email"
          required
        />
      </div>

      <div className="contact-form-field">
        <div  className="contact-form-label"><label htmlFor="subject">Type of Event</label></div>
        <input
          className="contact-form-input"
          id="subject"
          name="subject"
          type="text"
        />
      </div>

      <div className="contact-form-field h-30">
        <div  className="contact-form-label"><label htmlFor="message">
          Your Message <span aria-hidden="true">*</span>
        </label></div>
        <textarea
          className="contact-form-input w-[50vw] md:w-80 h-30"
          id="message"
          name="message"
          maxLength={1500}
          required
        />
      </div>

      <button className="submit-btn" type="submit" disabled={pending}>
        {pending ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
