import Link from "next/link";
import styles from "./attractionhub.module.css";

export default function AttractionsHub() {
  return (
    <section className={styles.attractions}>
      <h2>Top Attractions</h2>

      <div className={styles.grid}>
        <Link
          href="/destination/new-york-city/attractions"
          className={styles.card}
        >
          Explore top NYC attractions
        </Link>
      </div>
    </section>
  );
}
