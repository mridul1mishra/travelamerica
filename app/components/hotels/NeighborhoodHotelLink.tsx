import Link from "next/link";

const areaGroups: Record<string, { areas: string[]; label: string }> = {
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

export default function NeighborhoodHotelLink({ area, source }: { area: string; source: string }) {
  const group = areaGroups[area];
  if (!group) return null;
  const params = new URLSearchParams({ from: source, areas: group.areas.join("|") });
  return <Link href={`/destination/nyc/hotel?${params}`} style={{ display: "inline-block", marginTop: 12, color: "#98442e", fontWeight: 700, textUnderlineOffset: 4 }}>
    Find hotels in {group.label} <span aria-hidden="true">→</span>
  </Link>;
}
