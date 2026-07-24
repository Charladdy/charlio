'use client'

import { useRef } from 'react'

interface NewsletterSignupDialogDict {
  signUp: string
  signupDialogMessage: string
  closeDialogLabel: string
}

export default function NewsletterSignupDialog({ dict }: { dict: NewsletterSignupDialogDict }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <div className="m-auto">
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="bg-[var(--rose)] hover:cursor-pointer px-2 lg:px-5 py-2 border-2 border-[var(--grey)] text-[var(--cream)] w-fit"
      >
        {dict.signUp}
      </button>
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close()
        }}
        className="fixed inset-0 m-auto w-[90%] max-w-100 h-fit rounded-xl border-2 border-[var(--grey)] bg-[var(--blush)] p-6 shadow-xl backdrop:bg-black/40"
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={dict.closeDialogLabel}
          className="absolute top-2 right-3 hover:cursor-pointer text-2xl leading-none text-[var(--burgundy)]"
        >
          &times;
        </button>
        <p className="text-[var(--burgundy)] pr-4">{dict.signupDialogMessage}</p>
      </dialog>
    </div>
  )
}
