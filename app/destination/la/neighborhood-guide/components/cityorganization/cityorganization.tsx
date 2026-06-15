import styles from './cityorganization.module.css';

export default function CityOrganization() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <h2 className={styles.heading}>How Los Angeles Is Organized</h2>
      <p className={styles.copy}>
        LA doesn't have a single downtown — it's a collection of neighborhoods connected by freeways.
        The key mental map: the Westside (Santa Monica, Venice, West Hollywood, Brentwood) vs. Central
        and East (Downtown, Koreatown, Silver Lake, Los Feliz) vs. the Valley (Universal, Burbank, Studio City).
      </p>
      <p className={styles.copy}>
        Most visitors orient around the Westside for its beaches, walkable blocks, and proximity to
        Beverly Hills and Hollywood. But staying Westside means LA's best food — Koreatown, Sawtelle
        Japantown, Thai Town — is a 20–30 minute drive away. LA requires accepting that you'll drive
        or rideshare between most experiences.
      </p>
      <p className={styles.copy}>
        For solo travelers: the Westside — especially Santa Monica and West Hollywood — has enough density
        to walk without a car for a day or two. The Metro is expanding but doesn't yet connect most tourist
        areas effectively. Budget extra time for all road-based travel.
      </p>
      </div>
    </section>
  );
}
