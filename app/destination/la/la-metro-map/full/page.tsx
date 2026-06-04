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

export default function Page() {
  return (
    <main className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Official LA Metro Rail Map — Updated 2026</h1>
      <LAMetroMapViewer />
    </main>
  );
}
