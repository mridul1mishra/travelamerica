import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { isAdmin } from "@/app/lib/admin";
import { readVisits, visitDay, visitLogEnabled } from "@/app/lib/visit-log";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Hotel visits", robots: { index: false, follow: false } };

type Props = { searchParams: Promise<{ day?: string }> };

export default async function VisitsPage({ searchParams }: Props) {
  if (!(await isAdmin(await headers()))) notFound();
  const days = Array.from({ length: 30 }, (_, i) => visitDay(new Date(Date.now() - i * 86_400_000)));
  const requested = (await searchParams).day;
  const day = requested && days.includes(requested) ? requested : days[0];
  const rows = visitLogEnabled() ? await readVisits(day) : [];
  const total = rows.reduce((sum, r) => sum + r.count, 0);
  const cell = { padding: "6px 10px", borderBottom: "1px solid #ddd", textAlign: "left" as const, verticalAlign: "top" as const };

  return <main style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px", fontFamily: "system-ui, sans-serif" }}>
    <h1>Hotel page visits</h1>
    {!visitLogEnabled() && <p>Visit log storage isn&apos;t configured (Upstash environment variables missing).</p>}
    <form style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", margin: "16px 0" }}>
      <label>Day (New York time){" "}
        <select name="day" defaultValue={day}>{days.map(d => <option key={d} value={d}>{d}</option>)}</select>
      </label>
      <button type="submit">Show</button>
      <a href={`/admin/visits/log.txt?day=${day}`} download={`hotel-visits-${day}.txt`}>Download as log.txt</a>
    </form>
    <p><strong>{total}</strong> visits from <strong>{rows.length}</strong> IP addresses on {day}.</p>
    <div style={{ overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
        <thead><tr>{["IP", "Location", "Visits", "Last page", "Last seen", "User agent"].map(t => <th key={t} style={cell}>{t}</th>)}</tr></thead>
        <tbody>{rows.map(r => <tr key={r.ip}>
          <td style={{ ...cell, fontFamily: "monospace" }}>{r.ip}</td>
          <td style={cell}>{r.location}</td>
          <td style={cell}>{r.count}</td>
          <td style={cell}>{r.lastPath}</td>
          <td style={{ ...cell, whiteSpace: "nowrap" }}>{r.lastSeen ? new Date(r.lastSeen).toLocaleString("en-US", { timeZone: "America/New_York" }) : ""}</td>
          <td style={{ ...cell, fontSize: 12, wordBreak: "break-word" }}>{r.userAgent}</td>
        </tr>)}</tbody>
      </table>
    </div>
  </main>;
}
