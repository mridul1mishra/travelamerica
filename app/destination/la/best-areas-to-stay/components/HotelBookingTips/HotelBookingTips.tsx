import styles from "../../bestareatostay.module.css";

const quickTips = [
  "Hotel tax differs by city: Santa Monica lists 15%, West Hollywood 12.5%, and the City of Los Angeles and Beverly Hills 14%. Compare the all-in total, not just the nightly rate.",
  "Parking and destination fees are set by each hotel and can be separate from the room rate. Check the fee and what it includes on your own booking.",
  "Rates change with the season and with events. If your dates are flexible, compare several nights before you commit.",
  "If you plan to use Metro, bus or shuttle services, check the current fares and timetables, since they change.",
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
