import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsGate from "@/components/AnalyticsGate";
import { CookieConsentProvider } from "@/components/CookieConsentContext";
import { locales, resolveLangParam } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/getDictionary";

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

export const metadata: Metadata = {
  title: "Charlio Webworks",
  description: "Modern sites for small business",
};

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
