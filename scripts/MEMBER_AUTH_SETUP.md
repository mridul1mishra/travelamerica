# Member authentication setup

New members register with their name, email address, password, and optional phone number. Registration creates an unverified account and sends one email verification code; it does not create a session or subscribe anyone to the newsletter. After verifying the code, members sign in with their password or request an email sign-in code. Phone numbers are optional profile information and are not used for SMS authentication.

Registration is at `/register`; password and email-code sign-in, including password recovery, are at `/signin`. The pages link to each other while preserving the validated hotel return destination and rating/price context. Restricted hotel links send guests to `/signin`. Existing `/register?mode=signin` links redirect to the separate sign-in page.

The header uses an initials button for signed-in members and an account icon for guests. Its menu links to `/profile` and sign-out for members, or sign-in and registration for guests. The read-only profile displays name, email, and optional phone from the verified session in component memory; its public HTML contains no member details. Pending, expired, and signed-out sessions hide those details, and guests return to `/signin?next=%2Fprofile`. Only the exact `/profile` path is allowed as an additional account return destination.

Set these server-only variables in each deployment:

| Variable | Required value |
| --- | --- |
| `BETTER_AUTH_SECRET` | A cryptographically random secret of at least 32 characters. Keep it stable across instances. Generate locally with `node -e "console.log(require('node:crypto').randomBytes(32).toString('base64url'))"`. |
| `BETTER_AUTH_URL` | The explicit canonical origin: `https://www.travelsamericas.com` or `https://travelsamericas.com`. No path, query, fragment, or credentials. |
| `BETTER_AUTH_TRUSTED_ORIGINS` | Must remain unset or empty. The approved exact origins are configured in code; any nonempty override makes member authentication unavailable. |
| `DATABASE_URL` | The existing PostgreSQL URL. The auth pool always verifies the TLS certificate and hostname. |
| `SMTP2GO_API_KEY` | An SMTP2GO key authorized for `/email/send`. |
| `SMTP2GO_FROM_EMAIL` | Optional verified sender; defaults to `hello@travelsamericas.com`. Verify its domain or address in SMTP2GO before enabling member sign-in. |
| `SMTP2GO_FROM_NAME` | Optional sender display name; defaults to `Travels Americas`. |
| `DATABASE_SSL_CA` | Optional PEM CA certificate when PostgreSQL uses a private CA. Literal `\n` sequences are converted to newlines. |
| `AUTH_TRUST_CLOUDFLARE_PROXY` | Optional `true` only when the origin accepts traffic exclusively through Cloudflare, which overwrites `cf-connecting-ip`. Leave unset on a directly reachable origin. |

Vercel's `VERCEL=1` runtime variable selects its controlled `x-vercel-forwarded-for` header. Otherwise the explicitly trusted Cloudflare header is used; without either deployment guarantee, the database limiter uses one shared counter per endpoint. Client-supplied `x-forwarded-for` is never trusted. Rate limiting stays enabled in development.

For local development, use `NODE_ENV=development` (set by `next dev`) and `BETTER_AUTH_URL=http://localhost:3000` or `http://127.0.0.1:3000`. Keep the local secret private and use a PostgreSQL instance with verified TLS. Local origins are excluded from production auth. Cookies are HTTP-only and SameSite=Lax; HTTPS deployments also set Secure. Sessions expire after seven days without sliding renewal, and restricted requests check the database rather than a cached session cookie.

Apply `scripts/member-auth-schema.sql` through the project's migration runner before deploying the new member flow. It is additive and idempotent, creates only `member_*` tables and indexes, adds the optional `member_user.phone` column to existing tables, and does not alter hotel or subscriber data. Names are trimmed, required, limited to 100 characters, and reject control characters. Phone input is normalized by removing spaces, parentheses, hyphens, and dots, then requires `+` followed by 8 to 15 digits with a nonzero country code. Profile input cannot set identity, verification, or session fields. Existing profiles are not overwritten by code sign-in inputs.

Passwords use Better Auth's scrypt hashing and must contain 8 to 128 characters. Password sign-in requires verified email. Email-code sign-in is limited to existing verified members, including members who previously registered without passwords. Requests for unknown or unverified sign-in targets return generic success without sending a sign-in code. Verification and password reset use hashed email codes; a successful reset revokes all sessions, creates a password credential for a prior code-only account when needed, and requires a new sign-in. OAuth, email changes, account linking, link-based verification/reset, and direct profile/password modification endpoints are disabled.

Each email code contains six digits, expires after five minutes, allows three incorrect attempts, and is single use. Codes and verification identifiers are hashed in storage. Requesting a new code replaces the previous code. Per trusted IP (or the shared fallback), registration, send-code, and reset-code requests each allow three requests in ten minutes; password/code sign-in, email verification, and reset attempts each allow five in five minutes. General auth endpoints allow sixty requests per minute. Counters are stored in PostgreSQL and enforced atomically across instances.

Missing configuration, unavailable databases, and failed email delivery return a generic HTTP 503 with no-store headers. Public hotel browsing still works, and restricted reads deny access when session validation is unavailable. No OTPs, provider responses, session tokens, raw emails, or connection details are logged by this integration.

Before production release, verify an actual registration verification email, password and email-code sign-in, password reset, sign-out, revoked/expired-cookie denial, and HTTP-only/Secure cookie attributes on the canonical HTTPS hostname. Automated tests use the real Better Auth flow with an isolated adapter and a capturing mail dependency; they send no external email.

References: [Better Auth email/password](https://better-auth.com/docs/authentication/email-password), [email OTP](https://better-auth.com/docs/plugins/email-otp), [database rate limiting](https://better-auth.com/docs/concepts/rate-limit), [security and origins](https://better-auth.com/docs/reference/security), [SMTP2GO email API](https://developers.smtp2go.com/docs/send-an-email), and [Vercel request headers](https://vercel.com/docs/headers/request-headers).
