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
  title: "Terms of Service | Travel America",
  description: "Travel America’s Terms: Site usage, U.S. jurisdiction, third‑party duties & user conduct. Protecting content, limiting liability & ensuring compliance.",  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms and Conditions",
  "url": "https://www.travelamerica.work/terms",
  "description": "Terms and Conditions for using Travel America, outlining rules, disclaimers, and user responsibilities.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Travel America",
    "url": "https://www.travelamerica.work",
    "logo": "https://www.travelamerica.work/_next/image?url=%2Fdata%2Flogo3.png&w=3840&q=75",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@travelamerica.work"
    }
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "Travel America",
    "url": "https://www.travelamerica.work"
  }
};

  return (
    <html lang="en">
      <head>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
