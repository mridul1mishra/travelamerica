import styles from './cityorganization.module.css';

export default function CityOrganization() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <h2 className={styles.heading}>How Las Vegas Is Organized</h2>
      <p className={styles.copy}>
        Las Vegas centers on the Strip — a four-mile stretch of Las Vegas
        Boulevard split into South, Mid, and North sections — with historic
        Downtown and Fremont Street sitting a few miles north of it.
      </p>
      <p className={styles.copy}>
        Most visitors focus on Mid-Strip and Downtown because they offer the
        easiest access to casinos, shows, dining, and free attractions. Beyond
        the resort core, residential suburbs like Summerlin and Henderson and
        the Chinatown corridor on Spring Mountain Road round out the city.
      </p>
      </div>
    </section>
  );
}