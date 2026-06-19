// app/destination/la/la-metro-map/full/page.tsx

import LAMetroMapViewer from "./lametromapviewer";
import styles from "./map-viewer.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LA Metro Map 2026 | Full Official LA Metro Rail Map",
  description: "View the full official LA Metro Rail map for 2026. Every line and station at a glance for travelers in Los Angeles.",
  alternates: {
    canonical: "https://www.travelsamericas.com/destination/la/la-metro-map/full",
  },
};

// Structured data: this page previously shipped without any JSON-LD.
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.travelsamericas.com/" },
    { "@type": "ListItem", "position": 2, "name": "Los Angeles", "item": "https://www.travelsamericas.com/destination/la/" },
    { "@type": "ListItem", "position": 3, "name": "LA Metro Map", "item": "https://www.travelsamericas.com/destination/la/la-metro-map" },
    { "@type": "ListItem", "position": 4, "name": "Full Official LA Metro Rail Map", "item": "https://www.travelsamericas.com/destination/la/la-metro-map/full" },
  ],
};

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "LA Metro Map 2026 | Full Official LA Metro Rail Map",
  "description": "View the full official LA Metro Rail map for 2026. Every line and station at a glance for travelers in Los Angeles.",
  "url": "https://www.travelsamericas.com/destination/la/la-metro-map/full",
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
      <h1 className={styles.pageTitle}>Official LA Metro Rail Map — Updated 2026</h1>
      <LAMetroMapViewer />
    </main>
  );
}
