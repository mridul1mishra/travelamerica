import Image from 'next/image';
import Link from 'next/link';
import styles from '../../lasoloitinerary.module.css';

export default function SoloDay2() {
  return (
    <section className={styles.splitSection}>
      <div className={styles.textWrapper}>
        <h2 className={styles.heading}>Day 2: Venice Beach &amp; Santa Monica</h2>
        <p className={styles.subheading}>Keep the day coastal. Park once or rideshare in, then let the bike path do the work.</p>
        <ul className={styles.itineraryList}>
          <li className={styles.subheading}>
            <span className={styles.timeLabel}>Morning</span>
            Rent a bike in Santa Monica ($15-$25/hr) and ride south toward Venice on the flat beach path.
          </li>
          <li className={styles.subheading}>
            <span className={styles.timeLabel}>Afternoon</span>
            Venice Boardwalk, Abbot Kinney, and lunch at the Gjusta counter; then loop back toward Santa Monica.
          </li>
          <li className={styles.subheading}>
            <span className={styles.timeLabel}>Evening</span>
            Sunset at Santa Monica Pier, then a bar seat at Rustic Canyon or an easy dinner on Main Street.
          </li>
        </ul>
        <Link href="/destination/la/best-areas-to-stay" className={styles.ctaButton}>
          Best neighborhoods for solo travelers in LA
        </Link>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/data/majorcities/losangeles/assets/day2solo.png"
          alt="Scenic view of Venice Beach and the Santa Monica Pier featured in the Day 2 solo travel itinerary"
          fill
          className={styles.mapImage}
        />
      </div>
    </section>
  );
}
