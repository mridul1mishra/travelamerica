import styles from "../../bestareatostay.module.css";

const areas = [
  {
    name: "Santa Monica",
    badge: "Beach base",
    summary: "Beach, Third Street Promenade and the pier, at the end of the Metro E Line.",
    note: "15% hotel tax; check your rate for assessments.",
    bestFor: "Beach and pier trips",
  },
  {
    name: "West Hollywood",
    badge: "Bus-served",
    summary: "Sunset Strip and Santa Monica Boulevard, served by free CityLine buses.",
    note: "12.5% hotel tax; the city's district assessment rate is unclear, so confirm it.",
    bestFor: "Evenings on Sunset and Santa Monica Blvd",
  },
  {
    name: "Hollywood",
    badge: "B Line stops",
    summary: "Walk of Fame and TCL Chinese Theatre, with three Metro B Line stations.",
    note: "City of Los Angeles 14% hotel tax.",
    bestFor: "Hollywood sightseeing",
  },
  {
    name: "Silver Lake / Los Feliz",
    badge: "East side",
    summary: "East of Hollywood, covered here for comparison only.",
    note: "Silver Lake Pool & Inn lists overnight valet at $35 per vehicle per day plus tax. We have not researched transit here.",
    bestFor: "Visitors happy to research their own routes",
  },
  {
    name: "Downtown LA",
    badge: "Rail hub",
    summary: "Grand Central Market, The Broad, sports venues and the Arts District.",
    note: "Metro A, B, D and E lines; City of Los Angeles 14% hotel tax.",
    bestFor: "Rail connections, arts and sports venues",
  },
  {
    name: "Beverly Hills / Bel Air",
    badge: "D Line station",
    summary: "Rodeo Drive and Wilshire Boulevard, with a weekend trolley and the new D Line station nearby.",
    note: "14% hotel tax; Bel Air is not covered by our transit research.",
    bestFor: "Visitors focused on Beverly Hills",
  },
];

export default function AreasCompared() {
  return (
    <section aria-labelledby="areas-la" className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>Neighborhood comparison</p>
        <h2 id="areas-la">All Los Angeles Areas Compared</h2>
        <p className={styles.sectionIntro}>
          Pick the area by what is near it and how you will get around.
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
