const CONSENT_COOKIE_NAME = 'charlio_cookie_consent'
const CONSENT_COOKIE_MAX_AGE_DAYS = 180

export type CookieConsent = {
  tracking: boolean
}

export function readConsentCookie(): CookieConsent | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`))
  if (!match) return null
  try {
    return JSON.parse(decodeURIComponent(match[1]))
  } catch {
    return null
  }
}

export function writeConsentCookie(consent: CookieConsent) {
  if (typeof document === 'undefined') return
  const maxAge = CONSENT_COOKIE_MAX_AGE_DAYS * 24 * 60 * 60
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consent))}; path=/; max-age=${maxAge}; SameSite=Lax`
}
