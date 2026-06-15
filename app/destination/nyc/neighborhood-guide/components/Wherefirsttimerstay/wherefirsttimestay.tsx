import styles from './wherefirsttimerstay.module.css';

export default function WhereFirstTimersStay() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where First‑Time Visitors Usually Stay</h2>

      <p className={styles.copy}>
        Midtown East or the Upper West Side for most first trips. Midtown East puts you walking distance
        from the Empire State Building and Grand Central, with express trains on the 4/5/6 line. Hotels
        run $200–$350/night for a decent room. The Upper West Side is quieter, better value ($150–$250/night),
        with express service on the 1/2/3 to Times Square in 10 minutes.
      </p>

      <p className={styles.copy}>
        For solo travelers specifically: both areas are comfortable for walking alone after dark — wide
        sidewalks, 24-hour pharmacies, late-night food options, and constant foot traffic. Avoid basing
        yourself in Times Square itself; the surrounding blocks are high-noise and significantly overpriced.
      </p>

      <p className={styles.subtle}>
        Budget pick: Long Island City (Queens) or Williamsburg (Brooklyn) run 25–40% less than equivalent
        Midtown hotels, with 15–20 minute subway rides into central Manhattan.
      </p>
    </section>
  );
}
