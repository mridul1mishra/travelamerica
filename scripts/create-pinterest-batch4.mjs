import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const batchDir = path.join(root, "pin-templates", "batch-4-nyc-solo-itinerary-micro-cohort");
const sourcePhotosDir = path.join(root, "pin-templates", "batch-3-nyc-solo-itinerary-validation", "photos");
const copyPath = path.join(batchDir, "batch4-pin-copy.csv");
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

const wrap = (text, maxChars, maxLines) => {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars) {
      current = candidate;
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

const textLines = (lines, { x, y, lineHeight, className }) =>
  lines
    .map(
      (line, index) =>
        `<text x="${x}" y="${y + index * lineHeight}" class="${className}">${esc(line)}</text>`,
    )
    .join("\n");

const photoForCell = {
  A1: {
    file: "batch3_task_a_empire-state.jpg",
    role: "Printable promise with first-time NYC landmark orientation",
  },
  B1: {
    file: "batch3_task_b_brooklyn-bridge.jpg",
    role: "Exact-route promise with iconic walking route",
  },
  A2: {
    file: "batch3_utility_a_yellow-taxi.jpg",
    role: "Download promise with practical city movement",
  },
  B2: {
    file: "batch3_utility_b_times-square-day.jpg",
    role: "Day-by-day route promise with central NYC orientation",
  },
};

const promiseMeta = {
  printable: {
    kicker: "FREE NYC TRIP PLAN",
    badge: "PRINTABLE 3-DAY GUIDE",
    accent: "#F8C66D",
    cta: "Get the free itinerary",
    bottom: "3 days • routes • meals • planning notes",
  },
  route: {
    kicker: "STOP OVERPLANNING NYC",
    badge: "COPY THIS ROUTE",
    accent: "#8ED7C6",
    cta: "See the exact route",
    bottom: "Exact stops • solo pacing • morning to night",
  },
};

const createPinSvg = async (row) => {
  const photo = photoForCell[row.Cell];
  const meta = promiseMeta[row.PromiseFamily];
  if (!photo || !meta) throw new Error(`Missing configuration for ${row.Cell}`);

  const photoBuffer = await sharp(path.join(sourcePhotosDir, photo.file))
    .resize(1000, 1500, { fit: "cover", position: "attention" })
    .jpeg({ quality: 88 })
    .toBuffer();
  const photoDataUrl = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  const title = wrap(row.Title, 21, 4);
  const description = wrap(row.Description, 38, 3);
  const titleY = 790;
  const titleLineHeight = 74;
  const dividerY = titleY + title.length * titleLineHeight + 24;
  const descY = dividerY + 56;
  const publish = `${row.PublishDate} · ${row.PublishTime}`;

  return `<svg width="1000" height="1500" viewBox="0 0 1000 1500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#071724" stop-opacity="0.20"/>
      <stop offset="0.42" stop-color="#071724" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#071724" stop-opacity="0.88"/>
    </linearGradient>
    <linearGradient id="panel" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#FFF7EA" stop-opacity="0.98"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.95"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="22" stdDeviation="20" flood-color="#06131E" flood-opacity="0.35"/>
    </filter>
  </defs>
  <style>
    .kicker{font:700 32px Arial,Helvetica,sans-serif;letter-spacing:3.2px;fill:#FFFFFF}
    .badge{font:700 25px Arial,Helvetica,sans-serif;letter-spacing:1.2px;fill:#082234}
    .title{font:900 68px Arial,Helvetica,sans-serif;fill:#092033}
    .desc{font:500 29px Arial,Helvetica,sans-serif;fill:#223341}
    .cta{font:800 34px Arial,Helvetica,sans-serif;fill:#092033}
    .small{font:700 20px Arial,Helvetica,sans-serif;letter-spacing:.6px;fill:#FFFFFF}
    .domain{font:800 28px Arial,Helvetica,sans-serif;letter-spacing:.7px;fill:#FFFFFF}
    .schedule{font:700 20px Arial,Helvetica,sans-serif;letter-spacing:.8px;fill:#5E6C77}
  </style>
  <image width="1000" height="1500" href="${photoDataUrl}" preserveAspectRatio="xMidYMid slice"/>
  <rect width="1000" height="1500" fill="url(#shade)"/>
  <rect x="64" y="70" width="650" height="58" rx="29" fill="#071724" opacity="0.74"/>
  <text x="92" y="109" class="kicker">${esc(meta.kicker)}</text>
  <g filter="url(#shadow)">
    <rect x="64" y="586" width="872" height="696" rx="44" fill="url(#panel)"/>
    <rect x="102" y="638" width="390" height="62" rx="31" fill="${meta.accent}"/>
    <text x="128" y="680" class="badge">${esc(meta.badge)}</text>
    ${textLines(title, { x: 106, y: titleY, lineHeight: titleLineHeight, className: "title" })}
    <line x1="106" y1="${dividerY}" x2="894" y2="${dividerY}" stroke="${meta.accent}" stroke-width="8" stroke-linecap="round"/>
    ${textLines(description, { x: 106, y: descY, lineHeight: 37, className: "desc" })}
    <text x="106" y="1244" class="schedule">${esc(publish)}</text>
  </g>
  <rect x="64" y="1320" width="872" height="86" rx="43" fill="${meta.accent}"/>
  <text x="500" y="1376" class="cta" text-anchor="middle">${esc(meta.cta)}</text>
  <text x="66" y="1452" class="small">${esc(meta.bottom)}</text>
  <text x="934" y="1452" class="domain" text-anchor="end">travelsamericas.com</text>
</svg>`;
};

const rows = parseCsv(await fs.readFile(copyPath, "utf8"));
await fs.mkdir(exportDir, { recursive: true });
const manifest = [];

for (const row of rows) {
  const photo = photoForCell[row.Cell];
  const baseName = `pin-batch4-${row.Cell.toLowerCase()}-${row.PromiseFamily}`;
  const svg = await createPinSvg(row);
  const svgPath = path.join(batchDir, `${baseName}.svg`);
  const pngPath = path.join(exportDir, `${baseName}.png`);
  await fs.writeFile(svgPath, svg);
  await sharp(Buffer.from(svg)).png().toFile(pngPath);
  const metadata = await sharp(pngPath).metadata();
  manifest.push({
    cell: row.Cell,
    promiseFamily: row.PromiseFamily,
    file: `${baseName}.png`,
    svg: `${baseName}.svg`,
    sourcePhoto: photo.file,
    sourcePhotoRole: photo.role,
    board: row.Board,
    proposedPublishDate: row.PublishDate,
    publishTime: row.PublishTime,
    timezone: row.Timezone,
    title: row.Title,
    description: row.Description,
    url: row.URL,
    width: metadata.width,
    height: metadata.height,
    status: "draft",
  });
}

await fs.writeFile(
  path.join(batchDir, "batch4-pin-manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

const contactTiles = [];
for (const [index, item] of manifest.entries()) {
  const resized = await sharp(path.join(exportDir, item.file))
    .resize(380, 570)
    .png()
    .toBuffer();
  contactTiles.push({
    input: resized,
    left: 20 + (index % 2) * 400,
    top: 20 + Math.floor(index / 2) * 590,
  });
}

await sharp({
  create: {
    width: 820,
    height: 1200,
    channels: 3,
    background: "#eef2f6",
  },
})
  .composite(contactTiles)
  .png()
  .toFile(path.join(batchDir, "batch4-contact-sheet.png"));

console.log(`Created ${manifest.length} Batch 4 draft pins in ${exportDir}`);
