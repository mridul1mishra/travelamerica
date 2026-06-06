import styles from './Gettingaround.module.css';

export default function GettingAround() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Getting Around from Different Areas</h2>

      <p className={styles.copy}>
        Orlando is built for driving, not transit. Most visitors rent a car or rely on
        rideshare, and many resorts run free shuttles to the parks. There's no subway,
        and public buses are limited at night.
      </p>

      <p className={styles.copy}>
        Staying near your main park saves the most time — Lake Buena Vista for Disney,
        the Universal/I-Drive area for Universal. The I-Ride Trolley covers International
        Drive in the evening, and rideshare fills the gaps between zones.
      </p>

      <p className={styles.subtle}>
        You don't need to stay next to every attraction — choosing an area close to the
        park you'll visit most matters far more than staying &ldquo;central&rdquo; on a map.
      </p>
    </section>
  );
}
