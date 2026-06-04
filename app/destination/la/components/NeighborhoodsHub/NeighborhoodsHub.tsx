import Link from "next/link";
import styles from "../../la.module.css";

const neighborhoods = [
  {
    name: "Santa Monica",
    vibe: "Beach city feel, walkable, safe, great restaurants. Pricier hotels but car-optional.",
    bestFor: "First-time visitors, beach lovers",
  },
  {
    name: "Hollywood / Los Feliz",
    vibe: "Central location, easy freeway access. Los Feliz is trendier and more local.",
    bestFor: "Budget mid-range stays, central access",
  },
  {
    name: "West Hollywood (WeHo)",
    vibe: "Walkable strip of Sunset Blvd. Great nightlife and dining. LGBTQ+ friendly, vibrant.",
    bestFor: "Nightlife, dining scene, repeat visitors",
  },
  {
    name: "Silver Lake / Echo Park",
    vibe: "Indie, creative, very local. Coffee shops, record stores, hiking. Close to DTLA.",
    bestFor: "Younger travelers, longer stays",
  },
  {
    name: "Manhattan Beach / Hermosa Beach",
    vibe: "South Bay beach cities. Quieter than Santa Monica, family-friendly. 30 min from LAX.",
    bestFor: "Beach-focused trips, families",
  },
  {
    name: "Downtown LA (DTLA)",
    vibe: "Grand Central Market, The Broad, Arts District. Improving but uneven — pick your block.",
    bestFor: "Art, food, urban exploration",
  },
];

export default function NeighborhoodsHub() {
  return (
    <section className={styles.neighborhoods}>
      <h2>LA Neighborhoods</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Where you stay in LA matters enormously — it&apos;s a sprawling city and the neighborhoods are genuinely different worlds. Six areas, who they suit, and why.
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
        <Link href="/destination/la/neighborhood-guide" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          Full neighborhood guide with maps →
        </Link>
      </div>
    </section>
  );
}
