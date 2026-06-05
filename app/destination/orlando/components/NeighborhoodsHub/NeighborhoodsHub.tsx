import Link from "next/link";
import styles from "../../orlando.module.css";

const neighborhoods = [
  { name: "Lake Buena Vista / Disney Springs", vibe: "Closest to Disney's 4 parks. On-site hotels get early park entry. Pricier but removes logistics.", bestFor: "Disney-focused trips, families" },
  { name: "Universal / International Drive", vibe: "Midpoint between Disney and Downtown. Walk to Universal, easy access to I-Drive dining and attractions.", bestFor: "Universal visitors, flexible itineraries" },
  { name: "International Drive (I-Drive)", vibe: "Hotel-dense corridor with restaurants, mini-golf, shops, and ICON Park. Noisy but very convenient.", bestFor: "Budget stays, first-timers" },
  { name: "Kissimmee", vibe: "South of Disney, budget-friendly vacation homes and hotels. A car helps. Popular with families renting houses.", bestFor: "Large groups, budget-conscious families" },
  { name: "Downtown Orlando", vibe: "Local vibe, good restaurants, Lake Eola park. 30 min from Disney — authentic city character over park convenience.", bestFor: "Repeat visitors, longer stays" },
];

export default function NeighborhoodsHub() {
  return (
    <section className={styles.neighborhoods}>
      <h2>Orlando Areas to Stay</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Where you stay matters more than what you book. Five park zones, who they suit, and why.
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
        <Link href="/destination/orlando/neighborhood-guide" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          Full neighborhood guide with maps →
        </Link>
      </div>
    </section>
  );
}
