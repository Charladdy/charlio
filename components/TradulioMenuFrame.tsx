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
    children: React.ReactNode;
}

export default function TradulioMenuFrame({ lang, dict, tradulioUrl, children }: TradulioMenuFrameProps) {
    useEffect(() => {
        if (lang !== ORIGINAL_LANGUAGE && TRANSLATED_LANGUAGES.includes(lang)) {
            window.location.href = tradulioUrl;
        }
    }, [lang, tradulioUrl]);

    return(
        <>
            <div className="fixed bottom-45 right-[12vw] flex">
                <div className="mt-2 text-gray-500 text-lg border-2 rounded-xl bg-white align-middle h-fit p-2 pr-8">{dict.seeItInTradulio}</div>
                <a href={tradulioUrl}>
                <div className="absolute w-16 ml-[-15%]">
                    <Image src="/animations/tradulio_button.gif" height={150} width={150} alt={dict.openInTradulio}/>
                </div>
                </a>
            </div>
            {children}
        </>
    )
}
