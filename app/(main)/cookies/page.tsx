'use client'

import { useCookieConsent } from '@/components/CookieConsentContext'
import CookieToggle from '@/components/CookieToggle'

export default function CookiesPage() {
  const { ready, tracking, setTracking, acceptAll, rejectTracking } = useCookieConsent()

  return (
    <>
      <div className="hor-gfx-mask" />
      <div className="vert-gfx-div" />
      <div className="hor-gfx-div" />
      <div className="page-content">
        <h1>Cookie Preferences</h1>
        <p>
          We use cookies to make this site work and, if you allow it, to understand how visitors use it so we can
          improve it. You can change your preferences below at any time.
        </p>

        <div className="flex items-start justify-between gap-6 border-b border-gray-300 py-5">
          <div>
            <h2 className="font-semibold">Essential Cookies</h2>
            <p className="text-sm">
              Required for the site to function, including remembering the cookie preference you set below.
              These cannot be disabled.
            </p>
          </div>
          <CookieToggle checked disabled label="Essential Cookies" />
        </div>

        <div className="flex items-start justify-between gap-6 border-b border-gray-300 py-5">
          <div>
            <h2 className="font-semibold">Tracking Cookies</h2>
            <p className="text-sm">
              Used by Google Analytics to help us understand how visitors use the site. These are only set if
              you allow them.
            </p>
          </div>
          <CookieToggle checked={!!tracking} onChange={setTracking} label="Tracking Cookies" disabled={!ready} />
        </div>

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={rejectTracking}
            className="rounded border-2 border-[var(--main-palette1)] px-4 py-2 font-semibold hover:bg-[var(--main-palette1)] hover:text-white"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded bg-[var(--main-palette1)] px-4 py-2 font-semibold text-white hover:bg-[var(--main-palette2)]"
          >
            Accept All
          </button>
        </div>
      </div>
    </>
  )
}
