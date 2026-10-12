import assert from "node:assert/strict";
import test from "node:test";
import { memoryAdapter } from "better-auth/adapters/memory";
import { loadTypescriptModule } from "./load-typescript-module.mjs";

const { createMemberAuth, MemberAuthUnavailableError, memberAuthConfigurationIssues } = await loadTypescriptModule("../../app/lib/auth.ts", {
  resolveImports: true, omitServerOnly: true,
});
const secret = "isolated-auth-test-secret-with-at-least-32-characters-7b931e2c";
const baseURL = "https://www.travelsamericas.com";
const email = "member@example.test";
const password = "A test password 42!";
const nextPassword = "A new test password 53!";

test("configuration diagnostics identify failures without disclosing values", () => {
  const env = { NODE_ENV: "production", BETTER_AUTH_SECRET: secret, BETTER_AUTH_URL: baseURL,
    DATABASE_URL: "postgresql://private-user:private-password@example.test/db", SMTP2GO_API_KEY: "private-api-key" };
  assert.deepEqual(memberAuthConfigurationIssues(env), []);
  assert.deepEqual(memberAuthConfigurationIssues({ ...env, BETTER_AUTH_URL: "https://www.travelsamericas.com/register" }), ["BETTER_AUTH_URL_INVALID"]);
  assert.deepEqual(memberAuthConfigurationIssues({ ...env, BETTER_AUTH_SECRET: "short" }), ["BETTER_AUTH_SECRET_MISSING_OR_TOO_SHORT"]);
  assert.deepEqual(memberAuthConfigurationIssues({ ...env, SMTP2GO_API_KEY: "" }), ["SMTP2GO_API_KEY_MISSING"]);
  assert.deepEqual(memberAuthConfigurationIssues({ ...env, BETTER_AUTH_TRUSTED_ORIGINS: "private-value" }), ["BETTER_AUTH_TRUSTED_ORIGINS_UNSUPPORTED"]);
  assert.ok(!JSON.stringify(memberAuthConfigurationIssues({ ...env, DATABASE_URL: "private-password" })).includes("private-password"));
});

function fixture(overrides = {}) {
  const database = { member_user: [], member_session: [], member_account: [], member_verification: [], member_rate_limit: [] };
  const delivered = [];
  const auth = createMemberAuth({ secret, baseURL, environment: "production", database: memoryAdapter(database), ...overrides }, async (data) => { delivered.push(data); });
  const request = (path, { body, cookie, origin = baseURL, headers = {} } = {}) => auth.handler(new Request(`${baseURL}/api/auth${path}`, {
    method: body === undefined ? "GET" : "POST",
    headers: { origin, "content-type": "application/json", ...(cookie ? { cookie } : {}), ...headers },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  }));
  return { auth, database, delivered, request };
}

async function send(f, type = "sign-in") {
  const before = f.delivered.length;
  const response = await f.request("/email-otp/send-verification-otp", { body: { email, type } });
  assert.equal(response.status, 200);
  assert.equal(f.delivered.length, before + 1);
  assert.match(f.delivered.at(-1).otp, /^\d{6}$/);
  assert.equal(f.delivered.at(-1).type, type);
  return f.delivered.at(-1).otp;
}

async function register(f, extra = {}) {
  const response = await f.request("/sign-up/email", { body: { name: "Morgan Taylor", email, password, ...extra } });
  assert.equal(response.status, 200);
  assert.equal(f.delivered.length, 1);
  assert.equal(f.delivered[0].type, "email-verification");
  assert.match(f.delivered[0].otp, /^\d{6}$/);
  return { response, otp: f.delivered[0].otp };
}

async function registered(f, extra = {}) {
  const { otp } = await register(f, extra);
  const response = await f.request("/email-otp/verify-email", { body: { email, otp } });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).user.emailVerified, true);
}

async function signIn(f) {
  await registered(f);
  const response = await f.request("/sign-in/email", { body: { email, password } });
  assert.equal(response.status, 200);
  const cookie = response.headers.get("set-cookie");
  assert.ok(cookie);
  return { response, cookie: cookie.split(";")[0], cookieHeader: cookie };
}

function legacyMember(f) {
  const now = new Date();
  f.database.member_user.push({ id: "legacy-member", name: "", email, email_verified: true, created_at: now, updated_at: now, image: null, phone: null });
}

async function resetCode(f) {
  const before = f.delivered.length;
  const response = await f.request("/email-otp/request-password-reset", { body: { email } });
  assert.equal(response.status, 200);
  assert.equal(f.delivered.length, before + 1);
  assert.equal(f.delivered.at(-1).type, "forget-password");
  assert.match(f.delivered.at(-1).otp, /^\d{6}$/);
  return f.delivered.at(-1).otp;
}

test("registration stores a profile and hashed password but requires email verification before sign-in", async () => {
  const f = fixture();
  const { response: signup, otp } = await register(f, { name: "  Morgan Taylor  ", phone: "+1 (202) 555-0123" });
  const signupData = await signup.json();
  assert.equal(signupData.token, null);
  assert.equal(signupData.user.name, "Morgan Taylor");
  assert.equal(signupData.user.phone, "+12025550123");
  assert.equal(signupData.user.emailVerified, false);
  assert.equal(f.database.member_user.length, 1);
  assert.equal(f.database.member_session.length, 0);
  assert.equal(f.database.member_account.length, 1);
  assert.ok(f.database.member_account[0].password);
  assert.notEqual(f.database.member_account[0].password, password);
  assert.ok(!JSON.stringify(f.database).includes(password), "Password must never be stored in clear text");
  assert.equal(f.database.member_verification.length, 1);
  const stored = JSON.stringify(f.database.member_verification);
  assert.ok(!stored.includes(otp), "OTP must be hashed in storage");
  assert.ok(!stored.includes(email), "Verification identifier must be hashed in storage");
  const unverified = await f.request("/sign-in/email", { body: { email, password } });
  assert.equal(unverified.status, 403);
  assert.equal(f.database.member_session.length, 0);
  assert.equal(f.delivered.length, 1, "Password sign-in must not send automatic duplicate codes");
  const verified = await f.request("/email-otp/verify-email", { body: { email, otp } });
  assert.equal(verified.status, 200);
  assert.equal((await verified.json()).user.emailVerified, true);
  assert.equal(f.database.member_session.length, 0, "Email verification must not bypass the selected sign-in method");
  assert.equal(f.database.member_verification.length, 0);
  const response = await f.request("/sign-in/email", { body: { email, password } });
  assert.equal(response.status, 200);
  const cookie = response.headers.get("set-cookie");
  assert.match(cookie, /__Secure-travels-americas-member\.session_token=/);
  assert.match(cookie, /HttpOnly/i);
  assert.match(cookie, /Secure/i);
  assert.match(cookie, /SameSite=Lax/i);
  assert.doesNotMatch(cookie, /Domain=/i);
  const session = await f.request("/get-session?disableCookieCache=true", { cookie: cookie.split(";")[0] });
  assert.equal(session.status, 200);
  assert.equal((await session.json()).user.emailVerified, true);
  const replay = await f.request("/email-otp/verify-email", { body: { email, otp } });
  assert.equal(replay.status, 400);
  assert.equal(f.database.member_session.length, 1);
});

test("invalid verification codes cannot verify profiles and exhaust the configured attempts", async () => {
  const f = fixture();
  const { otp } = await register(f);
  const wrong = otp === "000000" ? "999999" : "000000";
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const response = await f.request("/email-otp/verify-email", { body: { email, otp: wrong } });
    assert.equal(response.status, 400);
  }
  const locked = await f.request("/email-otp/verify-email", { body: { email, otp } });
  assert.equal(locked.status, 403);
  assert.equal(f.database.member_user[0].email_verified, false);
  assert.equal(f.database.member_session.length, 0);
});

test("expired email verification codes cannot verify profiles or create sessions", async () => {
  const f = fixture();
  const { otp } = await register(f);
  const row = f.database.member_verification[0];
  assert.ok(row.expires_at instanceof Date);
  assert.ok(row.expires_at.getTime() - Date.now() <= 300_000);
  row.expires_at = new Date(Date.now() - 60_000);
  const response = await f.request("/email-otp/verify-email", { body: { email, otp } });
  assert.equal(response.status, 400);
  assert.equal(f.database.member_user[0].email_verified, false);
  assert.equal(f.database.member_session.length, 0);
});

test("registration works without an optional phone number", async () => {
  const f = fixture();
  const { response } = await register(f);
  const data = await response.json();
  assert.equal(data.user.name, "Morgan Taylor");
  assert.ok(!data.user.phone);
  assert.ok(!f.database.member_user[0].phone);
});

for (const [label, extra] of [
  ["missing name", { name: undefined }], ["blank name", { name: " \t " }], ["long name", { name: "x".repeat(101) }],
  ["control characters in name", { name: "Morgan\nTaylor" }], ["missing email", { email: undefined }], ["invalid email", { email: "not-an-email" }],
  ["short password", { password: "1234567" }], ["long password", { password: "x".repeat(129) }],
  ["local phone without country prefix", { phone: "2025550123" }], ["short phone", { phone: "+1234567" }],
  ["long phone", { phone: "+1234567890123456" }], ["invalid phone", { phone: "+1202555<script>" }],
  ["chosen account ID", { id: "attacker-selected-id" }], ["preverified account", { emailVerified: true }],
]) {
  test(`registration rejects ${label} before storing a profile or sending a code`, async () => {
    const f = fixture();
    const response = await f.request("/sign-up/email", { body: { name: "Morgan Taylor", email, password, ...extra } });
    assert.ok(response.status >= 400 && response.status < 500);
    assert.equal(f.database.member_user.length, 0);
    assert.equal(f.database.member_account.length, 0);
    assert.equal(f.database.member_session.length, 0);
    assert.deepEqual(f.delivered, []);
  });
}

test("wrong passwords cannot create a session; a verified member can use the correct password", async () => {
  const f = fixture();
  await registered(f);
  const wrong = await f.request("/sign-in/email", { body: { email, password: "Wrong test password 64!" } });
  assert.equal(wrong.status, 401);
  assert.equal(f.database.member_session.length, 0);
  const correct = await f.request("/sign-in/email", { body: { email, password } });
  assert.equal(correct.status, 200);
  assert.equal((await correct.json()).user.emailVerified, true);
  assert.equal(f.database.member_session.length, 1);
});

test("email-code sign-in preserves existing profiles, including old code-only accounts", async () => {
  for (const legacy of [false, true]) {
    const f = fixture();
    if (legacy) legacyMember(f);
    else await registered(f, { phone: "+12025550123" });
    const otp = await send(f);
    const response = await f.request("/sign-in/email-otp", { body: { email, otp, name: "Injected profile", phone: "+447700900123" } });
    assert.equal(response.status, 200);
    const data = await response.json();
    assert.equal(data.user.emailVerified, true);
    assert.equal(data.user.name, legacy ? "" : "Morgan Taylor");
    assert.equal(data.user.phone ?? null, legacy ? null : "+12025550123");
    assert.equal(f.database.member_user.length, 1);
    assert.equal(f.database.member_account.length, legacy ? 0 : 1);
    const replay = await f.request("/sign-in/email-otp", { body: { email, otp } });
    assert.equal(replay.status, 400);
    assert.equal(f.database.member_session.length, 1);
  }
});

test("email codes cannot create an unknown account or bypass required profile registration", async () => {
  const f = fixture();
  const requested = await f.request("/email-otp/send-verification-otp", { body: { email, type: "sign-in" } });
  assert.equal(requested.status, 200);
  assert.deepEqual(f.delivered, []);
  const response = await f.request("/sign-in/email-otp", { body: { email, otp: "123456", name: "Bypassed profile" } });
  assert.equal(response.status, 400);
  assert.equal(f.database.member_user.length, 0);
  assert.equal(f.database.member_account.length, 0);
  assert.equal(f.database.member_session.length, 0);
});

test("an unverified profile cannot sign in with an email sign-in code", async () => {
  const f = fixture();
  const { otp } = await register(f);
  const requested = await f.request("/email-otp/send-verification-otp", { body: { email, type: "sign-in" } });
  assert.equal(requested.status, 200);
  assert.equal(f.delivered.length, 1, "Only the registration verification code may be sent");
  const response = await f.request("/sign-in/email-otp", { body: { email, otp } });
  assert.equal(response.status, 400);
  assert.equal(f.database.member_user[0].email_verified, false);
  assert.equal(f.database.member_session.length, 0);
});

test("email verification, sign-in, and password-reset codes cannot be substituted for one another", async () => {
  const f = fixture();
  const { otp } = await register(f);
  const verificationAsSignIn = await f.request("/sign-in/email-otp", { body: { email, otp } });
  assert.equal(verificationAsSignIn.status, 400);
  const verificationAsReset = await f.request("/email-otp/reset-password", { body: { email, otp, password: nextPassword } });
  assert.equal(verificationAsReset.status, 400);
  const verified = await f.request("/email-otp/verify-email", { body: { email, otp } });
  assert.equal(verified.status, 200);
  const signinCode = await send(f);
  const signinAsReset = await f.request("/email-otp/reset-password", { body: { email, otp: signinCode, password: nextPassword } });
  assert.equal(signinAsReset.status, 400);
  const reset = await resetCode(f);
  const resetAsSignIn = await f.request("/sign-in/email-otp", { body: { email, otp: reset } });
  assert.equal(resetAsSignIn.status, 400);
  const success = await f.request("/email-otp/reset-password", { body: { email, otp: reset, password: nextPassword } });
  assert.equal(success.status, 200);
});

test("password reset changes the hash, revokes existing sessions, and consumes its code", async () => {
  const f = fixture();
  const { cookie } = await signIn(f);
  const oldHash = f.database.member_account[0].password;
  const otp = await resetCode(f);
  const response = await f.request("/email-otp/reset-password", { body: { email, otp, password: nextPassword } });
  assert.equal(response.status, 200);
  assert.equal(f.database.member_session.length, 0);
  assert.notEqual(f.database.member_account[0].password, oldHash);
  assert.notEqual(f.database.member_account[0].password, nextPassword);
  const revoked = await f.request("/get-session?disableCookieCache=true", { cookie });
  assert.equal(await revoked.json(), null);
  const oldPassword = await f.request("/sign-in/email", { body: { email, password } });
  assert.equal(oldPassword.status, 401);
  const newPassword = await f.request("/sign-in/email", { body: { email, password: nextPassword } });
  assert.equal(newPassword.status, 200);
  const replay = await f.request("/email-otp/reset-password", { body: { email, otp, password } });
  assert.equal(replay.status, 400);
});

test("an existing code-only member can securely add a password using a reset code", async () => {
  const f = fixture();
  legacyMember(f);
  assert.equal(f.database.member_account.length, 0);
  const otp = await resetCode(f);
  const response = await f.request("/email-otp/reset-password", { body: { email, otp, password: nextPassword } });
  assert.equal(response.status, 200);
  assert.equal(f.database.member_user.length, 1);
  assert.equal(f.database.member_account.length, 1);
  assert.equal(f.database.member_account[0].provider_id, "credential");
  assert.notEqual(f.database.member_account[0].password, nextPassword);
  const signin = await f.request("/sign-in/email", { body: { email, password: nextPassword } });
  assert.equal(signin.status, 200);
  assert.equal((await signin.json()).user.id, "legacy-member");
});

test("expired reset codes cannot change a password", async () => {
  const f = fixture();
  await registered(f);
  const previousHash = f.database.member_account[0].password;
  const otp = await resetCode(f);
  f.database.member_verification[0].expires_at = new Date(Date.now() - 60_000);
  const response = await f.request("/email-otp/reset-password", { body: { email, otp, password: nextPassword } });
  assert.equal(response.status, 400);
  assert.equal(f.database.member_account[0].password, previousHash);
});

test("wrong reset codes exhaust attempts while preserving the password and sessions", async () => {
  const f = fixture();
  await signIn(f);
  const previousHash = f.database.member_account[0].password;
  const otp = await resetCode(f);
  const wrong = otp === "000000" ? "999999" : "000000";
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const response = await f.request("/email-otp/reset-password", { body: { email, otp: wrong, password: nextPassword } });
    assert.equal(response.status, 400);
  }
  const locked = await f.request("/email-otp/reset-password", { body: { email, otp, password: nextPassword } });
  assert.equal(locked.status, 403);
  assert.equal(f.database.member_account[0].password, previousHash);
  assert.equal(f.database.member_session.length, 1);
});

test("unknown password-reset requests return a generic result without sending mail or creating accounts", async () => {
  const f = fixture();
  const response = await f.request("/email-otp/request-password-reset", { body: { email } });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.deepEqual(f.delivered, []);
  assert.equal(f.database.member_user.length, 0);
  assert.equal(f.database.member_account.length, 0);
});

test("password attempts and reset requests use their configured persistent limits", async () => {
  const f = fixture();
  await registered(f);
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await f.request("/sign-in/email", { body: { email, password: "Wrong test password 64!" } });
    assert.equal(response.status, 401);
  }
  const blockedPassword = await f.request("/sign-in/email", { body: { email, password } });
  assert.equal(blockedPassword.status, 429);
  for (let attempt = 0; attempt < 3; attempt += 1) await resetCode(f);
  const blockedReset = await f.request("/email-otp/request-password-reset", { body: { email } });
  assert.equal(blockedReset.status, 429);
  assert.equal(f.delivered.length, 4);
});

test("fabricated cookies, expired sessions, and signed-out sessions are denied", async () => {
  const f = fixture();
  const { cookie } = await signIn(f);
  const fabricated = await f.request("/get-session?disableCookieCache=true", { cookie: cookie.replace(/=.*/, "=fabricated.invalid-signature") });
  assert.equal(await fabricated.json(), null);
  const logout = await f.request("/sign-out", { body: {}, cookie });
  assert.equal(logout.status, 200);
  assert.equal(f.database.member_session.length, 0);
  const revoked = await f.request("/get-session?disableCookieCache=true", { cookie });
  assert.equal(await revoked.json(), null);

  const expiredFixture = fixture();
  const expiredSession = await signIn(expiredFixture);
  expiredFixture.database.member_session[0].expires_at = new Date(Date.now() - 60_000);
  const expired = await expiredFixture.request("/get-session?disableCookieCache=true", { cookie: expiredSession.cookie });
  assert.equal(await expired.json(), null);
});

test("external origins cannot send codes or verify registration", async () => {
  const f = fixture();
  const response = await f.request("/email-otp/send-verification-otp", { body: { email, type: "sign-in" }, origin: "https://attacker.example" });
  assert.equal(response.status, 403);
  assert.deepEqual(f.delivered, []);
  assert.equal(f.database.member_verification.length, 0);
});

test("code sending uses persistent limits even when visitors forge forwarding headers", async () => {
  const f = fixture();
  await registered(f);
  const before = f.delivered.length;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const response = await f.request("/email-otp/send-verification-otp", {
      body: { email, type: "sign-in" }, headers: { "x-forwarded-for": `192.0.2.${attempt + 1}`, "x-real-ip": `192.0.2.${attempt + 1}` },
    });
    assert.equal(response.status, 200);
  }
  assert.equal(f.delivered.length, before + 3);
  assert.ok(f.database.member_rate_limit.length > 0);
  const blocked = await f.request("/email-otp/send-verification-otp", {
    body: { email, type: "sign-in" }, headers: { "x-forwarded-for": "192.0.2.99", "x-real-ip": "192.0.2.99" },
  });
  assert.equal(blocked.status, 429);
  assert.equal(f.delivered.length, before + 3);
  assert.ok(Number(blocked.headers.get("x-retry-after")) > 0);
});

test("social, change-email, and link-based reset endpoints stay disabled", async () => {
  const f = fixture();
  for (const path of ["/sign-in/social", "/request-password-reset", "/reset-password", "/set-password", "/change-email", "/email-otp/change-email", "/forget-password/email-otp"]) {
    const response = await f.request(path, { body: { email, password: "unused-test-password", provider: "google" } });
    assert.equal(response.status, 404);
  }
  const wrongType = await f.request("/email-otp/send-verification-otp", { body: { email, type: "change-email" } });
  assert.equal(wrongType.status, 400);
  assert.deepEqual(f.delivered, []);
});

test("weak secrets and untrusted production auth origins fail closed", () => {
  for (const overrides of [
    { secret: "too-short" }, { secret: " ".repeat(40) }, { baseURL: "http://127.0.0.1:3000" },
    { baseURL: "https://attacker.example" }, { baseURL: `${baseURL}/other` }, { baseURL: `${baseURL}?query=bad` },
    { baseURL: "https://user:password@www.travelsamericas.com" },
  ]) {
    assert.throws(() => fixture(overrides), MemberAuthUnavailableError);
  }
});

test("environment origin overrides cannot widen or replace the configured allowlist", () => {
  const previous = process.env.BETTER_AUTH_TRUSTED_ORIGINS;
  try {
    for (const value of ["https://attacker.example", "*", baseURL]) {
      process.env.BETTER_AUTH_TRUSTED_ORIGINS = value;
      assert.throws(() => fixture(), MemberAuthUnavailableError);
    }
    process.env.BETTER_AUTH_TRUSTED_ORIGINS = "";
    assert.doesNotThrow(() => fixture());
  } finally {
    if (previous === undefined) delete process.env.BETTER_AUTH_TRUSTED_ORIGINS;
    else process.env.BETTER_AUTH_TRUSTED_ORIGINS = previous;
  }
});
