export const metadata = {
  title: "Is the NYC Subway Safe? 2026 Guide for Solo Travelers & Tourists",
  description: "Yes - the NYC subway is safe for most travelers. NYPD data shows 2025 was the safest subway year since 2009. Practical tips for day, night, and solo riders.",
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
    title: "Is the NYC Subway Safe? 2026 Guide for Solo Travelers & Tourists",
    description:
      "A practical, scenario‑driven NYC Subway Safety Guide covering core principles, personas, emergency steps, etiquette, tools & apps, and neighborhood notes.",
    url: "https://www.travelsamericas.com/destination/nyc/subway-safety-guide",
    type: "article",
    siteName: "Travels Americas",
    images: [
      {
        url: "https://www.travelsamericas.com/data/metadataimage/nyc-subway-generic.webp",
        width: 1200,
        height: 630,
        alt: "NYC Subway Safety Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Is the NYC Subway Safe in 2026? Solo & Tourist Guide",
    description:
      "A complete, scenario‑driven NYC Subway Safety Guide for solo travelers, women, and first‑timers.",
    images: ["https://www.travelsamericas.com/data/metadataimage/nyc-subway-generic.webp"],
  },

  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/subway-safety-guide",
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