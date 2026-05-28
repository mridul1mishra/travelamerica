import Link from "next/link";
import styles from "../../nyc.module.css";

const neighborhoods = [
  {
    name: "Midtown Manhattan",
    vibe: "Best for first-timers. Walkable to most landmarks. Hotel-dense.",
    bestFor: "First-time visitors, short trips",
  },
  {
    name: "Upper East Side",
    vibe: "Quiet, residential, Museum Mile. Reliable transit.",
    bestFor: "Calmer pace, museums, families",
  },
  {
    name: "Greenwich Village & SoHo",
    vibe: "Charming, walkable, restaurant-heavy. Pricier hotels.",
    bestFor: "Repeat visitors, foodies",
  },
  {
    name: "Brooklyn Heights & DUMBO",
    vibe: "Skyline views across the East River. Slower pace.",
    bestFor: "Photography, weekend trips",
  },
  {
    name: "Williamsburg",
    vibe: "Trendy, indie, nightlife-heavy. 20 min to Manhattan.",
    bestFor: "Younger travelers, longer stays",
  },
  {
    name: "Harlem",
    vibe: "Cultural depth, food scene, lower hotel prices.",
    bestFor: "Budget conscious, return visitors",
  },
];

export default function NeighborhoodsHub() {
  return (
    <section className={styles.neighborhoods}>
      <h2>NYC Neighborhoods</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Where you stay matters more than what you book. Six neighborhoods, who they suit, and why.
      </p>

      <div className={styles.grid}>
        {neighborhoods.map(({ name, vibe, bestFor }) => (
          <article
            key={name}
            className={styles.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{name}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem", margin: "0 0 0.5rem 0" }}>{vibe}</p>
            <p style={{ color: "#333", fontSize: "0.85rem", margin: 0 }}>
              <strong>Best for:</strong> {bestFor}
            </p>
          </article>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link href="/destination/nyc/neighborhood-guide" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          Full neighborhood guide with maps →
        </Link>
      </div>
    </section>
  );
}
