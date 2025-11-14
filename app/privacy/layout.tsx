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
  title: "Privacy Policy | Travel America",
  description: "Learn how Travel America collects, uses, and protects your personal information. Our Privacy Policy explains data handling, cookies, third‑party services, and your rights as a user.",
  
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
