import type { Metadata } from "next";

// Child layouts in the App Router MUST NOT render <html> or <body>; that is
// the exclusive job of the root layout (app/layout.tsx). This used to render
// its own <html>/<body> AND re-emit the GA script, which double-fired pageviews
// on /companydetails. The AboutPage schema previously injected here has been
// moved into page.tsx where it belongs.
export const metadata: Metadata = {
  title: "Travels Americas | USA Destinations, Attractions & Guides",
  description:
    "Discover USA with Travels Americas: Beauty, culture & adventure. Guides to cities, attractions, stays & experiences for smooth, memorable trips.",
};

export default function CompanyDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
