import IconHeaderDiv from "@/components/IconHeaderDiv";
import type {Metadata} from 'next'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { pageOpenGraph, canonicalUrl } from '@/lib/seo'

const ICONS = [
    { src: '/icons/design.svg', darkSrc: '/icons/design_dark.svg' },
    { src: '/icons/front_end.svg', darkSrc: '/icons/front_end_dark.svg' },
    { src: '/icons/back_end.svg', darkSrc: '/icons/back_end_dark.svg' },
    { src: '/icons/blogging.svg', darkSrc: '/icons/blogging_dark.svg' },
    { src: '/icons/ecommerce.svg', darkSrc: '/icons/ecommerce_dark.svg' },
    { src: '/icons/seo.svg', darkSrc: '/icons/seo_dark.svg' },
    { src: '/icons/art.svg', darkSrc: '/icons/art_dark.svg' },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.main.services.title, openGraph: pageOpenGraph(lang, '/services'), alternates: { canonical: canonicalUrl(lang, '/services') } };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.main.services;

    return(
    <>
        <div className='hor-gfx-mask'/>
        <div className='vert-gfx-div'/>
        <div className='hor-gfx-div'/>
        <div className="page-content">
            <p>{t.intro}</p>
            {t.items.map((item, i) => (
                <IconHeaderDiv key={item.header} iconSrcStr={ICONS[i].src} iconDarkSrcStr={ICONS[i].darkSrc} iconWidth={80} iconHeight={80}
                iconAltTxt={item.alt} headerStr={item.header}>
                    <p>{item.body}</p>
                </IconHeaderDiv>
            ))}
        </div>
        </>
    )
}
