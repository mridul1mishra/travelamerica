import styles from './cityorganization.module.css';

export default function CityOrganization() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <h2 className={styles.heading}>How New York City Is Organized</h2>
      <p className={styles.copy}>
        New York City is divided into buroughs, each made up of smaller 
        neighborhoods with their own feel and layout
      </p>
      <p className={styles.copy}>
        Most visitors focus on Manhattan and nearby parts of Brooklyn because they offer
        the easiest access to landmarks, transportation, and sightseeing.
      </p>
      </div>
    </section>
  );
}