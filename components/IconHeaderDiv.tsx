import Image from 'next/image'
import { ReactNode } from 'react';

interface ElProps{
    iconSrcStr: string;
    iconWidth: number;
    iconHeight: number;
    iconAltTxt: string;
    headerStr: string;
    children: ReactNode
    iconDarkSrcStr: string;
}

export default function IconHeaderDiv({iconSrcStr, iconWidth, iconHeight, iconAltTxt, headerStr, children, iconDarkSrcStr}: ElProps){
    return(
        <div className="w-[90%] md:w-1/2 mx-auto py-5">
            <div className="flex items-center gap-8">
                <Image className="block dark:hidden" src={iconSrcStr} width={iconWidth} height={iconHeight} alt={iconAltTxt}></Image>
                <Image className="hidden dark:visible dark:block" src={iconDarkSrcStr} width={iconWidth} height={iconHeight} alt={iconAltTxt}></Image>
                <h1>{headerStr}</h1>
            </div>
            {children}
        </div>
    )
}