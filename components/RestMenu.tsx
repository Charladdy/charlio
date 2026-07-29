'use client'

import Image from 'next/image'

interface HeaderProps{
    locationName: string;
    menuName: string;
    serviceTimeString: string;
}

interface SectionProps{
    sectionName: string;
    sectionDesc: string | undefined;
}

interface ItemProps{
    name: string;
    price: string;
    desc: string | undefined;    
}

export default function RestMenuHeader({locationName, menuName, serviceTimeString}:HeaderProps){
    return(
        <div className="w-full h-fit p-2 pt-8">
            <div className="border-b-4 font-bold text-lg text-[var(--hunter-green)] text-center pb-2">{locationName} &#9679; {menuName}</div>
            <div className="text-[var(--slate)] italic text-center my-4">{serviceTimeString}</div>
        </div>
    );
}

export function RestMenuSection({sectionName, sectionDesc}:SectionProps){
    return(
        <div className="w-full h-fit p-2">            
            <div className="border-b-2 text-xl text-[var(--hunter-green)] pb-1">{sectionName}</div>
            {sectionDesc && <div className="text-[var(--slate)] italic my-2">{sectionDesc}</div>}
        </div>
    );
}

export function RestMenuItem({name, price, desc}:ItemProps){
    return(
        <div className="w-full h-fit py-2 px-5">            
            <div className="flex w-full">
                <div className="flex-3 text-lg font-bold text-[var(--charcoal)] text-left">{name}</div>
                <div className="flex-1 text-lg font-semibold text-[var(--hunter-green)] text-right">{price}</div>
            </div>
            {desc && <div className="text-md text-[var(--charcoal)] my-2">{desc}</div>}
        </div>
    );
}