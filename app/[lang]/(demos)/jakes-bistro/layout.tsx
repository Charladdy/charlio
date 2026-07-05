import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HorizontalNavMenu from "@/components/HorizontalNavMenu";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import { resolveLangParam } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/getDictionary";
import "./globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = await getDictionary(lang);
  return {
    title: dict.jakesBistro.meta.title,
    description: dict.jakesBistro.meta.description,
  };
}

export default async function JakesBistroLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = await getDictionary(lang);
  const nav = [
    { label: dict.jakesBistro.nav.locations, href: `/${lang}/jakes-bistro/locations` },
    { label: dict.jakesBistro.nav.foodDrink, href: `/${lang}/jakes-bistro/menus` },
    { label: dict.jakesBistro.nav.events, href: `/${lang}/jakes-bistro/events` },
  ];

  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/mxp6lef.css" />
      <div className="navbar">
        <div className="fixed left-15 top-10 h-40 w-auto">
          <Link href={`/${lang}/jakes-bistro`}>
             <Image src="/jakes-bistro/JakesBistro.png" alt="Jake's Bistro" height={200} width={200} loading='eager' />
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-2/5 -translate-y-1/2 flex h-10 justify-center items-center w-[340px] pointer-events-none">
        </div>
        <div className="invisible md:visible">
          <HorizontalNavMenu links={nav} bottomLoc={15} />
        </div>
        <div className="float-right mt-20 mr-10 md:hidden">
          <NavMenu hamburgerDarkSrc="/hamburger-menu.svg" links={nav} />
        </div>
      </div>
      <div className="page-content">
        {children}
      </div>
      <Footer lang={lang} dict={dict.common.footer} switcherDict={dict.common.languageSwitcher} wrapperClassName="footy" />
    </>
  );
}
