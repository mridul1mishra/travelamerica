import Image from 'next/image';
import Link from 'next/link';
import styles from '../../lasoloitinerary.module.css';

export default function SoloDay1() {
  return (
    <section className={styles.splitSection}>
      <div className={styles.imageWrapper}>
        <Image
          src="/data/majorcities/losangeles/assets/daysololosangeles.png"
          alt="Map of solo travel route through Griffith Observatory, Los Feliz, and Silver Lake in LA"
          fill
          className={styles.mapImage}
        />
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.heading}>Day 1: Griffith, Los Feliz &amp; Silver Lake</h2>
        <p className={styles.subheading}>Ease into LA with its most walkable corner — earn a view, then wander streets you can actually do on foot.</p>
        <ul className={styles.itineraryList}>
          <li className={styles.subheading}>🌅Morning: Griffith Observatory (hike up from the Greek Theatre lot, ~30 min)
            <p className={styles.description}>Free entry. Arrive before 10am to beat the tour groups and earn the city view.</p>
          </li>
          <li className={styles.subheading}>☀️Afternoon: Los Feliz Village → coffee at Courage Bagels or Sqirl
            <p className={styles.description}>One of LA&apos;s rare proper walking streets — independent shops along Vermont Ave.</p>
          </li>
          <li className={styles.subheading}>☀️Midday: Stroll the Silver Lake Reservoir loop
            <p className={styles.description}>Flat, scenic, and pleasant at dusk — easy to do solo at your own pace.</p>
          </li>
          <li className={styles.subheading}>🌙Evening: Dinner at the bar — Bar Moruno or Alimento in Silver Lake
            <p className={styles.description}>Great solo dining energy at the counter, safe and lively.</p>
          </li>
          <li className={styles.subheading}>🚗Getting around: Drive or rideshare to the observatory lot
            <p className={styles.description}>Solo tip: Griffith and Los Feliz are among the safest areas to walk alone in LA — start here to find your feet.</p>
          </li>
        </ul>
        <Link href="/destination/la/solo-trip-to-la" className={styles.ctaButton}>
          Solo Trip to LA Guide
        </Link>
      </div>
    </section>
  );
}
