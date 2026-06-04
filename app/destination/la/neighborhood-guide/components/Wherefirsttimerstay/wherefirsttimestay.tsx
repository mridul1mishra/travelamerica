import styles from './wherefirsttimerstay.module.css';

export default function WhereFirstTimersStay() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where First‑Time Visitors Usually Stay</h2>

      <p className={styles.copy}>
        Most first‑time visitors stay in Santa Monica or the Westside because it
        keeps you near the beach, makes sightseeing simple, and means you spend
        less time in the car between attractions.
      </p>

      <p className={styles.copy}>
        Some travelers prefer central areas like Downtown LA or Koreatown for the
        best value and the densest, most walkable streets, while still being close
        to the city's food and arts scenes.
      </p>

      <p className={styles.subtle}>
        There's no single "best" neighborhood. The right choice depends on how
        much you value beach access, how much driving you're willing to do, and
        the kind of LA experience you're hoping for each day.
      </p>
    </section>
  );
}