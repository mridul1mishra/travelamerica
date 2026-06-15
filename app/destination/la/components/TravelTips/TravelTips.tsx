import styles from "../../la.module.css";

const tips = [
  {
    title: "You will probably need a car",
    body: "LA is sprawling and car-dependent. Outside Santa Monica and the Westside, rideshare adds up fast — a rental car is usually the cheaper, saner option for a multi-day trip.",
  },
  {
    title: "Plan around traffic, not distance",
    body: "Ten miles can take an hour at rush hour. Group activities by area, avoid the 5/405/101 between 7–10am and 4–7pm, and use Google Maps' live traffic before every drive.",
  },
  {
    title: "Stay where your trip actually is",
    body: "Beach trip? Santa Monica or the South Bay. Nightlife and dining? WeHo. Local and creative? Silver Lake. The right neighborhood saves hours of driving each day.",
  },
  {
    title: "Book studio tours and big attractions ahead",
    body: "Warner Bros. and Paramount tours, plus timed entries like The Broad, sell out. Reserve a week or more in advance, especially in summer and on weekends.",
  },
  {
    title: "LAX vs Burbank vs Long Beach",
    body: "LAX has the most flights but the worst congestion. Burbank (BUR) is far easier for Hollywood and the Valley; Long Beach (LGB) suits the South Bay. Compare all three.",
  },
  {
    title: "Layer for the microclimates",
    body: "The coast runs 10–15°F cooler than the Valley or downtown, and evenings get crisp. Bring a light layer even on a hot day, plus sunscreen year-round.",
  },
];

export default function TravelTips() {
  return (
    <section className={styles.travelTips}>
      <h2>Practical LA Travel Tips</h2>
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
