import type { Metadata } from 'next';
import TradulioMenuFrame from '@/components/TradulioMenuFrame';
import { resolveLangParam } from '@/lib/i18n/locales';
import { getDictionary } from '@/lib/i18n/getDictionary';
import RestMenuHeader from '@/components/RestMenu';
import { RestMenuSection, RestMenuItem } from '@/components/RestMenu';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesBistro.menus.menuTitles.drinks };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);

    return (
        <TradulioMenuFrame lang={lang} dict={dict.jakesBistro.tradulioFrame} tradulioUrl="https://www.tradulio.com/menu/Jake's%20Bistro/drinks-menu-15">
            <div className="bg-[var(--silver)] pb-20">
                <div className='lg:w-250 m-auto h-fit mb-10 px-8 lg:px-auto'>
                    <RestMenuHeader locationName="JAKE'S BISTRO" menuName='Drinks Menu' serviceTimeString='Please drink responsibly. Must be 21 or older to order alcoholic beverages.'/>

                    <RestMenuSection sectionName="CRAFT COCKTAILS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Jake's Old Fashioned" price="$13" desc="Bourbon, demerara sugar, Angostura bitters, orange twist"/>
                        <RestMenuItem name="Bistro Mule" price="$12" desc="Vodka, ginger beer, fresh lime, mint"/>
                        <RestMenuItem name="Smoked Paloma" price="$13" desc="Tequila, grapefruit, lime, smoked salt rim"/>
                        <RestMenuItem name="Espresso Martini" price="$13" desc="Vodka, espresso, coffee liqueur"/>
                        <RestMenuItem name="Garden Spritz" price="$12" desc="Gin, elderflower liqueur, cucumber, prosecco"/>
                        <RestMenuItem name="Whiskey Smash" price="$12" desc="Bourbon, fresh lemon, mint, simple syrup"/>
                    </div>

                    <RestMenuSection sectionName="WINE" sectionDesc="By the glass • Ask your server about our reserve bottle list"/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Chardonnay" price="$10" desc="Buttery, oak-aged, notes of vanilla and pear"/>
                        <RestMenuItem name="Sauvignon Blanc" price="$10" desc="Crisp, citrus-forward, light minerality"/>
                        <RestMenuItem name="Pinot Noir" price="$11" desc="Light-bodied, red berry, soft tannins"/>
                        <RestMenuItem name="Cabernet Sauvignon" price="$12" desc="Full-bodied, dark fruit, hints of oak"/>
                        <RestMenuItem name="Rose" price="$10" desc="Dry, refreshing, notes of strawberry and melon"/>
                        <RestMenuItem name="Prosecco" price="$10" desc="Light, bubbly, green apple and citrus"/>
                    </div>

                    <RestMenuSection sectionName="DRAFT & BOTTLED BEER" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Local IPA" price="$7" desc="Citrus and pine, on draft"/>
                        <RestMenuItem name="Pilsner" price="$6" desc="Crisp and light, on draft"/>
                        <RestMenuItem name="Amber Ale" price="$7" desc="Caramel malt, balanced bitterness, on draft"/>
                        <RestMenuItem name="Hefeweizen" price="$6" desc="Wheat beer with notes of banana and clove"/>
                        <RestMenuItem name="Seasonal Craft Selection" price="$8" desc="Ask your server about this week's feature"/>
                        <RestMenuItem name="Domestic Bottle" price="$5" desc="Classic American lager"/>
                    </div>

                    <RestMenuSection sectionName="COFFEE & TEA" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Drip Coffee" price="$3" desc="Locally roasted, regular or decaf"/>
                        <RestMenuItem name="Espresso" price="$3" desc="Single or double shot"/>
                        <RestMenuItem name="Cappuccino" price="$4" desc="Espresso, steamed milk, foam"/>
                        <RestMenuItem name="Latte" price="$5" desc="Espresso, steamed milk"/>
                        <RestMenuItem name="Hot Tea" price="$3" desc="Selection of black, green, and herbal teas"/>
                    </div>

                    <RestMenuSection sectionName="NON-ALCOHOLIC & MOCKTAILS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="House Lemonade" price="$4" desc="Fresh-squeezed, lightly sweetened"/>
                        <RestMenuItem name="Iced Tea" price="$3" desc="Sweet or unsweetened"/>
                        <RestMenuItem name="Garden Mule" price="$6" desc="Ginger beer, fresh lime, mint"/>
                        <RestMenuItem name="Berry Spritzer" price="$6" desc="Mixed berry puree, soda water, lime"/>
                        <RestMenuItem name="Soft Drinks" price="$3" desc="Coke, Diet Coke, Sprite, Ginger Ale"/>
                    </div>
                </div>
            </div>
        </TradulioMenuFrame>
    )
}
