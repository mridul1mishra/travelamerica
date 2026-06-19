import Link from "next/link";
import styles from "./BestNeighborhoodsGrid.module.css";
import { NeighborhoodGridProps } from "@/app/models/neighborhood";



export default function BestNeighborhoodsGrid({ neighborhoods, ctaLink }: NeighborhoodGridProps) {
  return (
    <section id="neighborhoods" className={styles.section}>
      <h2 className={styles.heading}>Best Neighborhoods to Stay</h2>

      <div className={styles.grid}>
        {neighborhoods.map((n, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.name}>{n.name}</h3>
            <p className={styles.reason}>{n.reason}</p>

            <Link href={n.link} className={styles.details}>
              View details →
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.ctaWrapper}>
        <Link href={ctaLink} className={styles.cta}>
          Where to Stay Guide →
        </Link>
      </div>
    </section>
  );
}
