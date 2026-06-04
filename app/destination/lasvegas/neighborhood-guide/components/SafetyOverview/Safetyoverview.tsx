import Link from 'next/link';
import styles from './Safetyoverview.module.css';

export default function SafetyOverview() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Neighborhood Safety for Visitors
      </h2>

      <p className={styles.copy}>
        Most areas frequented by visitors in Las Vegas — the Strip, Summerlin,
        and Henderson — are busy, well‑lit, and heavily patrolled throughout the
        day and evening.
      </p>

      <p className={styles.copy}>
        Like any large city, some areas have rough edges. The blocks just off the
        north end of the Strip and parts of Downtown away from Fremont Street can
        feel uneasy after dark, so staying aware of your surroundings goes a long way.
      </p>

      <p className={styles.subtle}>
        For a deeper look at safety tips, nighttime travel, and transportation
        advice, you can explore our dedicated Las Vegas safety guide.
      </p>

      <div className={styles.linkWrap}>
        <Link
          href="/destination/lasvegas/safety-guide"
          className={styles.link}
        >
          Read the Las Vegas Safety Guide →
        </Link>
      </div>
    </section>
  );
}