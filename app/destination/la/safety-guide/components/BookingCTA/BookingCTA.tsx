import styles from "./BookingCTA.module.css";

export interface BookingCTAProps {
  text: string;
  href: string;
  label: string;
  variant?: "slim" | "full";
  headline?: string;
  /** Tags the button for hotel_cta_click (see LinkClickTracker). */
  ctaId?: string;
  placement?: string;
}

export default function BookingCTA({
  text,
  href,
  label,
  variant = "full",
  headline = "Ready to book your trip?",
  ctaId,
  placement,
}: BookingCTAProps) {
  const tracking = ctaId ? { "data-hotel-cta": "true", "data-cta-id": ctaId, "data-cta-placement": placement } : {};
  if (variant === "slim") {
    return (
      <div className={styles.slim}>
        <span className={styles.slimText}>{text}</span>
        <a href={href} aria-label={label} {...tracking} className={styles.slimButton}>
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
        <a href={href} aria-label={label} {...tracking} className={styles.fullButton}>
          {label}
        </a>
      </div>
    </div>
  );
}
