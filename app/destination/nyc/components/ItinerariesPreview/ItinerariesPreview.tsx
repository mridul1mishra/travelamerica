import Link from "next/link";
import styles from "../../nyc.module.css";

const itineraries = [
  {
    title: "Solo NYC Itinerary",
    description: "A 3-day plan built for solo travelers — safe neighborhoods, efficient routing, and how to pace each day without burning out.",
    href: "/majorcities/newyork/solo-itinerary",
  },
  {
    title: "Group NYC Itinerary",
    description: "A 3-day group plan covering the MET, Central Park, Guggenheim, and Frick Collection with logistics for traveling together.",
    href: "/majorcities/newyork/group-itinerary",
  },
];

export default function ItinerariesPreview() {
  return (
    <section className={styles.itineraries}>
      <h2>Sample Itineraries</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Not sure how to structure your days? These itineraries show how to pace a typical NYC trip without wasting time on logistics.
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
