import Link from "next/link";
import { nycHotelAreaPresets } from "@/app/lib/nycHotelAreas";
import styles from "./SafetyHotelCTA.module.css";

export default function NycHotelPlansCTA() {
  return <aside className={styles.block} aria-label="Find NYC hotels for your plans">
    <h2>Find a hotel that fits your NYC plans</h2>
    <p>Choose a base for Broadway, Central Park or Downtown, then refine by neighborhood and hotel preferences. Check the route back before booking.</p>
    <ul>{nycHotelAreaPresets.map(plan => <li key={plan.label}>
      <Link href={`/destination/nyc/hotel?${new URLSearchParams({ from: "nyc-safety-guide", areas: plan.areas.join("|"), plans: plan.label })}`}>{plan.label}</Link>
    </li>)}</ul>
    <Link className={styles.link} href="/destination/nyc/hotel?from=nyc-safety-guide&filters=open">Explore NYC hotel filters <span aria-hidden="true">→</span></Link>
  </aside>;
}
