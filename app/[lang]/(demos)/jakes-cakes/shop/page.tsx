import type { Metadata } from 'next'
import Item from '@/components/jakes-cakes/Item'
import { products, wedding_cakes, bday_cakes, grad_cakes, type Product } from '@/lib/jakes-cakes/products'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary, type Dictionary } from '@/lib/i18n/getDictionary'
import './page-styles.css'

function localizeProduct(product: Product, productDict: Dictionary['jakesCakes']['products']) {
    const translated = productDict[product.id]
    return translated ? { ...product, name: translated.name, description: translated.description } : product
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesCakes.shop.metaTitle };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.jakesCakes.shop;
    const itemDict = dict.jakesCakes.item;
    const productDict = dict.jakesCakes.products;

    return (
        <div className="page-content p-10">
            <h1 className="text-3xl font-semibold mb-2 font-[fraunces-variable] text-[var(--burgundy)]">{t.title}</h1>
            <p className="mb-8 max-w-2xl">{t.intro}</p>
            <a href="#everyday-cakes"><h2 className="text-2xl font-medium mb-2 font-[fraunces-variable] text-[var(--burgundy)]">{t.everydayHeading}</h2></a>
            <div className="cake-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => {
                    const localized = localizeProduct(product, productDict);
                    return (
                        <Item
                            key={localized.id}
                            id={localized.id}
                            name={localized.name}
                            description={localized.description}
                            price={localized.price}
                            image={localized.image}
                            imageAlt={localized.imageAlt}
                            accent={localized.accent}
                            dict={itemDict}
                        />
                    );
                })}
            </div>
            <h2 id="wedding-cakes" className="text-2xl font-medium mb-2 mt-5 font-[fraunces-variable] text-[var(--burgundy)] scroll-mt-[var(--navbar-ht)]">{t.weddingHeading}</h2>
            <div className="cake-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wedding_cakes.map(product => {
                    const localized = localizeProduct(product, productDict);
                    return (
                        <Item
                            key={localized.id}
                            id={localized.id}
                            name={localized.name}
                            description={localized.description}
                            price={localized.price}
                            image={localized.image}
                            imageAlt={localized.imageAlt}
                            accent={localized.accent}
                            dict={itemDict}
                        />
                    );
                })}
            </div>
            <h2 id="bday-cakes" className="text-2xl font-medium mb-2 mt-5 font-[fraunces-variable] text-[var(--burgundy)] scroll-mt-[var(--navbar-ht)]">{t.birthdayHeading}</h2>
            <div className="cake-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bday_cakes.map(product => {
                    const localized = localizeProduct(product, productDict);
                    return (
                        <Item
                            key={localized.id}
                            id={localized.id}
                            name={localized.name}
                            description={localized.description}
                            price={localized.price}
                            image={localized.image}
                            imageAlt={localized.imageAlt}
                            accent={localized.accent}
                            dict={itemDict}
                        />
                    );
                })}
            </div>
            <h2 id="grad-cakes" className="text-2xl font-medium mb-2 mt-5 font-[fraunces-variable] text-[var(--burgundy)] scroll-mt-[var(--navbar-ht)]">{t.graduationHeading}</h2>
            <div className="cake-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {grad_cakes.map(product => {
                    const localized = localizeProduct(product, productDict);
                    return (
                        <Item
                            key={localized.id}
                            id={localized.id}
                            name={localized.name}
                            description={localized.description}
                            price={localized.price}
                            image={localized.image}
                            imageAlt={localized.imageAlt}
                            accent={localized.accent}
                            dict={itemDict}
                        />
                    );
                })}
            </div>
        </div>
    );
}
