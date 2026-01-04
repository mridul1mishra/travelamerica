import styles from "./checklist.module.css";
import type { Checklist as ChecklistType } from "../types-subwaySafetyGuide";

interface Props {
  data: ChecklistType;
}

export default function Checklist({ data }: Props) {
  const { essentials, safety_items, digital_tools, what_not_to_carry } = data;

  return (
    <section className={styles.wrapper}>
  <h2 className={styles.title}>NYC Subway Safety Checklist</h2>

  <div className={styles.grid}>
    <div className={styles.card}>
      <h3 className={styles.heading}>Essentials</h3>
      <ul className={styles.list}>
        {essentials.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.card}>
      <h3 className={styles.heading}>Safety Items</h3>
      <ul className={styles.list}>
        {safety_items.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.card}>
      <h3 className={styles.heading}>Digital Tools</h3>
      <ul className={styles.list}>
        {digital_tools.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.card}>
      <h3 className={styles.heading}>What Not to Carry</h3>
      <ul className={styles.list}>
        {what_not_to_carry.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.bullet}>•</span>
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


  );
}
