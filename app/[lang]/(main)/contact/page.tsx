import ContactForm from '@/components/ContactForm'
import './page-styles.css'
import type { Metadata } from 'next'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { pageOpenGraph, canonicalUrl } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.main.contact.metaTitle, openGraph: pageOpenGraph(lang, '/contact'), alternates: { canonical: canonicalUrl(lang, '/contact') } };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);

    return(
        <>
            <div className='hor-gfx-mask'/>
            <div className='vert-gfx-div'/>
            <div className='hor-gfx-div'/>
            <div className="page-content">
                <p className="px-5">{dict.main.contact.intro}</p>
                <ContactForm lang={lang} dict={dict.common.contactForm} categories={dict.main.contact.categories}/>
            </div>
        </>
    )
}
