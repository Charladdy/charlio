export const locales = ['en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// Next.js types dynamic-segment params as `string` (it can't statically prove only
// generateStaticParams' values reach the page), so every page/layout under app/[lang]
// resolves the raw param through this to get back a properly typed Locale.
export async function resolveLangParam(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  return isLocale(lang) ? lang : defaultLocale;
}

export function persistLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000`;
}

// Which of the two hero words gets the large vs. small treatment is a style
// choice, not something tied to word order — Spanish reverses the order
// ("Presencia Web") but WEB must still render large, as it does in English.
export interface HeroWord {
  text: string;
  emphasis: 'large' | 'small';
}
