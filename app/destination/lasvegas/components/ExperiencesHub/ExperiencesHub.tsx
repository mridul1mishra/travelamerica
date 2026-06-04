import Link from "next/link";
import styles from "../../lasvegas.module.css";

const experiences = [
  {
    title: "Shows & Nightlife",
    description: "Cirque du Soleil, residency concerts, comedy and magic shows, plus the Strip's megaclubs and dayclubs. Book shows early — most sell out weeks ahead. Prices run $30 to $200+.",
    href: "/destination/lasvegas/things-to-do",
  },
  {
    title: "Casinos & Gaming",
    description: "Table minimums vary widely — Downtown casinos run lower than Strip properties. Set a budget before you arrive and learn the basics of any game before you sit down.",
    href: "/destination/lasvegas/things-to-do",
  },
  {
    title: "Dining & Buffets",
    description: "Nearly every major chef has a restaurant on the Strip. Buffets still exist but are no longer budget; Chinatown on Spring Mountain Rd is the best off-Strip value.",
    href: "/destination/lasvegas/food",
  },
  {
    title: "Day Trips & Outdoors",
    description: "Hoover Dam (30 min), Red Rock Canyon (30 min), Valley of Fire (1 hr), Grand Canyon West (2.5 hr), and Zion (2.5 hr). Rent a car for the day to do them properly.",
    href: "/destination/lasvegas/landmark",
  },
];

export default function ExperiencesHub() {
  return (
    <section className={styles.experiences}>
      <h2>Things to Do in Las Vegas</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        What you want to do shapes where you should stay. Pick the type of experience that matters most.
      </p>
      <div className={styles.grid}>
        {experiences.map(({ title, description, href }) => (
          <Link
            key={title}
            href={href}
            className={styles.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{description}</p>
          </Link>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link href="/destination/lasvegas/things-to-do" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          See all things to do in Las Vegas
        </Link>
      </div>
    </section>
  );
}
