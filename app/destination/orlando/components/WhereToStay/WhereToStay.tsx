import Link from "next/link";
import styles from "../../orlando.module.css";

const options = [
  {
    title: "Best Areas to Stay in Orlando",
    description: "Park zones ranked by convenience, price, and who they suit — on-site vs. off-site explained, with picks for families, budget travelers, and first-timers.",
    href: "/destination/orlando/best-areas-to-stay",
  },
  {
    title: "Orlando Neighborhood Guide",
    description: "A closer look at each area — Lake Buena Vista, I-Drive, Kissimmee, and Downtown — what they're actually like and which parks they put you closest to.",
    href: "/destination/orlando/neighborhood-guide",
  },
];

export default function WhereToStay() {
  return (
    <section className={styles.whereToStay}>
      <h2>Where to Stay in Orlando</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Choosing the right park zone makes a real difference. On-site Disney and Universal hotels buy convenience and early entry; off-site stays offer space and value. It depends on your trip.
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
