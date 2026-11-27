import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { isAdmin } from "@/app/lib/admin";
import { newYorkTime, readVisits, visitDay, visitLogEnabled, type VisitorKind } from "@/app/lib/visit-log";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Hotel visits", robots: { index: false, follow: false } };

type Props = { searchParams: Promise<{ day?: string; type?: string }> };

const KIND: Record<VisitorKind, { text: string; color: string; background: string }> = {
  human: { text: "Human", color: "#0f5132", background: "#d1e7dd" },
  bot: { text: "Bot", color: "#41464b", background: "#e2e3e5" },
  suspicious: { text: "Suspicious", color: "#842029", background: "#f8d7da" },
};

export default async function VisitsPage({ searchParams }: Props) {
  if (!(await isAdmin(await headers()))) notFound();
  const days = Array.from({ length: 30 }, (_, i) => visitDay(new Date(Date.now() - i * 86_400_000)));
  const params = await searchParams;
  const day = params.day && days.includes(params.day) ? params.day : days[0];
  const type = params.type === "human" || params.type === "bot" || params.type === "suspicious" ? params.type : "all";
  const all = visitLogEnabled() ? await readVisits(day) : [];
  const rows = type === "all" ? all : all.filter(r => r.kind === type);

  const summary = (kind: VisitorKind) => {
    const group = all.filter(r => r.kind === kind);
    return { ips: group.length, visits: group.reduce((sum, r) => sum + r.count, 0) };
  };
  const botNames = Object.entries(all.filter(r => r.kind === "bot")
    .reduce<Record<string, number>>((acc, r) => ({ ...acc, [r.label]: (acc[r.label] ?? 0) + r.count }), {}))
    .sort((a, b) => b[1] - a[1]);
  const cell = { padding: "6px 10px", borderBottom: "1px solid #ddd", textAlign: "left" as const, verticalAlign: "top" as const };

  return <main style={{ maxWidth: 1300, margin: "0 auto", padding: "24px 16px", fontFamily: "system-ui, sans-serif" }}>
    <h1>Hotel page visits</h1>
    {!visitLogEnabled() && <p>Visit log storage isn&apos;t configured (Upstash environment variables missing).</p>}
    <form style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", margin: "16px 0" }}>
      <label>Day (New York time){" "}
        <select name="day" defaultValue={day}>{days.map(d => <option key={d} value={d}>{d}</option>)}</select>
      </label>
      <label>Show{" "}
        <select name="type" defaultValue={type}>
          <option value="all">Everyone</option><option value="human">Humans</option>
          <option value="bot">Bots</option><option value="suspicious">Suspicious</option>
        </select>
      </label>
      <button type="submit">Show</button>
      <a href={`/admin/visits/log.txt?day=${day}`} download={`hotel-visits-${day}.txt`}>Download as log.txt</a>
    </form>

    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "8px 0 16px" }}>
      {(Object.keys(KIND) as VisitorKind[]).map(kind => {
        const s = summary(kind);
        return <div key={kind} style={{ padding: "10px 14px", borderRadius: 8, background: KIND[kind].background, color: KIND[kind].color }}>
          <strong>{KIND[kind].text}</strong>: {s.visits} visits from {s.ips} IPs
        </div>;
      })}
    </div>
    {botNames.length > 0 && <p style={{ fontSize: 14 }}>Bots: {botNames.map(([name, n]) => `${name} (${n})`).join(", ")}</p>}
    <p style={{ fontSize: 13, color: "#555" }}>Labels are a best guess from the browser&apos;s user agent. Bots can pretend to be browsers, so &quot;Human&quot; means &quot;no sign of a bot&quot;.</p>

    <div style={{ overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
        <thead><tr>{["Type", "IP", "Location", "Visits", "Last page", "Last seen (New York)", "User agent"].map(t => <th key={t} style={cell}>{t}</th>)}</tr></thead>
        <tbody>{rows.map(r => <tr key={r.ip}>
          <td style={{ ...cell, whiteSpace: "nowrap" }}>
            <span style={{ padding: "2px 8px", borderRadius: 999, fontSize: 12, background: KIND[r.kind].background, color: KIND[r.kind].color }}>{KIND[r.kind].text}</span>
            <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>{r.label}</div>
          </td>
          <td style={{ ...cell, fontFamily: "monospace" }}>{r.ip}</td>
          <td style={cell}>{r.location}</td>
          <td style={cell}>{r.count}</td>
          <td style={cell}>{r.lastPath}</td>
          <td style={{ ...cell, whiteSpace: "nowrap" }}>{newYorkTime(r.lastSeen)}</td>
          <td style={{ ...cell, fontSize: 12, wordBreak: "break-word" }}>{r.userAgent}</td>
        </tr>)}</tbody>
      </table>
    </div>
  </main>;
}
