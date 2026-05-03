import styles from './introsection.module.css';

export default function IntroSection() {
  return (
    <section className={`${styles.background ?? ''}`}>
      <div className={styles.wrapper}>
      <h1 className={styles.heading}>New York City Neighborhood Guide</h1>
      <p className={styles.description}>
        New York City is made up of many distinct neighborhoods, each with its own
        personality, pace, and atmosphere. This guide helps you understand how NYC neighborhoods differ so you can
        confidently decide where to stay and explore.
      </p>
      </div>
    </section>
  );
}