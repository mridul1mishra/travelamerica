import Link from 'next/link';
import styles from '../../lalandmark.module.css';

export default function LandmarkRelatedLinks() {
  return (
    <section className={styles.relatedLinks}>
      <h2 className={styles.sectionheading}>Plan the Rest of Your Trip</h2>
      <div className={styles.linkGrid}>
        <Link href="/destination/la/solo-trip-to-la" className={styles.relatedLink}>
          <h3>Solo Trip to LA Guide</h3>
          <p>Budget, where to stay, your first 24 hours, and what to avoid.</p>
        </Link>
        <Link href="/destination/la/best-areas-to-stay" className={styles.relatedLink}>
          <h3>Best Areas to Stay</h3>
          <p>Neighborhood comparison for solo travelers, with safety and transit scoring.</p>
        </Link>
        <Link href="/destination/la/food" className={styles.relatedLink}>
          <h3>Solo Dining in LA</h3>
          <p>Where solo travelers should actually eat, by neighborhood and meal.</p>
        </Link>
        <Link href="/destination/la/safety-guide" className={styles.relatedLink}>
          <h3>LA Safety Guide</h3>
          <p>Practical safety: neighborhoods, transit, scams, emergencies.</p>
        </Link>
      </div>
    </section>
  );
}
