import type { Locale } from './i18n/locales';

export const SITE_URL = 'https://www.charl.io';

// Next only auto-links the opengraph-image file convention into a route's
// og:image tag when nothing in the tree sets its own `openGraph` object —
// metadata merging replaces `openGraph` wholesale per segment rather than
// deep-merging it, so every place that sets `openGraph` must list the image
// itself or the tag silently disappears.
function ogImage(lang: Locale) {
  return [`${SITE_URL}/${lang}/opengraph-image`];
}

// Sitewide fallback (no `url`, since only segments that know their real
// path should claim one) — inherited as-is by any page that doesn't set
// its own `openGraph`.
export function siteOpenGraph(lang: Locale) {
  return {
    type: 'website' as const,
    siteName: 'Charlio Webworks',
    locale: lang === 'es' ? 'es_ES' : 'en_US',
    images: ogImage(lang),
  };
}

export function canonicalUrl(lang: Locale, path: string) {
  return `${SITE_URL}/${lang}${path}`;
}

export function pageOpenGraph(lang: Locale, path: string) {
  return {
    ...siteOpenGraph(lang),
    url: canonicalUrl(lang, path),
  };
}
