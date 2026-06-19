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
          <h3>Midtown Manhattan</h3>
          <p className={styles.vibe}>Subway: N/Q/R/W, 4/5/6 · Hotels from $180/night · Walk to Empire State, Times Square</p>
          <p>
            Home to Times Square, Broadway, and major landmarks, Midtown offers
            unmatched convenience for first‑time visitors.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Upper East Side</h3>
          <p className={styles.vibe}>Subway: 4/5/6 · Museum Mile · Hotels from $160/night</p>
          <p>
            Close to Central Park and Museum Mile, this area feels more relaxed
            while staying well connected.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Lower Manhattan</h3>
          <p className={styles.vibe}>Subway: 2/3, A/C · Walk to 9/11 Memorial, Brooklyn Bridge · Hotels from $150/night</p>
          <p>
            A mix of history, waterfront views, and nightlife, with easy subway
            access across the city.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Brooklyn Heights & DUMBO</h3>
          <p className={styles.vibe}>Subway: A/C, 2/3 · 10 min to Midtown · Hotels from $130/night</p>
          <p>
            Known for tree‑lined streets and skyline views, these neighborhoods
            offer a quieter stay just across the river.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Williamsburg</h3>
          <p className={styles.vibe}>Subway: L train · 20 min to Midtown · Hotels from $120/night</p>
          <p>
            Popular for its restaurants, shops, and nightlife, Williamsburg has
            a youthful energy and easy subway access to Manhattan.
          </p>
        </div>
      </div>
    </section>
  );
}