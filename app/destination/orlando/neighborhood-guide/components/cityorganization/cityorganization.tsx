import styles from './cityorganization.module.css';

export default function CityOrganization() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
      <h2 className={styles.heading}>How Orlando Is Organized</h2>
      <p className={styles.copy}>
        Greater Orlando is a car city spread across 40+ miles. For visitors, it helps to think
        in four zones: the Disney Corridor (Lake Buena Vista, Kissimmee), International Drive
        (Universal, ICON Park, I-Drive attractions), Downtown Orlando, and Winter Park and
        College Park (local neighborhoods north of downtown).
      </p>
      <p className={styles.copy}>
        Most first-time visitors stay in the Disney Corridor or along International Drive because
        those zones have the highest concentration of hotels and park proximity. They're different
        in feel — the Disney Corridor is quieter and resort-centric; International Drive is busier
        and more mixed, with walkable blocks around ICON Park and Sand Lake Road.
      </p>
      <p className={styles.copy}>
        For solo travelers: Orlando is harder to navigate without a car than most US tourist
        destinations. If you're not renting a car, base yourself on International Drive — it has
        walkable stretches, consistent rideshare coverage, and the most dining and entertainment
        within walking distance. Downtown Orlando and Winter Park are worth day trips for anyone
        wanting a break from the resort corridor.
      </p>
      </div>
    </section>
  );
}
