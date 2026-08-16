import type { Metadata } from 'next';
import TradulioMenuFrame from '@/components/TradulioMenuFrame';
import { resolveLangParam } from '@/lib/i18n/locales';
import { getDictionary } from '@/lib/i18n/getDictionary';
import RestMenuHeader from '@/components/RestMenu';
import { RestMenuSection, RestMenuItem } from '@/components/RestMenu';
import { client } from "@/lib/sanity/client";
import { MENU_BY_SLUG_QUERY } from "@/lib/sanity/queries";
import { SanityMenu } from "@/lib/sanity/types";
import { portableTextToPlain } from "@/lib/sanity/utils";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesBistro.menus.menuTitles.mainBrunch };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);

    // Fetch menu from Sanity
    const menu = await client.fetch<SanityMenu>(MENU_BY_SLUG_QUERY, { slug: 'main-brunch' });

    if (!menu) {
        return <div>Menu not found</div>;
    }

    return (
        <TradulioMenuFrame lang={lang} dict={dict.jakesBistro.tradulioFrame} tradulioUrl="https://www.tradulio.com/menu/Jake's%20Bistro/jakes-on-main-brunch-18">
            <div className="bg-[var(--silver)] pb-20">
                <div className='lg:w-250 m-auto h-fit mb-10 px-8 lg:px-auto'>
                    <RestMenuHeader
                        locationName={menu.location || "JAKE'S BISTRO"}
                        menuName={menu.displayName || menu.name}
                        serviceTimeString={menu.description || ''}
                    />

                    {menu.categories?.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <RestMenuSection
                                sectionName={category.displayName || category.name}
                                sectionDesc={category.description}
                            />

                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                                {category.items?.map((item, itemIndex) => (
                                    <RestMenuItem
                                        key={itemIndex}
                                        name={item.displayName || item.name}
                                        price={item.price || ''}
                                        desc={portableTextToPlain(item.description)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </TradulioMenuFrame>
    )
}
