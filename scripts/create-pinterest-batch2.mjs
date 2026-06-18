import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const templateDir = path.join(root, "pin-templates");
const outDir = path.join(templateDir, "batch-2-nyc-solo-safety");
const pngDir = path.join(outDir, "export");
const copyPath = path.join(outDir, "batch2-pin-copy.csv");

const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const parseCsv = (text) => {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(value);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    if (row.some((cell) => cell.trim())) rows.push(row);
  }

  const [header, ...body] = rows;
  return body.map((cells) =>
    Object.fromEntries(header.map((name, index) => [name, cells[index] ?? ""])),
  );
};

const encodeImage = async (file) => {
  const data = await fs.readFile(path.join(templateDir, file));
  const ext = path.extname(file).slice(1).toLowerCase().replace("jpg", "jpeg");
  return `data:image/${ext};base64,${data.toString("base64")}`;
};

const replaceAll = (svg, values) => {
  let output = svg;
  for (const [key, value] of Object.entries(values)) {
    if (Array.isArray(value)) {
      let index = 0;
      output = output.replaceAll(key, () => esc(value[Math.min(index++, value.length - 1)]));
    } else {
      output = output.split(key).join(esc(value));
    }
  }
  return output;
};

const replacePhotoZone = (svg, imageDataUrl) =>
  svg.replace(
    /<g id="photo-zone">[\s\S]*?<\/g>/,
    `<g id="photo-zone">
    <image width="1000" height="640" href="${imageDataUrl}" preserveAspectRatio="xMidYMid slice"/>
    <rect width="1000" height="640" fill="#0A1F30" opacity="0.52"/>
  </g>`,
  );

const byFile = {
  "pin-batch2-checklist-01.png": {
    template: "template-1-checklist.svg",
    titleLines: ["Before You", "Walk Alone"],
    items: [
      "Save your hotel cross streets",
      "Pick a lit subway exit",
      "Keep one ear open",
      "Use rides after midnight",
      "Send your route to someone",
    ],
  },
  "pin-batch2-checklist-02.png": {
    template: "template-1-checklist.svg",
    titleLines: ["Arrival Day", "Safety Setup"],
    items: [
      "Download offline Google Maps",
      "Add hotel to favorites",
      "Set Apple Pay or tap card",
      "Screenshot subway directions",
      "Choose a first-night dinner nearby",
    ],
  },
  "pin-batch2-listicle-01.png": {
    template: "template-2-listicle.svg",
    photo: "photo-listicle-01.jpg",
    number: "7",
    titleLines: ["Solo NYC", "Night Rules"],
    items: ["Stay near busy avenues", "Know your final subway stop", "Ride when streets empty out"],
  },
  "pin-batch2-listicle-02.png": {
    template: "template-2-listicle.svg",
    photo: "photo-listicle-02.jpg",
    number: "9",
    titleLines: ["Solo-Friendly", "NYC Areas"],
    items: ["Upper West Side", "West Village", "Chelsea near transit"],
  },
  "pin-batch2-map-01.png": {
    template: "template-3-map.svg",
    titleLines: ["NYC SOLO ZONES"],
    zones: ["UWS: relaxed base", "Chelsea: central + easy", "Midtown: aware", "Late: ride"],
  },
  "pin-batch2-map-02.png": {
    template: "template-3-map.svg",
    titleLines: ["WALK VS RIDE"],
    zones: ["Busy avenues", "Hotel blocks", "Quiet side streets", "Empty stops"],
  },
  "pin-batch2-itinerary-01.png": {
    template: "template-4-itinerary.svg",
    titleLines: ["A Calm", "First Trip"],
    days: ["Arrival + Midtown", "Village + Chelsea", "Park + museum"],
    summaries: [
      "Easy landmarks, early dinner, simple transit.",
      "Cafe breaks, High Line, and a lively dinner area.",
      "Central Park route plus one indoor anchor.",
    ],
    cta: "Get the free printable itinerary",
  },
  "pin-batch2-itinerary-02.png": {
    template: "template-4-itinerary.svg",
    titleLines: ["Alone, Not", "Lonely"],
    days: ["Museums + parks", "Food halls + views", "Slow morning"],
    summaries: [
      "Solo-friendly stops with built-in breaks.",
      "Easy places to eat alone without feeling watched.",
      "One calm neighborhood before heading home.",
    ],
    cta: "Save this for your NYC weekend",
  },
  "pin-batch2-stat-01.png": {
    template: "template-5-stat.svg",
    titleLines: ["You Need", "A Plan,", "Not Panic"],
    context: ["Most solo problems are logistics:", "wrong exit, dead phone, late transfer."],
    source: "TravelsAmericas NYC solo safety guide",
  },
  "pin-batch2-stat-02.png": {
    template: "template-5-stat.svg",
    titleLines: ["Safety", "Starts", "Before JFK"],
    context: ["Set routes, payment, hotel, and backup", "before the airport Wi-Fi disappears."],
    source: "TravelsAmericas first-time NYC checklist",
  },
  "pin-batch2-video-idea-01.png": {
    template: "template-6-video-base.svg",
    titleLines: ["5 NYC Subway", "Night Rules"],
    items: [
      "Stand near other riders",
      "Check direction before swiping",
      "Avoid empty train cars",
      "Use exits near your hotel",
      "Switch to rides if unsure",
    ],
  },
  "pin-batch2-video-idea-02.png": {
    template: "template-6-video-base.svg",
    titleLines: ["5 Solo Dinner", "Comfort Moves"],
    items: [
      "Book bar seating",
      "Go early, before rush",
      "Bring a tiny plan B",
      "Pick lively neighborhoods",
      "Walk back on main avenues",
    ],
  },
};

const boardToKicker = (board) =>
  board
    .replace(/\s*\+\s*/g, " + ")
    .replace(/\bNYC\b/g, "NYC")
    .toUpperCase()
    .slice(0, 34);

const valuesFor = (row, spec) => {
  const kicker = boardToKicker(row.Board);
  const [line1 = "", line2 = "", line3 = ""] = spec.titleLines;
  const [item1 = "", item2 = "", item3 = "", item4 = "", item5 = ""] = spec.items ?? [];
  const [zone1 = "", zone2 = "", zone3 = "", zone4 = ""] = spec.zones ?? [];

  return {
    "[KICKER e.g. NYC SOLO TRAVEL]": kicker,
    "[KICKER e.g. WHERE TO STAY]": kicker,
    "[KICKER e.g. 3 DAYS IN NYC SOLO]": kicker,
    "[KICKER e.g. NYC SAFETY, BY THE NUMBERS]": kicker,
    "[KICKER]": kicker,
    "[TITLE LINE 1]": line1,
    "[TITLE LINE 2]": line2,
    "[7]": spec.number ?? "",
    "[TEASER ITEM 1]": item1,
    "[TEASER ITEM 2]": item2,
    "[TEASER ITEM 3]": item3,
    "[ITEM 1]": item1,
    "[ITEM 2]": item2,
    "[ITEM 3]": item3,
    "[ITEM 4]": item4,
    "[ITEM 5]": item5,
    "[ZONE 1]": zone1,
    "[ZONE 2]": zone2,
    "[ZONE 3]": zone3,
    "[ZONE 4]": zone4,
    "[THEME]": spec.days ?? "",
    "[ONE-LINE SUMMARY]": spec.summaries ?? "",
    "[CTA e.g. Get the free PDF itinerary]": spec.cta ?? "Save this for your trip",
    "[CLAIM LINE 1]": line1,
    "[CLAIM LINE 2]": line2,
    "[CLAIM LINE 3]": line3,
    "[CONTEXT LINE 1]": spec.context?.[0] ?? row.Description.slice(0, 52),
    "[CONTEXT LINE 2]": spec.context?.[1] ?? row.Description.slice(52, 104),
    "[SOURCE]": spec.source ?? "TravelsAmericas Pinterest copy sheet",
  };
};

const rows = parseCsv(await fs.readFile(copyPath, "utf8"));
await fs.mkdir(pngDir, { recursive: true });

const manifest = [];

for (const row of rows) {
  const spec = byFile[row.File];
  if (!spec) {
    throw new Error(`No template mapping found for ${row.File}`);
  }

  const templatePath = path.join(templateDir, spec.template);
  let svg = await fs.readFile(templatePath, "utf8");
  if (spec.photo) {
    svg = replacePhotoZone(svg, await encodeImage(spec.photo));
  }
  svg = replaceAll(svg, valuesFor(row, spec));
  svg = svg.replace(/\[LICENSED PHOTO 1000x640\]/g, "");

  const base = path.basename(row.File, ".png");
  const svgPath = path.join(outDir, `${base}.svg`);
  const pngPath = path.join(pngDir, row.File);
  await fs.writeFile(svgPath, svg);
  await sharp(Buffer.from(svg)).png().toFile(pngPath);

  manifest.push({
    file: row.File,
    board: row.Board,
    title: row.Title,
    description: row.Description,
    url: row.URL,
    template: spec.template,
  });
}

await fs.writeFile(
  path.join(outDir, "batch2-pin-manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

console.log(`Created ${rows.length} pins from ${copyPath}`);
