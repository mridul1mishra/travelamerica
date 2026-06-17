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
        <p className={styles.subheading}>Use the final day for art, food, and one controlled DTLA walk instead of crisscrossing the city.</p>
        <ul className={styles.itineraryList}>
          <li className={styles.subheading}>
            <span className={styles.timeLabel}>Morning</span>
            The Getty Center; admission is free, parking is about $20, and 10am arrival keeps the day calm.
          </li>
          <li className={styles.subheading}>
            <span className={styles.timeLabel}>Afternoon</span>
            Grand Central Market for lunch, then The Broad if you booked ahead or a focused Arts District walk.
          </li>
          <li className={styles.subheading}>
            <span className={styles.timeLabel}>Evening</span>
            Stay near Grand Ave or the Arts District core; avoid wandering far east of Main Street after dark.
          </li>
        </ul>
        <Link href="/destination/la/food" className={styles.ctaButton}>
          Best Food Stops Along the Route
        </Link>
      </div>
    </section>
  );
}
