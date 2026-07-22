import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import CartIcon from "@/components/jakes-cakes/CartIcon";
import { CartProvider } from "@/components/jakes-cakes/CartContext";
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
    title: dict.jakesCakes.meta.title,
    description: dict.jakesCakes.meta.description,
  };
}

export default async function JakesCakesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = await getDictionary(lang);
  const nav = [
    { label: dict.jakesCakes.nav.shop, href: `/${lang}/jakes-cakes/shop` },
    { label: dict.jakesCakes.nav.aboutUs, href: `/${lang}/jakes-cakes/about-us` },
    { label: dict.jakesCakes.nav.contact, href: `/${lang}/jakes-cakes/contact` },
  ];

  return (
    <CartProvider>
      <link rel="stylesheet" href="https://use.typekit.net/wjs5qfu.css"/>
      <link rel="stylesheet" href="https://use.typekit.net/wjs5qfu.css"/>
      <div className="navbar">
        <div className="fixed left-5 top-5 h-20 w-auto">
          <Link href={`/${lang}/jakes-cakes`}>
             <Image className="h-[120%]" src="/jakes-cakes/jakes_cakes_logo.svg" alt="Jake's Cakes" height={200} width={200} loading='eager' />
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-2/5 -translate-y-1/2 flex h-10 justify-center items-center w-[340px] pointer-events-none">
        </div>
        <div className="float-right mr-15 mt-10 z-20 w-10">
          <NavMenu links={nav} hamburgerSrc="/jakes-cakes/hamburger.svg" hamburgerDarkSrc="/jakes-cakes/hamburger.svg"/>
        </div>
        <CartIcon href={`/${lang}/jakes-cakes/cart`} alt={dict.jakesCakes.nav.cartAlt} />
      </div>
      <div className="page-content">
        {children}
      </div>
      <Footer lang={lang} dict={dict.common.footer} switcherDict={dict.common.languageSwitcher} wrapperClassName="footy text-[var(--cream)] font-['Inter-Variable']" />
    </CartProvider>
  );
}