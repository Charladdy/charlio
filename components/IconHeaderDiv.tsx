import Image from 'next/image'
import { ReactNode } from 'react';

interface ElProps{
    iconSrcStr: string;
    iconWidth: number;
    iconHeight: number;
    iconAltTxt: string;
    headerStr: string;
    children: ReactNode
}

export default function IconHeaderDiv({iconSrcStr, iconWidth, iconHeight, iconAltTxt, headerStr, children}: ElProps){
    return(
        <div className="w-1/2 mx-auto py-5">
            <div className="flex items-center gap-8">
                <Image src={iconSrcStr} width={iconWidth} height={iconHeight} alt={iconAltTxt}></Image>
                <h1>{headerStr}</h1>
            </div>
            {children}
        </div>
    )
}