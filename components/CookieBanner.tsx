'use client'

import Link from 'next/link'
import { useCookieConsent } from '@/components/CookieConsentContext'
import type { Locale } from '@/lib/i18n/locales'

interface CookieBannerDict {
    ariaLabel: string
    textPre: string
    cookiePolicyLink: string
    textPost: string
    rejectNonEssential: string
    acceptAll: string
}

interface CookieBannerProps {
    lang: Locale
    dict: CookieBannerDict
}

export default function CookieBanner({ lang, dict }: CookieBannerProps) {
  const { ready, tracking, acceptAll, rejectTracking } = useCookieConsent()

  if (!ready || tracking !== null) return null

  return (
    <div
      role="dialog"
      aria-label={dict.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-[100] flex flex-col gap-4 bg-[#1a1a1a] px-6 py-5 text-white shadow-[0_-6px_20px_rgba(0,0,0,0.5)] sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-sm sm:max-w-2xl">
        {dict.textPre}
        <Link href={`/${lang}/cookies`} className="underline font-semibold">{dict.cookiePolicyLink}</Link>
        {dict.textPost}
      </p>
      <div className="flex shrink-0 gap-3">
        <button
          type="button"
          onClick={rejectTracking}
          className="rounded border border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-black"
        >
          {dict.rejectNonEssential}
        </button>
        <button
          type="button"
          onClick={acceptAll}
          className="rounded bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200"
        >
          {dict.acceptAll}
        </button>
      </div>
    </div>
  )
}
