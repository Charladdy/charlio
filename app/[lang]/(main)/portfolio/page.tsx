import Image from "next/image"
import type {Metadata} from 'next'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.main.portfolio.metaTitle };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.main.portfolio;

    return(
        <div className="page-content">
            <h1 className="text-3xl">{t.title}</h1>
            <p>{t.intro}</p>
            <h2 className="text-2xl mb-5">{t.demoSitesHeading}</h2>
            <div className="md:flex">
                <div className="flex-1 pl-5 md:pr-5 md:pl-0  border-b md:border-r md:border-b-0">
                    <div className="h-35 mb-5 dark:mb-15">
                        <a href={`/${lang}/jakes-bistro`} target="_blank"><Image className="absolute p-5 w-75 hover:w-78 dark:bg-gray-200 dark: rounded-lg" src="/jakes-bistro/JakesBistro.png" width={300} height={300} alt={t.jakesBistroAlt}/></a>
                    </div>
                    <p>{t.jakesBistroDesc}</p>
                </div>
                <div className="flex-1 pl-5">
                    <div className="h-48 mb-5 dark:my-10">
                        <a href={`/${lang}/yardsdale-plumbing-co`} target="_blank"><Image className="absolute p-5 w-75 hover:w-78 dark:bg-gray-200 dark: rounded-lg" src="/plumb-logo3.png" width={250} height={250} alt={t.yardsdaleAlt}/></a>
                    </div>
                    <p>{t.yardsdaleDesc}</p>
                </div>
            </div>
            <h2 className="text-2xl mb-5">{t.existingProjectsHeading}</h2>
            <div className="md:flex">
                <div className="flex-1 pl-5 md:pr-5 md:pl-0 border-b md:border-r md:border-b-0">
                    <div className="h-30 mb-5">
                        <a href="https://tradulio.com" target="_blank"><Image className="absolute p-5 w-75 hover:w-78"src="/tradulio wordmark dark.png" width={300} height={300} alt={t.tradulioAlt}/></a>
                    </div>
                    <p>{t.tradulioDesc}</p>
                </div>
                <div className="flex-1 pl-5 border-b md:border-b-0">
                    <div className="h-38 mb-5 dark:my-10">
                        <a href="https://charladdy.com"><Image className="absolute p-5 w-75 hover:w-78 dark:bg-gray-200 dark: rounded-lg" src="/Charladdy_Wordmark_Green.png" width={250} height={250} alt={t.charladdyAlt}/></a>
                    </div>
                    <p>{t.charladdyDesc}</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="flex-1 pl-5 md:pr-5 md:pl-0 pt-8 border-b md:border-r md:border-b-0">
                    <div className="h-16 mb-5">
                        <a href="https://mathematika.io"><Image className="absolute p-5 w-75 hover:w-78 dark:bg-gray-200 dark: rounded-lg" src="/mathematika_wordmark.png" width={250} height={250} alt={t.mathematikaAlt}/></a>
                    </div>
                    <p>{t.mathematikaDesc}</p>
                </div>
                <div className="flex-1 pl-5 pt-8">
                    <div className="h-16 mb-5">
                        <a href="https://vocabulizer.io"><Image className="absolute p-5 w-75 hover:w-78 dark:bg-gray-200 dark: rounded-lg" src="/vocabulizer_wordmark.png" width={250} height={250} alt={t.vocabulizerAlt}/></a>
                    </div>
                    <p>{t.vocabulizerDesc}</p>
                </div>
            </div>
        </div>
    )
}
