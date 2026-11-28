import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "@/app/lib/admin";
import { getMemberSession } from "@/app/lib/auth";
import {
  POLICY_NOTICE_BATCH, POLICY_NOTICE_SUBJECT, policyNoticeHtml, policyNoticeStatus, postalAddress,
  sendPolicyNoticeBatch, sendPolicyNoticeTest,
} from "@/app/lib/policy-notice";

export const dynamic = "force-dynamic";
export const maxDuration = 60;
export const metadata: Metadata = { title: "Policy notice", robots: { index: false, follow: false } };

async function requireAdmin() {
  const h = await headers();
  if (!(await isAdmin(h))) notFound();
  return h;
}

async function sendTest() {
  "use server";
  const h = await requireAdmin();
  const email = ((await getMemberSession(h))?.user as { email?: string } | undefined)?.email ?? "";
  const ok = email ? await sendPolicyNoticeTest(email) : false;
  redirect(`/admin/policy-notice?result=${ok ? `test-sent:${encodeURIComponent(email)}` : "test-failed"}`);
}

async function sendBatch(form: FormData) {
  "use server";
  await requireAdmin();
  if (form.get("confirm") !== "yes") redirect("/admin/policy-notice?result=confirm");
  const { sent, failed } = await sendPolicyNoticeBatch();
  redirect(`/admin/policy-notice?result=batch:${sent}:${failed}`);
}

type Props = { searchParams: Promise<{ result?: string }> };

export default async function PolicyNoticePage({ searchParams }: Props) {
  await requireAdmin();
  const { eligible, sent } = await policyNoticeStatus();
  const result = (await searchParams).result ?? "";
  const postal = postalAddress();
  const box = { padding: "12px 16px", borderRadius: 8, margin: "12px 0" } as const;
  const message =
    result.startsWith("test-sent:") ? <div style={{ ...box, background: "#d1e7dd" }}>Test email sent to {decodeURIComponent(result.slice(10))}. Check your inbox (and spam folder).</div>
    : result === "test-failed" ? <div style={{ ...box, background: "#f8d7da" }}>The test email failed. Check SMTP2GO settings in Vercel.</div>
    : result === "confirm" ? <div style={{ ...box, background: "#fff3cd" }}>Tick the confirmation box to send.</div>
    : result.startsWith("batch:") ? (() => { const [, s, f] = result.split(":"); return <div style={{ ...box, background: Number(f) ? "#fff3cd" : "#d1e7dd" }}>Sent {s} emails{Number(f) ? `, ${f} failed (they'll be retried next time)` : ""}.</div>; })()
    : null;

  return <main style={{ maxWidth: 820, margin: "0 auto", padding: "24px 16px", fontFamily: "system-ui, sans-serif" }}>
    <h1>Policy notice to old subscribers</h1>
    <p>One-time email to the old newsletter list: guide emails now come with a free account, with a button to register.
      Each person gets it at most once; unsubscribed people and existing members are skipped.</p>
    {message}
    <p style={{ fontSize: 18 }}><strong>{eligible}</strong> still to send · {sent} already sent</p>
    {!postal && <div style={{ ...box, background: "#fff3cd" }}>Add <code>POSTAL_ADDRESS</code> in Vercel (Settings → Environment Variables) and redeploy before sending: US law (CAN-SPAM) requires a postal address in commercial email.</div>}

    <h2 style={{ fontSize: 17, marginTop: 28 }}>1. Send yourself a test</h2>
    <form action={sendTest}><button type="submit" style={{ padding: "8px 16px" }}>Send test to me</button></form>

    <h2 style={{ fontSize: 17, marginTop: 28 }}>2. Send to the list</h2>
    {eligible === 0 ? <p>Everyone has been sent the notice.</p> :
    <form action={sendBatch}>
      <label style={{ display: "block", margin: "8px 0" }}>
        <input type="checkbox" name="confirm" value="yes" /> I&apos;ve checked the test email; send to the next {Math.min(eligible, POLICY_NOTICE_BATCH)} subscribers.
      </label>
      <button type="submit" style={{ padding: "8px 16px" }}>Send next {Math.min(eligible, POLICY_NOTICE_BATCH)}</button>
      <p style={{ fontSize: 13, color: "#555" }}>Sent in batches of {POLICY_NOTICE_BATCH}. Repeat until 0 remain.</p>
    </form>}

    <h2 style={{ fontSize: 17, marginTop: 28 }}>Preview</h2>
    <p style={{ fontSize: 13, color: "#555" }}>Subject: <strong>{POLICY_NOTICE_SUBJECT}</strong></p>
    <iframe title="Email preview" srcDoc={policyNoticeHtml("reader@example.com", "nyc-safety-guide-checklist")}
      style={{ width: "100%", height: 640, border: "1px solid #ddd", borderRadius: 8 }} sandbox="" />
  </main>;
}
