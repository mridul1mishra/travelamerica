import { getAuth } from "@/app/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

function noStore(response: Response): Response {
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");
  response.headers.set("Vary", "Cookie");
  return response;
}

function unavailable(): Response {
  return noStore(Response.json({
    code: "MEMBER_AUTH_UNAVAILABLE",
    message: "Member sign-in is temporarily unavailable. Please try again later.",
  }, { status: 503 }));
}

async function handle(request: Request): Promise<Response> {
  try {
    const response = await getAuth().handler(request);
    // Keep database and mail-provider errors private, including errors handled by the auth router.
    return response.status >= 500 ? unavailable() : noStore(response);
  } catch {
    return unavailable();
  }
}

export const GET = handle;
export const POST = handle;
