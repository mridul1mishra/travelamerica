// app/nyc-subway-map/full/page.tsx

import NYCSubwayMapViewer from "./nycsubwaymapviewer";
import styles from "./map-viewer.module.css";

export default function Page() {
  return (
    <main className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Official MTA Subway Map — Updated 2026</h1>
      <NYCSubwayMapViewer />
    </main>
  );
}
