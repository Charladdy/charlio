import './page-styles.css'
import type { Metadata } from 'next'
import OurApproachFlowchart from '@/components/OurApproachFlowchart'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    return { title: dict.main.ourApproach.title };
}

export default async function page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.main.ourApproach;

    return(
        <>
            <div className='hor-gfx-mask'/>
            <div className='vert-gfx-div'/>
            <div className='hor-gfx-div'/>
            <div className='page-content'>
                <h1>{t.title}</h1>
                <p>{t.intro1}</p>
                <p>{t.intro2}</p>
                <OurApproachFlowchart dict={t.flowchart} />
                        <p>{t.outro1}</p>
                        <p>{t.outro2}</p>
                        <p>{t.outro3}</p>
            </div>
        </>
    )
}
