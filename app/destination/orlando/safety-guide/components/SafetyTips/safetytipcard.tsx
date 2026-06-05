import styles from "./safetytips.module.css";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function SafetyTipCard({ title, description, icon }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}
