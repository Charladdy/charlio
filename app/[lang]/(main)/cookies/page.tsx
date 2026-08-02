import type { Metadata } from 'next'
import CookiePreferencesPanel from '@/components/CookiePreferencesPanel'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { pageOpenGraph, canonicalUrl } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = await getDictionary(lang);
  return { title: dict.main.cookies.metaTitle, openGraph: pageOpenGraph(lang, '/cookies'), alternates: { canonical: canonicalUrl(lang, '/cookies') } };
}

export default async function CookiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLangParam(params);
  const dict = await getDictionary(lang);

  return (
    <>
      <div className="hor-gfx-mask" />
      <div className="vert-gfx-div" />
      <div className="hor-gfx-div" />
      <div className="page-content">
        <h1>{dict.main.cookies.title}</h1>
        <p>
          {dict.main.cookies.intro}
        </p>

        <CookiePreferencesPanel dict={dict.common.cookiePreferences} />
      </div>
    </>
  )
}
