import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.travelamerica.work/travel",
      "url": "https://www.travelamerica.work/travel",
      "name": "Travel Hub",
      "description": "Your ultimate travel hub with guides, itineraries, landmarks, food, and safety tips for major cities.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://www.travelamerica.work/#organization"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.travelamerica.work/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Travel Hub",
            "item": "https://www.travelamerica.work/travel"
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.travelamerica.work/#organization",
      "name": "Travel America",
      "url": "https://www.travelamerica.work",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.example.com/logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-737-278-6292",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": ["en"]
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Travel Americas | Discover Iconic Cities to Visit",
  description: "Discover carefully selected city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions with insider insights.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="font" href="/data/corben-cdnfonts/Corben-Bold.woff2" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="/data/logo3.png" type="image/png"/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      </head>
      
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
