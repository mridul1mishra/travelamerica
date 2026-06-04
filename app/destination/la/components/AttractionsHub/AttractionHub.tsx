import Link from "next/link";
import styles from "./attractionhub.module.css";

const attractions = [
  {
    name: "Griffith Observatory",
    blurb: "Free entry to the grounds. The best skyline view in LA — especially at sunset.",
    href: "/destination/la/landmark",
  },
  {
    name: "The Getty Center",
    blurb: "Free admission (parking $22). World-class art + architecture + views. Allow 3 hours.",
    href: "/destination/la/landmark",
  },
  {
    name: "Venice Beach Boardwalk",
    blurb: "The quintessential LA beach experience — street performers, Muscle Beach, eclectic shops.",
    href: "/destination/la/things-to-do",
  },
  {
    name: "Hollywood Walk of Fame & TCL Chinese Theatre",
    blurb: "Walk it once. Touristy but improved. The Hollywood Hills hike is far better.",
    href: "/destination/la/landmark",
  },
  {
    name: "Santa Monica Pier & 3rd Street Promenade",
    blurb: "Pacific Park rides on the pier, then 3rd Street for food. Best on a weekday.",
    href: "/destination/la/things-to-do",
  },
  {
    name: "LACMA & Museum Row",
    blurb: "LACMA plus The Broad, MOCA, and the Natural History Museum — all within a mile or two.",
    href: "/destination/la/landmark",
  },
];

export default function AttractionsHub() {
  return (
    <section className={styles.attractions}>
      <h2>Top Attractions Worth Your Time</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        6 LA landmarks with practical tips, realistic time estimates, and what to know before you go.
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
        <Link href="/destination/la/landmark" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          See all LA landmarks with full details →
        </Link>
      </div>
    </section>
  );
}
