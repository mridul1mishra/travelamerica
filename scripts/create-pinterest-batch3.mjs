import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const batchDir = path.join(root, "pin-templates", "batch-3-nyc-solo-itinerary-validation");
const copyPath = path.join(batchDir, "batch3-pin-copy.csv");
const photosDir = path.join(batchDir, "photos");
const exportDir = path.join(batchDir, "export");

const esc = (value = "") =>
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

const wrap = (text, maxChars, maxLines = 4) => {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxChars) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);

  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = `${kept[maxLines - 1].replace(/[.,;:!?]$/, "")}…`;
    return kept;
  }

  return lines;
};

const textLines = (lines, { x, y, size, lineHeight, className, anchor = "start" }) =>
  lines
    .map(
      (line, index) =>
        `<text x="${x}" y="${y + index * lineHeight}" class="${className}" text-anchor="${anchor}">${esc(line)}</text>`,
    )
    .join("\n");

const photoForCell = {
  A1: {
    file: "batch3_task_a_empire-state.jpg",
    role: "Task hook, first-time NYC landmark orientation",
  },
  A2: {
    file: "batch3_task_b_brooklyn-bridge.jpg",
    role: "Task hook, route-planning / iconic walking route",
  },
  B1: {
    file: "batch3_reassurance_a_central-park.jpg",
    role: "Reassurance hook, calm daytime reset space",
  },
  B2: {
    file: "batch3_reassurance_b_times-square-night.jpg",
    role: "Reassurance hook, bright populated evening setting",
  },
  C1: {
    file: "batch3_utility_a_yellow-taxi.jpg",
    role: "Utility hook, transport and practical city movement",
  },
  C2: {
    file: "batch3_utility_b_times-square-day.jpg",
    role: "Utility hook, central NYC logistics and attractions",
  },
};

const hookMeta = {
  task: {
    kicker: "FIRST SOLO NYC TRIP",
    badge: "3-DAY ROUTE",
    accent: "#F8C66D",
    bottom: "Day-by-day route • calm breaks • first-timer friendly",
  },
  reassurance: {
    kicker: "SOLO, BUT PLANNED",
    badge: "SAFETY-CONSCIOUS",
    accent: "#8ED7C6",
    bottom: "Comfortable pacing • sensible returns • confidence built in",
  },
  utility: {
    kicker: "NYC ITINERARY GUIDE",
    badge: "ROUTES + STAYS",
    accent: "#F29B8F",
    bottom: "What to do • where to stay • meals + returns",
  },
};

const createPinSvg = async (row) => {
  const photo = photoForCell[row.Cell];
  if (!photo) throw new Error(`No photo mapping found for ${row.Cell}`);

  const photoPath = path.join(photosDir, photo.file);
  const photoBuffer = await sharp(photoPath)
    .resize(1000, 1500, { fit: "cover", position: "attention" })
    .jpeg({ quality: 88 })
    .toBuffer();
  const photoDataUrl = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  const meta = hookMeta[row.HookFamily] ?? hookMeta.task;
  const title = wrap(row.Title, 21, 4);
  const description = wrap(row.Description, 38, 3);
  const publish = `${row.PublishDate} · ${row.PublishTime}`;
  const titleY = 812;
  const titleLineHeight = 74;
  const dividerY = titleY + title.length * titleLineHeight + 26;
  const descY = dividerY + 58;

  return `<svg width="1000" height="1500" viewBox="0 0 1000 1500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#071724" stop-opacity="0.22"/>
      <stop offset="0.42" stop-color="#071724" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#071724" stop-opacity="0.86"/>
    </linearGradient>
    <linearGradient id="panel" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#FFF7EA" stop-opacity="0.97"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.94"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="22" stdDeviation="20" flood-color="#06131E" flood-opacity="0.35"/>
    </filter>
  </defs>
  <style>
    .kicker{font:700 34px Arial, Helvetica, sans-serif;letter-spacing:3.8px;fill:#FFFFFF}
    .badge{font:700 28px Arial, Helvetica, sans-serif;letter-spacing:1.6px;fill:#082234}
    .title{font:900 68px Arial, Helvetica, sans-serif;fill:#092033}
    .desc{font:500 29px Arial, Helvetica, sans-serif;fill:#223341}
    .cta{font:800 34px Arial, Helvetica, sans-serif;fill:#092033}
    .small{font:700 23px Arial, Helvetica, sans-serif;letter-spacing:1.1px;fill:#FFFFFF}
    .domain{font:800 29px Arial, Helvetica, sans-serif;letter-spacing:0.8px;fill:#FFFFFF}
    .schedule{font:700 20px Arial, Helvetica, sans-serif;letter-spacing:0.8px;fill:#5E6C77}
  </style>
  <image width="1000" height="1500" href="${photoDataUrl}" preserveAspectRatio="xMidYMid slice"/>
  <rect width="1000" height="1500" fill="url(#shade)"/>
  <rect x="64" y="70" width="600" height="58" rx="29" fill="#071724" opacity="0.72"/>
  <text x="92" y="109" class="kicker">${esc(meta.kicker)}</text>

  <g filter="url(#shadow)">
    <rect x="64" y="608" width="872" height="674" rx="44" fill="url(#panel)"/>
    <rect x="102" y="660" width="330" height="62" rx="31" fill="${meta.accent}"/>
    <text x="128" y="702" class="badge">${esc(meta.badge)}</text>
    ${textLines(title, { x: 106, y: titleY, size: 68, lineHeight: titleLineHeight, className: "title" })}
    <line x1="106" y1="${dividerY}" x2="894" y2="${dividerY}" stroke="${meta.accent}" stroke-width="8" stroke-linecap="round"/>
    ${textLines(description, { x: 106, y: descY, size: 29, lineHeight: 37, className: "desc" })}
    <text x="106" y="1244" class="schedule">${esc(publish)}</text>
  </g>

  <rect x="64" y="1320" width="872" height="86" rx="43" fill="${meta.accent}"/>
  <text x="500" y="1376" class="cta" text-anchor="middle">See the day-by-day plan</text>
  <text x="66" y="1452" class="small">${esc(meta.bottom)}</text>
  <text x="934" y="1452" class="domain" text-anchor="end">travelsamericas.com</text>
</svg>`;
};

const rows = parseCsv(await fs.readFile(copyPath, "utf8"));
await fs.mkdir(exportDir, { recursive: true });

const manifest = [];

for (const row of rows) {
  const photo = photoForCell[row.Cell];
  const baseName = `pin-batch3-${row.Cell.toLowerCase()}-${row.HookFamily}`;
  const svg = await createPinSvg(row);
  const svgPath = path.join(batchDir, `${baseName}.svg`);
  const pngPath = path.join(exportDir, `${baseName}.png`);

  await fs.writeFile(svgPath, svg);
  await sharp(Buffer.from(svg)).png().toFile(pngPath);

  const metadata = await sharp(pngPath).metadata();
  manifest.push({
    cell: row.Cell,
    hookFamily: row.HookFamily,
    file: `${baseName}.png`,
    svg: `${baseName}.svg`,
    sourcePhoto: photo.file,
    sourcePhotoRole: photo.role,
    board: row.Board,
    publishDate: row.PublishDate,
    publishTime: row.PublishTime,
    timezone: row.Timezone,
    title: row.Title,
    description: row.Description,
    url: row.URL,
    width: metadata.width,
    height: metadata.height,
  });
}

await fs.writeFile(
  path.join(batchDir, "batch3-pin-manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

console.log(`Created ${manifest.length} Batch 3 pins in ${exportDir}`);
