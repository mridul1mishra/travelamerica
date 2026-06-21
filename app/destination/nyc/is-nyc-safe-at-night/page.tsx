import schemaJson from "./schema.json";
import SafeNightClient from "./isnycsafeatnightclient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is NYC Safe at Night? 2026 Neighborhood Safety Guide",
  description:
    "Is NYC safe at night? A neighborhood-by-neighborhood guide (DUMBO, Battery Park, Midtown, Times Square) plus subway-after-dark and solo night-safety tips, backed by NYPD data.",
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/is-nyc-safe-at-night",
  },
  openGraph: {
    title: "Is NYC Safe at Night? 2026 Neighborhood Safety Guide",
    description:
      "Is NYC safe after dark? Neighborhood-by-neighborhood night safety, subway-at-night tips, scams, and solo advice, backed by NYPD and MTA data.",
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
