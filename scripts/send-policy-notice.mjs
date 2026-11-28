// One-time email to the old newsletter list: guide emails now come with a free account, so
// subscribers who want to keep receiving them should register. Nothing is sent unless you ask.
//
//   npm run policy-notice                      -> dry run: who would get it + writes a preview
//   npm run policy-notice -- --test you@x.com  -> sends one test email to you (list untouched)
//   npm run policy-notice -- --send            -> sends to everyone eligible, once each
//
// Eligible: on the old subscribers list, not unsubscribed, not already sent this notice, and
// not already a verified member. Each send is recorded in subscribers.policy_notice_sent_at,
// so running --send again never emails anyone twice.
// Settings from .env.local: DATABASE_URL, SMTP2GO_API_KEY, SMTP2GO_FROM_EMAIL, SMTP2GO_FROM_NAME,
// UNSUBSCRIBE_SECRET (same value as on Vercel; needed for real sends), POSTAL_ADDRESS (recommended).
import { createHmac } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import pg from "pg";

const root = new URL("../", import.meta.url);
if (existsSync(new URL(".env.local", root))) {
  for (const line of readFileSync(new URL(".env.local", root), "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
}
const args = process.argv.slice(2);
const mode = args.includes("--send") ? "send" : args.includes("--test") ? "test" : "dry-run";
const testTo = mode === "test" ? args[args.indexOf("--test") + 1] : null;
const site = "https://www.travelsamericas.com";
const fail = (message) => { console.error(message); process.exit(1); };
if (mode === "test" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testTo ?? "")) fail("Usage: npm run policy-notice -- --test you@example.com");
if (!process.env.DATABASE_URL) fail("DATABASE_URL is not set (.env.local).");

const secret = process.env.UNSUBSCRIBE_SECRET || process.env.CRON_SECRET || "";
if (mode !== "dry-run" && secret.length < 32) fail("UNSUBSCRIBE_SECRET is missing: copy it from Vercel (Settings > Environment Variables) into .env.local.");
if (mode !== "dry-run" && (!process.env.SMTP2GO_API_KEY || !process.env.SMTP2GO_FROM_EMAIL)) fail("SMTP2GO_API_KEY / SMTP2GO_FROM_EMAIL are not set (.env.local).");
const postal = process.env.POSTAL_ADDRESS?.trim() ?? "";
if (!postal) console.warn("Note: POSTAL_ADDRESS is not set. US law (CAN-SPAM) requires a postal address in commercial email; add it to .env.local.");

// Same token format as app/lib/unsubscribeToken.ts, so the existing unsubscribe link works.
function unsubscribeUrl(email) {
  if (secret.length < 32) return `${site}/api/unsubscribe?token=PREVIEW`;
  const payload = Buffer.from(JSON.stringify({ email, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365 })).toString("base64url");
  return `${site}/api/unsubscribe?token=${payload}.${createHmac("sha256", secret).update(payload).digest("base64url")}`;
}
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export const subject = "Your Travels Americas guide emails are moving to free accounts";
function html(email, source) {
  const register = `${site}/register?${new URLSearchParams({ email, source: source && /^[a-z0-9-]{1,80}$/.test(source) ? source : "policy-notice" })}`;
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
      <a href="${esc(unsubscribeUrl(email))}" style="color:#9ca3af">Unsubscribe</a></p>
  </div></body></html>`;
}

async function send(to, body) {
  const res = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: process.env.SMTP2GO_API_KEY, to: [to], subject, html_body: body,
      sender: `${process.env.SMTP2GO_FROM_NAME || "Travels Americas"} <${process.env.SMTP2GO_FROM_EMAIL}>` }),
  });
  const data = await res.json().catch(() => null);
  return res.ok && data?.data?.succeeded === 1 && data?.data?.failed === 0;
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 1 });
try {
  const { rows } = await pool.query(`
    SELECT s.id, lower(trim(s.email)) AS email, s.source FROM subscribers s
    WHERE s.unsubscribed_at IS NULL AND s.policy_notice_sent_at IS NULL
      AND NOT EXISTS (SELECT 1 FROM member_user u WHERE u.email = lower(trim(s.email)) AND u.email_verified)
    ORDER BY s.created_at`);
  const previewDir = new URL(".scratch/", root);
  mkdirSync(previewDir, { recursive: true });
  writeFileSync(new URL("policy-notice-preview.html", previewDir), html(rows[0]?.email ?? "reader@example.com", rows[0]?.source));
  console.log(`Eligible subscribers: ${rows.length}`);
  console.log(`Subject: ${subject}`);
  console.log("Preview written to .scratch/policy-notice-preview.html (open it in your browser).");

  if (mode === "test") {
    console.log((await send(testTo, html(testTo, "policy-notice"))) ? `Test email sent to ${testTo}.` : "Test email FAILED (check SMTP2GO settings).");
  } else if (mode === "send") {
    let sent = 0, failed = 0;
    for (const r of rows) {
      if (await send(r.email, html(r.email, r.source))) {
        await pool.query("UPDATE subscribers SET policy_notice_sent_at = NOW() WHERE id = $1", [r.id]);
        sent++;
      } else failed++;
      await new Promise((ok) => setTimeout(ok, 250)); // gentle pace for the email provider
    }
    console.log(`Done: ${sent} sent, ${failed} failed. Re-running --send retries only the failed ones.`);
  } else {
    console.log("Dry run: nothing was sent. Use --test you@example.com to see it in your inbox, then --send.");
  }
} finally {
  await pool.end();
}
