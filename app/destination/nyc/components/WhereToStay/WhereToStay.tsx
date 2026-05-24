import Link from "next/link";
import styles from "../../nyc.module.css";

const options = [
  {
    title: "Best Areas to Stay",
    description: "Neighborhoods ranked by safety, transit access, and what type of trip they suit. Includes first-timer picks and budget options.",
    href: "/destination/nyc/best-areas-to-stay",
  },
  {
    title: "NYC Neighborhood Guide",
    description: "A deeper look at what each area is actually like — vibe, walkability, who it's best for, and how to get around.",
    href: "/destination/nyc/neighborhood-guide",
  },
];

export default function WhereToStay() {
  return (
    <section className={styles.whereToStay}>
      <h2>Where to Stay in NYC</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Choosing the right neighborhood makes a real difference. Manhattan puts you closest to landmarks; Brooklyn offers a calmer pace and better value. It depends on your trip.
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
