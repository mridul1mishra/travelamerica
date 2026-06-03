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

export default function Page() {
  return (
    <main className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Official MTA Subway Map — Updated 2026</h1>
      <NYCSubwayMapViewer />
    </main>
  );
}
