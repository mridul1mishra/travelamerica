import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { isAdmin } from "@/app/lib/admin";
import { newYorkTime, readVisitEntries, summarizeByIp, summarizeByPage, summarizeBySource, visitDay, visitLogEnabled, visitRetentionDays, type VisitorKind } from "@/app/lib/visit-log";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Site visits", robots: { index: false, follow: false } };

type Props = { searchParams: Promise<{ day?: string; type?: string; view?: string; ip?: string }> };

const KIND: Record<VisitorKind, { text: string; color: string; background: string }> = {
  human: { text: "Human", color: "#0f5132", background: "#d1e7dd" },
  bot: { text: "Bot", color: "#41464b", background: "#e2e3e5" },
  suspicious: { text: "Suspicious", color: "#842029", background: "#f8d7da" },
};

export default async function VisitsPage({ searchParams }: Props) {
  if (!(await isAdmin(await headers()))) notFound();
  const days = Array.from({ length: visitRetentionDays() }, (_, i) => visitDay(new Date(Date.now() - i * 86_400_000)));
  const params = await searchParams;
  const day = params.day && days.includes(params.day) ? params.day : days[0];
  const type = params.type === "human" || params.type === "bot" || params.type === "suspicious" ? params.type : "all";
  const view = params.view === "pages" ? "pages" : params.view === "sources" ? "sources" : "visitors";
  const ipFilter = params.ip?.trim() || "";
  const entries = visitLogEnabled() ? await readVisitEntries(day) : [];
  const all = summarizeByIp(entries);
  const timeline = ipFilter ? entries.filter(e => e.ip === ipFilter) : [];
  const pages = summarizeByPage(entries);
  const sources = summarizeBySource(entries);
  const untracked = entries.filter(e => e.referrer === undefined).reduce((sum, e) => sum + e.weight, 0);
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
    <h1>Site visits</h1>
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
      <label>View{" "}
        <select name="view" defaultValue={view}>
          <option value="visitors">Visitors (by IP)</option><option value="pages">Pages</option><option value="sources">Sources</option>
        </select>
      </label>
      <button type="submit">Show</button>
      <a href={`/admin/visits/log.txt?day=${day}`} download={`site-visits-${day}.txt`}>Download as log.txt</a>
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

    {ipFilter && <section style={{ margin: "16px 0 24px" }}>
      <h2 style={{ fontSize: 18 }}>Timeline for <code>{ipFilter}</code> on {day}</h2>
      <p><a href={`/admin/visits?day=${day}&type=${type}&view=${view}`}>← Back to all visitors</a></p>
      {timeline.length === 0 ? <p>No visits from this IP on this day.</p> : <ol style={{ paddingLeft: 20, lineHeight: 1.7 }}>
        {timeline.map((e, i) => <li key={i}>
          <span style={{ whiteSpace: "nowrap" }}>{e.time ? newYorkTime(e.time) : "earlier"}</span> — <a href={e.path}>{e.path}</a>
          {e.referrer && <span style={{ color: "#666", fontSize: 13 }}> (from {e.referrer})</span>}
          {e.weight > 1 && <em> ({e.weight} visits, recorded before page-by-page logging)</em>}
        </li>)}
      </ol>}
    </section>}

    {view === "sources" && <div style={{ overflowX: "auto" }}>
      <p style={{ fontSize: 13, color: "#555" }}>Where page views came from: the referring site, or none (typed address, bookmark, app).
        Moves within this site are not counted.{untracked > 0 && ` ${untracked} visits on this day were logged before referrers were recorded and aren't included.`}</p>
      {sources.length === 0 ? <p>No referrer data for this day yet.</p> :
      <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
        <thead><tr>{["Source", "Human visits", "Bot and suspicious visits", "Landing pages"].map(t => <th key={t} style={cell}>{t}</th>)}</tr></thead>
        <tbody>{sources.map(s => <tr key={s.source}>
          <td style={cell}>
            {s.source}
            {s.referrers.length > 0 && <details style={{ marginTop: 4 }}>
              <summary style={{ cursor: "pointer", fontSize: 12, color: "#555" }}>Referring URLs ({s.referrers.length})</summary>
              <ul style={{ margin: "4px 0 0", paddingLeft: 16, fontSize: 12 }}>
                {s.referrers.slice(0, 50).map(r => <li key={r.url} style={{ wordBreak: "break-all" }}>{r.url} × {r.count}</li>)}
              </ul>
            </details>}
          </td>
          <td style={cell}>{s.human}</td><td style={cell}>{s.other}</td>
          <td style={cell}>
            <details>
              <summary style={{ cursor: "pointer" }}>{s.pages.length} page{s.pages.length === 1 ? "" : "s"}</summary>
              <ul style={{ margin: "6px 0 0", paddingLeft: 16, fontSize: 13, minWidth: 220 }}>
                {s.pages.map(p => <li key={p.path}><a href={p.path}>{p.path}</a> × {p.count}</li>)}
              </ul>
            </details>
          </td>
        </tr>)}</tbody>
      </table>}
    </div>}

    {view === "pages" && <div style={{ overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
        <thead><tr>{["Page", "Human visits", "Bot and suspicious visits"].map(t => <th key={t} style={cell}>{t}</th>)}</tr></thead>
        <tbody>{pages.map(p => <tr key={p.path}>
          <td style={{ ...cell, wordBreak: "break-word" }}><a href={p.path}>{p.path}</a></td>
          <td style={cell}>{p.human}</td>
          <td style={cell}>{p.other}</td>
        </tr>)}</tbody>
      </table>
    </div>}

    {view === "visitors" && <div style={{ overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
        <thead><tr>{["Type", "IP", "Location", "Visits", "Pages", "Last page", "Last seen (New York)", "User agent"].map(t => <th key={t} style={cell}>{t}</th>)}</tr></thead>
        <tbody>{rows.map(r => <tr key={r.ip}>
          <td style={{ ...cell, whiteSpace: "nowrap" }}>
            <span style={{ padding: "2px 8px", borderRadius: 999, fontSize: 12, background: KIND[r.kind].background, color: KIND[r.kind].color }}>{KIND[r.kind].text}</span>
            <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>{r.label}</div>
          </td>
          <td style={{ ...cell, fontFamily: "monospace" }}><a href={`/admin/visits?day=${day}&type=${type}&view=${view}&ip=${encodeURIComponent(r.ip)}`} title="Show this visitor's timeline">{r.ip}</a></td>
          <td style={cell}>{r.location}</td>
          <td style={cell}>{r.count}</td>
          <td style={cell}>
            <details>
              <summary style={{ cursor: "pointer" }}>{r.pages}</summary>
              <ul style={{ margin: "6px 0 0", paddingLeft: 16, fontSize: 13, minWidth: 220 }}>
                {r.pageCounts.map(p => <li key={p.path}><a href={p.path}>{p.path}</a> × {p.count}</li>)}
              </ul>
            </details>
          </td>
          <td style={cell}>{r.lastPath}</td>
          <td style={{ ...cell, whiteSpace: "nowrap" }}>{newYorkTime(r.lastSeen)}</td>
          <td style={{ ...cell, fontSize: 12, wordBreak: "break-word" }}>{r.userAgent}</td>
        </tr>)}</tbody>
      </table>
    </div>}
  </main>;
}
