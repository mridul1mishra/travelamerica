import Link from "next/link";
import styles from "../../nyc.module.css";

export default function NeighborhoodsHub() {
  return (
    <section className={styles.neighborhoods}>
      <h2>NYC Neighborhoods</h2>

      <div className={styles.grid}>
        <Link
          href="/destination/new-york-city/neighborhoods"
          className={styles.card}
        >
          Neighborhood guide
        </Link>
      </div>
    </section>
  );
}
