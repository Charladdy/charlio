import Image from "next/image";
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.yardsdale.services;

    return(
        <div className="page-content">
            <h1 className="text-2xl font-semibold mb-5">{t.heading}</h1>
            <div>
                <Image className="w-[50%] float-right ml-2" src="/ypc/ypc_van.png" width={500} height={500} alt={t.vanAlt}/>
                <div className="mb-5">{t.intro}</div>
                <h2 className="text-lg font-semibold mt-5 mb-2">{t.plumbingHeading}</h2>
                <div>{t.plumbingBody}</div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mt-5 mb-2">{t.hvacHeading}</h2>
                <Image className="w-[60%] float-left mr-2" src="/ypc/ypc_hvac.png" width={500} height={500} alt={t.hvacAlt}/>
                <div>{t.hvacBody}</div>
            </div>
        </div>
    );
}
