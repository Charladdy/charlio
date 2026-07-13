import { Fragment } from 'react'
import './page-styles.css'
import type {Metadata} from 'next'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { pageOpenGraph } from '@/lib/seo'

const CHECK = '✔';

const PRICES = ['$300', '$400', '$750', '$950'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.main.pricing.metaTitle, openGraph: pageOpenGraph(lang, '/pricing') };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.main.pricing;


    return(
        <>
            <div className='hor-gfx-mask'/>
            <div className='vert-gfx-div'/>
            <div className='hor-gfx-div'/>
            <div className="page-content">
            <h1>{t.title}</h1>
            <p>{t.introPre}<a className="copy-link" href={`/${lang}/contact`}>{t.introLinkText}</a>{t.introPost}
            </p>
            <p style={{fontStyle:'italic'}}>{t.disclaimer}</p>
            <div className="flex grid grid-cols-2 lg:grid-cols-4 relative h-auto">
                <div className="package-bg"/>
                <div className="package-box flex-1 mx-2 my-4">
                    <div className="font-bold text-2xl border-b text-center py-2">{t.packageNames[0]}</div>
                    <div className="font-bold text-xl border-b text-center py-2">$300</div>
                    <div className="py-1 px-[10%]">4 {t.packages.pages}</div>
                    <div className="py-1 px-[10%]">{t.packages.websiteMockup}</div>
                    <div className="py-1 px-[10%]">{t.packages.contactForm}</div>
                    <div className="py-1 px-[10%]">{t.packages.hostingSetup}</div>
                </div>
                <div className="package-box flex-1 mx-2 my-4">
                    <div className="font-bold text-2xl border-b text-center py-2">{t.packageNames[1]}</div>
                    <div className="font-bold text-xl border-b text-center py-2">$400</div>
                    <div className="italic py-1 px-[10%]">{t.packages.everythingIn} {t.packageNames[0]}</div>
                    <div className="py-1 px-[10%]">{t.packages.cmsSetup}</div>
                    <div className="py-1 px-[10%]">{t.packages.googleAnalyticsSetup}</div>
                </div>
                <div className="package-box flex-1 mx-2 my-4">
                    <div className="font-bold text-2xl border-b text-center py-2">{t.packageNames[2]}</div>
                    <div className="font-bold text-xl border-b text-center py-2">$750</div>
                    <div className="italic py-1 px-[10%]">{t.packages.everythingIn} {t.packageNames[1]}</div>
                    <div className="py-1 px-[10%]">{t.packages.ecommercePlatformSetup}</div>                    
                </div>
                <div className="package-box flex-1 mx-2 my-4">
                    <div className="font-bold text-2xl border-b text-center py-2">{t.packageNames[3]}</div>
                    <div className="font-bold text-xl border-b text-center py-2">$950</div>
                    <div className="italic py-1 px-[10%]">{t.packages.everythingIn} {t.packageNames[2]}</div>
                    <div className="py-1 px-[10%]">{t.packages.userAuthSetup}</div>                    
                </div>
            </div>


            <h1>{t.alaCarte.heading}</h1>
            <div className="alacarte-grid">
                <h1 className="grid-box mb-0">{t.alaCarte.item}</h1>
                <h1 className="grid-box mb-0">{t.alaCarte.price}</h1>
                {t.alaCarte.rows.map(row => (
                    <Fragment key={row.label}>
                        <h2 className="grid-box">{row.label}</h2>
                        <h2 className="grid-box">{row.price}</h2>
                    </Fragment>
                ))}
            </div>
            </div>
        </>
    )
}
