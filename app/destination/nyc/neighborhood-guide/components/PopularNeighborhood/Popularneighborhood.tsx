import styles from "./Popularneighborhood.module.css";

const neighborhoods = [
  { name: "Midtown Manhattan", fit: "First visits and landmark sightseeing", atmosphere: "Busy, central, and convenient", nearby: "Times Square, Broadway, Empire State Building" },
  { name: "Upper East Side", fit: "Museums, parks, and a more relaxed base", atmosphere: "Residential streets and a quieter pace", nearby: "Central Park and Museum Mile" },
  { name: "Lower Manhattan", fit: "History and waterfront sightseeing", atmosphere: "Historic sights and waterfront views", nearby: "9/11 Memorial and Brooklyn Bridge" },
  { name: "Brooklyn Heights & DUMBO", fit: "Skyline views and neighborhood walks", atmosphere: "Tree-lined streets and waterfront scenery", nearby: "Brooklyn waterfront and skyline viewpoints" },
  { name: "Williamsburg", fit: "Restaurants, shopping, and nightlife", atmosphere: "Lively dining and evening energy", nearby: "Neighborhood restaurants, shops, and bars" },
  { name: "Greenwich Village & SoHo", fit: "Walkable dining and shopping", atmosphere: "Street life, restaurants, and neighborhood character", nearby: "Village restaurants and SoHo shopping" },
];

export default function PopularNeighborhoods({ interest }: { interest?: string }) {
  void interest;
  return (
    <section className={styles.section} aria-labelledby="neighborhood-comparison-heading">
      <h2 id="neighborhood-comparison-heading" className={styles.heading}>Compare NYC neighborhoods at a glance</h2>
      <p className={styles.intro}>
        Start with what you want to do, then compare the feel of each area.
        This shortlist brings together the neighborhoods described in this guide.
      </p>
      <div className={styles.grid}>{neighborhoods.map((area) => (
          <article className={styles.card} key={area.name}>
            <h3>{area.name}</h3>
            <p><strong>Consider it for:</strong> {area.fit}</p>
            <p><strong>Atmosphere:</strong> {area.atmosphere}</p>
            <p><strong>What to explore:</strong> {area.nearby}</p>
          </article>
        ))}</div>
      <p className={styles.note}>
        Before choosing a hotel, check prices for your dates and the route from its exact address to your planned stops.
        Neighborhood names alone do not tell you the room rate or door-to-door journey time.
      </p>
      <nav className={styles.nextSteps} aria-label="Next steps after comparing neighborhoods">
        <a href="/destination/nyc/best-areas-to-stay">Compare areas for your hotel stay →</a>
        <a href="/destination/nyc/nyc-subway-map">Check subway connections →</a>
        <a href="/destination/nyc/nyc-safety-guide">Read practical safety advice →</a>
      </nav>
    </section>
  );
}
