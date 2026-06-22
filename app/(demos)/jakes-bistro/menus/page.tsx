import Image from 'next/image'
import './page-styles.css'

export default function Page(){
    return(
        <>
        <div className="w-full px-5 m-auto md:w-2xl">
            <h1 className="page-header h-fit m-auto">Food + Drink</h1>
            <div className="h-fit m-auto border-b pb-5 pt-5">
                <p>Each of the menus on this page is enhanced by Tradulio, 
                    a platform by Charladdy Interactive that can make your menu available in 
                    up to 20 languages. Your international customers can view your menu in their language,
                    select their items, and then show your service staff their order in your own language.</p>
                <p className="mt-5">Tradulio makes ordering easier for your international customers,
                    increasing table turnover and reducing mistakes. <span className="font-bold italic">Get $50 USD credit 
                    toward a Tradulio subscription when you hire Charladdy to build your website.</span> Learn more at <a href="https://tradulio.com">tradulio.com</a></p>
            </div>
            <div className="relative h-fit m-auto flex pt-5 mb-10">
                <div className="flex-1 mr-10 border-r">
                    <div>
                        <h2 className="title-header h-fit text-xl mb-10">Jake's on Main</h2>                            
                        <div className="w-full mb-2 ml-2"><a href="/jakes-bistro/menus/main/lunch" target="_blank">Lunch</a></div>
                        <div className="w-full mb-2 ml-2"><a href="/jakes-bistro/menus/main/dinner" target="_blank">Dinner</a></div>
                        <div className="w-full mb-2 ml-2"><a href="/jakes-bistro/menus/drinks" target="_blank">Drinks</a></div>
                        <div className="w-full mb-2 ml-2"><a href="/jakes-bistro/menus/main/brunch" target="_blank">Sunday Brunch</a></div>
                    </div>
                </div>
                <div className="flex-1 md:ml-10">
                    <div>
                        <h2 className="title-header h-fit text-xl mb-10">Jake's Downtown</h2>                            
                        <div className="w-full mb-2 ml-2"><a href="/jakes-bistro/menus/downtown/lunch" target="_blank">Lunch</a></div>
                        <div className="w-full mb-2 ml-2"><a href="/jakes-bistro/menus/downtown/dinner" target="_blank">Dinner</a></div>
                        <div className="w-full mb-2 ml-2"><a href="/jakes-bistro/menus/drinks" target="_blank">Drinks</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-img-holder h-auto mx-auto max-w-[1200px]">
            <Image className="menu-img absolute" src="/jakes-bistro/jakes-menus.png" height={1000} width={1000} alt="Dinner at Jake's"/>
        </div>
        </>
    );
}