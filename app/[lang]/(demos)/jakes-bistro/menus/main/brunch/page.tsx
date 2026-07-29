import type { Metadata } from 'next';
import TradulioMenuFrame from '@/components/TradulioMenuFrame';
import { resolveLangParam } from '@/lib/i18n/locales';
import { getDictionary } from '@/lib/i18n/getDictionary';
import RestMenuHeader from '@/components/RestMenu';
import { RestMenuSection, RestMenuItem } from '@/components/RestMenu';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesBistro.menus.menuTitles.mainBrunch };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);

    return (
        <TradulioMenuFrame lang={lang} dict={dict.jakesBistro.tradulioFrame} tradulioUrl="https://www.tradulio.com/menu/Jake's%20Bistro/jakes-on-main-brunch-18">
            <div className="bg-[var(--silver)] pb-20">
                <div className='lg:w-250 m-auto h-fit mb-10 px-8 lg:px-auto'>
                    <RestMenuHeader locationName="JAKE'S ON MAIN" menuName='Brunch Menu' serviceTimeString='Brunch served Saturday & Sunday, 9:00am - 2:00pm • Bottomless Mimosas $16 with any brunch entree (21+)'/>

                    <RestMenuSection sectionName="MORNING STARTERS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Fresh Fruit Cup" price="$6" desc="Seasonal fruit medley"/>
                        <RestMenuItem name="Cinnamon Roll" price="$6" desc="House-made, warm cream cheese glaze"/>
                        <RestMenuItem name="Yogurt Parfait" price="$7" desc="Vanilla yogurt, granola, mixed berries, honey"/>
                        <RestMenuItem name="Avocado Toast" price="$11" desc="Multigrain toast, smashed avocado, radish, chili flakes, poached egg"/>
                        <RestMenuItem name="Mini Pastry Basket" price="$7" desc="Assorted muffins and scones, served with butter and jam"/>
                    </div>

                    <RestMenuSection sectionName="EGG DISHES" sectionDesc="Served with breakfast potatoes and choice of toast"/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Classic Two-Egg Breakfast" price="$12" desc="Eggs any style, breakfast potatoes, toast, choice of bacon or sausage"/>
                        <RestMenuItem name="Main Street Omelet" price="$13" desc="Cheddar, ham, bell peppers, onions"/>
                        <RestMenuItem name="Veggie Frittata" price="$12" desc="Spinach, mushrooms, tomatoes, goat cheese"/>
                        <RestMenuItem name="Eggs Benedict" price="$14" desc="Poached eggs, Canadian bacon, English muffin, hollandaise"/>
                        <RestMenuItem name="Breakfast Burrito" price="$12" desc="Scrambled eggs, chorizo, cheddar, potatoes, salsa"/>
                        <RestMenuItem name="Huevos Rancheros" price="$13" desc="Fried eggs, black beans, ranchero sauce, queso fresco, tortillas"/>
                    </div>

                    <RestMenuSection sectionName="GRIDDLE & PANCAKES" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Buttermilk Pancakes" price="$9" desc="Stack of three, served with whipped butter and syrup"/>
                        <RestMenuItem name="Belgian Waffle" price="$10" desc="Whipped cream, seasonal berries"/>
                        <RestMenuItem name="Brioche French Toast" price="$10" desc="Cinnamon-vanilla brioche, maple syrup"/>
                        <RestMenuItem name="Banana Walnut Pancakes" price="$11" desc="Stack of three with candied walnuts"/>
                        <RestMenuItem name="Chicken & Waffles" price="$15" desc="Crispy fried chicken, Belgian waffle, maple syrup, hot sauce"/>
                    </div>

                    <RestMenuSection sectionName="SANDWICHES & BOWLS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Brunch Burger" price="$15" desc="Fried egg, bacon, cheddar, hash brown patty"/>
                        <RestMenuItem name="Breakfast BLT" price="$12" desc="Fried egg, bacon, lettuce, tomato, garlic aioli on sourdough"/>
                        <RestMenuItem name="Acai Bowl" price="$11" desc="Acai blend, granola, banana, berries, coconut"/>
                        <RestMenuItem name="Garden Grain Bowl" price="$12" desc="Quinoa, roasted vegetables, poached egg, tahini drizzle"/>
                    </div>

                    <RestMenuSection sectionName="SIDES" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Bacon or Sausage" price="$4" desc={undefined}/>
                        <RestMenuItem name="Breakfast Potatoes" price="$4" desc={undefined}/>
                        <RestMenuItem name="Toast or English Muffin" price="$3" desc={undefined}/>
                        <RestMenuItem name="Side of Fresh Fruit" price="$4" desc={undefined}/>
                        <RestMenuItem name="Single Pancake or Egg" price="$3" desc={undefined}/>
                    </div>
                </div>
            </div>
        </TradulioMenuFrame>
    )
}
