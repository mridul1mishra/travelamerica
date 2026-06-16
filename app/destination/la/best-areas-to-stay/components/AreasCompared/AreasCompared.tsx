import styles from "../../bestareatostay.module.css";

const areas = [
  {
    name: "Santa Monica (Best Overall for First-Timers)",
    vibe: "Beach access, walkable Third Street Promenade, the famous pier, and a safe, well-lit grid. Closest LA gets to a walkable city. Expensive ($200–$400/night for hotels), but you trade car dependency for convenience.",
    bestFor: "First-timers, couples, anyone wanting beach + walkability",
  },
  {
    name: "West Hollywood (WeHo)",
    vibe: "Sunset Strip, lively nightlife, excellent restaurants, walkable between bars and clubs. LGBTQ+ friendly and very social. Mid-range to expensive hotels ($150–$300). Quieter during the day, buzzing at night.",
    bestFor: "Nightlife, dining, LGBTQ+ travelers, social trips",
  },
  {
    name: "Hollywood",
    vibe: "Walk of Fame, TCL Chinese Theatre, Griffith Observatory access. Central location. Very touristy and congested. Quality varies wildly by block — stick to hotels on Hollywood Blvd or above. Budget to mid-range ($100–$200).",
    bestFor: "Sightseeing-focused trips, budget travelers wanting central access",
  },
  {
    name: "Silver Lake / Los Feliz",
    vibe: "Hip, local neighborhood with excellent coffee shops, independent restaurants, and a reservoir walk. No beach access. Requires a car or Uber for most attractions. Airbnbs dominate — hotels are scarce.",
    bestFor: "Repeat visitors, digital nomads, food and culture travelers",
  },
  {
    name: "Downtown LA (DTLA)",
    vibe: "Grand Central Market, The Broad, Staples Center events, Arts District galleries. Rapidly gentrified with excellent hotel value ($120–$180). Some blocks still rough — stay near Grand Ave or the Arts District, not Skid Row adjacent.",
    bestFor: "Budget travelers, arts and food focus, concert-goers",
  },
  {
    name: "Beverly Hills / Bel Air",
    vibe: "Rodeo Drive, Mulholland Drive views, ultra-luxury hotels. The safest and most manicured area in LA. Very expensive ($350–$700+/night). Nothing is walkable — you need a car for everything.",
    bestFor: "Luxury travel, business travel, special occasions",
  },
];

export default function AreasCompared() {
  return (
    <section aria-labelledby="areas-la" className={styles.section}>
      <h2 id="areas-la">All Los Angeles Areas Compared</h2>
      <p style={{ color: "#555", maxWidth: 620, margin: "0.5rem auto 1.5rem", textAlign: "center" }}>
        Six distinct neighborhoods - what each is actually like and who it suits.
      </p>
      <div className={styles.grid}>
        {areas.map(({ name, vibe, bestFor }) => (
          <article key={name} className={styles.card}>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 600 }}>{name}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem", margin: "0 0 0.5rem" }}>{vibe}</p>
            <p style={{ color: "#333", fontSize: "0.85rem", margin: 0 }}>
              <strong>Best for:</strong> {bestFor}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
