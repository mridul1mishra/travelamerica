import Link from "next/link";
import styles from "./NeighborhoodHotelLink.module.css";
import { cityHotelUrl, ctaSlug, type HotelAreaChoice, type SafetyHotelCity } from "@/app/lib/cityHotelAreas";

// City-aware version of NeighborhoodHotelLink. Always tagged for
// hotel_cta_click; renders nothing when an area has no reviewed hotels.
export default function AreaHotelLink({ city, choice, source, placement, idKey, variant = "text", text }: {
  city: SafetyHotelCity; choice?: HotelAreaChoice; source: string; placement: string;
  idKey?: string; variant?: "text" | "button"; text?: string;
}) {
  if (!choice || !choice.areas.length) return null;
  const label = text ?? `Find hotels in ${choice.label}`;
  return <Link href={cityHotelUrl(city, source, choice.areas)} className={variant === "button" ? styles.button : styles.text}
    aria-label={label} data-hotel-cta="true" data-cta-id={`${placement}-${ctaSlug(idKey ?? choice.label)}`}
    data-cta-placement={placement}>
    <span>{label}</span><span aria-hidden="true">→</span>
  </Link>;
}
