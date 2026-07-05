import Image from 'next/image'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import './page-styles.css'

export default async function Page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.jakesBistro.home;

    return(
        <div className="hero-div">
            <div className="formula-div">
                <Image className="splash-image" src="/jakes-bistro/jakes-bistro-splash.png" width={2000} height={2000} alt={t.splashAlt}/>
                <h1 className="hero-copy">{t.heroHeading}</h1>
            </div>
            <div className ="ingredients-div">
                <Image className="ingredients-img" src="/jakes-bistro/ingredients.png" width={2000} height={2000} alt={t.ingredientsAlt}/>
                <h2 className="ingredients-copy">{t.ingredientsCaption}</h2>
            </div>
            <div className ="cooking-div">
                <Image className="cooking-img" src="/jakes-bistro/pan_searing.png" width={2000} height={2000} alt={t.cookingAlt}/>
                <h2 className="cooking-copy">{t.cookingCaption}</h2>
            </div>
            <div className="copy-div"><p className="m-auto w-[90%] md:w-sm mb-5">{t.para1}</p>
                <p className="m-auto w-[90%] md:w-sm mb-5">{t.para2Pre}<a href="https://tradulio.com" target="_blank">{t.tradulioLink}</a>{t.para2Post}</p>
                <p className="m-auto w-[90%] md:w-sm mb-5">{t.para3Pre}<a href={`/${lang}/contact`} target="_blank">{t.reachOutLink}</a>{t.para3Post}</p>
            </div>
        </div>
    );
}
