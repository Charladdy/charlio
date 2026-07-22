import Image from "next/image";
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.yardsdale.ourStory;

    return(
        <div className="page-content p-10">
            <h1 className="text-3xl font-semibold mb-5 font-[fraunces-variable] text-[var(--burgundy)]">About Us</h1>
            <div className="relative min-h-[55dvw]">
                <Image className="w-[40%] min-w-[300px] float-right m-5" src="/jakes-cakes/jake_bakes.png" width={500} height={500} alt="The real Jake can't bake."/>
                <div className="my-auto">
                    <div className="mb-5">If you're looking for a cake for a special occassion, a gathering, or any other reason,
                    you are in the wrong place. Jake cannot bake. He cannot make cakes. He can, however, make great-looking ecommerce storefronts.
                    </div>
                    <div className="mb-5">If you're looking for a website for your retail business that uses Shopify, BigCommerce, or 
                        a custom implementation, you <span className="italic font-bold">are</span> in the right place!
                    </div>
                    <div>Take a look around this demo site to get an idea of Jake's capabilities, and if you have any questions for him
                        or would like to talk about your own ecommerce project, you can reach out to him from <a href="/contact">here</a>. Thanks!
                    </div>
                </div>
            </div>
        </div>
    );
}
