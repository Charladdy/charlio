'use client';

import { useEffect } from 'react';

export default function page(){

    const ORIGINAL_LANGUAGE = 'en';
    const TRANSLATED_LANGUAGES = ['es'];
    const MENU_URL = "https://www.tradulio.com/menu/Jake's%20Bistro/jakes-downtown-lunch-17";

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
            <iframe
                className="w-full h-full"
                src="/jakes-bistro/menus/jakes_downtown_lunch.pdf#toolbar=0"
            />
        </div>
    )
}