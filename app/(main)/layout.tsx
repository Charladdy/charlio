import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
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
  title: "Charlio Webworks",
  description: "Modern sites for small business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="navbar">
          <NavMenu links={[
            { label: 'Our Approach', href: '/our-approach' },
            { label: 'Our Services', href: '/services' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Contact Us', href: '/contact' },
          ]} />
          <Link href="/" className="navbar-logo-wrapper">
            <Image src="/charlio wordmark.svg" alt="Charlio Webworks" fill sizes="auto auto" loading='eager' style={{ objectFit: "contain"}} />
          </Link>
        </div>  
        {children}
        <Footer />
        </body>
    </html>
  );
}
