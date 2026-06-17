import styles from "../../bestareatostay.module.css";

const areas = [
  {
    name: "Santa Monica",
    badge: "Best overall",
    summary: "Beach access, Third Street Promenade, the pier, and LA's most walkable visitor grid.",
    note: "$200-$400/night, but you reduce rideshare and car dependency.",
    bestFor: "First-timers, couples, beach + walkability",
  },
  {
    name: "West Hollywood",
    badge: "Best nightlife",
    summary: "Sunset Strip, restaurants, nightlife, and walkable bars in the most social LA base.",
    note: "$150-$300/night, central for evenings but quieter during the day.",
    bestFor: "Nightlife, dining, LGBTQ+ travelers",
  },
  {
    name: "Hollywood",
    badge: "Best sightseeing",
    summary: "Walk of Fame, TCL Chinese Theatre, and easy access to Griffith Observatory.",
    note: "$100-$200/night, but quality changes fast by block.",
    bestFor: "Sightseeing, budget, central access",
  },
  {
    name: "Silver Lake / Los Feliz",
    badge: "Best local feel",
    summary: "Coffee shops, independent restaurants, local nightlife, and the reservoir walk.",
    note: "Limited hotels; expect rideshare or a car for most tourist sights.",
    bestFor: "Repeat visitors, food, culture",
  },
  {
    name: "Downtown LA",
    badge: "Best value",
    summary: "Grand Central Market, The Broad, sports venues, and Arts District galleries.",
    note: "$120-$180/night value; stay near Grand Ave or the Arts District.",
    bestFor: "Budget travelers, arts, concerts",
  },
  {
    name: "Beverly Hills / Bel Air",
    badge: "Best luxury",
    summary: "Rodeo Drive, polished streets, luxury hotels, and the calmest high-end base.",
    note: "$350-$700+/night, and you still need a car for almost everything.",
    bestFor: "Luxury, business, special occasions",
  },
];

export default function AreasCompared() {
  return (
    <section aria-labelledby="areas-la" className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>Neighborhood comparison</p>
        <h2 id="areas-la">All Los Angeles Areas Compared</h2>
        <p className={styles.sectionIntro}>
          Pick the area by trade-off: beach, nightlife, budget, local feel, or luxury.
        </p>
      </div>
      <div className={styles.grid}>
        {areas.map(({ name, badge, summary, note, bestFor }) => (
          <article key={name} className={styles.card}>
            <span className={styles.cardBadge}>{badge}</span>
            <h3 className={styles.cardTitle}>{name}</h3>
            <p className={styles.cardText}>{summary}</p>
            <p className={styles.cardNote}>{note}</p>
            <p className={styles.cardBestFor}>
              <span>Best for</span>
              {bestFor}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
