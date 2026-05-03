import styles from './Neighborhoodbystyle.module.css';

export default function NeighborhoodsByStyle() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Neighborhoods by Travel Style</h2>

      <p className={styles.intro}>
        NYC neighborhoods feel very different depending on where you stay.
        Use the sections below to quickly find areas that match how you want
        to experience the city.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>First‑Time Visitors</h3>
          <p>
            <strong>Midtown Manhattan, Lower Manhattan</strong>
          </p>
          <p>
            Central locations with easy access to landmarks, transit, and
            sightseeing.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Sightseeing & Landmarks</h3>
          <p>
            <strong>Midtown, Upper West Side</strong>
          </p>
          <p>
            Walkable areas close to major attractions, museums, and parks.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Food & Culture</h3>
          <p>
            <strong>Lower East Side, Williamsburg</strong>
          </p>
          <p>
            Known for diverse dining, nightlife, and creative energy.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Families</h3>
          <p>
            <strong>Upper East Side, Brooklyn Heights</strong>
          </p>
          <p>
            Quieter streets, parks nearby, and a more relaxed pace.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Budget‑Focused Travelers</h3>
          <p>
            <strong>Harlem, Long Island City</strong>
          </p>
          <p>
            More affordable options with reliable subway access.
          </p>
        </div>
      </div>
    </section>
  );
}