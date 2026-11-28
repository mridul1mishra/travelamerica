import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';
import { Pool } from 'pg';
import { getMemberSession } from '@/app/lib/auth';
import { sendWelcomeEmail } from '@/app/lib/guide-emails';

// "Email it to me" for signed-in members on a guide box: sends that page's guide to the
// member's own account email. Clicking is a request for guide emails, so a member without
// guide-email consent (registered before guide emails, or unsubscribed) is signed up now;
// someone already receiving them just gets this guide, without restarting the series.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 1 });
const NO_STORE = { 'Cache-Control': 'no-store' };
const MAX_PER_HOUR = 5;

function clientIp(req: NextRequest): string | null {
  const ip = req.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '';
  return /^[0-9a-f.:]{3,45}$/i.test(ip) ? ip : null;
}

export async function POST(req: NextRequest) {
  // Same-site requests only (the session cookie is also SameSite=Lax).
  if (req.headers.get('origin') !== new URL(req.url).origin) {
    return NextResponse.json({ message: 'Unsupported request.' }, { status: 403, headers: NO_STORE });
  }
  const session = await getMemberSession(req.headers);
  const userId = (session?.user as { id?: string } | undefined)?.id;
  if (!userId) return NextResponse.json({ message: 'Please sign in first.' }, { status: 401, headers: NO_STORE });

  let source = 'guide-box';
  try {
    const body = await req.json() as { source?: unknown };
    if (typeof body.source === 'string' && /^[a-z0-9][a-z0-9-]{0,79}$/.test(body.source)) source = body.source;
  } catch { /* default source */ }

  const client = await pool.connect();
  try {
    // At most a few guide emails per member per hour (shared limiter table with the old signup form).
    const key = createHash('sha256').update(`guide-request:${userId}`).digest('hex');
    const { rows: limit } = await client.query<{ attempts: number }>(
      `INSERT INTO signup_rate_limits (key, window_started, attempts) VALUES ($1, NOW(), 1)
       ON CONFLICT (key) DO UPDATE SET
         attempts = CASE WHEN signup_rate_limits.window_started < NOW() - INTERVAL '1 hour' THEN 1 ELSE signup_rate_limits.attempts + 1 END,
         window_started = CASE WHEN signup_rate_limits.window_started < NOW() - INTERVAL '1 hour' THEN NOW() ELSE signup_rate_limits.window_started END
       RETURNING attempts`, [key]);
    if ((limit[0]?.attempts ?? 0) > MAX_PER_HOUR) {
      return NextResponse.json({ message: 'You’ve requested several guides already. Please try again later.' }, { status: 429, headers: NO_STORE });
    }

    // Record the request as guide-email consent if they didn't have it (or had unsubscribed).
    const { rows } = await client.query<{ email: string; drip_step: number }>(
      `UPDATE member_user SET
         guide_emails_consent_ip = CASE WHEN guide_emails_consent_at IS NULL OR unsubscribed_at IS NOT NULL THEN $3 ELSE guide_emails_consent_ip END,
         guide_emails_source     = CASE WHEN guide_emails_consent_at IS NULL OR unsubscribed_at IS NOT NULL THEN $2 ELSE guide_emails_source END,
         guide_emails_consent_at = CASE WHEN guide_emails_consent_at IS NULL OR unsubscribed_at IS NOT NULL THEN NOW() ELSE guide_emails_consent_at END,
         unsubscribed_at = NULL,
         updated_at = NOW()
       WHERE id = $1 AND email_verified
       RETURNING email, drip_step`, [userId, source, clientIp(req)]);
    const member = rows[0];
    if (!member) return NextResponse.json({ message: 'Please sign in first.' }, { status: 401, headers: NO_STORE });

    if (!(await sendWelcomeEmail(member.email, source))) {
      return NextResponse.json({ message: 'We couldn’t send the guide right now. Please try again in a moment.' }, { status: 503, headers: NO_STORE });
    }
    // First guide for this member: the follow-up series starts from here.
    if (Number(member.drip_step) <= 1) {
      await client.query(`UPDATE member_user SET drip_step = 2 WHERE id = $1 AND drip_step <= 1`, [userId]);
    }
    return NextResponse.json({ message: 'Sent', email: member.email }, { status: 200, headers: NO_STORE });
  } catch (err) {
    console.error('Guide request error:', err);
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500, headers: NO_STORE });
  } finally {
    client.release();
  }
}
