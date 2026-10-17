import schemaJson from "./schema.json";
import SafeNightClient from "./isnycsafeatnightclient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is NYC Safe at Night? Manhattan, Brooklyn & the Subway",
  description:
    "Which parts of Manhattan and Brooklyn stay busy after dark, from Midtown to the Financial District and Battery Park, plus subway tips for late trips.",
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/is-nyc-safe-at-night",
  },
  openGraph: {
    title: "Is NYC Safe at Night? Manhattan, Brooklyn & the Subway",
    description:
      "Which parts of Manhattan and Brooklyn stay busy after dark, from Midtown to the Financial District and Battery Park, plus subway tips for late trips.",
    url: "https://www.travelsamericas.com/destination/nyc/is-nyc-safe-at-night",
    type: "article",
    siteName: "Travels Americas",
    images: [
      {
        url: "https://www.travelsamericas.com/data/metadataimage/nyc-safety-guide-og.webp",
        width: 1200,
        height: 630,
        alt: "Is New York safe at night 2026 neighborhood safety guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is NYC Safe at Night? Manhattan, Brooklyn & the Subway",
    description: "Which parts of Manhattan and Brooklyn stay busy after dark, from Midtown to the Financial District and Battery Park, plus subway tips for late trips.",
    images: ["https://www.travelsamericas.com/data/metadataimage/nyc-safety-guide-og.webp"],
  },
};

export default function SubwaySafetyGuide() {
  const schema = schemaJson;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SafeNightClient />
    </>
  );
}
