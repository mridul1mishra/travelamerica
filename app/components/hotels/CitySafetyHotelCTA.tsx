import Link from "next/link";
import styles from "./SafetyHotelCTA.module.css";
import { cityHotelUrl, uniqueAreas, type HotelAreaChoice, type SafetyHotelCity } from "@/app/lib/cityHotelAreas";

// City-aware version of SafetyHotelCTA. The module itself is a view target
// (hotel_cta_view) and its button is a click target (hotel_cta_click).
export default function CitySafetyHotelCTA({ city, title, intro, choices, source, trackingId, placement = "after_hero", buttonLabel = "Find Hotels in These Areas" }: {
  city: SafetyHotelCity; title: string; intro?: string; choices: HotelAreaChoice[]; source: string;
  trackingId: string; placement?: string; buttonLabel?: string;
}) {
  return <aside className={styles.block} aria-label={title} data-safety-hotel-cta
    id={trackingId} data-hotel-cta-module="true" data-cta-id={trackingId} data-cta-placement={placement}>
    <h2>{title}</h2>
    {intro && <p>{intro}</p>}
    <ul>
      {choices.map(choice => <li key={choice.label}><span aria-hidden="true">✓</span>{choice.label}</li>)}
    </ul>
    <Link className={styles.link} href={cityHotelUrl(city, source, uniqueAreas(choices))}
      data-hotel-cta="true" data-cta-id={trackingId} data-cta-placement={placement}>{buttonLabel} <span aria-hidden="true">→</span></Link>
  </aside>;
}
