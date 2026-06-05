import Link from "next/link";
import styles from "./attractionhub.module.css";

const attractions = [
  { name: "Walt Disney World", blurb: "4 parks: Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom. Plan a day per park minimum and buy tickets ahead.", href: "/destination/orlando/things-to-do" },
  { name: "Universal Orlando Resort", blurb: "Universal Studios + Islands of Adventure. The Wizarding World of Harry Potter spans both parks. Early entry is worth it.", href: "/destination/orlando/things-to-do" },
  { name: "Kennedy Space Center", blurb: "45 min from Orlando. Real rockets, astronaut stories, and live launch viewing. Allow a full day.", href: "/destination/orlando/landmark" },
  { name: "Discovery Cove", blurb: "All-inclusive day resort with dolphin swims, snorkeling, and a lazy river. Capacity-limited — book weeks ahead.", href: "/destination/orlando/things-to-do" },
  { name: "SeaWorld Orlando", blurb: "Beyond the marine shows, Mako, Manta, and Ice Breaker are genuinely excellent coasters. Half a day is enough.", href: "/destination/orlando/things-to-do" },
  { name: "ICON Park (International Drive)", blurb: "The Wheel, Madame Tussauds, and a cluster of attractions on I-Drive. Good for a rainy half-day or an evening.", href: "/destination/orlando/things-to-do" },
];

export default function AttractionsHub() {
  return (
    <section className={styles.attractions}>
      <h2>Top Attractions Worth Your Time</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Orlando&apos;s headline attractions — what each is best for, and the tips that save you time and money.
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
        <Link href="/destination/orlando/things-to-do" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          See all things to do in Orlando →
        </Link>
      </div>
    </section>
  );
}
