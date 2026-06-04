import styles from './Popularneighborhood.module.css';

type PopularNeighborhoodsProps = {
  interest?: string;
}

export default function PopularNeighborhoods({interest}: PopularNeighborhoodsProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Popular Neighborhoods for Tourists</h2>

      <p className={styles.intro}>
        These neighborhoods are some of the most popular choices for visitors
        because they balance convenience, character, and access to attractions.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Santa Monica</h3>
          <p className={styles.vibe}>Walkable · Beach · Family‑friendly</p>
          <p>
            LA's most walkable neighborhood, with the pier, Third Street Promenade
            shopping, and a strong café culture. Safe day and night.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Venice</h3>
          <p className={styles.vibe}>Creative · Eclectic · Beachfront</p>
          <p>
            Beach boardwalk, Abbot Kinney Blvd boutiques, and street art. The
            canal district is beautiful and quiet, with a laid‑back creative scene.
          </p>
        </div>

        <div className={styles.card}>
          <h3>West Hollywood (WeHo)</h3>
          <p className={styles.vibe}>Social · Nightlife · Dining</p>
          <p>
            The Sunset Strip, rooftop bars, excellent restaurants, and the LGBTQ+
            epicenter. Mostly safe and well‑lit at night.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Downtown LA (DTLA)</h3>
          <p className={styles.vibe}>Central · Arts · Best value</p>
          <p>
            Grand Central Market, The Broad, and the Arts District galleries.
            The best value accommodation in central LA, though some areas are
            still rough.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Beverly Hills</h3>
          <p className={styles.vibe}>Luxury · Safe · Refined</p>
          <p>
            Rodeo Drive, luxury hotels, and the safest streets in LA. Very
            car‑dependent but impeccable — ideal for special occasions.
          </p>
        </div>
      </div>
    </section>
  );
}