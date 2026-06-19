import styles from "./NeighborhoodSafety.module.css";
import type { NeighborhoodSafetyGridProps } from "../typesafeatnight";

export default function NeighborhoodSafetyGrid({ neighborhoods }: NeighborhoodSafetyGridProps) {
  const getSafetyClass = (level: string) => {
    switch (level) {
      case "Safe":
        return styles.safe;
      case "Mixed":
        return styles.mixed;
      case "Avoid Late":
        return styles.avoid;
      default:
        return "";
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>NYC Night Safety by Neighborhood</h2>

        <div className={styles.grid}>
          {neighborhoods.map((n, i) => (
            <div key={i} className={styles.card}>
              <div className={`${styles.safetyTag} ${getSafetyClass(n.safetyLevel)}`}>
                {n.safetyLevel}
              </div>

              <h3 className={styles.name}>{n.name}</h3>

              <p className={styles.why}>{n.why}</p>

              <div className={styles.meta}>
                {n.bestTimeToVisit && (
                  <p>
                    <strong>Best Time:</strong> {n.bestTimeToVisit}
                  </p>
                )}

                {n.avoidAfter && (
                  <p>
                    <strong>Avoid After:</strong> {n.avoidAfter}
                  </p>
                )}

                {n.notes && (
                  <p className={styles.notes}>
                    <strong>Notes:</strong> {n.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
