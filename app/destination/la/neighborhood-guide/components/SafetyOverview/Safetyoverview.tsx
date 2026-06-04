import Link from 'next/link';
import styles from './Safetyoverview.module.css';

export default function SafetyOverview() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Neighborhood Safety for Visitors
      </h2>

      <p className={styles.copy}>
        Most neighborhoods frequented by visitors in Los Angeles — like Santa
        Monica, Beverly Hills, and West Hollywood — are busy, well‑lit, and
        active throughout the day and evening.
      </p>

      <p className={styles.copy}>
        Like any large city, some areas have rough edges. The Venice boardwalk
        can feel uneasy after dark, and parts of Downtown remain unevenly
        gentrified, so staying aware of your surroundings goes a long way.
      </p>

      <p className={styles.subtle}>
        For a deeper look at safety tips, nighttime travel, and transportation
        advice, you can explore our dedicated LA safety guide.
      </p>

      <div className={styles.linkWrap}>
        <Link
          href="/destination/la/safety-guide"
          className={styles.link}
        >
          Read the LA Safety Guide →
        </Link>
      </div>
    </section>
  );
}