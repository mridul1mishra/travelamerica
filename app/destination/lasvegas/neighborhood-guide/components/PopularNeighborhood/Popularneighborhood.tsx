import styles from './Popularneighborhood.module.css';

type PopularNeighborhoodsProps = {
  interest?: string;
}

export default function PopularNeighborhoods({interest}: PopularNeighborhoodsProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Popular Neighborhoods for Tourists</h2>

      <p className={styles.intro}>
        These areas are some of the most popular choices for visitors
        because they balance convenience, character, and access to attractions.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Mid-Strip</h3>
          <p className={styles.vibe}>Central · Walkable · Premium</p>
          <p>
            The heart of everything — Bellagio, Aria, Cosmopolitan, and Caesars
            sit here, within walking distance of most shows and free attractions.
            The most convenient base in the city.
          </p>
        </div>

        <div className={styles.card}>
          <h3>South Strip</h3>
          <p className={styles.vibe}>Value · Arena · Family‑friendly</p>
          <p>
            Mandalay Bay, Luxor, and MGM Grand, plus T-Mobile Arena. Cheaper than
            Mid-Strip with a short walk or quick rideshare north to the center.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Downtown / Fremont Street</h3>
          <p className={styles.vibe}>Vintage · Lively · Best value</p>
          <p>
            Old Vegas under the Fremont Street Experience canopy, with free nightly
            light shows and rooms well below Strip prices. Grittier and more local.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Summerlin</h3>
          <p className={styles.vibe}>Upscale · Quiet · Outdoorsy</p>
          <p>
            A polished west-side suburb minutes from Red Rock Canyon, with an
            outdoor mall and calm residential streets. Car-dependent, with none
            of the casino noise.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Henderson</h3>
          <p className={styles.vibe}>Residential · Calm · Convenient</p>
          <p>
            A relaxed suburb southeast of the Strip with quieter casinos, the
            Lake Las Vegas resort area, and easy airport access. A car is essential.
          </p>
        </div>
      </div>
    </section>
  );
}