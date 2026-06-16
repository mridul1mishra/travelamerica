import Link from 'next/link';
import styles from '../../lathingstodo.module.css';

export default function ExperienceBuckets() {
  return (
    <section className={styles.grid}>
      <Link href="/destination/la/neighborhood-guide?interest=sightseeing" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
        <h3>Landmarks &amp; Big Sights</h3>
        <p>
          Good for a first visit, when you want the Hollywood Sign, the Walk of
          Fame, and Griffith Observatory without spending the whole day driving
          between them.
        </p>
      </Link>
      <Link href="/destination/la/neighborhood-guide?interest=culture" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
        <h3>Culture &amp; Museums</h3>
        <p>
          Best for travelers who enjoy slower exploration — the Getty, LACMA,
          The Broad, and neighborhoods with strong cultural character.
        </p>
      </Link>
      <Link href="/destination/la/food" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
        <h3>Food &amp; Local Experiences</h3>
        <p>
          Designed for travelers who want food halls, taco trucks, and everyday
          LA neighborhood life to be the focus of their trip.
        </p>
      </Link>
      <Link href="/destination/la/neighborhood-guide?interest=outdoors" className={styles.card} style={{ textDecoration: "none", color: "inherit" }}>
        <h3>Beaches &amp; Outdoors</h3>
        <p>
          Works well for visitors who want beach days in Santa Monica and
          Venice, hilltop hikes like Runyon Canyon, and coastal cycling.
        </p>
      </Link>
    </section>
  );
}
