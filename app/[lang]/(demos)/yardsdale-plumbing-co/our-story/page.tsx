import Image from "next/image";
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.yardsdale.ourStory;

    return(
        <div className="page-content">
            <h1 className="text-2xl font-semibold mb-5">{t.heading}</h1>
            <div>
                <Image className="w-[50%] float-left mr-2" src="/ypc/ypc_family.png" width={500} height={500} alt={t.imageAlt}/>
                <div className="mb-5">{t.para1}</div>
                <div className="mb-5">{t.para2}</div>
                <div>{t.para3}</div>
            </div>
        </div>
    );
}
