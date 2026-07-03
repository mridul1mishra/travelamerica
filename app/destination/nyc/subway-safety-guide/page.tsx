export const metadata = {
  title: "NYC Subway Safety Guide: Tips for Tourists & Solo Travelers",
  description: "NYC's subway is generally safe (updated 2026). Essential tips for solo travelers and tourists - day or night. Avoid scams, stay alert, ride with confidence.",
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
    title: "NYC Subway Safety Guide: Tips for Tourists & Solo Travelers",
    description:
      "Practical NYC subway safety tips for tourists, solo travelers, night rides, scams, emergency steps, and confidence-building route choices.",
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
    title: "NYC Subway Safety Guide for Tourists & Solo Travelers",
    description:
      "Learn how to ride the NYC subway safely by day, at night, and as a solo traveler.",
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
