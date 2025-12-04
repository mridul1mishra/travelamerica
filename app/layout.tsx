import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
export const metadata: Metadata = {
  title: {
    default: "Travel Americas | Discover Iconic Cities to Visit",
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script strategy="afterInteractive"  src="https://www.googletagmanager.com/gtag/js?id=G-SM7NC16K21"/>
        <Script id="ga-script"  strategy="afterInteractive"  dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SM7NC16K21');`}}/>
        <div className="full-height">
        {children}
        </div>
      </body>
    </html>
  );
}
