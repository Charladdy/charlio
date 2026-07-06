import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsGate from "@/components/AnalyticsGate";
import { CookieConsentProvider } from "@/components/CookieConsentContext";
import { locales, resolveLangParam, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { SITE_URL, siteOpenGraph } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang: Locale = await resolveLangParam(params);
  return {
    metadataBase: new URL(SITE_URL),
    title: "Charlio Webworks",
    description: "Modern sites for small business",
    openGraph: siteOpenGraph(lang),
    other: process.env.NEXT_PUBLIC_FB_APP_ID
      ? { "fb:app_id": process.env.NEXT_PUBLIC_FB_APP_ID }
      : undefined,
  };
}

export const dynamicParams = false;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <CookieConsentProvider>
        <body>
          {children}
          <CookieBanner lang={lang} dict={dict.common.cookieBanner} />
          <AnalyticsGate gaId="G-KER22S4FPX" />
        </body>
      </CookieConsentProvider>
    </html>
  );
}
