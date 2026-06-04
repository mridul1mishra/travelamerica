import styles from "../../la.module.css";

const seasons = [
  {
    when: "March–May",
    label: "Best Overall",
    why: "Warm but not hot, low humidity, wildflowers in the canyons, and smaller crowds than summer. Hotel rates are lower than the peak July–August window.",
  },
  {
    when: "September–November",
    label: "Also Best Overall",
    why: "Arguably LA's finest stretch — warm ocean, clear skies, and fewer tourists once kids are back in school. October weather is close to perfect.",
  },
  {
    when: "June–August",
    label: "Peak & Crowded",
    why: "Beaches are packed and hotels spike. Mornings near the coast can be grey (June Gloom) before the sun burns through. Book well ahead.",
  },
  {
    when: "Late December",
    label: "Festive but Busy",
    why: "Mild and sunny while much of the country freezes, which draws crowds and pushes rates up around the holidays. Book early for the best areas.",
  },
  {
    when: "January–February",
    label: "Cheapest",
    why: "The quietest, most affordable season. Occasional rain, but plenty of clear days — good for museums, food, and uncrowded landmarks.",
  },
];

export default function BestTime() {
  return (
    <section className={styles.bestTime}>
      <h2>Best Time to Visit LA</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        LA is good year-round, but the spring and fall shoulder seasons beat summer on weather, crowds, and price.
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
            <div style={{ fontSize: "0.8rem", color: "#0364A0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
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
