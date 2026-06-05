import styles from "./PersonaSafetyBlocks.module.css";
import type { PersonaSafetyBlocksProps } from "../typesafeatnight";

export default function PersonaSafetyBlocks({ personas }: PersonaSafetyBlocksProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Persona‑Driven Night Safety Advice</h2>

        <div className={styles.grid}>
          {personas.map((persona, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.personaName}>{persona.personaName}</h3>

              <div className={styles.block}>
                <h4 className={styles.subheading}>Top Concerns</h4>
                <ul className={styles.list}>
                  {persona.topConcerns.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.block}>
                <h4 className={styles.subheading}>Recommended Neighborhoods</h4>
                <ul className={styles.list}>
                  {persona.recommendedNeighborhoods.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.block}>
                <h4 className={styles.subheading}>Avoid Zones</h4>
                <ul className={styles.list}>
                  {persona.avoidZones.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.block}>
                <h4 className={styles.subheading}>Night Tips</h4>
                <ul className={styles.list}>
                  {persona.nightTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
