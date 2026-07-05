'use client'

import { usePathname } from 'next/navigation'
import { locales, persistLocaleCookie, type Locale } from '@/lib/i18n/locales'

interface FooterDict {
    copyrightTemplate: string
    cookies: string
    termsOfService: string
    privacy: string
}

interface LanguageSwitcherDict {
    en: string
    es: string
}

interface FooterProps {
    lang: Locale
    dict: FooterDict
    switcherDict: LanguageSwitcherDict
    wrapperClassName?: string
}

export default function Footer({ lang, dict, switcherDict, wrapperClassName = 'footer-div' }: FooterProps){
    const pathname = usePathname()
    const pathWithoutLocale = pathname.replace(/^\/(en|es)(?=\/|$)/, '')

    return(
            <div className={wrapperClassName}>
                <p className="footer-copyright">{dict.copyrightTemplate.replace('{year}', String(new Date().getFullYear()))}</p>
                <div className="absolute flex right w-[80%] md:w-[50%] right-5 bottom-4 md:top-8 md:bottom-auto">
                    <div className="text-white underline border-r hover:font-semibold flex-1 text-center"><a href={`/${lang}/cookies`} target="_blank">{dict.cookies}</a></div>
                    <div className="text-white underline border-r hover:font-semibold flex-1 text-center"><a href="https://charladdy.com/tos" target="_blank">{dict.termsOfService}</a></div>
                    <div className="text-white underline border-r hover:font-semibold flex-1 text-center"><a href="https://charladdy.com/privacy" target="_blank">{dict.privacy}</a></div>
                    <div className="text-white underline hover:font-semibold flex-1 text-center">
                        {locales.map((l, i) => (
                            <span key={l}>
                                {i > 0 && ' / '}
                                <a
                                    href={`/${l}${pathWithoutLocale}`}
                                    onClick={() => persistLocaleCookie(l)}
                                    aria-current={l === lang ? 'true' : undefined}
                                    className={l === lang ? 'font-bold' : ''}
                                >
                                    {switcherDict[l]}
                                </a>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
    )
}
