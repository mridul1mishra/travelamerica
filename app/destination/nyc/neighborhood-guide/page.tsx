export const metadata = {
  title: "NYC Neighborhood Guide for Solo Travelers (2026)",
  description:
    "A calm, clarity‑driven neighborhood guide for solo travelers. Understand foot traffic, lighting, transit access, and night‑time comfort across NYC’s major areas.",
  
  alternates: {
    canonical: "https://travelamerica.com/destination/nyc/neighborhood-guide",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },

  openGraph: {
    title: "NYC Neighborhood Guide for Solo Travelers (2026)",
    description:
      "A calm, practical NYC neighborhood guide built for solo travelers. Compare areas by comfort, foot traffic, lighting, transit access, and night‑time predictability.",
    url: "https://www.travelamerica.com/destination/nyc/neighborhood-guide",
    siteName: "Travel America",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://www.travelamerica.com/images/nyc-neighborhood-guide-og.png",
        width: 1200,
        height: 630,
        alt: "NYC Neighborhood Guide for Solo Travelers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NYC Neighborhood Guide for Solo Travelers (2026)",
    description:
      "A calm, scenario‑aware NYC neighborhood guide for solo travelers. Learn which areas feel most predictable and how they change from day to night.",
    images: ["https://www.travelamerica.com/images/nyc-neighborhood-guide-og.png"],
  },
};


import NeighborhoodguideClient from "./neighborhoodguide";

export default function NYCSafetyGuide() {
    return(
        <>
        <NeighborhoodguideClient />
        </>

    );

}