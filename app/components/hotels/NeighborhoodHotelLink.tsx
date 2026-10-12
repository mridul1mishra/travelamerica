import Link from "next/link";
import styles from "./NeighborhoodHotelLink.module.css";

const areaGroups: Record<string, { areas: string[]; label: string }> = {
  "Manhattan": { areas: ["Midtown / Times Square", "Upper West Side", "Upper East Side", "Chelsea", "NoMad", "Tribeca", "Central Park South", "Financial District / Downtown"], label: "Manhattan" },
  "Midtown": { areas: ["Midtown / Times Square"], label: "Midtown / Times Square" },
  "Midtown Manhattan": { areas: ["Midtown / Times Square"], label: "Midtown / Times Square" },
  "Midtown near major avenues": { areas: ["Midtown / Times Square"], label: "Midtown / Times Square" },
  "Times Square": { areas: ["Midtown / Times Square"], label: "Midtown / Times Square" },
  "Upper West Side": { areas: ["Upper West Side"], label: "Upper West Side" },
  "Upper East Side": { areas: ["Upper East Side"], label: "Upper East Side" },
  "Upper West Side / Upper East Side": { areas: ["Upper West Side", "Upper East Side"], label: "Upper West Side / Upper East Side" },
  "Chelsea": { areas: ["Chelsea"], label: "Chelsea" },
  "Chelsea / Flatiron": { areas: ["Chelsea", "NoMad"], label: "Chelsea / NoMad" },
  "NoMad": { areas: ["NoMad"], label: "NoMad" },
  "Tribeca": { areas: ["Tribeca"], label: "Tribeca" },
  "Central Park South": { areas: ["Central Park South"], label: "Central Park South" },
  "Battery Park": { areas: ["Financial District / Downtown"], label: "Financial District / Downtown" },
  "Lower Manhattan": { areas: ["Financial District / Downtown", "Tribeca"], label: "Downtown / Tribeca" },
  "Financial District": { areas: ["Financial District / Downtown"], label: "Financial District / Downtown" },
};

export default function NeighborhoodHotelLink({ area, source, variant = "text" }: { area: string; source: string; variant?: "text" | "button" }) {
  const group = areaGroups[area];
  if (!group) return null;
  const params = new URLSearchParams({ from: source, areas: group.areas.join("|") });
  return <Link href={`/destination/nyc/hotel?${params}`} className={variant === "button" ? styles.button : styles.text} aria-label={`Find hotels in ${group.label}`}>
    <span>{variant === "button" ? `${group.label} hotels` : `Find hotels in ${group.label}`}</span><span aria-hidden="true">→</span>
  </Link>;
}
