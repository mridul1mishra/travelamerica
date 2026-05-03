import styles from './wherefirsttimerstay.module.css';

export default function WhereFirstTimersStay() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Where First‑Time Visitors Usually Stay</h2>

      <p className={styles.copy}>
        Most first‑time visitors stay in central parts of Manhattan because it
        makes sightseeing simple, keeps travel times short, and puts major
        attractions within easy reach.
      </p>

      <p className={styles.copy}>
        Some travelers prefer areas just outside the busiest zones—like Lower
        Manhattan or nearby Brooklyn—for a calmer atmosphere while still having
        fast subway access to the rest of the city.
      </p>

      <p className={styles.subtle}>
        There’s no single “best” neighborhood. The right choice depends on how
        much convenience you want, how busy you like your surroundings, and the
        kind of NYC experience you’re hoping for each day.
      </p>
    </section>
  );
}