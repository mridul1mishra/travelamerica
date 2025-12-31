import Link from "next/link";
import styles from "./linkhubgrid.module.css";

interface Props {
  title: string;
  description: string;
  href: string;
}

export default function LinkHubCard({ title, description, href }: Props) {
  return (
    <Link href={href} className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.arrow}>→</span>
    </Link>
  );
}
