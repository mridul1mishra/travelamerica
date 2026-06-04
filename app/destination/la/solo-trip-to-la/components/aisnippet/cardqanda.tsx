import styles from './SoloNycQa.module.css';

export default function SoloLaQa() {
  return (
    <section className={styles.wrapper}>
         <h2 className={styles.heading}>Essential Solo Travel Tips for LA</h2>
      <article className={styles.card}>
        <h3 className={styles.question}>Can You Travel to LA Alone?</h3>
        <p className={styles.answer}>
          Yes, you can travel to LA alone, and it rewards solo travelers who plan
          ahead. The city is car-dependent and spread out, but its best
          experiences &mdash; museums, hiking, beaches, and food &mdash; are all
          excellent solo activities.
        </p>
      </article>

      <article className={styles.card}>
        <h3 className={styles.question}>Solo Trip to LA: What You Should Know</h3>
        <p className={styles.answer}>
          A solo trip to LA works best when you choose one or two walkable
          neighborhoods to base yourself in and sort out your transport early.
          A mix of rental car, rideshare, and the Metro on key corridors keeps
          traveling alone comfortable.
        </p>
      </article>

      <article className={styles.card}>
        <h3 className={styles.question}>
          Is LA Safe for Solo Female Travelers (2025&ndash;2026)?
        </h3>
        <p className={styles.answer}>
          Yes, LA is generally safe for solo female travelers in 2025&ndash;2026,
          especially in busy, well-trafficked areas such as Santa Monica, West
          Hollywood, and Los Feliz. Using rideshare after dark and staying aware
          significantly reduces risk.
        </p>
      </article>

      <article className={styles.card}>
        <h3 className={styles.question}>Is LA Good for Solo Travel?</h3>
        <p className={styles.answer}>
          LA is great for solo travel if you embrace what it does best:
          self-paced sightseeing, world-class food, and big outdoor spaces. The
          main trade-off is that it isn&apos;t naturally social, so you&apos;ll
          want to seek out tours, classes, and hostels to meet people.
        </p>
      </article>

    </section>
  );
}
