import styles from "./coresafetyprinciples.module.css";

interface Props {
  title: string;
  description: string;
}

export default function CoreSafetyPrincipleCard({ title, description }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
