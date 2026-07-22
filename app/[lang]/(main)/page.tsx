import FillDiv from "@/components/FillDiv";
import HeroText from "@/components/HeroText";
import Image from "next/image";
import { resolveLangParam } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/getDictionary";
import './page-styles.css'

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await resolveLangParam(params);
  const dict = await getDictionary(lang);
  const t = dict.main.home;

  return (
    <main>
      <div className="hero-div">
        <FillDiv/>
        <HeroText dict={dict.main.heroText} />
        <Image className="hero-footer dark:invisible" src="/hero_border.png" width={1000} height={1000} alt="hero footer"/>
        <Image className="hero-footer invisible dark:visible" src="/hero_border_dark.png" width={1000} height={1000} alt="hero footer"/>
      </div>
      <div className="relative m-auto mb-10 w-[100%] sm:w-150 h-fit bg-black">
        <video controls width="100%" height="auto" autoPlay muted playsInline>
          <source src={`/video/intro_${lang}.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="m-auto min-h-[30dvh] w-[90%] md:w-120">
        <h1>{t.heading1}</h1>
        <p><Image className="block float-left w-[45%] mr-5" src="/responsive_desktop.svg" height={100} width={100} alt="Responsive desktop" />
          {t.body1}</p>
      </div>
      <div className="m-auto mb-20 min-h-[30dvh] w-[90%] md:w-120">
        <h1 className="w-[100%] mt-5">{t.heading2}</h1>
        <p><Image className="float-right w-[30%] mr-5" src="/responsive_mobile.svg" height={100} width={100} alt="Responsive desktop" />
          {t.body2Pre}<a className="copy-link" href={`/${lang}/services`}>{t.servicesLink}</a>{t.body2Mid}<a className="copy-link" href={`/${lang}/pricing`}>{t.pricingLink}</a>{t.body2Post}</p>
        </div>
    </main>
  );
}
