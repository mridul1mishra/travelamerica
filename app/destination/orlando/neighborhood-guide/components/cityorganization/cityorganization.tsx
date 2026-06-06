import styles from './cityorganization.module.css';

export default function CityOrganization() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <h2 className={styles.heading}>How Orlando Is Organized</h2>
      <p className={styles.copy}>
        Greater Orlando is spread out, and for visitors it's easiest to think in terms of
        park zones rather than traditional neighborhoods.
      </p>
      <p className={styles.copy}>
        Most travelers base themselves near Walt Disney World (Lake Buena Vista), near
        Universal and International Drive, or in Kissimmee — because those zones offer the
        easiest access to the parks, dining, and attractions.
      </p>
      </div>
    </section>
  );
}
