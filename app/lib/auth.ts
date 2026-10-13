import "server-only";

import { betterAuth, type BetterAuthOptions } from "better-auth";
import { APIError, createAuthMiddleware } from "better-auth/api";
import { emailOTP } from "better-auth/plugins";
import { Pool } from "pg";
import { notifyMemberRegistration } from "./member-registration-notification";

const PRODUCTION_ORIGINS = [
  "https://www.travelsamericas.com",
  "https://travelsamericas.com",
];
const DEVELOPMENT_ORIGINS = ["http://localhost:3000", "http://127.0.0.1:3000"];

export type MemberAuthConfig = {
  secret: string;
  baseURL: string;
  database: NonNullable<BetterAuthOptions["database"]>;
  environment: "development" | "production" | "test";
  trustedIPHeader?: "x-vercel-forwarded-for" | "cf-connecting-ip";
};

export type MemberOTP = {
  email: string;
  otp: string;
  type: "sign-in" | "email-verification" | "forget-password" | "change-email";
};

export type MemberSession = {
  user: {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    phone?: string | null;
    image?: string | null;
  };
};

export class MemberAuthUnavailableError extends Error {
  constructor() {
    super("Member sign-in is temporarily unavailable.");
    this.name = "MemberAuthUnavailableError";
  }
}

/** Report only fixed configuration labels, never values, credentials or URLs. */
export function memberAuthConfigurationIssues(env: NodeJS.ProcessEnv = process.env): string[] {
  const issues: string[] = [];
  if (!env.BETTER_AUTH_SECRET || env.BETTER_AUTH_SECRET.trim().length < 32) issues.push("BETTER_AUTH_SECRET_MISSING_OR_TOO_SHORT");
  if (!env.BETTER_AUTH_URL) issues.push("BETTER_AUTH_URL_MISSING");
  else {
    try { configuredOrigin(env.BETTER_AUTH_URL, env.NODE_ENV === "development" ? "development" : "production"); }
    catch { issues.push("BETTER_AUTH_URL_INVALID"); }
  }
  if (!env.DATABASE_URL) issues.push("DATABASE_URL_MISSING");
  else {
    try { if (!["postgres:", "postgresql:"].includes(new URL(env.DATABASE_URL).protocol)) issues.push("DATABASE_URL_INVALID"); }
    catch { issues.push("DATABASE_URL_INVALID"); }
  }
  if (!env.SMTP2GO_API_KEY?.trim()) issues.push("SMTP2GO_API_KEY_MISSING");
  const fromEmail = env.SMTP2GO_FROM_EMAIL?.trim() || "hello@travelsamericas.com";
  const fromName = env.SMTP2GO_FROM_NAME?.trim() || "Travels Americas";
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fromEmail)) issues.push("SMTP2GO_FROM_EMAIL_INVALID");
  if (fromName.length > 128 || /[\r\n<>]/.test(fromName)) issues.push("SMTP2GO_FROM_NAME_INVALID");
  if (env.BETTER_AUTH_TRUSTED_ORIGINS) issues.push("BETTER_AUTH_TRUSTED_ORIGINS_UNSUPPORTED");
  return issues;
}

function trustedOrigins(environment: MemberAuthConfig["environment"]): string[] {
  return environment === "development"
    ? [...PRODUCTION_ORIGINS, ...DEVELOPMENT_ORIGINS]
    : [...PRODUCTION_ORIGINS];
}

function requireConfiguredOriginsOnly(): void {
  // Better Auth appends this variable even when trustedOrigins is explicit.
  // Our supported origins must come exclusively from the exact lists above.
  if (process.env.BETTER_AUTH_TRUSTED_ORIGINS) throw new MemberAuthUnavailableError();
}

function configuredOrigin(baseURL: string, environment: MemberAuthConfig["environment"]): string {
  try {
    const url = new URL(baseURL);
    if (url.username || url.password || url.pathname !== "/" || url.search || url.hash
      || !trustedOrigins(environment).includes(url.origin)) {
      throw new MemberAuthUnavailableError();
    }
    return url.origin;
  } catch {
    throw new MemberAuthUnavailableError();
  }
}

function memberName(value: unknown): string {
  if (typeof value !== "string" || /[\u0000-\u001f\u007f]/.test(value)) {
    throw new APIError("BAD_REQUEST", { code: "INVALID_MEMBER_NAME", message: "Enter your full name." });
  }
  const name = value.trim().replace(/ +/g, " ");
  if (!name || name.length > 100) {
    throw new APIError("BAD_REQUEST", { code: "INVALID_MEMBER_NAME", message: "Enter a name of up to 100 characters." });
  }
  return name;
}

function memberPhone(value: unknown): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string" || value.length > 40 || /[\u0000-\u001f\u007f]/.test(value)) {
    throw new APIError("BAD_REQUEST", { code: "INVALID_MEMBER_PHONE", message: "Enter a phone number with its country code, or leave it blank." });
  }
  const phone = value.trim().replace(/[ ().-]/g, "");
  if (!/^\+[1-9]\d{7,14}$/.test(phone)) {
    throw new APIError("BAD_REQUEST", { code: "INVALID_MEMBER_PHONE", message: "Enter a phone number with + and 8 to 15 digits, or leave it blank." });
  }
  return phone;
}

const PROTECTED_MEMBER_INPUTS = [
  "id", "userId", "user_id", "emailVerified", "email_verified", "phoneVerified",
  "session", "token", "expiresAt", "expires_at", "createdAt", "created_at", "updatedAt", "updated_at",
];

/** Dependency injection is for isolated library tests; the production accessor is below. */
export function createMemberAuth(
  config: MemberAuthConfig,
  sendOTP: (data: MemberOTP) => Promise<void>,
  notifyRegistration: (member: { name: string; email: string }) => Promise<void> = async () => {},
) {
  requireConfiguredOriginsOnly();
  if (!config.secret || config.secret.trim().length < 32 || !config.database) {
    throw new MemberAuthUnavailableError();
  }
  const baseURL = configuredOrigin(config.baseURL, config.environment);
  const secureCookies = new URL(baseURL).protocol === "https:";

  return betterAuth({
    appName: "Travels Americas",
    secret: config.secret,
    baseURL,
    basePath: "/api/auth",
    database: config.database,
    trustedOrigins: trustedOrigins(config.environment),
    emailAndPassword: {
      enabled: true,
      autoSignIn: false,
      requireEmailVerification: true,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      revokeSessionsOnPasswordReset: true,
    },
    emailVerification: {
      sendOnSignUp: true,
      sendOnSignIn: false,
      autoSignInAfterVerification: false,
    },
    user: {
      modelName: "member_user",
      fields: { emailVerified: "email_verified", createdAt: "created_at", updatedAt: "updated_at" },
      additionalFields: {
        phone: { type: "string", required: false, input: true, transform: { input: memberPhone } },
      },
      changeEmail: { enabled: false },
      deleteUser: { enabled: false },
    },
    session: {
      modelName: "member_session",
      fields: {
        userId: "user_id", expiresAt: "expires_at", createdAt: "created_at",
        updatedAt: "updated_at", ipAddress: "ip_address", userAgent: "user_agent",
      },
      expiresIn: 7 * 24 * 60 * 60,
      disableSessionRefresh: true,
      cookieCache: { enabled: false },
    },
    account: {
      modelName: "member_account",
      fields: {
        accountId: "account_id", providerId: "provider_id", userId: "user_id",
        accessToken: "access_token", refreshToken: "refresh_token", idToken: "id_token",
        accessTokenExpiresAt: "access_token_expires_at", refreshTokenExpiresAt: "refresh_token_expires_at",
        createdAt: "created_at", updatedAt: "updated_at",
      },
      accountLinking: { enabled: false },
    },
    verification: {
      modelName: "member_verification",
      fields: { expiresAt: "expires_at", createdAt: "created_at", updatedAt: "updated_at" },
      storeIdentifier: "hashed",
    },
    rateLimit: {
      enabled: true,
      storage: "database",
      modelName: "member_rate_limit",
      fields: { lastRequest: "last_request" },
      window: 60,
      max: 60,
      customRules: {
        "/email-otp/send-verification-otp": { window: 10 * 60, max: 3 },
        "/sign-in/email-otp": { window: 5 * 60, max: 5 },
        "/sign-up/email": { window: 10 * 60, max: 3 },
        "/sign-in/email": { window: 5 * 60, max: 5 },
        "/email-otp/verify-email": { window: 5 * 60, max: 5 },
        "/email-otp/request-password-reset": { window: 10 * 60, max: 3 },
        "/email-otp/reset-password": { window: 5 * 60, max: 5 },
      },
    },
    advanced: {
      cookiePrefix: "travels-americas-member",
      useSecureCookies: secureCookies,
      defaultCookieAttributes: { httpOnly: true, sameSite: "lax", secure: secureCookies, path: "/" },
      crossSubDomainCookies: { enabled: false },
      // Empty headers use the library's shared limiter, rather than trusting a client-supplied XFF.
      ipAddress: { ipAddressHeaders: config.trustedIPHeader ? [config.trustedIPHeader] : [] },
      disableCSRFCheck: false,
      disableOriginCheck: false,
      trustedProxyHeaders: false,
    },
    logger: { disabled: true },
    telemetry: { enabled: false },
    disabledPaths: [
      "/sign-in/social", "/sign-in/oauth2",
      "/request-password-reset", "/reset-password", "/change-password", "/set-password",
      "/change-email", "/send-verification-email", "/verify-email", "/update-user",
      "/forget-password/email-otp",
      "/email-otp/request-email-change", "/email-otp/change-email",
      "/email-otp/check-verification-otp",
    ],
    hooks: {
      before: createAuthMiddleware(async (context) => {
        if (context.path === "/sign-up/email") {
          if (PROTECTED_MEMBER_INPUTS.some(field => Object.hasOwn(context.body ?? {}, field))) {
            throw new APIError("BAD_REQUEST", { message: "These profile fields cannot be set." });
          }
          context.body.name = memberName(context.body?.name);
          if (Object.hasOwn(context.body, "phone")) context.body.phone = memberPhone(context.body.phone);
        }
        if (context.path === "/email-otp/send-verification-otp"
          && !["sign-in", "email-verification"].includes(context.body?.type)) {
          throw new APIError("BAD_REQUEST", { message: "Use a sign-in or email verification code." });
        }
        if (context.path === "/sign-in/email-otp" && typeof context.body?.email === "string") {
          const member = await context.context.internalAdapter.findUserByEmail(context.body.email.toLowerCase());
          if (member?.user.emailVerified !== true) {
            // A sign-in code must never activate an unverified, pre-created password account.
            throw new APIError("BAD_REQUEST", { code: "INVALID_OTP", message: "Invalid OTP" });
          }
        }
      }),
    },
    databaseHooks: {
      user: {
        create: {
          before: async (user) => ({ data: { ...user, name: memberName(user.name), phone: memberPhone(user.phone) } }),
          after: async (user) => {
            try { await notifyRegistration({ name: user.name, email: user.email }); }
            catch { console.error("[member-auth] REGISTRATION_NOTIFICATION_FAILED"); }
          },
        },
      },
    },
    plugins: [emailOTP({
      otpLength: 6,
      expiresIn: 5 * 60,
      allowedAttempts: 3,
      storeOTP: "hashed",
      resendStrategy: "rotate",
      disableSignUp: true,
      sendVerificationOnSignUp: false,
      overrideDefaultEmailVerification: true,
      changeEmail: { enabled: false },
      sendVerificationOTP: async (data, context) => {
        if (data.type === "sign-in") {
          const member = await context?.context.internalAdapter.findUserByEmail(data.email);
          if (member?.user.emailVerified !== true) return;
        }
        await sendOTP(data);
      },
    })],
  });
}

const globalDatabase = globalThis as typeof globalThis & { memberAuthPool?: Pool };
let memberAuth: ReturnType<typeof createMemberAuth> | undefined;

function memberDatabase(connectionString: string): Pool {
  if (globalDatabase.memberAuthPool) return globalDatabase.memberAuthPool;
  try {
    const url = new URL(connectionString);
    if (!["postgres:", "postgresql:"].includes(url.protocol)) throw new MemberAuthUnavailableError();
    // pg connection-string SSL fields override explicit Pool TLS options unless removed.
    for (const key of ["ssl", "sslmode", "sslcert", "sslkey", "sslrootcert", "uselibpqcompat"]) {
      url.searchParams.delete(key);
    }
    const ca = process.env.DATABASE_SSL_CA?.replace(/\\n/g, "\n");
    const pool = new Pool({
      connectionString: url.toString(),
      ssl: { rejectUnauthorized: true, ...(ca ? { ca } : {}) },
      max: 3,
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      query_timeout: 5000,
    });
    // Idle pool errors must not terminate the app or write connection details to logs.
    pool.on("error", () => {});
    globalDatabase.memberAuthPool = pool;
    return pool;
  } catch {
    throw new MemberAuthUnavailableError();
  }
}

function smtpSender() {
  const apiKey = process.env.SMTP2GO_API_KEY?.trim();
  const fromEmail = process.env.SMTP2GO_FROM_EMAIL?.trim() || "hello@travelsamericas.com";
  const fromName = process.env.SMTP2GO_FROM_NAME?.trim() || "Travels Americas";
  if (!apiKey || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fromEmail)
    || fromName.length > 128 || /[\r\n<>]/.test(fromName)) {
    throw new MemberAuthUnavailableError();
  }
  return async ({ email, otp, type }: MemberOTP): Promise<void> => {
    if (type === "change-email") throw new MemberAuthUnavailableError();
    const purpose = type === "email-verification" ? "email verification" : type === "forget-password" ? "password reset" : "sign-in";
    const instruction = type === "email-verification" ? "Enter it on the registration page to verify your email."
      : type === "forget-password" ? "Enter it on the password reset page to choose a new password."
        : "Enter it on the sign-in page to view hotel ratings, prices, and booking links.";
    try {
      const response = await fetch("https://api.smtp2go.com/v3/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Smtp2go-Api-Key": apiKey },
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
        body: JSON.stringify({
          sender: `${fromName} <${fromEmail}>`,
          to: [email],
          subject: `Your Travels Americas ${purpose} code`,
          text_body: `Your Travels Americas ${purpose} code is ${otp}.\n\nThis code expires in five minutes. ${instruction}\n\nIf you did not request this code, you can ignore this email.`,
        }),
      });
      const body = await response.json().catch(() => null) as {
        data?: { succeeded?: number; failed?: number };
      } | null;
      if (!response.ok || body?.data?.succeeded !== 1 || body.data.failed !== 0) {
        throw new MemberAuthUnavailableError();
      }
    } catch {
      throw new MemberAuthUnavailableError();
    }
  };
}

/** Lazy initialization keeps public destination pages working without auth configuration. */
export function getAuth() {
  requireConfiguredOriginsOnly();
  if (memberAuth) return memberAuth;
  const secret = process.env.BETTER_AUTH_SECRET;
  const baseURL = process.env.BETTER_AUTH_URL;
  const databaseURL = process.env.DATABASE_URL;
  const environment = process.env.NODE_ENV === "development" ? "development" : "production";
  if (!secret || secret.trim().length < 32 || !baseURL || !databaseURL) {
    throw new MemberAuthUnavailableError();
  }
  configuredOrigin(baseURL, environment);
  const sendOTP = smtpSender();
  memberAuth = createMemberAuth({
    secret,
    baseURL,
    environment,
    database: memberDatabase(databaseURL),
    trustedIPHeader: process.env.VERCEL === "1"
      ? "x-vercel-forwarded-for"
      : process.env.AUTH_TRUST_CLOUDFLARE_PROXY === "true" ? "cf-connecting-ip" : undefined,
  }, sendOTP, notifyMemberRegistration);
  return memberAuth;
}

/** Every restricted read checks the database; expired, revoked, or unavailable sessions deny access. */
export async function getMemberSession(headers: Headers): Promise<MemberSession | null> {
  if (!headers.get("cookie")) return null;
  try {
    const session = await getAuth().api.getSession({
      headers,
      query: { disableCookieCache: true, disableRefresh: true },
    });
    return session?.user.emailVerified === true ? { user: session.user } : null;
  } catch {
    return null;
  }
}
