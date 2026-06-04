import styles from "../../lasvegas.module.css";

const seasons = [
  {
    when: "March–May",
    label: "Best Overall",
    why: "Warm, dry days and comfortable evenings — ideal for pool time and day trips before the desert heat arrives. Rates sit below the summer convention peaks outside big event weekends.",
  },
  {
    when: "September–November",
    label: "Also Best Overall",
    why: "The heat breaks and the pools are still open. Clear skies and mild evenings make this the sweet spot for walking the Strip and hiking Red Rock or Valley of Fire.",
  },
  {
    when: "June–August",
    label: "Brutally Hot",
    why: "Daytime highs of 100–110°F. Great for dayclubs and pools, punishing for anything outdoors. Hotel rates can actually dip midweek as leisure travelers avoid the heat.",
  },
  {
    when: "December–early January",
    label: "Festive but Pricey",
    why: "Mild days, cold nights, and huge crowds around New Year's Eve and major fights. The Strip NYE party is iconic but books out months ahead at peak rates.",
  },
  {
    when: "January–February",
    label: "Cheapest",
    why: "The quietest, most affordable stretch — cool days, cold nights. Best for show-and-dining trips and budget room rates, minus a few big convention and event weekends.",
  },
];

export default function BestTime() {
  return (
    <section className={styles.bestTime}>
      <h2>Best Time to Visit Las Vegas</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Vegas runs year-round, but spring and fall beat the summer heat and the holiday crowds on weather, comfort, and price.
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
