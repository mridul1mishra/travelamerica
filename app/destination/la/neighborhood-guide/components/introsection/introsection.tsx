import styles from './introsection.module.css';

type IntroSectionProps = {
  tripType?: string;
  interest?: string;
}

export default function IntroSection({tripType, interest}: IntroSectionProps) {
  return (
    <section className={`${styles.background ?? ''}`}>
      <div className={styles.wrapper}>
      <h1 className={styles.heading}>Los Angeles Neighborhood Guide</h1>
      <p className={styles.description}>
        LA is not one city — it is dozens of distinct neighborhoods spread across
        500 square miles, each with its own personality, pace, and atmosphere.
        This guide explains what each major area is actually like so you can
        confidently decide where to stay and explore.
      </p>
      </div>
    </section>
  );
}