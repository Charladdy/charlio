'use client'

import { usePathname } from 'next/navigation'
import { locales, persistLocaleCookie, type Locale } from '@/lib/i18n/locales'
import {FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa'

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
                <p className="footer-text">{dict.copyrightTemplate.replace('{year}', String(new Date().getFullYear()))}</p>
                <div className="mt-10 w-fit">
                    <p className="footer-text font-bold w-fit">Find us on</p>
                    <div className="ml-[50px] flex items-center gap-4">
                        <a href="https://www.linkedin.com/in/jacob-brach-504891387/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-colors duration-200">
                            <FaLinkedin className="fill-white" size={25}/>
                        </a>
                        <a href="https://www.instagram.com/charliowebworks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-colors duration-200">
                            <FaInstagram className="fill-white" size={25}/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61588756720567"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-colors duration-200">
                            <FaFacebook className="fill-white" size={25}/>
                        </a>                       
                    </div>
                </div>
                <div className="relative h-25">
                    <div className="footer-links absolute flex right w-[80%] md:w-[50%] right-5 bottom-4 items-center">
                        <div className="footer-link text-white underline border-r hover:font-semibold flex-1 text-center"><a href={`/${lang}/cookies`} target="_blank">{dict.cookies}</a></div>
                        <div className="footer-link text-white underline border-r hover:font-semibold flex-1 text-center"><a href="https://charladdy.com/tos" target="_blank">{dict.termsOfService}</a></div>
                        <div className="footer-link text-white underline border-r hover:font-semibold flex-1 text-center"><a href="https://charladdy.com/privacy" target="_blank">{dict.privacy}</a></div>
                        <div className="footer-link text-white underline hover:font-semibold flex-1 text-center">
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
            </div>
    )
}
