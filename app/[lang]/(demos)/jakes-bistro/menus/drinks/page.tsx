import type { Metadata } from 'next';
import TradulioMenuFrame from '@/components/TradulioMenuFrame';
import { resolveLangParam } from '@/lib/i18n/locales';
import { getDictionary } from '@/lib/i18n/getDictionary';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesBistro.menus.menuTitles.drinks };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return (
        <TradulioMenuFrame
            lang={lang}
            dict={dict.jakesBistro.tradulioFrame}
            tradulioUrl="https://www.tradulio.com/menu/Jake's%20Bistro/drinks-menu-15"
            pdfSrc="/jakes-bistro/menus/jakes_bistro_drinks.pdf"
        />
    )
}
