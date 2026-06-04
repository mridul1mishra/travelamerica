import styles from './cityorganization.module.css';

export default function CityOrganization() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <h2 className={styles.heading}>How Los Angeles Is Organized</h2>
      <p className={styles.copy}>
        Los Angeles is spread across hundreds of square miles, divided into
        distinct neighborhoods that each have their own feel and layout.
      </p>
      <p className={styles.copy}>
        Most visitors focus on the Westside and central areas — Santa Monica,
        Venice, West Hollywood, and Downtown — because they offer the easiest
        access to landmarks, beaches, and dining.
      </p>
      </div>
    </section>
  );
}