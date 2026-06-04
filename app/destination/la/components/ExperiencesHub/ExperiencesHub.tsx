import Link from "next/link";
import styles from "../../la.module.css";

const experiences = [
  {
    title: "Beaches & Outdoors",
    description: "Santa Monica, Venice, Malibu, El Matador State Beach. The Santa Monica Mountains have 500+ miles of hiking trails within the city.",
    href: "/destination/la/things-to-do",
  },
  {
    title: "Film & Pop Culture",
    description: "Warner Bros. Studio Tour, Paramount Pictures tour, Hollywood Forever screenings, TCL Chinese Theatre. Book studio tours in advance.",
    href: "/destination/la/things-to-do",
  },
  {
    title: "Museums & Culture",
    description: "Getty Center (free), LACMA, The Broad, Natural History Museum. Museum Row on Wilshire Blvd alone covers a full day.",
    href: "/destination/la/landmark",
  },
  {
    title: "Food & Neighborhoods",
    description: "Grand Central Market, Koreatown, Little Tokyo, Boyle Heights tacos, Erewhon culture. LA's food scene is genuinely world-class.",
    href: "/destination/la/food",
  },
];

export default function ExperiencesHub() {
  return (
    <section className={styles.experiences}>
      <h2>Things to Do in Los Angeles</h2>
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
        <Link href="/destination/la/things-to-do" style={{ color: "#000", fontWeight: 500, textDecoration: "underline" }}>
          See all things to do in Los Angeles
        </Link>
      </div>
    </section>
  );
}
