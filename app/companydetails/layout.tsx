import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Script from 'next/script';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel America | Explore USA Destinations, Attractions & Travel Guidess",
  description: "Discover the beauty, culture, and adventure of the United States with Travel America. Get accurate, user‑friendly guides to cities, attractions, accommodations, and experiences across the USA—making every trip smooth, memorable, and exciting",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Script strategy="afterInteractive"  src="https://www.googletagmanager.com/gtag/js?id=G-SM7NC16K21"/>
<Script  id="ga-script"  strategy="afterInteractive"  dangerouslySetInnerHTML={{
    __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SM7NC16K21');`}}/>
        {children}
      </body>
    </html>
  );
}
