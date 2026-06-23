import Image from 'next/image'
import './page-styles.css'

export default function Page(){
    return(
        <div className="hero-div">
            <div className="formula-div">
                <Image className="splash-image" src="/jakes-bistro/jakes-bistro-splash.png" width={2000} height={2000} alt="Jakes Bistro splash image"/>
                <h1 className="hero-copy">A Time-Tested Formula</h1>
            </div>
            <div className ="ingredients-div">
                <Image className="ingredients-img" src="/jakes-bistro/ingredients.png" width={2000} height={2000} alt="Fresh ingredients"/>
                <h2 className="ingredients-copy">Fresh ingredients</h2>
            </div>
            <div className ="cooking-div">
                <Image className="cooking-img" src="/jakes-bistro/pan_searing.png" width={2000} height={2000} alt="Pan seared steak"/>
                <h2 className="cooking-copy">Made right</h2>
            </div>
            <div className="copy-div"><p className="m-auto w-[90%] md:w-sm mb-5">Jake's Bistro might not be a real restaurant. Neither of its locations might actually exist. But you know 
                who exists? Jake, the creator of Charlio. Jake's a real guy who can build real websites for your restaurant or other small business.</p>
                <p className="m-auto w-[90%] md:w-sm mb-5">This demo site makes use of a simple contact form for event inquiries, as well as menus that are enhanced by 
                our translation and ordering platform <a href="https://tradulio.com" target="_blank">Tradulio</a>. We can also integrate your site 
                with other third party reservation services you use.</p>
                <p className="m-auto w-[90%] md:w-sm mb-5">Please take a look around and if you would like for Jake to build a site for you please don't hesitate 
                    to <a href="https:charlio.com/contact" target="_blank">reach out</a>.</p>
            </div>
        </div>
    );
}