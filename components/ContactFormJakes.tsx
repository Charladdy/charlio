'use client'

import { useActionState } from 'react'
import { submitContactForm, type ContactState } from '@/app/actions/jakes-contact'
import type { Locale } from '@/lib/i18n/locales'

interface ContactFormDict {
  firstName: string
  lastName: string
  email: string
  sending: string
  submit: string
}

interface JakesContactFormDict {
  preferredDate: string
  numberOfGuests: string
  typeOfEvent: string
  yourMessage: string
}

interface ContactFormJakesProps {
  lang: Locale
  dict: ContactFormDict
  jakesDict: JakesContactFormDict
  categories: string[]
}

const initialState: ContactState = { status: 'idle', message: '' }

export default function ContactFormJakes({ lang, dict, jakesDict, categories }: ContactFormJakesProps) {
  const boundAction = submitContactForm.bind(null, lang)
  const [state, formAction, pending] = useActionState(boundAction, initialState)

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
        <div className="contact-form-label"><label htmlFor="date">{jakesDict.preferredDate}</label></div>
        <input
          className="contact-form-input"
          id="date"
          name="date"
          type="date"
        />
      </div>

      <div className="contact-form-field">
        <div  className="contact-form-label"><label htmlFor="category">{jakesDict.numberOfGuests}</label></div>
        <select
          className="contact-form-input contact-form-list"
          id="category"
          name="category"
        >
          <option value="">{jakesDict.numberOfGuests}</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="contact-form-field">
        <div  className="contact-form-label"><label htmlFor="firstname">{dict.firstName}</label></div>
        <input
          className="contact-form-input"
          id="firstname"
          name="firstname"
          type="text"
        />
      </div>

      <div className="contact-form-field">
        <div  className="contact-form-label"><label htmlFor="lastname">{dict.lastName}</label></div>
        <input
          className="contact-form-input"
          id="lastname"
          name="lastname"
          type="text"
        />
      </div>

      <div className="contact-form-field">
        <div  className="contact-form-label"><label htmlFor="email">
          {dict.email} <span aria-hidden="true">*</span>
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
        <div  className="contact-form-label"><label htmlFor="subject">{jakesDict.typeOfEvent}</label></div>
        <input
          className="contact-form-input"
          id="subject"
          name="subject"
          type="text"
        />
      </div>

      <div className="contact-form-field h-30">
        <div  className="contact-form-label"><label htmlFor="message">
          {jakesDict.yourMessage} <span aria-hidden="true">*</span>
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
        {pending ? dict.sending : dict.submit}
      </button>
    </form>
  )
}
