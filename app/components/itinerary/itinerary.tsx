import Link from "next/link";
import styles from "./ThreeDayItinerary.module.css";
import { ItineraryProps } from "@/app/models/itinerary";

export default function ThreeDayItinerary({ days, ctaLink }: ItineraryProps) {
  return (
    <section id="itinerary" className={styles.section}>
      <h2 className={styles.heading}>3‑Day NYC Itinerary</h2>

      <div className={styles.timeline}>
        {days.map((day, index) => (
          <div key={index} className={styles.dayBlock}>
            <div className={styles.dayMarker}>
              <span className={styles.dayLabel}>{day.day}</span>
              {index < days.length - 1 && <div className={styles.line}></div>}
            </div>

            <ul className={styles.bullets}>
              {day.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.ctaWrapper}>
        <Link href={ctaLink} className={styles.cta}>
          Full 3‑Day Itinerary →
        </Link>
      </div>
    </section>
  );
}
