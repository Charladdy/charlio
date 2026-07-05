'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n/locales';

const ORIGINAL_LANGUAGE: Locale = 'en';
const TRANSLATED_LANGUAGES: Locale[] = ['es'];

interface TradulioMenuFrameDict {
    seeItInTradulio: string;
    openInTradulio: string;
}

interface TradulioMenuFrameProps {
    lang: Locale;
    dict: TradulioMenuFrameDict;
    tradulioUrl: string;
    pdfSrc: string;
}

export default function TradulioMenuFrame({ lang, dict, tradulioUrl, pdfSrc }: TradulioMenuFrameProps) {
    useEffect(() => {
        if (lang !== ORIGINAL_LANGUAGE && TRANSLATED_LANGUAGES.includes(lang)) {
            window.location.href = tradulioUrl;
        }
    }, [lang, tradulioUrl]);

    return(
        <div className="w-full h-[90vh]">
            <div className="fixed top-60 right-[10vw] flex">
                <div className="mt-5 text-gray-500 text-2xl border-2 rounded-xl bg-white align-middle h-fit p-2 pr-10">{dict.seeItInTradulio}</div>
                <a href={tradulioUrl}>
                <div className="absolute w-20 ml-[-15%]">
                    <Image src="/animations/tradulio_button.gif" height={150} width={150} alt={dict.openInTradulio}/>
                </div>
                </a>
            </div>
            <iframe
                className="w-full h-full"
                src={`${pdfSrc}#toolbar=0`}
            />
        </div>
    )
}
