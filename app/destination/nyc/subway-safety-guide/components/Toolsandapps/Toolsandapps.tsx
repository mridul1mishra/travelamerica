import styles from "./Toolsandapps.module.css";
import type { ToolApp } from "../types-subwaySafetyGuide";

interface Props {
  items: ToolApp[];
}

export default function ToolsAndApps({ items }: Props) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Tools & Apps</h2>

      <div className={styles.grid}>
        {items.map((tool, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconCircle}>
              <span className={styles.icon}>📱</span>
            </div>

            <h3 className={styles.name}>{tool.name}</h3>
            <p className={styles.description}>{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
