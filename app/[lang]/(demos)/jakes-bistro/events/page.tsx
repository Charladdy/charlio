import Image from 'next/image'
import ContactFormJakes from '@/components/ContactFormJakes';
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import './page-styles.css'
import type {Metadata} from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesBistro.events.metaTitle };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.jakesBistro.events;

    return(
        <div className="px-5 md:w-2xl m-auto">
            <h1 className="page-header h-fit m-auto">{t.title}</h1>
            <h1 className="title-header h-fit text-xl m-auto pt-10">{t.subheading}</h1>
            <div className="h-fit m-auto sm:flex pt-5 pb-5 border-b">
                <div className="mx-auto sm:w-40 h-auto sm:flex-1"><Image src="/jakes-bistro/jakes-events.png" height={500} width={500} alt={t.imageAlt} /></div>
                <div className="sm:w-60 md:flex-1 sm:ml-10 my-auto">
                    <p>{t.body}
                    </p>
                </div>
            </div>
            <ContactFormJakes
                lang={lang}
                dict={dict.common.contactForm}
                jakesDict={dict.jakesBistro.contactForm}
                categories={dict.jakesBistro.contactForm.guestCategories}
            ></ContactFormJakes>
        </div>
    );
}
