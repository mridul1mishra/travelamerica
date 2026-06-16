import Link from 'next/link';
import styles from './Safetyoverview.module.css';

export default function SafetyOverview() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Neighborhood Safety for Visitors
      </h2>

      <p className={styles.copy}>
        The Strip, Summerlin, and Henderson are heavily patrolled and camera-covered. The main
        Strip pedestrian corridor is among the most watched public spaces in the US — security
        presence is visible around the clock. Las Vegas doesn&rsquo;t have quiet hours; the Strip is
        busy and well-lit at 3am as much as at 3pm.
      </p>

      <p className={styles.copy}>
        For solo travelers: the main risk on the Strip is street promoters, timeshare solicitors,
        and aggressive flyer-distributors — not physical safety. Ignore them and keep walking.
        The area immediately north of the Stratosphere (north end of the Strip) and the blocks
        east of the Strip around Koval Lane are the main spots to avoid after dark.
        Downtown/Fremont Street itself is safe; the surrounding blocks are not.
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
