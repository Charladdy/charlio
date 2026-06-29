'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { useCookieConsent } from '@/components/CookieConsentContext'

export default function AnalyticsGate({ gaId }: { gaId: string }) {
  const { tracking } = useCookieConsent()

  if (!tracking) return null

  return <GoogleAnalytics gaId={gaId} />
}
