import styles from './wherefirsttimerstay.module.css';

export default function WhereFirstTimersStay() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where First‑Time Visitors Usually Stay</h2>

      <p className={styles.copy}>
        Santa Monica for walkability and beach access. Hotels run $200–$350/night, but you get
        the beach, the 3rd Street Promenade for late-night food, and the only part of LA where you
        can genuinely walk between meals, shops, and the ocean without a car.
        West Hollywood is slightly more central — good for Sunset Strip and dining access,
        with hotel options from $150–$280/night and consistent rideshare coverage at all hours.
      </p>

      <p className={styles.copy}>
        For solo travelers: Santa Monica and West Hollywood are both comfortable for solo evenings.
        Santa Monica's beach path and Third Street Promenade stay busy until 10–11pm. West Hollywood's
        main drag (Santa Monica Blvd) has constant foot traffic. Both areas have fast Lyft and Uber
        coverage if you're heading elsewhere late.
      </p>

      <p className={styles.subtle}>
        Budget pick: Downtown LA runs 30–40% less than the Westside, with direct Metro connections
        to Hollywood and Koreatown, and walking distance to Grand Central Market.
      </p>
    </section>
  );
}
