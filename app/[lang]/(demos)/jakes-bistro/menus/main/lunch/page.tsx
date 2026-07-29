
import type { Metadata } from 'next';
import TradulioMenuFrame from '@/components/TradulioMenuFrame';
import { resolveLangParam } from '@/lib/i18n/locales';
import { getDictionary } from '@/lib/i18n/getDictionary';
import RestMenuHeader from '@/components/RestMenu';
import { RestMenuSection, RestMenuItem } from '@/components/RestMenu';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesBistro.menus.menuTitles.mainLunch };
}


export default async function page({ params }: { params: Promise<{ lang: string }> }){

    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);

    return (
        <TradulioMenuFrame lang={lang} dict={dict.jakesBistro.tradulioFrame} tradulioUrl="https://www.tradulio.com/menu/Jake's%20Bistro/jakes-on-main-lunch-20">
            <div className="bg-[var(--silver)] pb-20">
                <div className='lg:w-250 m-auto h-fit mb-10 px-8 lg:px-auto'>
                    <RestMenuHeader locationName="JAKE'S ON MAIN" menuName='Lunch Menu' serviceTimeString='Lunch served daily, 11:00am - 4:00pm'/>

                    <RestMenuSection sectionName="SOUPS & SALADS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="House Garden Salad" price="$9" desc="Mixed greens, cherry tomatoes, cucumber, shredded carrot, choice of dressing"/>
                        <RestMenuItem name="Caesar Salad" price="$11" desc="Crisp romaine, shaved parmesan, garlic croutons, classic Caesar dressing"/>
                        <RestMenuItem name="Soup of the Day" price="$7" desc="Ask your server about today's selection, served with a warm roll"/>
                        <RestMenuItem name="Tomato Basil Bisque" price="$8" desc="Creamy tomato soup finished with fresh basil and a swirl of cream"/>
                        <RestMenuItem name="Cobb Salad" price="$14" desc="Grilled chicken, bacon, hard-boiled egg, avocado, blue cheese, ranch"/>
                    </div>

                    <RestMenuSection sectionName="SANDWICHES & WRAPS" sectionDesc="Served with choice of fries, side salad, or cup of soup"/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Main Street Club" price="$13" desc="Turkey, ham, bacon, swiss, lettuce, tomato, mayo on toasted sourdough"/>
                        <RestMenuItem name="Grilled Chicken Avocado Wrap" price="$12" desc="Grilled chicken, avocado, lettuce, tomato, chipotle mayo"/>
                        <RestMenuItem name="Classic Reuben" price="$14" desc="House-cured corned beef, swiss, sauerkraut, Russian dressing on rye"/>
                        <RestMenuItem name="Caprese Panini" price="$11" desc="Fresh mozzarella, tomato, basil, balsamic glaze on ciabatta"/>
                        <RestMenuItem name="French Dip" price="$14" desc="Shaved roast beef, melted provolone, served with au jus"/>
                        <RestMenuItem name="BLT Deluxe" price="$12" desc="Applewood bacon, lettuce, tomato, avocado, mayo on toasted wheat"/>
                    </div>

                    <RestMenuSection sectionName="BURGERS & PLATES" sectionDesc="All burgers served with seasoned fries unless noted"/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Main Street Burger" price="$14" desc="Half-pound beef patty, cheddar, lettuce, tomato, onion, house sauce"/>
                        <RestMenuItem name="Bacon Mushroom Swiss Burger" price="$16" desc="Sauteed mushrooms, melted swiss, crispy applewood bacon"/>
                        <RestMenuItem name="Grilled Chicken Sandwich " price="$13" desc="Marinated chicken breast, lettuce, tomato, garlic aioli"/>
                        <RestMenuItem name="Fish & Chips" price="$15" desc="Beer-battered cod, fries, tartar sauce, malt vinegar"/>
                        <RestMenuItem name="Veggie Burger" price="$13" desc="House-made black bean patty, avocado, sprouts, chipotle mayo"/>
                        <RestMenuItem name="Chicken Tenders Basket" price="$13" desc="Hand-breaded tenders, fries, choice of dipping sauce"/>
                    </div>

                    <RestMenuSection sectionName="FOR THE LITTLE ONES" sectionDesc="For guests 12 and under, served with fries or applesauce"/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Mini Cheeseburger & Fries" price="$8" desc={undefined}/>
                        <RestMenuItem name="Grilled Cheese & Tomato Soup" price="$7" desc={undefined}/>
                        <RestMenuItem name="Chicken Tenders & Fries" price="$8" desc={undefined}/>
                        <RestMenuItem name="Mac & Cheese" price="$7" desc={undefined}/>
                        <RestMenuItem name="Cheese Quesadilla & Rice" price="$7" desc={undefined}/>
                    </div>

                    <RestMenuSection sectionName="SIDES & EXTRAS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="French Fries" price="$4" desc={undefined}/>
                        <RestMenuItem name="Sweet Potato Fries" price="$5" desc={undefined}/>
                        <RestMenuItem name="Side Salad" price="$5" desc={undefined}/>
                        <RestMenuItem name="Cup of Soup" price="$4" desc={undefined}/>
                        <RestMenuItem name="Onion Rings" price="$5" desc={undefined}/>
                    </div>                
                </div>
            </div>
        </TradulioMenuFrame>
    )
}
