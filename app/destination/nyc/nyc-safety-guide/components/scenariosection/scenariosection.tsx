import ScenarioCard from "./scenariocard";
import scenarios from "./scenario";
import styles from "./scenariosection.module.css";

export default function ScenarioSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Real NYC Scenarios & How to Handle Them</h2>
        <p className={styles.subtitle}>
          Essential tips for staying safe and secure in New York City, especially when traveling alone.
        </p>

        <div className={styles.cards}>
          {scenarios.map((item) => (
            <ScenarioCard
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
