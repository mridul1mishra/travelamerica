import styles from './Neighborhoodbystyle.module.css';

type NeighborhoodsByStyleProps = {
  interest?: string;
}

export default function NeighborhoodsByStyle({interest}: NeighborhoodsByStyleProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Areas by Travel Style</h2>

      <p className={styles.intro}>
        Orlando's areas feel very different depending on where you stay. Use the sections
        below to quickly find the zone that matches how you want to experience your trip.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>First‑Time Visitors</h3>
          <p><strong>Lake Buena Vista, International Drive</strong></p>
          <p>Central to the parks with easy access to dining, attractions, and transport.</p>
        </div>

        <div className={styles.card}>
          <h3>Disney Trips</h3>
          <p><strong>Lake Buena Vista / Disney Springs</strong></p>
          <p>On‑site and nearby hotels with early park entry and short Disney commutes.</p>
        </div>

        <div className={styles.card}>
          <h3>Universal & Thrills</h3>
          <p><strong>Universal Area, International Drive</strong></p>
          <p>Walk to Universal, with I‑Drive dining and attractions close by.</p>
        </div>

        <div className={styles.card}>
          <h3>Families & Budget</h3>
          <p><strong>Kissimmee (US‑192)</strong></p>
          <p>Value hotels and vacation homes, popular with large groups renting houses.</p>
        </div>

        <div className={styles.card}>
          <h3>Local & Nightlife</h3>
          <p><strong>Downtown Orlando, Winter Park</strong></p>
          <p>Restaurants, bars, and a local feel away from the resort corridors.</p>
        </div>
      </div>
    </section>
  );
}
