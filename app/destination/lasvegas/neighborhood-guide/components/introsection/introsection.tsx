import styles from './introsection.module.css';

type IntroSectionProps = {
  tripType?: string;
  interest?: string;
}

export default function IntroSection({tripType, interest}: IntroSectionProps) {
  return (
    <section className={`${styles.background ?? ''}`}>
      <div className={styles.wrapper}>
      <h1 className={styles.heading}>Las Vegas Neighborhood Guide</h1>
      <p className={styles.description}>
        Las Vegas is far more than the Strip — it is a spread of distinct areas,
        from the resort corridor to historic Downtown and the quiet residential
        suburbs, each with its own personality, pace, and atmosphere. This guide
        explains what each major area is actually like so you can confidently
        decide where to stay and explore.
      </p>
      </div>
    </section>
  );
}