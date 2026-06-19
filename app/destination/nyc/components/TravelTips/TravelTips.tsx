import styles from "../../nyc.module.css";

const tips = [
  {
    title: "Use OMNY, skip the MetroCard",
    body: "Tap any contactless credit card or phone wallet at the subway turnstile. $2.90 per ride; caps at $34/week. You don\'t need to buy a separate transit card.",
  },
  {
    title: "Two subway apps beat Google Maps",
    body: "Citymapper and Transit App both handle NYC subway routing better than Google Maps. Load your trip on wifi before you head down to the platform.",
  },
  {
    title: "Tipping is not optional",
    body: "Restaurants: 18-22%. Bars: $1-2 per drink or 20% on the tab. Taxis/rideshare: 15-20%. Skip the suggested 25%+ button — it\'s on every screen and not the standard.",
  },
  {
    title: "Cash is rarely needed",
    body: "Cards work everywhere except a few old-school pizza spots and bodegas. Carry $20-40 in small bills for tips and the occasional cash-only counter.",
  },
  {
    title: "JFK vs LGA vs EWR",
    body: "JFK: cheapest transit in via AirTrain + subway ($13, ~75 min). LGA: closest to Midtown, rideshare ~$45-60. EWR (Newark, NJ): often cheapest fares but inconvenient transit.",
  },
  {
    title: "Walk one extra avenue to save 30%",
    body: "Restaurants and shops one block off the main tourist avenues (5th, Times Square, near landmarks) are dramatically cheaper for the same quality. Always check Google Maps for the next street over.",
  },
];

export default function TravelTips() {
  return (
    <section className={styles.travelTips}>
      <h2>Practical NYC Travel Tips</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Six things that save first-time visitors money, time, or frustration.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {tips.map(({ title, body }) => (
          <article
            key={title}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: 8,
              padding: "1.25rem",
              background: "#fff",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.05rem", fontWeight: 700, color: "#1d4ed8" }}>{title}</h3>
            <p style={{ color: "#1e293b", fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
