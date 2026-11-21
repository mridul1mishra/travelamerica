import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { createHash } from 'crypto';

// Contact form endpoint. Mirrors the protections used by /api/subscribe:
// honeypot field, minimum fill time, optional Cloudflare Turnstile, and a
// per-IP rate limit (stored in the existing signup_rate_limits table under a
// "contact:" key prefix, so no new migration is needed).
// The message is emailed to CONTACT_TO_EMAIL (default info@travelsamericas.com)
// through SMTP2GO, with Reply-To set to the sender.

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 1,
});

const RATE_LIMIT_WINDOW_MINUTES = 30;
const RATE_LIMIT_ATTEMPTS = 3;
const TOPICS = ['Correction to a guide', 'Question about a guide', 'Account or privacy request', 'Partnership', 'Other'] as const;
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

function clientIp(req: NextRequest): string {
  return req.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim()
    ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    ?? 'unknown';
}

async function isRateLimited(ip: string): Promise<boolean> {
  if (!process.env.DATABASE_URL) return false;
  const key = 'contact:' + createHash('sha256').update(ip).digest('hex');
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      `INSERT INTO signup_rate_limits (key, window_started, attempts)
       VALUES ($1, NOW(), 1)
       ON CONFLICT (key) DO UPDATE SET
         attempts = CASE
           WHEN signup_rate_limits.window_started < NOW() - ($2 * INTERVAL '1 minute') THEN 1
           ELSE signup_rate_limits.attempts + 1
         END,
         window_started = CASE
           WHEN signup_rate_limits.window_started < NOW() - ($2 * INTERVAL '1 minute') THEN NOW()
           ELSE signup_rate_limits.window_started
         END
       RETURNING attempts`,
      [key, RATE_LIMIT_WINDOW_MINUTES]
    );
    return (rows[0]?.attempts ?? 0) > RATE_LIMIT_ATTEMPTS;
  } finally {
    client.release();
  }
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!secretKey && !siteKey) return true;
  if (!secretKey || !siteKey) {
    console.error('Turnstile is only partially configured');
    return false;
  }
  if (!token) return false;
  const body = new URLSearchParams({ secret: secretKey, response: token });
  if (ip !== 'unknown') body.set('remoteip', ip);
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
    cache: 'no-store',
  });
  if (!response.ok) return false;
  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

function singleLine(value: string): string {
  return value.replace(/[\r\n\t]+/g, ' ').trim();
}

async function sendContactEmail(msg: { name: string; email: string; topic: string; message: string; ip: string }): Promise<boolean> {
  const apiKey = process.env.SMTP2GO_API_KEY?.trim();
  const fromEmail = process.env.SMTP2GO_FROM_EMAIL?.trim() || 'hello@travelsamericas.com';
  const fromName = process.env.SMTP2GO_FROM_NAME?.trim() || 'Travels Americas';
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || 'info@travelsamericas.com';
  if (!apiKey || !EMAIL_PATTERN.test(fromEmail) || !EMAIL_PATTERN.test(toEmail) || /[\r\n<>]/.test(fromName)) {
    console.error('[contact] mail is not configured');
    return false;
  }
  const response = await fetch('https://api.smtp2go.com/v3/email/send', {
    method: 'POST',
    cache: 'no-store',
    signal: AbortSignal.timeout(10000),
    headers: { 'Content-Type': 'application/json', 'X-Smtp2go-Api-Key': apiKey },
    body: JSON.stringify({
      sender: `${fromName} <${fromEmail}>`,
      to: [toEmail],
      subject: `[Contact] ${msg.topic}`,
      custom_headers: [{ header: 'Reply-To', value: msg.email }],
      text_body: `New message from the Travels Americas contact form.\n\nName: ${msg.name}\nEmail: ${msg.email}\nTopic: ${msg.topic}\n\n${msg.message}\n`,
    }),
  });
  const result = await response.json().catch(() => null) as { data?: { succeeded?: number; failed?: number } } | null;
  if (!response.ok || result?.data?.succeeded !== 1 || result.data.failed !== 0) {
    console.error('[contact] SMTP2GO rejected the message');
    return false;
  }
  return true;
}

export async function POST(req: NextRequest) {
  if (!req.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ message: 'Unsupported request.' }, { status: 415 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? singleLine(body.name) : '';
  const email = typeof body.email === 'string' ? singleLine(body.email).toLowerCase() : '';
  const topic = typeof body.topic === 'string' ? body.topic : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const ip = clientIp(req);

  // A filled hidden field is almost certainly a bot: pretend success.
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ message: 'Thanks, your message was sent.' }, { status: 200 });
  }

  if (name.length < 1 || name.length > 100) {
    return NextResponse.json({ message: 'Please enter your name.' }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!(TOPICS as readonly string[]).includes(topic)) {
    return NextResponse.json({ message: 'Please choose a topic.' }, { status: 400 });
  }
  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json({ message: 'Please write a message between 10 and 2000 characters.' }, { status: 400 });
  }
  if (typeof body.formStartedAt === 'number' && Date.now() - body.formStartedAt < 1500) {
    return NextResponse.json({ message: 'Please try again.' }, { status: 429 });
  }

  try {
    if (await isRateLimited(ip)) {
      return NextResponse.json(
        { message: 'Too many messages. Please try again later or email info@travelsamericas.com.' },
        { status: 429, headers: { 'Cache-Control': 'no-store', 'Retry-After': '1800' } }
      );
    }
  } catch (err) {
    // Fail open on a rate-limit storage error so real messages are not lost;
    // the honeypot and Turnstile checks below still apply.
    console.error('[contact] rate limit unavailable:', err);
  }

  if (!await verifyTurnstile(typeof body.turnstileToken === 'string' ? body.turnstileToken : '', ip)) {
    return NextResponse.json({ message: 'Verification failed. Please try again.' }, { status: 403 });
  }

  try {
    const sent = await sendContactEmail({ name, email, topic, message, ip });
    if (!sent) {
      return NextResponse.json(
        { message: 'We could not send your message. Please email info@travelsamericas.com directly.' },
        { status: 502 }
      );
    }
    return NextResponse.json({ message: 'Thanks, your message was sent.' }, { status: 200 });
  } catch (err) {
    console.error('[contact] send error:', err);
    return NextResponse.json(
      { message: 'We could not send your message. Please email info@travelsamericas.com directly.' },
      { status: 502 }
    );
  }
}
