'use client'

import { useCookieConsent } from '@/components/CookieConsentContext'
import CookieToggle from '@/components/CookieToggle'

interface CookiePreferencesDict {
    essentialTitle: string
    essentialDesc: string
    trackingTitle: string
    trackingDesc: string
    rejectNonEssential: string
    acceptAll: string
}

interface CookiePreferencesPanelProps {
    dict: CookiePreferencesDict
}

export default function CookiePreferencesPanel({ dict }: CookiePreferencesPanelProps) {
  const { ready, tracking, setTracking, acceptAll, rejectTracking } = useCookieConsent()

  return (
    <>
      <div className="flex items-start justify-between gap-6 border-b border-gray-300 py-5">
        <div>
          <h2 className="font-semibold">{dict.essentialTitle}</h2>
          <p className="text-sm">
            {dict.essentialDesc}
          </p>
        </div>
        <CookieToggle checked disabled label={dict.essentialTitle} />
      </div>

      <div className="flex items-start justify-between gap-6 border-b border-gray-300 py-5">
        <div>
          <h2 className="font-semibold">{dict.trackingTitle}</h2>
          <p className="text-sm">
            {dict.trackingDesc}
          </p>
        </div>
        <CookieToggle checked={!!tracking} onChange={setTracking} label={dict.trackingTitle} disabled={!ready} />
      </div>

      <div className="flex gap-3 mt-6">
        <button
          type="button"
          onClick={rejectTracking}
          className="rounded border-2 border-[var(--main-palette1)] px-4 py-2 font-semibold hover:bg-[var(--main-palette1)] hover:text-white"
        >
          {dict.rejectNonEssential}
        </button>
        <button
          type="button"
          onClick={acceptAll}
          className="rounded bg-[var(--main-palette1)] px-4 py-2 font-semibold text-white hover:bg-[var(--main-palette2)]"
        >
          {dict.acceptAll}
        </button>
      </div>
    </>
  )
}
