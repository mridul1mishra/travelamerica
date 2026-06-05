import styles from "./emergencycontactblock.module.css";

interface Props {
  label: string;
  number: string;
  description: string;
}

export default function EmergencyContactCard({ label, number, description }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardLabel}>{label}</h3>
      <p className={styles.cardNumber}>{number}</p>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
