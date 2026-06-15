import Link from 'next/link';
import styles from './Safetyoverview.module.css';

export default function SafetyOverview() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Neighborhood Safety for Visitors
      </h2>

      <p className={styles.copy}>
        Santa Monica, West Hollywood, Beverly Hills, and the main Hollywood tourist corridor
        are safe for solo visitors day and night. These areas have high foot traffic, good lighting,
        and consistent rideshare availability that makes moving around at any hour straightforward.
      </p>

      <p className={styles.copy}>
        For solo travelers: the Venice boardwalk shifts in feel after dark — stay on the main
        boardwalk, not the side streets. Downtown LA is uneven by block; the Arts District and
        Grand Central Market area are fine, but parts of Skid Row are within a few blocks and
        worth knowing about. Koreatown, Silver Lake, and Los Feliz are generally comfortable for
        solo evening dining — active local neighborhoods with good street life.
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
