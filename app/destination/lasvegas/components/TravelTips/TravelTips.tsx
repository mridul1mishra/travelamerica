import styles from "../../lasvegas.module.css";

const tips = [
  {
    title: "Budget for resort fees",
    body: "Most Strip hotels add a mandatory resort fee of $35–$55 a night on top of the advertised rate, plus parking in some cases. Factor it in when comparing rooms — the cheapest headline price often isn't the cheapest stay.",
  },
  {
    title: "The Strip is bigger than it looks",
    body: "Casino floors and long blocks make walking deceptively slow — budget 20–30 min between mid-Strip resorts. For longer hops, the elevated Strip & Downtown trams between some hotels are free, and the monorail runs the east side.",
  },
  {
    title: "Know your transit options",
    body: "Walking covers most of the central Strip. The Deuce bus runs the Strip and Downtown 24/7 ($8 for a 2-hour or $20 for a 24-hour pass). The monorail links east-side resorts to the Convention Center. Rideshare is easiest late at night — use the designated pickup zones.",
  },
  {
    title: "Rent a car only for day trips",
    body: "You don't need a car on the Strip, and parking/resort fees add up. But for Hoover Dam, Red Rock, Valley of Fire, or the Grand Canyon, a one-day rental is far cheaper and easier than tours or rideshare.",
  },
  {
    title: "Drink, eat, and gamble off-Strip to save",
    body: "Spring Mountain Road (Chinatown) and the Arts District have far better value than Strip restaurants. Downtown casinos have lower table minimums and cheaper drinks than the big resorts.",
  },
  {
    title: "Hydrate and pace yourself",
    body: "Desert heat plus free-flowing drinks plus 24-hour everything wears people down fast. Carry water, use sunscreen, and don't try to do every show, club, and table in one trip.",
  },
];

export default function TravelTips() {
  return (
    <section className={styles.travelTips}>
      <h2>Practical Las Vegas Travel Tips</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Six things that save first-time visitors money, time, or frustration.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {tips.map(({ title, body }) => (
          <article
            key={title}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: 8,
              padding: "1.25rem",
              background: "#fff",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.05rem", fontWeight: 700, color: "#1d4ed8" }}>{title}</h3>
            <p style={{ color: "#1e293b", fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
