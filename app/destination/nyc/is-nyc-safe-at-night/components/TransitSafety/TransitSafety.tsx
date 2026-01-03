import styles from "./TransitSafety.module.css";
import type { TransitSafetyProps, TransitModeSafety } from "../typesafeatnight";

export default function TransitSafety({ subway, bus, rideshare, yellowCabs, walking }: TransitSafetyProps) {
  const modes: { label: string; data?: TransitModeSafety }[] = [
    { label: "Subway", data: subway },
    { label: "Bus", data: bus },
    { label: "Rideshare", data: rideshare },
    { label: "Yellow Cabs", data: yellowCabs },
    { label: "Walking", data: walking }
  ];

  const getRiskClass = (risk: string) => {
    switch (risk) {
      case "Low":
        return styles.low;
      case "Moderate":
        return styles.moderate;
      case "High":
        return styles.high;
      default:
        return "";
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Transit Safety at Night</h2>

        <div className={styles.grid}>
          {modes
            .filter((m) => m.data)
            .map((mode, index) => (
              <div key={index} className={styles.card}>
                <div className={`${styles.riskTag} ${getRiskClass(mode.data!.riskLevel)}`}>
                  {mode.data!.riskLevel}
                </div>

                <h3 className={styles.modeName}>{mode.label}</h3>

                <div className={styles.meta}>
                  {mode.data!.bestHours && (
                    <p>
                      <strong>Best Hours:</strong> {mode.data!.bestHours}
                    </p>
                  )}

                  {mode.data!.avoidHours && (
                    <p>
                      <strong>Avoid Hours:</strong> {mode.data!.avoidHours}
                    </p>
                  )}
                </div>

                <div className={styles.columns}>
  <div className={styles.column}>
    <h4 className={styles.subheading}>Tips</h4>
    <ul className={styles.list}>
      {mode.data!.tips.map((tip, i) => (
        <li key={i}>{tip}</li>
      ))}
    </ul>
  </div>

  {mode.data!.recommendedRoutes && (
    <div className={styles.column}>
      <h4 className={styles.subheading}>Routes</h4>
      <ul className={styles.list}>
        {mode.data!.recommendedRoutes.map((route, i) => (
          <li key={i}>{route}</li>
        ))}
      </ul>
    </div>
  )}
</div>

            ))}
        </div>
      </div>
    </section>
  );
}
