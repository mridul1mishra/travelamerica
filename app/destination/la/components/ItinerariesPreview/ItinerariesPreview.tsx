import Link from "next/link";
import styles from "../../la.module.css";

const itineraries = [
  {
    title: "4-Day Los Angeles Itinerary",
    description: "Day 1: Santa Monica + Venice Beach. Day 2: Hollywood + Griffith Observatory. Day 3: Getty Center + LACMA + WeHo. Day 4: Malibu drive or day trip to Joshua Tree.",
    href: "/destination/la/itinerary",
  },
  {
    title: "LA Without a Car",
    description: "Stay in Santa Monica. Metro Expo Line to DTLA, Uber to Hollywood Hills. The Westside is genuinely walkable — the rest of LA less so.",
    href: "/destination/la/la-metro-map",
  },
];

export default function ItinerariesPreview() {
  return (
    <section className={styles.itineraries}>
      <h2>Sample Itineraries</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Not sure how to structure your days? These itineraries show how to pace an LA trip given the city&apos;s size and traffic.
      </p>
      <div className={styles.grid}>
        {itineraries.map(({ title, description, href }) => (
          <Link
            key={href}
            href={href}
            className={styles.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
