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
    title: dict.yardsdale.meta.title,
    description: dict.yardsdale.meta.description,
  };
}

export default async function YardsdaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = await getDictionary(lang);
  const nav = [
    { label: dict.yardsdale.nav.ourStory, href: `/${lang}/yardsdale-plumbing-co/our-story` },
    { label: dict.yardsdale.nav.ourServices, href: `/${lang}/yardsdale-plumbing-co/services` },
    { label: dict.yardsdale.nav.contactUs, href: `/${lang}/yardsdale-plumbing-co/contact` },
  ];

  return (
    <>
      <div className="navbar">
        <div className="absolute left-15 top-10 h-30 w-20">
          <Link href={`/${lang}/yardsdale-plumbing-co`}>
            <Image src="/plumb-monogram.png" alt="Yardsdale Plumbing Company" fill sizes="auto auto" loading='eager' />
          </Link>
        </div>

        <div className="invisible md:visible absolute left-1/2 -translate-x-1/2 top-2/5 -translate-y-1/2 flex h-10 justify-center items-center w-[340px]">
          <Link href={`/${lang}/yardsdale-plumbing-co`}>
            <Image src="/plumb-wordmark.png" alt="Yardsdale Plumbing Company" fill sizes="auto auto" loading='eager' />
          </Link>
        </div>
        <div className="invisible md:visible">
          <HorizontalNavMenu links={nav} />
        </div>
        <div className="float-right mt-20 mr-10 md:hidden">
          <NavMenu hamburgerDarkSrc="/hamburger-menu.svg" links={nav} />
        </div>
      </div>
      {children}
      <Footer lang={lang} dict={dict.common.footer} switcherDict={dict.common.languageSwitcher} wrapperClassName="footer" />
    </>
  );
}
