import Image from 'next/image'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import NewsletterSignupDialog from '@/components/jakes-cakes/NewsletterSignupDialog'
import './page-styles.css'

export default async function Page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.jakesCakes.home;

    return(
        <div className="page-content">
            <div className="hero-div">
                <div className="relative">
                    <Image className="relative w-full overflow-hidden top-[-200px]" src="/jakes-cakes/display_case.png" alt={t.displayCaseAlt} height={1000} width={1000}/>
                    <Image className="absolute w-full bottom-[200px] dark:invisible" src="/jakes-cakes/hero-border-bottom.svg" alt={t.borderAlt} height={279} width={1241}/>
                    <Image className="absolute w-full bottom-[200px] invisible dark:visible " src="/jakes-cakes/hero-border-bottom-dark.svg" alt={t.borderAlt} height={279} width={1242}/>
                    <div className="absolute flex left-0 right-0 bottom-40 w-100 h-fit bg-[var(--blush)] m-auto rounded-xl shadow-xl">
                        <div className="flex-1 p-5 pl-10 text-lg">
                            <p className="m-auto">{t.heroLine1}</p>
                            <p className="m-auto">{t.heroLine2}</p>
                        </div>
                        <div className='flex-1 m-auto'>
                            <a className="bg-[var(--rose)] hover:cursor-pointer px-5 py-2 border-2 border-[var(--grey)] text-[var(--cream)]" href={`/${lang}/jakes-cakes/shop`}>
                                {t.shopNow}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex grid grid-cols-1 md:grid-cols-2 h-fit md:mt-[calc(var(--navbar-ht)*-2.4)] md:mb-2">
                <h1 className="relative font-[fraunces-variable] font-black flex-1 text-[var(--burgundy)] text-[12vw] md:text-[6rem] m-auto md:pl-30">{t.heading}</h1>
                <div className="flex-1 lg:pr-30 m-15 lg:m-auto">
                    <p className="mb-5 text-lg">{t.intro1}</p>
                    <p className="text-lg">{t.intro2}</p>
                </div>
            </div>
            <div className="divider-div text-[var(--cream)] mt-[-5vw] lg:mt-auto">
                <Image className="relative left-1/2 -translate-x-1/2 w-[110vw] max-w-[1200px] min-w-[800px]" src="/jakes-cakes/home-divider.svg" alt={t.dividerAlt} height={0} width={0}/>
                <h2 className="absolute font-[fraunces-variable] font-bold flex-1 text-[8vw] md:text-[4rem] right-20 top-30 top-[35vw] sm:top-[22vw] w-[60vw] md:w-120 text-right">
                    &emsp;{t.occasionsHeading}</h2>
                <div className="absolute top-[65vw] sm:top-[46vw] lg:top-110 w-full m-auto">
                    <p className="px-10 lg:px-50 text-md font-light">{t.occasionsBody}</p>
                    <div className="flex w-full lg:w-[80%] m-auto mt-[2vw] lg:mt-[5%]">
                        <div className="flex-1 min-w-0 m-5 hover:cursor-pointer hover:scale-105">
                            <a href={`/${lang}/jakes-cakes/shop#wedding-cakes`}>
                            <Image className="mb-2 border-1 border-[var(--grey)] shadow-md" src="/jakes-cakes/wedding_cake.png" alt={t.weddingAlt} height={500} width={500}/>
                            <p className="font-[fraunces-variable] font-semibold text-[clamp(0.65rem,3vw,1.4rem)] text-center w-full">{t.weddingLabel}</p>
                            </a>
                        </div>
                        <div className="flex-1 min-w-0 m-5 hover:cursor-pointer hover:scale-105">
                            <a href={`/${lang}/jakes-cakes/shop#bday-cakes`}>
                            <Image className="mb-2 border-1 border-[var(--grey)] shadow-md" src="/jakes-cakes/bday_cake.png" alt={t.birthdayAlt} height={500} width={500}/>
                            <p className="font-[fraunces-variable] font-semibold text-[clamp(0.65rem,3vw,1.4rem)] text-center w-full">{t.birthdayLabel}</p>
                            </a>
                        </div>
                        <div className="flex-1 min-w-0 m-5 hover:cursor-pointer hover:scale-105">
                            <a href={`/${lang}/jakes-cakes/shop#grad-cakes`}>
                            <Image className="mb-2 border-1 border-[var(--grey)] shadow-md" src="/jakes-cakes/grad_cake.png" alt={t.graduationAlt} height={500} width={500}/>
                            <p className="font-[fraunces-variable] font-semibold text-[clamp(0.65rem,3vw,1.4rem)] text-center w-full">{t.graduationLabel}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="w-100 m-auto mb-4 text-lg">{t.newsletterIntro}</p>
                <div className="flex w-[80%] lg:w-140 h-fit bg-[var(--blush)] m-auto mb-30 rounded-xl shadow-xl px-4 lg:px-8 border-1 border-[var(--grey)]">
                    <div className="p-2 lg:p-5 flex-3">
                        <input type="email" placeholder={t.emailPlaceholder} className="bg-white p-2 text-md w-full border-2 border-[var(--grey)] rounded-3xl"/>
                    </div>
                    <NewsletterSignupDialog dict={t} />
                </div>
            </div>
        </div>
    );
}
