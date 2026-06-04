import styles from './Neighborhoodbystyle.module.css';

type NeighborhoodsByStyleProps = {
  interest?: string;
}

export default function NeighborhoodsByStyle({interest}: NeighborhoodsByStyleProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Neighborhoods by Travel Style</h2>

      <p className={styles.intro}>
        LA neighborhoods feel very different depending on where you stay.
        Use the sections below to quickly find areas that match how you want
        to experience the city.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>First‑Time Visitors</h3>
          <p>
            <strong>Santa Monica, Beverly Hills</strong>
          </p>
          <p>
            Walkable, safe locations with easy access to the beach, shopping,
            and the city's most famous landmarks.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Nightlife & Dining</h3>
          <p>
            <strong>West Hollywood, Koreatown</strong>
          </p>
          <p>
            The Sunset Strip, rooftop bars, and 24‑hour Korean restaurants for
            a serious food and nightlife scene.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Food & Culture</h3>
          <p>
            <strong>Silver Lake / Los Feliz, Downtown LA</strong>
          </p>
          <p>
            Known for independent restaurants, hipster coffee culture, galleries,
            and creative energy.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Creatives & Younger Travelers</h3>
          <p>
            <strong>Venice, Abbot Kinney</strong>
          </p>
          <p>
            Beach boardwalk, boutiques, street art, and a laid‑back creative
            scene by the water.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Budget‑Focused Travelers</h3>
          <p>
            <strong>Downtown LA, Koreatown</strong>
          </p>
          <p>
            The best value accommodation in central LA with the densest,
            most walkable streets.
          </p>
        </div>
      </div>
    </section>
  );
}