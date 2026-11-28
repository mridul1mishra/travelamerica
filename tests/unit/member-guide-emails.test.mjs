import assert from "node:assert/strict";
import test from "node:test";
import { memoryAdapter } from "better-auth/adapters/memory";
import { loadTypescriptModule } from "./load-typescript-module.mjs";

// Guide emails: registration (the only signup) records consent, the guide topic comes from the
// /register link, and the guide is sent only after the email is verified.
const { createMemberAuth } = await loadTypescriptModule("../../app/lib/auth.ts", { resolveImports: true, omitServerOnly: true });
const secret = "isolated-auth-test-secret-with-at-least-32-characters-7b931e2c";
const baseURL = "https://www.travelsamericas.com";
const email = "guide@example.test";
const password = "A test password 42!";

function fixture() {
  const database = { member_user: [], member_session: [], member_account: [], member_verification: [], member_rate_limit: [] };
  const delivered = [], verified = [];
  const auth = createMemberAuth({ secret, baseURL, environment: "production", database: memoryAdapter(database) },
    async (data) => { delivered.push(data); }, async () => {}, async (id) => { verified.push(id); });
  const request = (path, body, referer = `${baseURL}/register`) => auth.handler(new Request(`${baseURL}/api/auth${path}`, {
    method: "POST", headers: { origin: baseURL, referer, "content-type": "application/json", "x-real-ip": "203.0.113.7" },
    body: JSON.stringify(body),
  }));
  return { database, delivered, verified, request };
}
const users = (f) => f.database.member_user.filter((u) => u.email === email);
const field = (row, camel, snake) => row[camel] ?? row[snake];

test("registration records guide-email consent and sends the guide only after verification", async () => {
  const f = fixture();
  const response = await f.request("/sign-up/email", { name: "Morgan Taylor", email, password });
  assert.equal(response.status, 200);
  const [row] = users(f);
  assert.ok(field(row, "guideEmailsConsentAt", "guide_emails_consent_at") instanceof Date);
  assert.equal(field(row, "guideEmailsSource", "guide_emails_source"), "register");
  assert.equal(field(row, "guideEmailsConsentIp", "guide_emails_consent_ip"), "203.0.113.7");
  assert.equal(field(row, "dripStep", "drip_step"), 1);
  assert.deepEqual(f.verified, [], "no guide before the email is verified");
  const otp = f.delivered.at(-1).otp;
  assert.equal((await f.request("/email-otp/verify-email", { email, otp })).status, 200);
  assert.deepEqual(f.verified, [row.id], "guide is triggered once the email is verified");
});

test("the guide topic comes from the /register link a guide box sent the visitor to", async () => {
  const f = fixture();
  const link = `${baseURL}/register?email=${encodeURIComponent(email)}&source=nyc-safety-guide-checklist&next=%2Fdestination%2Fnyc`;
  assert.equal((await f.request("/sign-up/email", { name: "Morgan Taylor", email, password }, link)).status, 200);
  assert.equal(field(users(f)[0], "guideEmailsSource", "guide_emails_source"), "nyc-safety-guide-checklist");
});

test("an unusable source falls back to the general guide", async () => {
  const f = fixture();
  assert.equal((await f.request("/sign-up/email", { name: "Morgan Taylor", email, password },
    `${baseURL}/register?source=%3Cscript%3E`)).status, 200);
  assert.equal(field(users(f)[0], "guideEmailsSource", "guide_emails_source"), "register");
});
