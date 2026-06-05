import Link from "next/link";
import styles from "../../orlando.module.css";

const itineraries = [
  {
    title: "5-Day Orlando Theme Park Itinerary",
    description: "Day 1: Magic Kingdom. Day 2: Universal + Islands of Adventure. Day 3: EPCOT. Day 4: Hollywood Studios. Day 5: Kennedy Space Center or a water park.",
    href: "/destination/orlando/itinerary",
  },
  {
    title: "Orlando Without Kids",
    description: "EPCOT's food and wine circuit, Discovery Cove dolphins, Kennedy Space Center, and the natural springs — the non-thrill-ride side of Orlando.",
    href: "/destination/orlando/solo-itinerary",
  },
];

export default function ItinerariesPreview() {
  return (
    <section className={styles.itineraries}>
      <h2>Sample Itineraries</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Not sure how to structure your days? These itineraries show how to pace a typical Orlando trip without wasting time on logistics.
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
