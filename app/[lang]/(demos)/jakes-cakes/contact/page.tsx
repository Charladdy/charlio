import ContactForm from "@/components/ContactForm";
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import './page-styles.css'

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);

    return(
        <div className="page-content">
            <h1 className="p-10 pb-0 text-3xl font-semibold mb-5 font-[fraunces-variable] text-[var(--burgundy)]">Contact Us</h1>
            <div className="px-10"> If you have questions about special cakes or catering, we'd love to hear from you. 
                Mind you, we won't be able to answer those questions, because this is just a demo site. 
                If you have questions about how Jake can help you build an online storefront, send them here!
            </div>
            <ContactForm lang={lang} dict={dict.common.contactForm} categories={["Custom Order", "Catering", "General Inquiry"]}/>
        </div>
    );
}
