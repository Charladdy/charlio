import Image from 'next/image'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'

export default async function Page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.jakesBistro.locations;

    return(
        <div className='w-full p-5 md:w-2xl m-auto'>
            <h1 className="page-header h-fit m-auto">{t.title}</h1>
            <h1 className="title-header h-fit text-xl m-auto pt-10">{t.main.heading}</h1>
            <div className="h-fit m-auto flex pt-5">
                <div className="w-2 md:w-60 h-auto flex-1 my-auto" >
                    <Image src="/jakes-bistro/jakes-on-main.png" height={500} width={500} alt={t.main.imageAlt} />
                </div>
                <div className="w-40 flex-1 ml-10 my-auto">
                    <p>{t.main.address1}</p>
                    <p>{t.main.address2}</p>
                    <p className="font-bold pt-5">{t.main.hoursLabel}</p>
                    {t.main.hours.map(line => <p className="ml-5" key={line}>{line}</p>)}
                </div>
            </div>
            <h1 className="title-header h-fit text-xl m-auto pt-5 mt-10 border-t text-right">{t.downtown.heading}</h1>
            <div className="h-fit m-auto flex pt-5 pb-15">
                <div className="w-40 flex-1 mr-10 my-auto">
                    <p>{t.downtown.address1}</p>
                    <p>{t.downtown.address2}</p>
                    <p className="font-bold pt-5">{t.downtown.hoursLabel}</p>
                    {t.downtown.hours.map(line => <p className="ml-5" key={line}>{line}</p>)}
                </div>
                <div className="w-2 md:w-60 h-auto flex-1 my-auto" >
                    <Image className="md:w-60 h-auto flex-1" src="/jakes-bistro/jakes-downtown.png" height={500} width={500} alt={t.downtown.imageAlt} />
                </div>
            </div>
        </div>
    );
}
