import styles from './SoloNycQa.module.css';

export default function SoloLasVegasQa() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <h2 className={styles.heading}>Essential Solo Travel Tips for Las Vegas</h2>
      <article className={styles.card}>
        <h3 className={styles.question}>Can You Travel to Las Vegas Alone?</h3>
        <p className={styles.answer}>
          Yes, and Vegas is one of the easiest US cities to visit alone. The Strip
          is self-contained and walkable, single tickets for shows and tours are
          simple to get, and casino floors are social by nature &mdash; you set
          your own pace with no group to coordinate.
        </p>
      </article>

      <article className={styles.card}>
        <h3 className={styles.question}>Solo Trip to Las Vegas: What You Should Know</h3>
        <p className={styles.answer}>
          A solo trip to Vegas works best when you base yourself mid-Strip, set a
          gambling limit before you arrive, and lean into the activities that are
          better alone &mdash; shows, the pool scene, table games, and museums.
          You almost never need a car.
        </p>
      </article>

      <article className={styles.card}>
        <h3 className={styles.question}>
          Is Las Vegas Safe for Solo Female Travelers (2025&ndash;2026)?
        </h3>
        <p className={styles.answer}>
          Yes, Las Vegas is generally safe for solo female travelers in
          2025&ndash;2026, especially on the Strip and Fremont Street, which are
          among the most surveilled public spaces in America. Drink awareness and
          rideshare after dark are the main precautions.
        </p>
      </article>

      <article className={styles.card}>
        <h3 className={styles.question}>Is Las Vegas Good for Solo Travel?</h3>
        <p className={styles.answer}>
          Vegas is surprisingly great for solo travel. It is built for individual
          entertainment &mdash; 24-hour everything, self-paced attractions, and a
          transient, non-judgmental culture where eating, gambling, and going to
          shows alone is completely normal.
        </p>
      </article>
      </div>
    </section>
  );
}
