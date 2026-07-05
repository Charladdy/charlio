import Image from 'next/image'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import './page-styles.css'

export default async function Page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.jakesBistro.menus;

    return(
        <>
        <div className="w-full px-5 m-auto md:w-2xl">
            <h1 className="page-header h-fit m-auto">{t.title}</h1>
            <div className="h-fit m-auto border-b pb-5 pt-5">
                <p>{t.intro1}</p>
                <p className="mt-5">{t.intro2Pre}<span className="font-bold italic">{t.intro2Bold}</span>{t.intro2Post}<a href="https://tradulio.com">tradulio.com</a></p>
            </div>
            <div className="relative h-fit m-auto flex pt-5 mb-10">
                <div className="flex-1 mr-10 border-r">
                    <div>
                        <h2 className="title-header h-fit text-xl mb-10">{t.jakesOnMain}</h2>
                        <div className="w-full mb-2 ml-2"><a href={`/${lang}/jakes-bistro/menus/main/lunch`} target="_blank">{t.lunch}</a></div>
                        <div className="w-full mb-2 ml-2"><a href={`/${lang}/jakes-bistro/menus/main/dinner`} target="_blank">{t.dinner}</a></div>
                        <div className="w-full mb-2 ml-2"><a href={`/${lang}/jakes-bistro/menus/drinks`} target="_blank">{t.drinks}</a></div>
                        <div className="w-full mb-2 ml-2"><a href={`/${lang}/jakes-bistro/menus/main/brunch`} target="_blank">{t.sundayBrunch}</a></div>
                    </div>
                </div>
                <div className="flex-1 md:ml-10">
                    <div>
                        <h2 className="title-header h-fit text-xl mb-10">{t.jakesDowntown}</h2>
                        <div className="w-full mb-2 ml-2"><a href={`/${lang}/jakes-bistro/menus/downtown/lunch`} target="_blank">{t.lunch}</a></div>
                        <div className="w-full mb-2 ml-2"><a href={`/${lang}/jakes-bistro/menus/downtown/dinner`} target="_blank">{t.dinner}</a></div>
                        <div className="w-full mb-2 ml-2"><a href={`/${lang}/jakes-bistro/menus/drinks`} target="_blank">{t.drinks}</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-img-holder h-auto mx-auto max-w-[1200px]">
            <Image className="menu-img absolute" src="/jakes-bistro/jakes-menus.png" height={1000} width={1000} alt={t.imageAlt}/>
        </div>
        </>
    );
}
