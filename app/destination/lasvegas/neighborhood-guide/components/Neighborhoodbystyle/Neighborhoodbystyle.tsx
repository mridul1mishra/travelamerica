import styles from './Neighborhoodbystyle.module.css';

type NeighborhoodsByStyleProps = {
  interest?: string;
}

export default function NeighborhoodsByStyle({interest}: NeighborhoodsByStyleProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Neighborhoods by Travel Style</h2>

      <p className={styles.intro}>
        Las Vegas areas feel very different depending on where you stay.
        Use the sections below to quickly find areas that match how you want
        to experience the city.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>First‑Time Visitors</h3>
          <p>
            <strong>Mid-Strip, South Strip</strong>
          </p>
          <p>
            Central, walkable locations with easy access to the biggest shows,
            restaurants, and free attractions — no car needed.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Nightlife &amp; Casinos</h3>
          <p>
            <strong>Mid-Strip, Downtown / Fremont Street</strong>
          </p>
          <p>
            Mega-club casinos on the Strip and the free Fremont Street
            Experience light shows for classic, energetic Vegas nights.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Food &amp; Culture</h3>
          <p>
            <strong>Arts District (18b), Chinatown / Spring Mountain Rd</strong>
          </p>
          <p>
            Independent galleries, craft cocktail bars, the First Friday art walk,
            and the city&rsquo;s deepest Asian dining scene.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Families</h3>
          <p>
            <strong>Summerlin, Henderson</strong>
          </p>
          <p>
            Quieter suburban streets, parks and trails nearby, and a relaxed pace
            away from the casino energy.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Budget‑Focused Travelers</h3>
          <p>
            <strong>North Strip, Downtown / Fremont Street</strong>
          </p>
          <p>
            The cheapest rooms in town, often well under Strip-center prices, with
            the Deuce bus connecting you to the action.
          </p>
        </div>
      </div>
    </section>
  );
}
