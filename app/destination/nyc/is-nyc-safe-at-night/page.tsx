import schemaJson from "./schema.json";
import SafeNightClient from "./isnycsafeatnightclient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is New York Safe to Visit in 2026? Areas, Subway & Night",
  description:
    "Is New York safe to visit in 2026? Yes - use NYPD stats, safest areas, subway safety, scams, solo tips and night advice to plan a smarter NYC trip today.",
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/is-nyc-safe-at-night",
  },
  openGraph: {
    title: "Is New York Safe to Visit in 2026? Areas, Subway & Night",
    description:
      "NYPD- and MTA-sourced NYC safety guide covering safer areas, subway safety, tourist scams, solo travel, and night advice.",
    url: "https://www.travelsamericas.com/destination/nyc/is-nyc-safe-at-night",
    type: "article",
    siteName: "Travels Americas",
    images: [
      {
        url: "https://www.travelsamericas.com/data/metadataimage/nyc-safety-guide-og.webp",
        width: 1200,
        height: 630,
        alt: "Is New York safe to visit in 2026 safety guide",
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
