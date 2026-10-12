import { getAuth, memberAuthConfigurationIssues } from "@/app/lib/auth";

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
  let initialized = false;
  try {
    const auth = getAuth();
    initialized = true;
    const response = await auth.handler(request);
    // Keep database and mail-provider errors private, including errors handled by the auth router.
    if (response.status >= 500) {
      console.error("[member-auth] AUTH_HANDLER_FAILURE");
      return unavailable();
    }
    return noStore(response);
  } catch {
    const issues = memberAuthConfigurationIssues();
    console.error("[member-auth]", issues.length ? issues.join(", ") : initialized ? "AUTH_HANDLER_FAILURE" : "AUTH_INITIALIZATION_FAILURE");
    return unavailable();
  }
}

export const GET = handle;
export const POST = handle;
