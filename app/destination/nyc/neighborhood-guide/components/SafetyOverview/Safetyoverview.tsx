import Link from 'next/link';
import styles from './Safetyoverview.module.css';

export default function SafetyOverview() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Neighborhood Safety for Visitors
      </h2>

      <p className={styles.copy}>
        Most neighborhoods frequented by visitors in New York City are busy,
        well‑lit, and active throughout the day and evening, especially in
        central and residential areas.
      </p>

      <p className={styles.copy}>
        Like any large city, staying aware of your surroundings and choosing
        well‑connected areas goes a long way toward feeling comfortable while
        exploring.
      </p>

      <p className={styles.subtle}>
        For a deeper look at safety tips, nighttime travel, and transportation
        advice, you can explore our dedicated NYC safety guide.
      </p>

      <div className={styles.linkWrap}>
        <Link
          href="/destination/nyc/nyc-safety-guide"
          className={styles.link}
        >
          Read the NYC Safety Guide →
        </Link>
      </div>
    </section>
  );
}