import Image from 'next/image';
import Link from 'next/link';
import styles from '../../lasoloitinerary.module.css';

export default function SoloDay3() {
  return (
    <section className={styles.splitSection}>
      <div className={styles.imageWrapper}>
        <Image
          src="/data/majorcities/losangeles/assets/day3.png"
          alt="Day 3 solo travel highlights in Los Angeles featuring the Getty Center and Downtown Arts District"
          fill
          className={styles.mapImage}
        />
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.heading}>Day 3: The Getty &amp; Downtown Arts District</h2>
        <p className={styles.subheading}>Hilltop art in the morning, downtown grit in the afternoon — two very different sides of LA in one day.</p>
        <ul className={styles.itineraryList}>
          <li className={styles.subheading}>🌅Morning: The Getty Center — free admission, $20 parking, arrive at the 10am opening</li>
          <li className={styles.subheading}>☀️Midday: Drive to DTLA → lunch at a stall bar in Grand Central Market</li>
          <li className={styles.subheading}>☀️Afternoon: The Broad (book ahead, free-to-$18) → Arts District murals on Mateo St</li>
          <li className={styles.subheading}>🌙Evening: Coffee at Endorffeine, then a gallery walk from Hauser &amp; Wirth</li>
          <li className={styles.subheading}>🚗Solo tip: Stick to Grand Ave and the Arts District core — avoid walking more than a few blocks east of Main St after dark</li>
        </ul>
        <Link href="/destination/la/food" className={styles.ctaButton}>
          Best Food Stops Along the Route
        </Link>
      </div>
    </section>
  );
}
