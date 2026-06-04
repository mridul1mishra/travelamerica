import Link from "next/link";
import styles from "../../lasvegas.module.css";

const neighborhoods = [
  {
    name: "The Strip (Center)",
    vibe: "Most hotels, casinos, shows, and restaurants within walking distance. Loud and busy 24/7.",
    bestFor: "First-time visitors, nightlife",
  },
  {
    name: "The Strip (North)",
    vibe: "Quieter end near the STRAT. Budget hotel options. A bit more walking to the mid-Strip landmarks.",
    bestFor: "Budget stays, longer trips",
  },
  {
    name: "Downtown / Fremont",
    vibe: "Older, grittier, more local. Lower hotel prices. The Fremont Street Experience is the centrepiece.",
    bestFor: "Budget travelers, repeat visitors",
  },
  {
    name: "Arts District (18b)",
    vibe: "Walkable warehouse district just south of Downtown. Galleries, breweries, vintage shops, indie bars.",
    bestFor: "Creatives, locals' Vegas, foodies",
  },
  {
    name: "Chinatown / Spring Mountain Rd",
    vibe: "The city's best off-Strip dining strip — Asian food, late-night eats, no resort fees. Need a car or rideshare.",
    bestFor: "Food-focused trips, repeat visitors",
  },
  {
    name: "Summerlin & Henderson",
    vibe: "Upscale, quiet western/eastern suburbs. Red Rock Canyon and Lake Las Vegas access. Away from casino energy.",
    bestFor: "Families, hiking, calmer stays",
  },
];

export default function NeighborhoodsHub() {
  return (
    <section className={styles.neighborhoods}>
      <h2>Las Vegas Neighborhoods</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Where you stay determines how you experience Vegas — the Strip and Downtown are genuinely different trips. Six areas, who they suit, and why.
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
        <Link href="/destination/lasvegas/neighborhood-guide" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          Full neighborhood guide with maps →
        </Link>
      </div>
    </section>
  );
}
