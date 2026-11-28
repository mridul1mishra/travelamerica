import { isAdmin } from "@/app/lib/admin";
import { readVisitEntries, visitDay, visitsAsText } from "@/app/lib/visit-log";

export const dynamic = "force-dynamic";

const PRIVATE = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" };

export async function GET(request: Request): Promise<Response> {
  if (!(await isAdmin(request.headers))) return new Response("Not found", { status: 404, headers: PRIVATE });
  const requested = new URL(request.url).searchParams.get("day");
  const day = requested && /^\d{4}-\d{2}-\d{2}$/.test(requested) ? requested : visitDay();
  const text = visitsAsText(day, await readVisitEntries(day));
  return new Response(text, { headers: { ...PRIVATE, "Content-Type": "text/plain; charset=utf-8",
    "Content-Disposition": `attachment; filename="site-visits-${day}.txt"` } });
}
