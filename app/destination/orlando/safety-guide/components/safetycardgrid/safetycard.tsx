import styles from "./safetycardgrid.module.css";

interface Props {
  title: string;
  tips: string[];
}

export default function SafetyCard({ title, tips }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.tipList}>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
