import Image from "next/image";
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.jakesCakes.aboutUs;

    return(
        <div className="page-content p-10">
            <h1 className="text-3xl font-semibold mb-5 font-[fraunces-variable] text-[var(--burgundy)]">{t.title}</h1>
            <div className="relative min-h-[55dvw]">
                <Image className="w-[40%] min-w-[300px] float-right m-5" src="/jakes-cakes/jake_bakes.png" width={500} height={500} alt={t.jakeBakesAlt}/>
                <div className="my-auto">
                    <div className="mb-5">{t.para1}
                    </div>
                    <div className="mb-5">{t.para2Pre}<span className="italic font-bold">{t.para2Emphasis}</span>{t.para2Post}
                    </div>
                    <div>{t.para3Pre}<a href={`/${lang}/jakes-cakes/contact`}>{t.reachOutLink}</a>{t.para3Post}
                    </div>
                </div>
            </div>
        </div>
    );
}
