import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
export const metadata: Metadata = {
  // metadataBase makes relative URLs in openGraph/twitter image fields resolve
  // against the production origin, and silences the Next "metadataBase not set"
  // build warning. Used as the base for any non-absolute metadata URL.
  metadataBase: new URL("https://www.travelsamericas.com"),
  title: {
    default: "Travels Americas | Discover Iconic Cities to Visit",
    template: "%s", // allows page.tsx to inject its own title
  },
  description: "Discover carefully selected city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions with insider insights",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Montserrat is the site's primary UI/body typeface. It's a variable font on
// Google Fonts, so next/font self-hosts every weight automatically (no CDN
// dependency, no layout shift). Exposed as --font-montserrat and consumed in
// globals.css.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
        <Script strategy="afterInteractive"  src="https://www.googletagmanager.com/gtag/js?id=G-SM7NC16K21"/>
        <Script id="ga-script"  strategy="afterInteractive"  dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SM7NC16K21');`}}/>
        {/* Travelpayouts (Drive) verification/tracking loader — site-wide.
            beforeInteractive so Next renders it into the initial <head> HTML,
            which is what the Travelpayouts verifier looks for. */}
        <Script id="travelpayouts" strategy="beforeInteractive" src="https://emrldtp.com/NTMzNjY5.js?t=533669"/>
        <div className="full-height">
        {children}
        </div>
      </body>
    </html>
  );
}
