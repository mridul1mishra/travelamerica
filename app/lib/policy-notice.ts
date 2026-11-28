// One-time notice to the old newsletter list (subscribers table): guide emails now come with a
// free account, so subscribers who want to keep receiving them should register. Sent from the
// admin page /admin/policy-notice (on the live site, where the unsubscribe secret is configured).
// Each send is recorded in subscribers.policy_notice_sent_at, so nobody is emailed twice.
import "server-only";
import { Pool } from "pg";
import { createUnsubscribeToken } from "./unsubscribeToken";

const site = "https://www.travelsamericas.com";
export const POLICY_NOTICE_SUBJECT = "Your Travels Americas guide emails are moving to free accounts";
/** Emails per click: keeps each send well inside the server time limit. */
export const POLICY_NOTICE_BATCH = 40;

const globalDb = globalThis as typeof globalThis & { policyNoticePool?: Pool };
function db(): Pool {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
  return globalDb.policyNoticePool ??= new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 1 });
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
export const postalAddress = () => process.env.POSTAL_ADDRESS?.trim() ?? "";

export function policyNoticeHtml(email: string, source?: string | null): string {
  const register = `${site}/register?${new URLSearchParams({ email, source: source && /^[a-z0-9-]{1,80}$/.test(source) ? source : "policy-notice" })}`;
  const unsubscribe = `${site}/api/unsubscribe?token=${createUnsubscribeToken(email)}`;
  const postal = postalAddress();
  return `<!doctype html><html><body style="margin:0;background:#f3f4f6">
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#fff;color:#111827">
    <p style="margin:0 0 6px;font-size:13px;color:#6b7280">Travels Americas</p>
    <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3">We've changed how our travel guide emails work</h1>
    <p style="margin:0 0 14px;line-height:1.6;color:#374151">You signed up for travel guides on TravelsAmericas.com. Thank you for reading!</p>
    <p style="margin:0 0 14px;line-height:1.6;color:#374151">We've updated our policy: our travel guide emails now come with a <strong>free Travels Americas account</strong>.
      If you'd like to keep receiving them, please create your free account. It takes about a minute, and members can also see hotel ratings, photos and prices on the site.</p>
    <p style="margin:0 0 24px;line-height:1.6;color:#374151">If you don't register, <strong>this is the last email you'll receive</strong> from our old mailing list.</p>
    <p style="margin:0 0 28px"><a href="${esc(register)}" style="display:inline-block;background:#111827;color:#fff;text-decoration:none;padding:12px 22px;border-radius:8px;font-weight:600">Create my free account</a></p>
    <p style="margin:0 0 28px;line-height:1.6;color:#6b7280;font-size:14px">See our <a href="${site}/termsandcondition" style="color:#6b7280">Terms</a> and <a href="${site}/privacy" style="color:#6b7280">Privacy Policy</a>. Questions? Just reply to this email.</p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 16px"/>
    <p style="color:#9ca3af;font-size:12px;margin:0;line-height:1.6">You're receiving this because you signed up at TravelsAmericas.com.${postal ? `<br/>${esc(postal)}` : ""}<br/>
      <a href="${esc(unsubscribe)}" style="color:#9ca3af">Unsubscribe</a></p>
  </div></body></html>`;
}

async function deliver(to: string, html: string): Promise<boolean> {
  const apiKey = process.env.SMTP2GO_API_KEY, from = process.env.SMTP2GO_FROM_EMAIL;
  if (!apiKey || !from) throw new Error("SMTP2GO_API_KEY / SMTP2GO_FROM_EMAIL are not set");
  const res = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST", headers: { "Content-Type": "application/json" }, cache: "no-store",
    body: JSON.stringify({ api_key: apiKey, to: [to], subject: POLICY_NOTICE_SUBJECT, html_body: html,
      sender: `${process.env.SMTP2GO_FROM_NAME || "Travels Americas"} <${from}>` }),
  });
  const data = await res.json().catch(() => null) as { data?: { succeeded?: number; failed?: number } } | null;
  return res.ok && data?.data?.succeeded === 1 && data?.data?.failed === 0;
}

// Old list, not unsubscribed, not yet sent this notice, and not already a verified member.
const ELIGIBLE = `FROM subscribers s
  WHERE s.unsubscribed_at IS NULL AND s.policy_notice_sent_at IS NULL
    AND NOT EXISTS (SELECT 1 FROM member_user u WHERE u.email = lower(trim(s.email)) AND u.email_verified)`;

export async function policyNoticeStatus() {
  const { rows } = await db().query<{ eligible: string; sent: string }>(
    `SELECT (SELECT COUNT(*) ${ELIGIBLE}) AS eligible,
            (SELECT COUNT(*) FROM subscribers WHERE policy_notice_sent_at IS NOT NULL) AS sent`);
  return { eligible: Number(rows[0].eligible), sent: Number(rows[0].sent) };
}

export async function sendPolicyNoticeTest(to: string): Promise<boolean> {
  return deliver(to, policyNoticeHtml(to, "policy-notice"));
}

/** Send the next batch; returns counts. Safe to repeat: sent rows are marked and skipped. */
export async function sendPolicyNoticeBatch() {
  const { rows } = await db().query<{ id: number; email: string; source: string | null }>(
    `SELECT s.id, lower(trim(s.email)) AS email, s.source ${ELIGIBLE} ORDER BY s.created_at LIMIT ${POLICY_NOTICE_BATCH}`);
  let sent = 0, failed = 0;
  for (const r of rows) {
    try {
      if (await deliver(r.email, policyNoticeHtml(r.email, r.source))) {
        await db().query("UPDATE subscribers SET policy_notice_sent_at = NOW() WHERE id = $1", [r.id]);
        sent++;
      } else failed++;
    } catch { failed++; }
  }
  return { sent, failed };
}
