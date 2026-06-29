'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { readConsentCookie, writeConsentCookie } from '@/lib/cookieConsent'

type CookieConsentContextValue = {
  ready: boolean
  tracking: boolean | null
  setTracking: (allowed: boolean) => void
  acceptAll: () => void
  rejectTracking: () => void
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [tracking, setTrackingState] = useState<boolean | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = readConsentCookie()
    setTrackingState(stored ? stored.tracking : null)
    setReady(true)
  }, [])

  const setTracking = (allowed: boolean) => {
    setTrackingState(allowed)
    writeConsentCookie({ tracking: allowed })
  }

  return (
    <CookieConsentContext.Provider
      value={{
        ready,
        tracking,
        setTracking,
        acceptAll: () => setTracking(true),
        rejectTracking: () => setTracking(false),
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  return ctx
}
