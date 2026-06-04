import Link from "next/link";
import styles from "../../lasvegas.module.css";

const itineraries = [
  {
    title: "3-Day Las Vegas Itinerary",
    description: "Day 1: Strip walk + Bellagio fountains + an evening show. Day 2: day trip to Hoover Dam or Valley of Fire. Day 3: Fremont Street + the Mob Museum + a late night out.",
    href: "/destination/lasvegas/itinerary",
  },
  {
    title: "Las Vegas on a Budget",
    description: "Free attractions (fountains, hotel atriums, the Fremont canopy), Chinatown eats, off-Strip casinos, and when to find the lowest room rates. Walk the Strip and the Deuce bus over rideshare.",
    href: "/destination/lasvegas/solo-itinerary",
  },
];

export default function ItinerariesPreview() {
  return (
    <section className={styles.itineraries}>
      <h2>Sample Itineraries</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Not sure how to structure your days? These itineraries show how to pace a Vegas trip so you see and do the things that actually matter.
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
