import styles from "./ScenarioCards.module.css";
import type { ScenarioCardsProps } from "../typesafeatnight";

export default function ScenarioCards({ scenarios }: ScenarioCardsProps) {
  const getRiskClass = (risk: string) => {
    switch (risk) {
      case "Low":
        return styles.low;
      case "Moderate":
        return styles.moderate;
      case "High":
        return styles.high;
      case "Mixed":
        return styles.mixed;
      default:
        return "";
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Night Scenarios & How to Stay Safe</h2>

        <div className={styles.grid}>
          {scenarios.map((scenario, index) => (
            <div key={index} className={styles.card}>
              <div className={`${styles.riskTag} ${getRiskClass(scenario.riskLevel)}`}>
                {scenario.riskLevel}
              </div>

              <h3 className={styles.title}>{scenario.title}</h3>

              <p className={styles.expect}>{scenario.whatToExpect}</p>

              <div className={styles.safeBlock}>
                <h4 className={styles.subheading}>How to Stay Safe</h4>
                <ul className={styles.list}>
                  {scenario.howToStaySafe.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.meta}>
                <p>
                  <strong>Best For:</strong> {scenario.bestFor}
                </p>
                <p>
                  <strong>Avoid If:</strong> {scenario.avoidIf}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
