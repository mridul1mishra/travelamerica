import styles from './Gettingaround.module.css';

export default function GettingAround() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Getting Around from Different Neighborhoods</h2>

      <p className={styles.copy}>
        Los Angeles is built for driving, not transit. Most neighborhoods are
        spread out, so where you stay has a big impact on how much time you
        spend in the car each day.
      </p>

      <p className={styles.copy}>
        Walkable areas like Santa Monica, Venice, and Koreatown let you explore
        on foot and save on transport. Hillside and luxury areas such as Beverly
        Hills and the Hollywood Hills are car‑dependent — nothing is walkable to
        anywhere else.
      </p>

      <p className={styles.subtle}>
        You don't need to stay next to every landmark to get around easily—
        choosing a central, walkable neighborhood matters far more than staying
        "close" on a map in a city this size.
      </p>
    </section>
  );
}
