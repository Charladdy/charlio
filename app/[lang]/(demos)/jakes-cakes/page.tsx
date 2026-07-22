import Image from 'next/image'
import { resolveLangParam } from '@/lib/i18n/locales'
import { getDictionary } from '@/lib/i18n/getDictionary'
import './page-styles.css'

export default async function Page({ params }: { params: Promise<{ lang: string }> }){
    const lang = await resolveLangParam(params);
    const dict = await getDictionary(lang);
    const t = dict.jakesBistro.home;

    return(
        <div className="page-content">
            <div className="hero-div">
                <div className="relative">
                    <Image className="relative w-full overflow-hidden top-[-200px]" src="/jakes-cakes/display_case.png" alt="Display case full of cakes" height={1000} width={1000}/>
                    <Image className="absolute w-full bottom-[200px] dark:invisible" src="/jakes-cakes/hero-border-bottom.svg" alt="Border accent image" height={279} width={1241}/>
                    <Image className="absolute w-full bottom-[200px] invisible dark:visible " src="/jakes-cakes/hero-border-bottom-dark.svg" alt="Border accent image" height={279} width={1242}/>
                    <div className="absolute flex left-0 right-0 bottom-40 w-100 h-fit bg-[var(--blush)] m-auto rounded-xl shadow-xl">
                        <div className="flex-1 p-5 pl-10 text-lg">
                            <p className="m-auto">Our entire bakery.</p>
                            <p className="m-auto">At your fingertips.</p>
                        </div>
                        <div className='flex-1 m-auto'>
                            <a className="bg-[var(--rose)] hover:cursor-pointer px-5 py-2 border-2 border-[var(--grey)] text-[var(--cream)]" href="/jakes-cakes/shop">
                                Shop Now
                            </a>
                        </div>
                    </div>                                                    
                </div>
            </div>
            <div className="relative flex h-fit mt-[calc(var(--navbar-ht)*-2.4)] mb-2">
                <h1 className="relative font-[fraunces-variable] font-black flex-1 text-[var(--burgundy)] text-[6rem] m-auto pl-30"> Simply Sweet.</h1>
                <div className="flex-1 pr-30 m-auto">
                    <p className="mb-5 text-lg">Whether you're celebrating a special event or an ordinary day, looking for a tiered tower or a little slice of heaven, Jake's Cakes has just what you're looking for. Or it would if it existed.</p>
                    <p className="text-lg">The good news is that while Jake's Cakes might not be real, Jake very much is, so take a look through this demo site and reach out to him if you want him to build your online storefront.</p>
                </div>
            </div>
            <div className="divider-div text-[var(--cream)]">
                <Image className="relative left-1/2 -translate-x-1/2 w-[110vw] max-w-[1200px]" src="/jakes-cakes/home-divider.svg" alt="Homepage divider image" height={0} width={0}/>
                <h2 className="absolute font-[fraunces-variable] font-bold flex-1 text-[4rem] right-20 top-30 mt-20 w-120 text-right">
                    &emsp;Cakes for every occasion.</h2>
                <div className="absolute top-110 m-auto">
                    <p className="px-50 text-md font-light">Special events are remembered primarily by sights and sounds. When you choose Jake's Cakes to commemorate your special day, you add unforgettable taste, as well. 
                        Take a look through our ready-made options or contact us for custom cakes to suit your needs.</p>
                    <div className="flex w-[80%] m-auto mt-[5%]">
                        <div className="flex-1 m-5 hover:cursor-pointer hover:scale-105">
                            <a href="/jakes-cakes/shop#wedding-cakes">
                            <Image className="mb-2 border-1 border-[var(--grey)] shadow-md" src="/jakes-cakes/wedding_cake.png" alt="Wedding cake" height={500} width={500}/>
                            <p className="font-[fraunces-variable] font-semibold text-[1.4rem] text-center w-full">Weddings</p>
                            </a>
                        </div>
                        <div className="flex-1 m-5 hover:cursor-pointer hover:scale-105">
                            <a href="/jakes-cakes/shop#bday-cakes">
                            <Image className="mb-2 border-1 border-[var(--grey)] shadow-md" src="/jakes-cakes/bday_cake.png" alt="Birthday cake" height={500} width={500}/>
                            <p className="font-[fraunces-variable] font-semibold text-[1.4rem] text-center w-full">Birthdays</p>
                            </a>
                        </div>
                        <div className="flex-1 m-5 hover:cursor-pointer hover:scale-105">
                            <a href="/jakes-cakes/shop#grad-cakes">
                            <Image className="mb-2 border-1 border-[var(--grey)] shadow-md" src="/jakes-cakes/grad_cake.png" alt="Graduation cake" height={500} width={500}/>
                            <p className="font-[fraunces-variable] font-semibold text-[1.4rem] text-center w-full">Graduations</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="w-100 m-auto mb-4 text-lg">Sign up for our newsletter and be the first to hear about events and special offers.</p>
                <div className="flex w-140 h-fit bg-[var(--blush)] m-auto mb-30 rounded-xl shadow-xl px-8 border-1 border-[var(--grey)]">
                    <div className="p-5 flex-3">
                        <input type="email" placeholder="Please enter your email..." className="bg-white p-2 text-md w-full border-2 border-[var(--grey)] rounded-3xl"/>
                    </div>
                    <div className='flex-1 m-auto'>
                        <a className="bg-[var(--rose)] hover:cursor-pointer px-5 py-2 border-2 border-[var(--grey)] text-[var(--cream)]">
                            Sign Up
                        </a>
                    </div>
                </div>       
            </div>
        </div>
    );
}
