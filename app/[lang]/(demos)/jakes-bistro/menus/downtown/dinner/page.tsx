import type { Metadata } from 'next';
import TradulioMenuFrame from '@/components/TradulioMenuFrame';
import { resolveLangParam } from '@/lib/i18n/locales';
import { getDictionary } from '@/lib/i18n/getDictionary';
import RestMenuHeader from '@/components/RestMenu';
import { RestMenuSection, RestMenuItem } from '@/components/RestMenu';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesBistro.menus.menuTitles.downtownDinner };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);

    return (
        <TradulioMenuFrame lang={lang} dict={dict.jakesBistro.tradulioFrame} tradulioUrl="https://www.tradulio.com/menu/Jake's%20Bistro/jakes-downtown-dinner-16">
            <div className="bg-[var(--silver)] pb-20">
                <div className='lg:w-250 m-auto h-fit mb-10 px-8 lg:px-auto'>
                    <RestMenuHeader locationName="JAKE'S DOWNTOWN" menuName='Dinner Menu' serviceTimeString='Dinner served daily from 4:00pm • Happy Hour 4-6pm at the bar'/>

                    <RestMenuSection sectionName="SHAREABLES" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Tuna Tartare" price="$15" desc="Avocado, sesame, wonton crisps, citrus soy"/>
                        <RestMenuItem name="Burrata & Heirloom Tomato" price="$14" desc="Basil oil, balsamic, grilled bread"/>
                        <RestMenuItem name="Korean Fried Cauliflower" price="$11" desc="Gochujang glaze, scallion, sesame"/>
                        <RestMenuItem name="Charcuterie Board" price="$19" desc="Artisan meats, cheeses, preserves, crostini"/>
                        <RestMenuItem name="Crispy Calamari" price="$13" desc="Chili aioli, charred lemon"/>
                        <RestMenuItem name="Truffle Fries" price="$9" desc="Parmesan, herb aioli"/>
                    </div>

                    <RestMenuSection sectionName="SALADS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Kale Caesar" price="$12" desc="Shaved parmesan, sourdough croutons, lemon dressing"/>
                        <RestMenuItem name="Beet & Goat Cheese Salad" price="$13" desc="Candied walnuts, arugula, citrus vinaigrette"/>
                        <RestMenuItem name="Wedge Salad" price="$12" desc="Iceberg, bacon, blue cheese, cherry tomatoes, buttermilk dressing"/>
                        <RestMenuItem name="Burrata Caprese Salad" price="$15" desc="Heirloom tomatoes, basil, balsamic reduction"/>
                        <RestMenuItem name="Steakhouse Chopped Salad" price="$16" desc="Grilled steak strips, blue cheese, tomatoes, red onion"/>
                    </div>

                    <RestMenuSection sectionName="ENTREES" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Seared Salmon" price="$28" desc="Citrus beurre blanc, asparagus, herb risotto"/>
                        <RestMenuItem name="Braised Short Rib" price="$32" desc="Red wine reduction, garlic mashed potatoes, root vegetables"/>
                        <RestMenuItem name="Bone-In Pork Chop" price="$27" desc="Apple bourbon glaze, sweet potato puree, charred broccolini"/>
                        <RestMenuItem name="Wild Mushroom Risotto" price="$22" desc="Truffle oil, parmesan, arugula"/>
                        <RestMenuItem name="14oz Ribeye" price="$32" desc="Chimichurri, fingerling potatoes, grilled vegetables"/>
                        <RestMenuItem name="Roasted Half Chicken" price="$24" desc="Herb jus, polenta, charred greens"/>
                        <RestMenuItem name="Garlic Shrimp Linguine" price="$26" desc="White wine, cherry tomatoes, basil"/>
                    </div>

                    <RestMenuSection sectionName="HANDHELDS & LATE NIGHT" sectionDesc="Available all evening, including late-night hours"/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Downtown Burger" price="$18" desc="Aged cheddar, caramelized onion, truffle aioli, brioche bun"/>
                        <RestMenuItem name="Lobster Roll" price="$24" desc="Butter-toasted brioche, herb mayo, served with fries"/>
                        <RestMenuItem name="Short Rib Grilled Cheese" price="$17" desc="Sourdough, gruyere, caramelized onion"/>
                        <RestMenuItem name="Blackened Mahi Tacos" price="$17" desc="Slaw, chipotle crema, corn tortillas"/>
                        <RestMenuItem name="Steak Frites" price="$26" desc="Sliced sirloin, herb butter, fries"/>
                    </div>

                    <RestMenuSection sectionName="DESSERTS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Dark Chocolate Lava Cake" price="$10" desc="Vanilla bean ice cream"/>
                        <RestMenuItem name="Creme Brulee" price="$9" desc="Classic vanilla custard, caramelized sugar"/>
                        <RestMenuItem name="Seasonal Fruit Tart" price="$9" desc="Pastry cream, fresh fruit, apricot glaze"/>
                        <RestMenuItem name="Tiramisu" price="$9" desc="Espresso-soaked ladyfingers, mascarpone"/>
                        <RestMenuItem name="Affogato" price="$7" desc="Vanilla gelato, hot espresso"/>
                    </div>
                </div>
            </div>
        </TradulioMenuFrame>
    )
}
