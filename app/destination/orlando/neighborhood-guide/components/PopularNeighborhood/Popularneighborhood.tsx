import styles from './Popularneighborhood.module.css';

type PopularNeighborhoodsProps = {
  interest?: string;
}

export default function PopularNeighborhoods({interest}: PopularNeighborhoodsProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Popular Areas for Tourists</h2>

      <p className={styles.intro}>
        These areas are some of the most popular choices for visitors because they balance
        convenience, value, and access to the parks and attractions.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>International Drive (I‑Drive)</h3>
          <p className={styles.vibe}>Busy · Central · Attraction‑packed</p>
          <p>Home to ICON Park, dining, and dinner shows, I‑Drive offers great convenience and walkability within the corridor.</p>
        </div>

        <div className={styles.card}>
          <h3>Lake Buena Vista / Disney Springs</h3>
          <p className={styles.vibe}>Convenient · Family · Disney‑focused</p>
          <p>Closest to Disney's four parks, with on‑site perks like early park entry. Pricier but removes the logistics.</p>
        </div>

        <div className={styles.card}>
          <h3>Universal Area</h3>
          <p className={styles.vibe}>Lively · Walkable · Entertainment</p>
          <p>Walk to Universal and CityWalk; a strong base for thrill‑seekers and easy access to I‑Drive.</p>
        </div>

        <div className={styles.card}>
          <h3>Kissimmee (US‑192)</h3>
          <p className={styles.vibe}>Budget · Family · Vacation homes</p>
          <p>South of Disney, with affordable hotels and rental houses. A car helps — it's spread out.</p>
        </div>

        <div className={styles.card}>
          <h3>Downtown Orlando & Winter Park</h3>
          <p className={styles.vibe}>Local · Dining · Relaxed</p>
          <p>Authentic city character, good restaurants, and Lake Eola — about 30 minutes from the parks.</p>
        </div>
      </div>
    </section>
  );
}
