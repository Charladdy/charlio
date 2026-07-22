import CheckoutView from '@/components/jakes-cakes/CheckoutView'
import { resolveLangParam } from '@/lib/i18n/locales'
import './page-styles.css'

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const lang = await resolveLangParam(params);

    return (
        <div className="page-content p-10">
            <h1 className="text-3xl font-semibold mb-5 font-[fraunces-variable] text-[var(--burgundy)]">Checkout</h1>
            <CheckoutView lang={lang} />
        </div>
    );
}
