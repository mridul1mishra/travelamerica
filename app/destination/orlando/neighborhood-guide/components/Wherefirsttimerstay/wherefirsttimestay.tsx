import styles from './wherefirsttimerstay.module.css';

export default function WhereFirstTimersStay() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where First‑Time Visitors Usually Stay</h2>

      <p className={styles.copy}>
        International Drive for flexibility. The stretch around Sand Lake Road and ICON Park
        has walkable restaurant options, fast rideshare access, and hotel rates from $90–$200/night —
        significantly less than on-property Disney hotels while still being 15 minutes from the
        parks by Lyft. Lake Buena Vista (Disney Springs area) makes sense for Disney-first trips,
        especially if you want on-property transportation and early park entry.
      </p>

      <p className={styles.copy}>
        For solo travelers: International Drive is the more practical choice. You get dining variety
        (Restaurant Row is a 5-minute drive), nightlife on I-Drive, and the freedom to split your
        time between parks and local spots without being locked into a resort ecosystem. Bar seating
        at the Sand Lake Road restaurants is easy for solo dining — it's a dense enough strip that
        you can walk between options.
      </p>

      <p className={styles.subtle}>
        Budget pick: Kissimmee runs 30–50% below International Drive rates, with short drives to
        Disney and Universal. Best for trips where you're in the parks all day and just need a base.
      </p>
    </section>
  );
}
