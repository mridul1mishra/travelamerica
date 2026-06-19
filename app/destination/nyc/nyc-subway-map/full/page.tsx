// app/nyc-subway-map/full/page.tsx

import NYCSubwayMapViewer from "./nycsubwaymapviewer";
import styles from "./map-viewer.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NYC Subway Map 2026 | Full Official MTA Map",
  description: "View the full official MTA NYC subway map for 2026. Every line, station, and borough at a glance for travelers.",
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/nyc/nyc-subway-map/full",
  },
};

// Structured data: this page previously shipped without any JSON-LD.
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
    { "@type": "ListItem", "position": 2, "name": "New York", "item": "https://www.travelsamericas.com/destination/nyc/" },
    { "@type": "ListItem", "position": 3, "name": "NYC Subway Map", "item": "https://www.travelsamericas.com/destination/nyc/nyc-subway-map" },
    { "@type": "ListItem", "position": 4, "name": "Full Official MTA Map", "item": "https://www.travelsamericas.com/destination/nyc/nyc-subway-map/full" },
  ],
};

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "NYC Subway Map 2026 | Full Official MTA Map",
  "description": "View the full official MTA NYC subway map for 2026. Every line, station, and borough at a glance for travelers.",
  "url": "https://www.travelsamericas.com/destination/nyc/nyc-subway-map/full",
  "isPartOf": { "@type": "WebSite", "name": "Travels Americas", "url": "https://www.travelsamericas.com/" },
};

export default function Page() {
  const schemas = [breadcrumb, webPage];
  return (
    <main className={styles.pageWrapper}>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <h1 className={styles.pageTitle}>Official MTA Subway Map — Updated 2026</h1>
      <NYCSubwayMapViewer />
    </main>
  );
}
