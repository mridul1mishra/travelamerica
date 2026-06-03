import schemaJson from "./schema.json";
import SafeNightClient from "./isnycsafeatnightclient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is NYC Safe at Night? 2026 Guide for Tourists",
  description: "Is New York City safe after dark? Honest neighborhood breakdown — Times Square, Brooklyn, Midtown, and what to avoid at night.",
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