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
        <p className={styles.subheading}>Start in LA&apos;s easiest solo pocket: one view, one walkable village, one relaxed dinner area.</p>
        <ul className={styles.itineraryList}>
          <li className={styles.subheading}>
            <span className={styles.timeLabel}>Morning</span>
            Griffith Observatory from the Greek Theatre lot; the uphill walk is about 30 minutes and entry is free.
          </li>
          <li className={styles.subheading}>
            <span className={styles.timeLabel}>Afternoon</span>
            Los Feliz Village and the Silver Lake Reservoir loop; coffee at Courage Bagels or Sqirl if you want a proper pause.
          </li>
          <li className={styles.subheading}>
            <span className={styles.timeLabel}>Evening</span>
            Dinner at the bar in Silver Lake; Bar Moruno or Alimento both work well for a solo counter meal.
          </li>
        </ul>
        <Link href="/destination/la/solo-trip-to-la" className={styles.ctaButton}>
          Solo Trip to LA Guide
        </Link>
      </div>
    </section>
  );
}
