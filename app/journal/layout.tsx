import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsGate from "@/components/AnalyticsGate";
import { CookieConsentProvider } from "@/components/CookieConsentContext";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { SITE_URL, siteOpenGraph } from "@/lib/seo";
import "../[lang]/(main)/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// The Journal is Sanity-authored and English-only for now (the `post` schema
// has no locale field), so unlike the rest of the site it lives outside
// /[lang] as its own root layout rather than duplicating content across
// /en/journal and /es/journal.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { template: "%s — Charlio Webworks", default: "Journal — Charlio Webworks" },
  openGraph: siteOpenGraph("en"),
};

export default async function JournalLayout({ children }: { children: React.ReactNode }) {
  const dict = await getDictionary("en");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Charlio Webworks",
    url: "https://www.charl.io",
    logo: "https://www.charl.io/charlio-wordmark.svg",
    description: dict.main.jsonLdDescription,
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <CookieConsentProvider>
        <body>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
          />
          <div className="navbar">
            <NavMenu links={[
              { label: dict.main.nav.ourApproach, href: "/en/our-approach" },
              { label: dict.main.nav.ourServices, href: "/en/services" },
              { label: dict.main.nav.portfolio, href: "/en/portfolio" },
              { label: dict.main.nav.pricing, href: "/en/pricing" },
              { label: dict.main.nav.journal, href: "/journal" },
              { label: dict.main.nav.contactUs, href: "/en/contact" },
            ]} />
            <Link href="/en" className="navbar-logo-wrapper">
              <Image className="dark:invisible" src="/charlio-wordmark.svg" alt="Charlio Webworks" fill sizes="auto auto" loading="eager" style={{ objectFit: "contain" }} />
              <Image className="invisible dark:visible" src="/charlio-wordmark-dark.svg" alt="Charlio Webworks" fill sizes="auto auto" loading="eager" style={{ objectFit: "contain" }} />
            </Link>
          </div>
          {children}
          <Footer lang="en" dict={dict.common.footer} switcherDict={dict.common.languageSwitcher} hideLanguageSwitcher />
          <CookieBanner lang="en" dict={dict.common.cookieBanner} />
          <AnalyticsGate gaId="G-KER22S4FPX" />
        </body>
      </CookieConsentProvider>
    </html>
  );
}
