import Link from "next/link";
import styles from "./attractionhub.module.css";

const attractions = [
  {
    name: "The Bellagio Fountains",
    blurb: "Free to watch. Shows every 30 min by day, every 15 min at night. Best from the sidewalk opposite.",
    href: "/destination/lasvegas/landmark",
  },
  {
    name: "High Roller Observation Wheel",
    blurb: "550-ft wheel on the LINQ promenade. Best at sunset. Open-bar happy hour cabin available.",
    href: "/destination/lasvegas/landmark",
  },
  {
    name: "Fremont Street Experience",
    blurb: "Downtown's covered LED canopy with free live music nightly. Grittier, older Vegas — worth a half-evening.",
    href: "/destination/lasvegas/things-to-do",
  },
  {
    name: "Hoover Dam",
    blurb: "30-min drive from the Strip. Self-guided or guided tours. Pair with Lake Mead for a full day out.",
    href: "/destination/lasvegas/landmark",
  },
  {
    name: "Grand Canyon West Rim & Skywalk",
    blurb: "2.5-hr drive — the closest canyon rim to Vegas. The glass Skywalk is the headline. Book ahead.",
    href: "/destination/lasvegas/landmark",
  },
  {
    name: "The Mob Museum",
    blurb: "Downtown. Genuinely excellent museum on organized crime. Allow 2–3 hours; skip-the-line tickets available.",
    href: "/destination/lasvegas/landmark",
  },
];

export default function AttractionsHub() {
  return (
    <section className={styles.attractions}>
      <h2>Top Attractions Worth Your Time</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        6 Las Vegas attractions with practical tips, realistic time estimates, and what to know before you go.
      </p>

      <div className={styles.grid}>
        {attractions.map(({ name, blurb, href }) => (
          <Link
            key={name}
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
        <Link href="/destination/lasvegas/landmark" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          See all Las Vegas landmarks with full details →
        </Link>
      </div>
    </section>
  );
}
