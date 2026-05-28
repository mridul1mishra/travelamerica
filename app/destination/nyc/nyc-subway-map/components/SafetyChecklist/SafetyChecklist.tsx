import styles from "./SafetyChecklist.module.css";
export interface SafetyChecklistProps { 
  items: string[]; 
  title?: string; 
}

export function SafetyChecklist({ items, title = "Safety Checklist for Solo Travelers" }: SafetyChecklistProps) {
  return (
    <div className={styles.wrapper} id="safety">
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.bullet}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


