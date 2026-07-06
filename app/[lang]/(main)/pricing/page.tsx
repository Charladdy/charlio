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

    const rows = [
        { label: t.rowLabels.pageCount, values: ['4', '6', '8', '12'] },
        { label: t.rowLabels.websiteMockup, values: [CHECK, CHECK, CHECK, CHECK] },
        { label: t.rowLabels.contactForm, values: [CHECK, CHECK, CHECK, CHECK] },
        { label: t.rowLabels.hostingSetup, values: [CHECK, CHECK, CHECK, CHECK] },
        { label: t.rowLabels.cmsSetup, values: ['', CHECK, CHECK, CHECK] },
        { label: t.rowLabels.googleAnalyticsSetup, values: ['', CHECK, CHECK, CHECK] },
        { label: t.rowLabels.ecommercePlatformSetup, values: ['', '', CHECK, CHECK] },
        { label: t.rowLabels.userAuthSetup, values: ['', '', '', CHECK] },
    ];

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
            <div className="package-grid">
                <div/>
                {t.packageNames.map(name => <h2 key={name} className="grid-box">{name}</h2>)}
                <h2 className="grid-box">{t.priceHeading}</h2>
                {PRICES.map((p, i) => <h2 key={i} className="grid-box">{p}</h2>)}
                {rows.map(row => (
                    <Fragment key={row.label}>
                        <h2 className="grid-box">{row.label}</h2>
                        {row.values.map((v, i) => <h2 key={i} className="grid-box">{v}</h2>)}
                    </Fragment>
                ))}
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
