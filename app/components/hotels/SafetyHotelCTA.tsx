import Link from "next/link";
import styles from "./SafetyHotelCTA.module.css";

export default function SafetyHotelCTA({ source }: { source: string }) {
  const parameters = new URLSearchParams({ from: source, areas: "Midtown / Times Square|Upper West Side|Tribeca" });
  return <aside className={styles.block} aria-label="Recommended NYC hotel areas" data-safety-hotel-cta>
    <h2>Stay in NYC’s Recommended Areas</h2>
    <ul>
      {["Midtown Manhattan", "Upper West Side", "Tribeca"].map(area => <li key={area}><span aria-hidden="true">✓</span>{area}</li>)}
    </ul>
    <Link className={styles.link} href={`/destination/nyc/hotel?${parameters}`}>Find Hotels in These Areas <span aria-hidden="true">→</span></Link>
  </aside>;
}
