import styles from './wherefirsttimerstay.module.css';

export default function WhereFirstTimersStay() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where First‑Time Visitors Usually Stay</h2>

      <p className={styles.copy}>
        Most first‑time visitors stay on Mid-Strip because it puts the biggest
        casinos, shows, and free attractions within walking distance, keeps travel
        times short, and means you rarely need a car.
      </p>

      <p className={styles.copy}>
        Some travelers prefer the South Strip or Downtown / Fremont Street for
        better value and a different feel, while still being a short walk or
        rideshare from the center of the action.
      </p>

      <p className={styles.subtle}>
        There's no single "best" area. The right choice depends on how much
        convenience you want, how much casino energy you enjoy, and the kind of
        Las Vegas experience you're hoping for each day.
      </p>
    </section>
  );
}