import { redirect } from "next/navigation";

const officialMetroMapPdf =
  "https://cdn.beta.metro.net/wp-content/uploads/2026/05/09224824/26-1362_map_GM_Master_DCR-2-copy.pdf";

export default function FullLAMetroMapPage() {
  redirect(officialMetroMapPdf);
}
