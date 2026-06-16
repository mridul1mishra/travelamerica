import styles from './Gettingaround.module.css';

export default function GettingAround() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Getting Around from Different Neighborhoods</h2>

      <p className={styles.copy}>
        On the Strip you barely need transit at all — most Mid-Strip resorts are
        walkable to one another, and the Las Vegas Monorail runs along the east
        side connecting major casinos. The 24-hour Deuce bus runs the length of
        the Strip and down to Downtown / Fremont Street.
      </p>

      <p className={styles.copy}>
        Rideshare and taxis fill the gaps for short hops — a Mid-Strip to
        Downtown trip is roughly 15 minutes by car. The suburbs, however, are a
        different story: Summerlin, Henderson, and the Chinatown corridor on
        Spring Mountain Road are car-dependent, with little walkability between them.
      </p>

      <p className={styles.subtle}>
        You don&rsquo;t need to stay next to every attraction to get around easily —
        choosing a central Strip or Downtown location matters far more than
        staying &ldquo;close&rdquo; on a map in a city this spread out.
      </p>
    </section>
  );
}
