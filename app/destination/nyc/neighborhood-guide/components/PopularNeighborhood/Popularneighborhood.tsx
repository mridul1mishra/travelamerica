import styles from "./Popularneighborhood.module.css";

type PopularNeighborhoodsProps = {
  interest?: string;
};

const neighborhoods = [
  {
    name: "Midtown Manhattan",
    vibe: "Subway: N/Q/R/W, 4/5/6 · Hotels from $180/night · Walk to Empire State, Times Square",
    copy: "Home to Times Square, Broadway, and major landmarks, Midtown offers unmatched convenience for first-time visitors.",
  },
  {
    name: "Upper East Side",
    vibe: "Subway: 4/5/6 · Museum Mile · Hotels from $160/night",
    copy: "Close to Central Park and Museum Mile, this area feels more relaxed while staying well connected.",
  },
  {
    name: "Lower Manhattan",
    vibe: "Subway: 2/3, A/C · Walk to 9/11 Memorial, Brooklyn Bridge · Hotels from $150/night",
    copy: "A mix of history, waterfront views, and nightlife, with easy subway access across the city.",
  },
  {
    name: "Brooklyn Heights & DUMBO",
    vibe: "Subway: A/C, 2/3 · 10 min to Midtown · Hotels from $130/night",
    copy: "Known for tree-lined streets and skyline views, these neighborhoods offer a quieter stay just across the river.",
  },
  {
    name: "Williamsburg",
    vibe: "Subway: L train · 20 min to Midtown · Hotels from $120/night",
    copy: "Popular for its restaurants, shops, and nightlife, Williamsburg has a youthful energy and easy subway access to Manhattan.",
  },
  {
    name: "Greenwich Village & SoHo",
    vibe: "Subway: A/C/E, B/D/F/M, N/R/W · Dining, shopping, nightlife · Hotels from $170/night",
    copy: "A strong choice for travelers who want walkable restaurants, character, and easy access to Downtown, Chelsea, and Midtown.",
  },
];

export default function PopularNeighborhoods({ interest }: PopularNeighborhoodsProps) {
  void interest;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Popular Neighborhoods for Tourists</h2>

      <p className={styles.intro}>
        These neighborhoods are some of the most popular choices for visitors
        because they balance convenience, character, and access to attractions.
      </p>

      <div className={styles.grid}>
        {neighborhoods.map((neighborhood) => (
          <article key={neighborhood.name} className={styles.card}>
            <h3>{neighborhood.name}</h3>
            <p className={styles.vibe}>{neighborhood.vibe}</p>
            <p>{neighborhood.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
