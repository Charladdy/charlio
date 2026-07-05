import Image from "next/image";
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.yardsdale.home;

    return(
        <>
            <div className="hero-div">
                <div className="splash-photo">
                    <Image src="/plumber_sink.png" height={1000} width={1000} alt={t.splashAlt} style={{}}/>
                </div>
                <div className="hero-pane">
                <Image className="hero-logo" src="/plumb-logo3.png" height={500} width={500} alt={t.logoAlt}/>
                </div>
                    <div className="hero-text-wrapper absolute right-[10%] top-[40%] text-white text-[4vw] sm:text-2xl text-shadow-[3px_3px_2px_rgb(0_0_0_/_0.65)]">
                        <div className ="">{t.tagline1}</div>
                        <div className ="italic">{t.tagline2}</div>
                    </div>
                <a href={`/${lang}/yardsdale-plumbing-co/contact`} className="hero-btn">{t.ctaButton}</a>
            </div>
            <div className="h-[50vh] m-auto py-15 min-h-80 w-md">
                <div>{t.para1}
                </div>
                <div className="mt-5">{t.para2}
                </div>
                <div className="mt-5">{t.para3Pre}
                    <span className="text-blue-700 hover:text-blue-600"><a href={`/${lang}/yardsdale-plumbing-co/contact`}>{t.contactLink}</a></span>{t.para3Mid}
                    <span className="text-blue-700 hover:text-blue-600"><a href={`/${lang}/yardsdale-plumbing-co/services`}>{t.servicesLink}</a></span>{t.para3Post}
                </div>
                <div className="mt-5">{t.para4}
                </div>
            </div>
        </>
    )
}
