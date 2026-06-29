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
  title: "Charchar Webworks",
  description: "Modern sites for small business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <CookieConsentProvider>
        <body>
          <div className="navbar">
            <div className="absolute left-15 top-10 h-30 w-20">
              <Link href="/yardsdale-plumbing-co">
                <Image src="/plumb-monogram.png" alt="Yardsdale Plumbing Company" fill sizes="auto auto" loading='eager' />
              </Link>
            </div>

            <div className="invisible md:visible absolute left-1/2 -translate-x-1/2 top-2/5 -translate-y-1/2 flex h-10 justify-center items-center w-[340px]">
              <Link href="/yardsdale-plumbing-co">
                <Image src="/plumb-wordmark.png" alt="Yardsdale Plumbing Company" fill sizes="auto auto" loading='eager' />
              </Link>
            </div>
            <div className="invisible md:visible">
              <HorizontalNavMenu links={[
                { label: 'Our Story', href: '/yardsdale-plumbing-co/our-story' },
                { label: 'Our Services', href: '/yardsdale-plumbing-co/services' },
                { label: 'Contact Us', href: '/yardsdale-plumbing-co/contact' },
              ]} />
            </div>
            <div className="float-right mt-20 mr-10 md:hidden">
              <NavMenu hamburgerDarkSrc="/hamburger-menu.svg" links = {[
              { label: 'Our Story', href: '/yardsdale-plumbing-co/our-story' },
                { label: 'Our Services', href: '/yardsdale-plumbing-co/services' },
                { label: 'Contact Us', href: '/yardsdale-plumbing-co/contact' },
              ]} />
            </div>
          </div>
          {children}
          <footer className="footer" >
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
