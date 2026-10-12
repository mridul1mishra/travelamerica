import Link from "next/link";
import styles from "./SafetyHotelCTA.module.css";

export default function SafetyHotelCTA({ source, trackingId }: { source: string; trackingId?: string }) {
  const parameters = new URLSearchParams({ from: source, areas: "Midtown / Times Square|Upper West Side|Tribeca" });
  return <aside className={styles.block} aria-label="Recommended NYC hotel areas" data-safety-hotel-cta
    id={trackingId} data-hotel-cta-module={trackingId ? "true" : undefined}
    data-cta-id={trackingId} data-cta-placement={trackingId ? "after_hero" : undefined}>
    <h2>Stay in NYC’s Recommended Areas</h2>
    <ul>
      {["Midtown Manhattan", "Upper West Side", "Tribeca"].map(area => <li key={area}><span aria-hidden="true">✓</span>{area}</li>)}
    </ul>
    <Link className={styles.link} href={`/destination/nyc/hotel?${parameters}`}
      data-hotel-cta={trackingId ? "true" : undefined} data-cta-id={trackingId}
      data-cta-placement={trackingId ? "after_hero" : undefined}>Find Hotels in These Areas <span aria-hidden="true">→</span></Link>
  </aside>;
}
