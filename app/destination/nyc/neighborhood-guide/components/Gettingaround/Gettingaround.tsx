import styles from './Gettingaround.module.css';

export default function GettingAround() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Getting Around from Different Neighborhoods</h2>

      <p className={styles.copy}>
        New York City is built for transit—not driving. Most visitor‑friendly
        neighborhoods offer fast, reliable access to the subway, buses, and
        walkable streets, making it easy to explore without a car.
      </p>

      <p className={styles.copy}>
        From central Manhattan, many top attractions are just a short subway
        ride away, and some are close enough to walk. Popular Brooklyn areas
        like Williamsburg, DUMBO, and Brooklyn Heights are typically only
        10–25 minutes from Manhattan by train.
      </p>

      <p className={styles.subtle}>
        You don’t need to stay next to every landmark to get around easily—
        choosing a neighborhood with strong subway access matters far more
        than staying “close” on a map.
      </p>
    </section>
  );
}
