import Image from 'next/image';
import Link from 'next/link';
import styles from '../../lasoloitinerary.module.css';

export default function SoloDay2() {
  return (
    <section className={styles.splitSection}>
      <div className={styles.textWrapper}>
        <h2 className={styles.heading}>Day 2: Venice Beach &amp; Santa Monica</h2>
        <p className={styles.subheading}>Trade the car for a bike. Today is all coast — flat path, ocean on your right the whole way.</p>
        <ul className={styles.itineraryList}>
          <li className={styles.subheading}>🌅Morning: Rent a bike in Santa Monica ($15–$25/hr) and ride south to Venice</li>
          <li className={styles.subheading}>☀️Midday: Venice Boardwalk → lunch at the Gjusta counter on Abbot Kinney</li>
          <li className={styles.subheading}>☀️Afternoon: Back to Santa Monica — Third Street Promenade or a quiet swim at Annenberg Beach House</li>
          <li className={styles.subheading}>🌙Evening: Sunset from Santa Monica Pier, then a bar seat at Rustic Canyon</li>
          <li className={styles.subheading}>🚗Getting around: Park once in Santa Monica and bike the rest — no rideshare needed all day</li>
        </ul>
        <Link href="/destination/la/neighborhood-guide" className={styles.ctaButton}>
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
