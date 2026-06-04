import Link from "next/link";
import styles from "../../la.module.css";

const options = [
  {
    title: "Best Areas to Stay in LA",
    description: "Neighborhoods ranked by safety, walkability, and what type of trip they suit. Includes first-timer picks, beach options, and budget areas.",
    href: "/destination/la/best-areas-to-stay",
  },
  {
    title: "LA Neighborhood Guide",
    description: "A deeper look at what each area is actually like — vibe, car dependency, who it's best for, and the Westside vs. Central LA trade-off explained.",
    href: "/destination/la/neighborhood-guide",
  },
];

export default function WhereToStay() {
  return (
    <section className={styles.whereToStay}>
      <h2>Where to Stay in Los Angeles</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Choosing the right area matters more in LA than almost any city — it&apos;s sprawling, car-dependent, and neighborhoods feel like different cities. The Westside suits first-timers; Central LA offers better value and location.
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
