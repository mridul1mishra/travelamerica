import styles from "./NeighborhoodCards.module.css";
import type { NeighborhoodCardsProps } from "../typesafeatnight";

export default function NeighborhoodCards({ neighborhoods }: NeighborhoodCardsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Neighborhood Deep Dives</h2>

        <div className={styles.grid}>
          {neighborhoods.map((n, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.name}>{n.name}</h3>

              <p className={styles.vibe}>{n.nightVibe}</p>

              <div className={styles.rating}>
                <strong>Safety Rating:</strong> {n.safetyRating}
              </div>

              <div className={styles.block}>
                <h4 className={styles.subheading}>Safe Spots</h4>
                <ul className={styles.list}>
                  {n.safeSpots.map((spot, i) => (
                    <li key={i}>{spot}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.block}>
                <h4 className={styles.subheading}>Avoid Spots</h4>
                <ul className={styles.list}>
                  {n.avoidSpots.map((spot, i) => (
                    <li key={i}>{spot}</li>
                  ))}
                </ul>
              </div>

              <p className={styles.meta}>
                <strong>Ideal For:</strong> {n.idealFor}
              </p>

              <p className={styles.meta}>
                <strong>Not For:</strong> {n.notFor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
