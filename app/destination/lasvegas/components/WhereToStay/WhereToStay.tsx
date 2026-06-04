import Link from "next/link";
import styles from "../../lasvegas.module.css";

const options = [
  {
    title: "Best Areas to Stay in Las Vegas",
    description: "Strip zones and off-Strip options ranked by price, location, and trip type — with honest picks for first-timers, budget travelers, and those who want something quieter.",
    href: "/destination/lasvegas/best-areas-to-stay",
  },
  {
    title: "Las Vegas Neighborhood Guide",
    description: "A closer look at the Strip, Downtown Fremont, the Arts District, Chinatown, Summerlin, and Henderson — what each area is actually like and how far it puts you from the action.",
    href: "/destination/lasvegas/neighborhood-guide",
  },
];

export default function WhereToStay() {
  return (
    <section className={styles.whereToStay}>
      <h2>Where to Stay in Las Vegas</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Hotel location defines the Vegas trip more than almost any other decision. Mid-Strip puts everything in walking distance; Downtown offers lower prices and a different atmosphere. Watch for resort fees.
      </p>
      <div className={styles.grid}>
        {options.map(({ title, description, href }) => (
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
