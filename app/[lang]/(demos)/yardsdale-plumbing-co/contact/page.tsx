import ContactForm from "@/components/ContactForm";
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import './page-styles.css'

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);

    return(
        <div className="page-content">
            <div>{dict.yardsdale.contact.intro}</div>
            <ContactForm lang={lang} dict={dict.common.contactForm} categories={dict.yardsdale.contact.categories}/>
        </div>
    );
}
