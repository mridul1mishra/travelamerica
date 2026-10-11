export const MEMBER_RETURN_TO = "/destination/nyc/hotel";

/** Keep member redirects inside supported account pages and hotel entry points. */
export function safeMemberReturnTo(value: string | null | undefined): string {
  if (!value || value.length > 2048 || /[\u0000-\u0020\u007f\\#]/.test(value)) {
    return MEMBER_RETURN_TO;
  }

  // Reject encoded controls/backslashes too, including an extra encoding layer.
  let decoded = value;
  for (let pass = 0; pass < 3; pass += 1) {
    try {
      const next = decodeURIComponent(decoded);
      if (/[\u0000-\u001f\u007f\\]/.test(next)) return MEMBER_RETURN_TO;
      if (next === decoded) break;
      decoded = next;
    } catch {
      return MEMBER_RETURN_TO;
    }
  }

  if (value === "/profile" || /^\/api\/hotel-prices\/[1-9]\d*$/.test(value)) return value;
  if (value === MEMBER_RETURN_TO || value.startsWith(`${MEMBER_RETURN_TO}?`)) {
    return value;
  }
  return MEMBER_RETURN_TO;
}

function memberAuthUrl(
  route: "register" | "signin",
  returnTo: string | null | undefined,
  action?: string,
): string {
  const parameters = new URLSearchParams({ next: safeMemberReturnTo(returnTo) });
  if (action && /^[a-z][a-z0-9-]{0,31}$/.test(action)) parameters.set("action", action);
  return `/${route}?${parameters.toString()}`;
}

export function memberSignInUrl(returnTo: string | null | undefined, action?: string): string {
  return memberAuthUrl("signin", returnTo, action);
}

export function memberRegisterUrl(returnTo: string | null | undefined, action?: string): string {
  return memberAuthUrl("register", returnTo, action);
}
