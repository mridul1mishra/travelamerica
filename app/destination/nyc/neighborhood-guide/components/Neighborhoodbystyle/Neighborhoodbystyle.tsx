import styles from "./Neighborhoodbystyle.module.css";

type NeighborhoodsByStyleProps = {
  interest?: string;
};

const travelStyles = [
  {
    title: "First-Time Visitors",
    areas: "Midtown Manhattan, Lower Manhattan",
    copy: "Central locations with easy access to landmarks, transit, and sightseeing.",
  },
  {
    title: "Sightseeing & Landmarks",
    areas: "Midtown, Upper West Side",
    copy: "Walkable areas close to major attractions, museums, and parks.",
  },
  {
    title: "Food & Culture",
    areas: "Lower East Side, Williamsburg",
    copy: "Known for diverse dining, nightlife, and creative energy.",
  },
  {
    title: "Families",
    areas: "Upper East Side, Brooklyn Heights",
    copy: "Quieter streets, parks nearby, and a more relaxed pace.",
  },
  {
    title: "Budget-Focused Travelers",
    areas: "Harlem, Long Island City",
    copy: "More affordable options with reliable subway access.",
  },
  {
    title: "Nightlife & Restaurants",
    areas: "East Village, SoHo, Williamsburg",
    copy: "Better for travelers who want dinner, bars, and late-evening energy within walking distance.",
  },
];

export default function NeighborhoodsByStyle({ interest }: NeighborhoodsByStyleProps) {
  void interest;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Neighborhoods by Travel Style</h2>

      <p className={styles.intro}>
        NYC neighborhoods feel very different depending on where you stay.
        Use the sections below to quickly find areas that match how you want
        to experience the city.
      </p>

      <div className={styles.grid}>
        {travelStyles.map((style) => (
          <article key={style.title} className={styles.card}>
            <h3>{style.title}</h3>
            <p>
              <strong>{style.areas}</strong>
            </p>
            <p>{style.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
