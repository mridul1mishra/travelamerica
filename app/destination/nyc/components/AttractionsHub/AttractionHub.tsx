import Link from "next/link";
import styles from "./attractionhub.module.css";

const attractions = [
  {
    name: "Statue of Liberty & Ellis Island",
    blurb: "Half-day visit; book the first ferry, skip the crown.",
    href: "/destination/nyc/landmark#statue-of-liberty",
  },
  {
    name: "Empire State Building",
    blurb: "Iconic skyline views. Go at 9 PM — sunset is overcrowded.",
    href: "/destination/nyc/landmark#empire-state-building",
  },
  {
    name: "Top of the Rock",
    blurb: "Better than Empire State for photos — you can see Empire State in the view.",
    href: "/destination/nyc/landmark#top-of-the-rock",
  },
  {
    name: "Central Park",
    blurb: "Free, walkable, essential. The Mall → Bethesda → Bow Bridge in 90 min.",
    href: "/destination/nyc/landmark#central-park",
  },
  {
    name: "9/11 Memorial & Museum",
    blurb: "Plaza is free; museum is $33. Weekday morning, allow 2-3 hours.",
    href: "/destination/nyc/landmark#911-memorial-museum",
  },
  {
    name: "Brooklyn Bridge",
    blurb: "Walk Manhattan to DUMBO at sunset. 30-45 min one way.",
    href: "/destination/nyc/landmark#brooklyn-bridge",
  },
];

export default function AttractionsHub() {
  return (
    <section className={styles.attractions}>
      <h2>Top Attractions Worth Your Time</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        9 NYC landmarks with addresses, hours, tickets, and the solo-traveler tips for each.
      </p>

      <div className={styles.grid}>
        {attractions.map(({ name, blurb, href }) => (
          <Link
            key={href}
            href={href}
            className={styles.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{name}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{blurb}</p>
          </Link>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link href="/destination/nyc/landmark" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          See all 9 landmarks with full details →
        </Link>
      </div>
    </section>
  );
}
