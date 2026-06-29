'use client'

import Link from 'next/link'
import { useCookieConsent } from '@/components/CookieConsentContext'

export default function CookieBanner() {
  const { ready, tracking, acceptAll, rejectTracking } = useCookieConsent()

  if (!ready || tracking !== null) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] flex flex-col gap-4 bg-[#1a1a1a] px-6 py-5 text-white shadow-[0_-6px_20px_rgba(0,0,0,0.5)] sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-sm sm:max-w-2xl">
        We use cookies to run this site and, with your permission, to understand how it&apos;s used so we can improve it.
        See our <Link href="/cookies" className="underline font-semibold">cookie policy</Link> to manage your preferences.
      </p>
      <div className="flex shrink-0 gap-3">
        <button
          type="button"
          onClick={rejectTracking}
          className="rounded border border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-black"
        >
          Reject Non-Essential
        </button>
        <button
          type="button"
          onClick={acceptAll}
          className="rounded bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
