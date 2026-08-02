import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import { resolveLangParam } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageOpenGraph } from "@/lib/seo";
import "./globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = await getDictionary(lang);
  return {
    title: dict.main.meta.title,
    description: dict.main.meta.description,
    openGraph: pageOpenGraph(lang, ''),
  };
}

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = await getDictionary(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Charlio Webworks',
    url: 'https://www.charl.io',
    logo: 'https://www.charl.io/charlio-wordmark.svg',
    description: dict.main.jsonLdDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <div className="navbar">
        <NavMenu links={[
          { label: dict.main.nav.ourApproach, href: `/${lang}/our-approach` },
          { label: dict.main.nav.ourServices, href: `/${lang}/services` },
          { label: dict.main.nav.portfolio, href: `/${lang}/portfolio` },
          { label: dict.main.nav.pricing, href: `/${lang}/pricing` },
          { label: dict.main.nav.contactUs, href: `/${lang}/contact` },
        ]} />
        <Link href={`/${lang}`} className="navbar-logo-wrapper">
          <Image className="dark:invisible" src="/charlio-wordmark.svg" alt="Charlio Webworks" fill sizes="auto auto" loading='eager' style={{ objectFit: "contain"}} />
          <Image className="invisible dark:visible" src="/charlio-wordmark-dark.svg" alt="Charlio Webworks" fill sizes="auto auto" loading='eager' style={{ objectFit: "contain"}} />
        </Link>
      </div>
      {children}
      <Footer lang={lang} dict={dict.common.footer} switcherDict={dict.common.languageSwitcher} />
    </>
  );
}
