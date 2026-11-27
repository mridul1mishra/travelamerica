import { getMemberSession } from "./auth";

// Admins are signed-in members whose verified email is listed in ADMIN_EMAILS (comma-separated).
export async function isAdmin(headers: Headers): Promise<boolean> {
  const allowed = (process.env.ADMIN_EMAILS ?? "").split(",").map(e => e.trim().toLowerCase()).filter(Boolean);
  if (!allowed.length) return false;
  try {
    const session = await getMemberSession(headers);
    const email = (session?.user as { email?: string } | undefined)?.email?.toLowerCase();
    return Boolean(email && allowed.includes(email));
  } catch { return false; }
}
