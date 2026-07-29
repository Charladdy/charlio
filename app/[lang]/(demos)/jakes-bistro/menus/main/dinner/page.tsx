import type { Metadata } from 'next';
import TradulioMenuFrame from '@/components/TradulioMenuFrame';
import { resolveLangParam } from '@/lib/i18n/locales';
import { getDictionary } from '@/lib/i18n/getDictionary';
import RestMenuHeader from '@/components/RestMenu';
import { RestMenuSection, RestMenuItem } from '@/components/RestMenu';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesBistro.menus.menuTitles.mainDinner };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);

    return (
        <TradulioMenuFrame lang={lang} dict={dict.jakesBistro.tradulioFrame} tradulioUrl="https://www.tradulio.com/menu/Jake's%20Bistro/jakes-on-main-dinner-19">
            <div className="bg-[var(--silver)] pb-20">
                <div className='lg:w-250 m-auto h-fit mb-10 px-8 lg:px-auto'>
                    <RestMenuHeader locationName="JAKE'S ON MAIN" menuName='Dinner Menu' serviceTimeString='Dinner served daily from 4:00pm'/>

                    <RestMenuSection sectionName="STARTERS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Loaded Potato Skins" price="$11" desc="Bacon, cheddar, scallions, sour cream"/>
                        <RestMenuItem name="Spinach Artichoke Dip" price="$12" desc="Served warm with toasted pita and tortilla chips"/>
                        <RestMenuItem name="Buffalo Cauliflower Bites" price="$10" desc="Tossed in buffalo sauce, blue cheese drizzle"/>
                        <RestMenuItem name="Crispy Calamari" price="$13" desc="Lightly fried, served with marinara and lemon"/>
                        <RestMenuItem name="Mozzarella Sticks" price="$9" desc="Hand-breaded, served with marinara dipping sauce"/>
                        <RestMenuItem name="Soup of the Day" price="$7" desc="Ask your server about today's selection"/>
                    </div>

                    <RestMenuSection sectionName="SALADS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="House Garden Salad" price="$9" desc="Mixed greens, cherry tomatoes, cucumber, shredded carrot"/>
                        <RestMenuItem name="Caesar Salad" price="$11" desc="Crisp romaine, shaved parmesan, garlic croutons"/>
                        <RestMenuItem name="Wedge Salad" price="$11" desc="Iceberg, bacon, blue cheese crumbles, cherry tomatoes, buttermilk dressing"/>
                        <RestMenuItem name="Spinach & Strawberry Salad" price="$12" desc="Candied pecans, goat cheese, balsamic vinaigrette"/>
                        <RestMenuItem name="Steakhouse Chopped Salad" price="$16" desc="Grilled steak strips, blue cheese, tomatoes, red onion"/>
                    </div>

                    <RestMenuSection sectionName="ENTREES" sectionDesc="All entrees served with choice of two family-style sides"/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Grandma's Meatloaf" price="$19" desc="House-made meatloaf, mushroom gravy, mashed potatoes"/>
                        <RestMenuItem name="Herb-Roasted Chicken" price="$20" desc="Half chicken, rosemary pan jus"/>
                        <RestMenuItem name="Slow-Roasted Pot Roast" price="$22" desc="Tender beef, root vegetables, red wine jus"/>
                        <RestMenuItem name="Fish & Chips" price="$18" desc="Beer-battered cod, fries, coleslaw"/>
                        <RestMenuItem name="Baked Mac & Cheese" price="$16" desc="Four-cheese blend, topped with crispy breadcrumbs"/>
                        <RestMenuItem name="Grilled Salmon" price="$24" desc="Lemon butter sauce, fresh herbs"/>
                        <RestMenuItem name="12oz Sirloin Steak" price="$26" desc="Garlic herb butter"/>
                        <RestMenuItem name="Chicken Parmesan" price="$20" desc="Breaded chicken, marinara, mozzarella, spaghetti"/>
                    </div>

                    <RestMenuSection sectionName="FAMILY-STYLE SIDES" sectionDesc="Serves 3-4, perfect for sharing at the table"/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Mashed Potatoes" price="$7" desc={undefined}/>
                        <RestMenuItem name="Mac & Cheese" price="$8" desc={undefined}/>
                        <RestMenuItem name="Steamed Vegetable Medley" price="$6" desc={undefined}/>
                        <RestMenuItem name="Garlic Mashed Cauliflower" price="$7" desc={undefined}/>
                        <RestMenuItem name="Buttermilk Biscuits (half dozen)" price="$6" desc={undefined}/>
                    </div>

                    <RestMenuSection sectionName="DESSERTS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Apple Crumb Pie" price="$8" desc="Served warm with vanilla ice cream"/>
                        <RestMenuItem name="Classic Cheesecake" price="$8" desc="Topped with berry compote"/>
                        <RestMenuItem name="Warm Brownie Sundae" price="$9" desc="Vanilla ice cream, hot fudge"/>
                        <RestMenuItem name="Carrot Cake" price="$8" desc="Cream cheese frosting"/>
                        <RestMenuItem name="Seasonal Cobbler" price="$8" desc="Ask your server about today's flavor"/>
                    </div>
                </div>
            </div>
        </TradulioMenuFrame>
    )
}
