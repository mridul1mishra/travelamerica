import Link from 'next/link';
import styles from './Safetyoverview.module.css';

export default function SafetyOverview() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Neighborhood Safety for Visitors
      </h2>

      <p className={styles.copy}>
        Midtown, the Upper West and East Sides, Greenwich Village, Brooklyn Heights, and Williamsburg
        are safe to walk day and night. Crime in these areas is low relative to most major US cities,
        and foot traffic keeps the streets active well past midnight.
      </p>

      <p className={styles.copy}>
        For solo travelers: the subway after midnight is fine on busy platforms. Use the marked
        "Off-Hours Waiting Area" on the platform, stay near the conductor's car, and avoid
        isolated stations on unfamiliar lines late at night. The blocks just west of Times Square
        (8th and 9th Avenues in the 30s and 40s) can feel rough after dark — these are the main
        areas to bypass.
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
