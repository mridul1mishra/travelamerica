import styles from "./NeighborhoodCards.module.css";
import type { NeighborhoodCardsProps } from "../typesafeatnight";
import AreaHotelLink from "@/app/components/hotels/AreaHotelLink";
import { lasvegasNightHotelAreas } from "@/app/lib/lasvegasHotelAreas";

export default function NeighborhoodCards({ neighborhoods }: NeighborhoodCardsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div id="neighborhood-advice" data-safety-section>
          <h2 className={styles.heading}>Neighborhood Deep Dives</h2>
        </div>

        <div className={styles.grid}>
          {neighborhoods.map((n, index) => (
            <article key={index} className={styles.card}>
              {/* Header */}
              <header className={styles.header}>
                <h3 className={styles.name}>{n.name}</h3>
                <span className={`${styles.badge} ${styles[n.safetyRating.toLowerCase()]}`}>
                  {n.safetyRating}
                </span>
              </header>

              {/* Night vibe */}
              <p className={styles.vibe}>{n.nightVibe}</p>
              <div className={styles.indicators}>
                <div className={styles.indicatorItem}>
                  <span className={styles.icon}>💡</span>
                  <span className={styles.label}>Lighting:</span> {n.indicators.lighting}
                </div>
              
                <div className={styles.indicatorItem}>
                  <span className={styles.icon}>🚶</span>
                  <span className={styles.label}>Foot Traffic:</span> {n.indicators.footTraffic}
                </div>
              
                <div className={styles.indicatorItem}>
                  <span className={styles.icon}>🚓</span>
                  <span className={styles.label}>Police Presence:</span> {n.indicators.policePresence}
                </div>
              </div>


              {/* Magazine-style 2-column layout */}
              <div className={styles.columns}>
                <div className={styles.column}>
                  <h4 className={styles.subheading}>Safe Spots</h4>
                  <ul className={styles.list}>
                    {n.safeSpots.map((spot, i) => (
                      <li key={i}>{spot}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.column}>
                  <h4 className={styles.subheading}>Use Extra Care</h4>
                  <ul className={styles.list}>
                    {n.avoidSpots.map((spot, i) => (
                      <li key={i}>{spot}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <footer className={styles.footer}>
                <p><strong>Ideal For:</strong> {n.idealFor}</p>
                <p><strong>Not For:</strong> {n.notFor}</p>
                <AreaHotelLink city="lasvegas" choice={lasvegasNightHotelAreas[n.name]} source="is-lasvegas-safe-at-night"
                  placement="safe_neighborhoods" idKey={n.name} />
              </footer>
            </article>
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <a href="/destination/lasvegas/safety-guide" className={styles.ctaPrimary}>
            See Nighttime Safety Tips → 
          </a>
      </div>
      </div>
    </section>
  );
}
