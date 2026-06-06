import styles from './introsection.module.css';

type IntroSectionProps = {
  tripType?: string;
  interest?: string;
}

export default function IntroSection({tripType, interest}: IntroSectionProps) {
  return (
    <section className={`${styles.background ?? ''}`}>
      <div className={styles.wrapper}>
      <h1 className={styles.heading}>Orlando Neighborhood Guide</h1>
      <p className={styles.description}>
        Orlando is organized around its theme parks, and each area has its own
        personality, pace, and proximity to the action. This guide helps you understand
        how Orlando's areas differ so you can confidently decide where to stay and explore.
      </p>
      </div>
    </section>
  );
}
