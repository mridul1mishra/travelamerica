import Link from "next/link";
import styles from "../../nyc.module.css";

const experiences = [
  {
    title: "Landmarks & Iconic Sights",
    description: "Statue of Liberty, Times Square, Central Park, Empire State Building — the places that define NYC for first-time visitors.",
    interest: "sightseeing",
  },
  {
    title: "Culture & Museums",
    description: "The Met, MoMA, Brooklyn Museum, and dozens of galleries spread across neighborhoods with real cultural character.",
    interest: "culture",
  },
  {
    title: "Food & Local Experiences",
    description: "From $1 pizza slices to Michelin-starred dining, food is how you experience each NYC neighborhood on its own terms.",
    interest: "food",
  },
  {
    title: "Outdoors & Parks",
    description: "Central Park, the High Line, Brooklyn Bridge Park — NYC has more green space and waterfront walks than most visitors expect.",
    interest: "outdoors",
  },
];

export default function ExperiencesHub() {
  return (
    <section className={styles.experiences}>
      <h2>Things to Do in NYC</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        What you want to do shapes where you should stay. Pick the type of experience that matters most.
      </p>
      <div className={styles.grid}>
        {experiences.map(({ title, description, interest }) => (
          <Link
            key={interest}
            href={`/destination/nyc/neighborhood-guide?interest=${interest}`}
            className={styles.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{description}</p>
          </Link>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link href="/destination/nyc/things-to-do" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          See all things to do in NYC
        </Link>
      </div>
    </section>
  );
}
