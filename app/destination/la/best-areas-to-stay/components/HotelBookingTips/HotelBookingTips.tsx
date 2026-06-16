import styles from "../../bestareatostay.module.css";

const quickTips = [
  "LA has no reliable public transit for most tourist attractions. Budget $15-$30/day for Uber or a rental car on top of hotel costs.",
  "Parking in Santa Monica and Beverly Hills can be $25-$40/day. Factor this into hotel cost comparisons.",
  "Weekday rates are typically 20-30% cheaper. Avoid arriving during major awards season (Jan-Mar) when prices spike.",
  "Resort fees are less common than Vegas but do exist - check the full nightly total, not just the base rate.",
];

export default function HotelBookingTips() {
  return (
    <section aria-labelledby="tips-la" className={styles.section}>
      <h2 id="tips-la">Hotel Booking Tips for Los Angeles</h2>
      <div className={styles.grid}>
        {quickTips.map((tip, i) => (
          <article key={i} className={styles.card}>
            <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{tip}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
