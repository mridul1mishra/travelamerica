import styles from './SoloNycQa.module.css';

export default function SoloNycQa() {
  return (
    <section className={styles.wrapper}>
         <h2 className={styles.heading}>Essential Solo Travel Tips for NYC</h2>
      <article className={styles.card}>
        <h2 className={styles.question}>Can You Travel to NYC Alone?</h2>
        <p className={styles.answer}>
          Yes, you can travel to NYC alone, and it is one of the easiest major
          cities for solo travelers. The city is walkable, well connected by
          public transportation, and offers many solo‑friendly experiences.
        </p>
      </article>

      <article className={styles.card}>
        <h2 className={styles.question}>Solo Trip to NYC: What You Should Know</h2>
        <p className={styles.answer}>
          A solo trip to NYC is ideal for both first‑time and experienced
          travelers. Staying in central neighborhoods and planning flexible
          activities makes traveling alone comfortable and enjoyable.
        </p>
      </article>

      <article className={styles.card}>
        <h2 className={styles.question}>
          Is NYC Safe for Solo Female Travelers (2025–2026)?
        </h2>
        <p className={styles.answer}>
          Yes, NYC is generally safe for solo female travelers in 2025–2026,
          especially in busy, well‑lit areas such as Manhattan and central
          Brooklyn. Awareness and smart location choices significantly reduce risk.
        </p>
      </article>

      <article className={styles.card}>
        <h2 className={styles.question}>Is NYC Good for Solo Travel?</h2>
        <p className={styles.answer}>
          NYC is one of the best cities in the United States for solo travel due
          to its constant activity, diverse attractions, and extensive public
          transportation network.
        </p>
      </article>

    </section>
  );
}