import { readFileSync, writeFileSync } from "node:fs";
import pg from "pg";

for (const filename of [".env.local", ".env"]) {
  try {
    for (const line of readFileSync(filename, "utf8").split("\n")) {
      const match = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
      if (match && !(match[1] in process.env)) process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
    }
  } catch (error) { if (error.code !== "ENOENT") throw error; }
}

const escape = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("Database not configured");
  const assignments = JSON.parse(readFileSync("content/cities/newyork/hotel-neighborhood-assignments.json", "utf8"));
  if (assignments.length !== 50 || new Set(assignments.map(h => h.sourceId)).size !== 50) throw new Error("Expected 50 unique hotel assignments");
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 1, connectionTimeoutMillis: 10000 });
  const client = await pool.connect();
  try {
    await client.query(readFileSync("scripts/nyc-neighborhoods-seed.sql", "utf8"));
    await client.query(readFileSync("scripts/nyc-neighborhoods-canonical.sql", "utf8"));
    await client.query("BEGIN");
    const neighborhoods = (await client.query("SELECT n.* FROM neighborhoods n JOIN cities c USING(city_id) WHERE c.slug = 'nyc' ORDER BY n.neighborhood_id")).rows;
    if (neighborhoods.length !== 8) throw new Error("Expected eight NYC neighborhoods; inspect remaining referenced areas");
    for (const entry of assignments) {
      if (!entry.neighborhood) continue;
      const area = neighborhoods.find(n => n.name === entry.neighborhood);
      if (!area) throw new Error("Unknown neighborhood");
      const evidence = JSON.stringify({ neighborhood: { source: "travel-advisor", sourceId: entry.sourceId, evidenceRecord: "hotels.raw_data", address: entry.address, rationale: entry.rationale, planningZone: true } });
      const result = await client.query(`UPDATE hotels SET city_id = $1, neighborhood_id = $2, neighborhood = $3,
        classification_evidence = classification_evidence || $4::jsonb
        WHERE city_slug = 'nyc' AND source = 'travel-advisor' AND source_id = $5 AND active`,
        [area.city_id, area.neighborhood_id, area.name, evidence, entry.sourceId]);
      if (result.rowCount !== 1) throw new Error("Hotel assignment does not match one active record: " + entry.sourceId);
    }
    await client.query("COMMIT");
    const hotels = (await client.query(`SELECT h.id, h.source_id, h.name, h.address, n.name AS neighborhood,
      h.hotel_tier, h.first_time_visitor, h.google_place_id, h.google_rating, h.google_review_count, h.affiliate_url
      FROM hotels h LEFT JOIN neighborhoods n ON n.neighborhood_id = h.neighborhood_id
      WHERE h.city_slug = 'nyc' AND h.active ORDER BY h.id`)).rows;
    if (hotels.length !== 50) throw new Error("Expected 50 active hotels");
    const count = key => hotels.filter(h => h[key] !== null).length;
    const complete = count("neighborhood");
    const grid = [
      ["Hotel → City", "50/50 linked", "None"],
      ["Hotel → Neighborhood", `${complete}/50 linked`, `${50 - complete} need review`],
      ["Hotel tier", `${count("hotel_tier")}/50 classified`, `${50 - count("hotel_tier")} Standard / Premium / Luxury decisions`],
      ["Google Place ID", `${count("google_place_id")}/50 populated`, `${50 - count("google_place_id")} IDs`],
      ["Google rating", `${count("google_rating")}/50 stored`, "Click-to-view lookup with bot verification and shared limits; not stored"],
      ["Google review count", `${count("google_review_count")}/50 stored`, "Fetched with the rating on request; not stored"],
      ["Affiliate URL", `${count("affiliate_url")}/50 populated`, "Affiliate links, if required"],
    ];
    const rows = data => data.map(row => `<tr>${row.map(v => `<td>${escape(v)}</td>`).join("")}</tr>`).join("\n");
    const table = (headers, data) => `<div class="scroll" tabindex="0"><table><thead><tr>${headers.map(h => `<th scope="col">${escape(h)}</th>`).join("")}</tr></thead><tbody>${rows(data)}</tbody></table></div>`;
    const grouped = neighborhoods.map(n => [n.name, hotels.filter(h => h.neighborhood === n.name).length]);
    const pending = assignments.filter(h => !h.neighborhood);
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NYC Hotel Data Integration</title>
      <style>*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif;background:#f5f6f8;color:#182235;line-height:1.6}main{max-width:1200px;margin:40px auto;padding:0 24px}h1{font-size:clamp(26px,4vw,36px)}h2{margin-top:32px}.scroll{overflow:auto;border:1px solid #dce2ea;border-radius:10px;background:white}table{border-collapse:collapse;width:100%;min-width:560px}td,th{padding:13px 18px;text-align:left;border-bottom:1px solid #e4e8ee}th{background:#182235;color:white}tbody tr:nth-child(even){background:#f8fafc}p{color:#526174}.pending{font-weight:600;color:#995012}@media print{main{margin:0;padding:0}.scroll{overflow:visible}table{min-width:0}}</style></head><body><main>
      <h1>NYC hotel data integration</h1><p>Database snapshot generated ${escape(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }))} (New York time). This page is a static report.</p>
      <h2>Data completeness</h2>${table(["Data", "Current state", "Remaining work"], grid)}
      <h2>Neighborhood categories</h2><p>Eight editorial hotel-planning areas. Central Park South includes nearby hotels around 55th–59th Streets; these categories are not official administrative boundaries. Downtown currently covers the Battery Park City hotel. Midtown includes the broader Midtown area and Times Square.</p>
      ${table(["Neighborhood", "Hotels"], grouped)}
      <h2>Needs review (${pending.length})</h2>${pending.length ? `<p class="pending">These properties fall outside the selected planning areas and have not been forced into an unrelated neighborhood.</p>${table(["Hotel", "Reason"], pending.map(h => [h.name, h.rationale]))}` : '<p>All 50 active hotels have a neighborhood assignment.</p>'}
      <h2>All 50 hotels</h2>${table(["HotelId", "Hotel", "Neighborhood", "Tier", "Address"], hotels.map(h => [h.id, h.name, h.neighborhood ?? "Pending review", h.hotel_tier ?? "Pending review", h.address]))}
      <p>Hotel tiers use Standard, Premium or Luxury. They describe property service and facilities, not date-specific prices. Neighborhoods are location categories without safety classifications. Existing hotel tags are preserved.</p></main></body></html>`;
    writeFileSync("public/hotel-data-integration.html", html);
    writeFileSync("content/cities/newyork/hotel-neighborhood-report.json", JSON.stringify({ neighborhoods: grouped, hotels, pending }, null, 2) + "\n");
    // Keep the official-property tier review when regenerating the integration report.
    // This renderer only writes artifacts; it does not apply tier proposals to hotels.
    await import("./build-hotel-tier-review.mjs");
    console.log(JSON.stringify({ hotels: hotels.length, assigned: complete, pending: pending.length, groups: grouped }));
  } catch (error) { await client.query("ROLLBACK"); throw error; }
  finally { client.release(); await pool.end(); }
}
main().catch(error => { console.error("Neighborhood assignment failed:", error.code ?? error.message); process.exitCode = 1; });
