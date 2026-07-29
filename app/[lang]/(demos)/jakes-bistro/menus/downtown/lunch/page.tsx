import type { Metadata } from 'next';
import TradulioMenuFrame from '@/components/TradulioMenuFrame';
import { resolveLangParam } from '@/lib/i18n/locales';
import { getDictionary } from '@/lib/i18n/getDictionary';
import RestMenuHeader from '@/components/RestMenu';
import { RestMenuSection, RestMenuItem } from '@/components/RestMenu';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.jakesBistro.menus.menuTitles.downtownLunch };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);

    return (
        <TradulioMenuFrame lang={lang} dict={dict.jakesBistro.tradulioFrame} tradulioUrl="https://www.tradulio.com/menu/Jake's%20Bistro/jakes-downtown-lunch-17">
            <div className="bg-[var(--silver)] pb-20">
                <div className='lg:w-250 m-auto h-fit mb-10 px-8 lg:px-auto'>
                    <RestMenuHeader locationName="JAKE'S DOWNTOWN" menuName='Lunch Menu' serviceTimeString='Lunch served daily, 11:00am - 4:00pm • Ask about our express lunch combo'/>

                    <RestMenuSection sectionName="SMALL PLATES & STARTERS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Crispy Brussels Sprouts" price="$10" desc="Chili-honey glaze, shaved parmesan"/>
                        <RestMenuItem name="Tuna Poke Bites" price="$13" desc="Sesame, avocado, sriracha aioli, wonton crisps"/>
                        <RestMenuItem name="Hummus & Flatbread" price="$10" desc="Roasted red pepper hummus, warm flatbread, olives"/>
                        <RestMenuItem name="Soup of the Day" price="$7" desc="Ask your server about today's selection"/>
                        <RestMenuItem name="Charred Shishito Peppers" price="$9" desc="Sea salt, charred lemon"/>
                    </div>

                    <RestMenuSection sectionName="SALADS & BOWLS" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Kale Caesar" price="$12" desc="Shaved parmesan, sourdough croutons, lemon dressing"/>
                        <RestMenuItem name="Roasted Vegetable Grain Bowl" price="$13" desc="Farro, roasted vegetables, chickpeas, feta, lemon tahini"/>
                        <RestMenuItem name="Southwest Chicken Salad" price="$14" desc="Grilled chicken, black beans, corn, avocado, chipotle ranch"/>
                        <RestMenuItem name="Ahi Poke Bowl" price="$15" desc="Sushi rice, ahi tuna or tofu, edamame, cucumber, sesame"/>
                        <RestMenuItem name="Mediterranean Bowl" price="$13" desc="Falafel, hummus, tabbouleh, pickled vegetables, tzatziki"/>
                        <RestMenuItem name="Classic Caesar" price="$11" desc="Romaine, parmesan, garlic croutons"/>
                    </div>

                    <RestMenuSection sectionName="SANDWICHES & WRAPS" sectionDesc="Served with truffle parmesan fries or house salad"/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="The Downtown Club" price="$14" desc="Turkey, bacon, avocado, swiss, herb aioli on focaccia"/>
                        <RestMenuItem name="Banh Mi" price="$13" desc="Pork belly, pickled vegetables, cilantro, jalapeno, sriracha mayo"/>
                        <RestMenuItem name="Buffalo Chicken Wrap" price="$13" desc="Crispy chicken, romaine, blue cheese, buffalo sauce"/>
                        <RestMenuItem name="Caprese Panini" price="$11" desc="Fresh mozzarella, tomato, basil, balsamic glaze on ciabatta"/>
                        <RestMenuItem name="Smoked Salmon Bagel" price="$14" desc="Cream cheese, capers, red onion, dill"/>
                        <RestMenuItem name="Shaved Ribeye Sandwich" price="$16" desc="Caramelized onions, provolone, horseradish aioli"/>
                    </div>

                    <RestMenuSection sectionName="POWER LUNCH MAINS" sectionDesc="Quick-fire plates, ready in 15 minutes"/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Grilled Chicken & Quinoa Plate" price="$15" desc="Lemon herb chicken, roasted vegetables"/>
                        <RestMenuItem name="Seared Salmon Salad" price="$18" desc="Mixed greens, citrus vinaigrette"/>
                        <RestMenuItem name="Pesto Pasta with Grilled Chicken" price="$16" desc="Penne, basil pesto, cherry tomatoes"/>
                        <RestMenuItem name="Steak Frites" price="$19" desc="Sliced sirloin, herb butter, fries"/>
                        <RestMenuItem name="Vegetable Stir-Fry Bowl" price="$13" desc="Seasonal vegetables, jasmine rice, ginger soy"/>
                    </div>

                    <RestMenuSection sectionName="SIDES" sectionDesc={undefined}/>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <RestMenuItem name="Truffle Parmesan Fries" price="$7" desc={undefined}/>
                        <RestMenuItem name="House Salad" price="$5" desc={undefined}/>
                        <RestMenuItem name="Side of Quinoa" price="$5" desc={undefined}/>
                        <RestMenuItem name="Seasonal Vegetables" price="$6" desc={undefined}/>
                        <RestMenuItem name="Cup of Soup" price="$4" desc={undefined}/>
                    </div>
                </div>
            </div>
        </TradulioMenuFrame>
    )
}
