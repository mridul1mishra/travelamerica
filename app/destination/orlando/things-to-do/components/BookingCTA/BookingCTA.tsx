import styles from "./BookingCTA.module.css";

export interface BookingCTAProps {
  text: string;
  href: string;
  label: string;
  variant?: "slim" | "full";
  headline?: string;
}

export default function BookingCTA({
  text,
  href,
  label,
  variant = "full",
  headline = "Ready to book your trip?",
}: BookingCTAProps) {
  if (variant === "slim") {
    return (
      <div className={styles.slim}>
        <span className={styles.slimText}>{text}</span>
        <a href={href} aria-label={label} className={styles.slimButton}>
          {label}
        </a>
      </div>
    );
  }

  return (
    <div className={styles.full}>
      <div className={styles.fullInner}>
        <h2 className={styles.fullHeadline}>{headline}</h2>
        <p className={styles.fullText}>{text}</p>
        <a href={href} aria-label={label} className={styles.fullButton}>
          {label}
        </a>
      </div>
    </div>
  );
}
