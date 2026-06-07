import schemaJson from "./schema.json";
import SafeNightClient from "./isnycsafeatnightclient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is NYC Safe? 2026 Truth: Neighborhoods, Subways & When to Worry 63 chars",
  description: "Is NYC safe? Yes—if you stay out of these 3 areas. Honest breakdown of subway safety, neighborhoods to trust, and what tourists get wrong.",
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/is-nyc-safe-at-night",
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