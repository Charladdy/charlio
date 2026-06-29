import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import HorizontalNavMenu from "@/components/HorizontalNavMenu";
import NavMenu from "@/components/NavMenu";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsGate from "@/components/AnalyticsGate";
import { CookieConsentProvider } from "@/components/CookieConsentContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jake's Bistro",
  description: "Modern sites for small business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mxp6lef.css" />
      </head>
      <CookieConsentProvider>
        <body>
          <div className="navbar">
            <div className="fixed left-15 top-10 h-40 w-auto">
              <Link href="/jakes-bistro">
                 <Image src="/jakes-bistro/JakesBistro.png" alt="Jake's Bistro" height={200} width={200} loading='eager' />
              </Link>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 top-2/5 -translate-y-1/2 flex h-10 justify-center items-center w-[340px] pointer-events-none">
            </div>
            <div className="invisible md:visible">
              <HorizontalNavMenu links={[
                { label: 'Locations', href: '/jakes-bistro/locations' },
                { label: 'Food + Drink', href: '/jakes-bistro/menus' },
                { label: 'Events', href: '/jakes-bistro/events' },
              ]} bottomLoc={15} />
            </div>
            <div className="float-right mt-20 mr-10 md:hidden">
              <NavMenu hamburgerDarkSrc="/hamburger-menu.svg" links = {[
                { label: 'Locations', href: '/jakes-bistro/locations' },
                { label: 'Food + Drink', href: '/jakes-bistro/menus' },
                { label: 'Events', href: '/jakes-bistro/events' },
              ]} />
            </div>
          </div>
          <div className="page-content">
            {children}
          </div>
          <footer className="footy">
            <p>Copyright &copy;{new Date().getFullYear()} Charladdy Interactive. All rights reserved.</p>
            <div className="absolute flex right w-[80%] md:w-[50%] right-5 bottom-4 md:top-8 md:bottom-auto">
              <div className="text-white underline border-r hover:font-semibold flex-1 text-center"><a href="/cookies" target="_blank">Cookies</a></div>
              <div className="text-white underline border-r hover:font-semibold flex-1 text-center"><a href="https://charladdy.com/tos" target="_blank">Terms of Service</a></div>
              <div className="text-white underline hover:font-semibold flex-1 text-center"><a href="https://charladdy.com/privacy" target="_blank">Privacy</a></div>
            </div>
          </footer>
          <CookieBanner />
          </body>
          <AnalyticsGate gaId="G-KER22S4FPX" />
      </CookieConsentProvider>
    </html>
  );
}
