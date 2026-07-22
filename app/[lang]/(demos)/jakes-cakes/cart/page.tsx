import type { Metadata } from 'next'
import CartView from '@/components/jakes-cakes/CartView'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import './page-styles.css'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesCakes.cart.metaTitle };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.jakesCakes.cart;

    return (
        <div className="page-content p-10">
            <h1 className="text-3xl font-semibold mb-5 font-[fraunces-variable] text-[var(--burgundy)]">{t.title}</h1>
            <CartView lang={lang} dict={t} />
        </div>
    );
}
