export const metadata = {
  title: "NYC Subway Safety Guide (2026) — Practical Tips for Travelers & Daily Riders", 
  description: "A clear, scenario‑driven NYC Subway Safety Guide covering core principles, emergency steps, etiquette, tools, and neighborhood insights for 2026.",
  keywords: [
    "NYC subway safety",
    "New York subway guide",
    "solo female travel NYC",
    "NYC travel safety",
    "NYC subway tips",
    "NYC subway etiquette",
    "NYC subway emergency guide",
    "NYC transit safety",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  openGraph: {
    title: "NYC Subway Safety Guide — Practical, Scenario‑Driven, 2026 Edition",
    description:
      "A practical, scenario‑driven NYC Subway Safety Guide covering core principles, personas, emergency steps, etiquette, tools & apps, and neighborhood notes.",
    url: "https://www.travelamerica.work/destination/nyc/subway-safety-guide",
    type: "article",
    siteName: "Travel America",
    images: [
      {
        url: "https://www.travelamerica.work/data/metadataimage/nyc-subway-generic.jpg",
        width: 1200,
        height: 630,
        alt: "NYC Subway Safety Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NYC Subway Safety Guide — 2026 Edition",
    description:
      "A complete, scenario‑driven NYC Subway Safety Guide for solo travelers, women, and first‑timers.",
    images: ["https://www.travelamerica.work/data/metadataimage/nyc-subway-generic.jpg"],
  },

  alternates: {
    canonical: "https://www.travelamerica.work/destination/nyc/subway-safety-guide",
  },
};

import schemaJson from "./components/schema.json";
import SubwaySafetyGuideClient from "./subwaysafetyguideclient";
export default function SubwaySafetyGuide() {
    const schema = schemaJson;
  return (
  <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />      
  <SubwaySafetyGuideClient />
  </>
);
  
}