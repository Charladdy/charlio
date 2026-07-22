import ContactForm from "@/components/ContactForm";
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import type { Metadata } from 'next'
import './page-styles.css'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesCakes.contact.metaTitle };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.jakesCakes.contact;

    return(
        <div className="page-content">
            <h1 className="p-10 pb-0 text-3xl font-semibold mb-5 font-[fraunces-variable] text-[var(--burgundy)]">{t.title}</h1>
            <div className="px-10">{t.intro}
            </div>
            <ContactForm lang={lang} dict={dict.common.contactForm} categories={t.categories}/>
        </div>
    );
}
