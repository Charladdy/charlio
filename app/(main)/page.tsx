import FillDiv from "@/components/FillDiv";
import HeroText from "@/components/HeroText";
import Image from "next/image";
import './page-styles.css'

export default function Home() {
  return (
    <main>
      <div className="hero-div">
        <FillDiv/>
        <HeroText />
        <Image className="hero-footer dark:invisible" src="/hero_border.png" width={1000} height={1000} alt="hero footer"/>
        <Image className="hero-footer invisible dark:visible" src="/hero_border_dark.png" width={1000} height={1000} alt="hero footer"/>
      </div>      
      <div className="m-auto min-h-[30dvh] w-[90%] md:w-120">
        <h1>Websites That Work as Hard as You Do</h1>
        <p><Image className="block float-left w-[45%] mr-5" src="/responsive_desktop.svg" height={100} width={100} alt="Responsive desktop" />
          Charlio Webworks builds websites that get noticed and turn visitors into customers. We use the latest technology and 
          best practices to help your business stand out — whether you need a clean informational site or a full-featured 
          platform with ecommerce and database integration.</p>
      </div>
      <div className="m-auto mb-20 min-h-[30dvh] w-[90%] md:w-120">
        <h1 className="w-[100%] mt-5">Customizable Pages to Suit Your Needs</h1>
        <p><Image className="float-right w-[30%] mr-5" src="/responsive_mobile.svg" height={100} width={100} alt="Responsive desktop" />
          Choose from a series of packages or a custom solution that fits the specific needs of your business. 
          From local businesses who want to reach more customers in their area to retailers who want to offer their products 
          online using an ecommerce platform, Charlio can help. Explore our <a className="copy-link" href='/services'>services</a> or browse 
          our <a className="copy-link" href='/pricing'>packages and pricing</a>.</p>
        </div>      
    </main>
  );
}
