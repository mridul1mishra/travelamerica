import schemaJson from "./schema.json";
import SafeNightClient from "./isnycsafeatnightclient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is NYC Safe? 2026 Truth: Neighborhoods, Subways & When to Worry",
  description: "Is NYC safe? Yes—if you stay out of these 3 areas. Honest breakdown of subway safety, neighborhoods to trust, and what tourists get wrong.",
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/is-nyc-safe-at-night",
  },
  openGraph: {
    title: "Is NYC Safe? 2026 Truth: Neighborhoods, Subways & When to Worry",
    description: "Is NYC safe? Yes—if you stay out of these 3 areas. Honest breakdown of subway safety, neighborhoods to trust, and what tourists get wrong.",
    url: "https://www.travelsamericas.com/destination/nyc/is-nyc-safe-at-night",
    type: "article",
    siteName: "Travels Americas",
    // TODO: placeholder — replace with page-specific OG card from designer batch (see brief)
    images: [{ url: "https://www.travelsamericas.com/data/metadataimage/nyc-safety-guide-og.webp", width: 1200, height: 630, alt: "Is NYC Safe at Night? Honest neighborhood and subway safety guide" }],
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
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
  <SafeNightClient />
  </>
);

}
