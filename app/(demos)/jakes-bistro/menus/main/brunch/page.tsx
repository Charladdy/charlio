'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function page(){

    const ORIGINAL_LANGUAGE = 'en';
    const TRANSLATED_LANGUAGES = ['es'];
    const MENU_URL = "https://www.tradulio.com/menu/Jake's%20Bistro/jakes-on-main-brunch-18";

    useEffect(() => {
        const browserLanguages = navigator.languages?.length
        ? navigator.languages
        : [navigator.language];

        for (const browserLang of browserLanguages) {
        const lang = (browserLang || '').slice(0, 2).toLowerCase();
        if (lang === ORIGINAL_LANGUAGE) break;
        if (TRANSLATED_LANGUAGES.includes(lang)) {
            window.location.href = MENU_URL;
            break;
        }
        }
    }, []);
    return(
        <div className="w-full h-[90vh]">
            <div className="fixed top-60 right-[10vw] flex">
                <div className="mt-5 text-gray-500 text-2xl border-2 rounded-xl bg-white align-middle h-fit p-2 pr-10">See it in Tradulio</div>
                <a href="https://www.tradulio.com/menu/Jake's%20Bistro/jakes-on-main-brunch-18">
                <div className="absolute w-20 ml-[-15%]">
                    <Image src="/animations/tradulio_button.gif" height={150} width={150} alt="Open in Tradulio"/>
                </div>
                </a>
            </div>              
            <iframe
                className="w-full h-full"
                src="/jakes-bistro/menus/jakes_on_main_brunch.pdf#toolbar=0"
            />
        </div>
    )
}