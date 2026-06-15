import styles from "../../nyc.module.css";

const seasons = [
  {
    when: "April–June",
    label: "Best Overall",
    why: "Mild weather, manageable crowds outside major holidays, daylight long enough for late-evening walks. Hotel rates 20-30% lower than peak summer or December.",
  },
  {
    when: "September–October",
    label: "Also Best Overall",
    why: "The sweet spot — comfortable temperatures, fall colors in Central Park, full programming for theater and museums. Pair with a fall foliage day trip up the Hudson.",
  },
  {
    when: "July–August",
    label: "Avoid if You Can",
    why: "Hot (85-95°F) and humid. Subway platforms get brutal. Tourist peak — lines double everywhere. Hotel prices spike.",
  },
  {
    when: "December (last week)",
    label: "Magical but Brutal",
    why: "Holiday lights and decorations are stunning, but the week between Christmas and New Year is the single most crowded week of the year. Book months ahead.",
  },
  {
    when: "January–March",
    label: "Cheapest",
    why: "Cold, sometimes below freezing. Lowest hotel rates of the year. Good for museum-heavy itineraries; bad for outdoor walking unless you\'re cold-tolerant.",
  },
];

export default function BestTime() {
  return (
    <section className={styles.bestTime}>
      <h2>Best Time to Visit NYC</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        NYC has a clear shoulder season that beats summer and December on almost every measure.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1rem",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {seasons.map(({ when, label, why }) => (
          <article
            key={when}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: 8,
              padding: "1.25rem",
              background: "#fff",
            }}
          >
            <div style={{ fontSize: "0.8rem", color: "#1d4ed8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
              {label}
            </div>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem", fontWeight: 700 }}>{when}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem", margin: 0, lineHeight: 1.55 }}>{why}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
