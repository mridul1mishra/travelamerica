import Link from "next/link";
import styles from "../../orlando.module.css";

const experiences = [
  { title: "Theme Parks", description: "Disney, Universal, SeaWorld, and Busch Gardens (Tampa, 90 min away). Multi-day park-hopper passes save money on 3+ day trips.", interest: "themeparks" },
  { title: "Water Parks", description: "Typhoon Lagoon and Blizzard Beach (Disney) and Volcano Bay (Universal). Best in summer — weekday mornings have shorter lines.", interest: "waterparks" },
  { title: "Day Trips", description: "Kennedy Space Center (45 min), St. Pete Beach and Tampa (90 min), Busch Gardens, and Everglades airboat tours.", interest: "daytrips" },
  { title: "Springs & Outdoors", description: "Florida's natural springs — Wekiva, Blue Spring, Silver Springs — are about an hour away and worth a half-day escape from the parks.", interest: "outdoors" },
];

export default function ExperiencesHub() {
  return (
    <section className={styles.experiences}>
      <h2>Things to Do in Orlando</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        What you want to do shapes where you should stay. Pick the type of experience that matters most.
      </p>
      <div className={styles.grid}>
        {experiences.map(({ title, description, interest }) => (
          <Link
            key={interest}
            href={`/destination/orlando/things-to-do?interest=${interest}`}
            className={styles.card}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{title}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem", margin: 0 }}>{description}</p>
          </Link>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link href="/destination/orlando/things-to-do" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          See all things to do in Orlando
        </Link>
      </div>
    </section>
  );
}
