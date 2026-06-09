import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 1, // serverless — keep pool small
});

async function sendWelcomeEmail(email: string): Promise<void> {
  const apiKey = process.env.SMTP2GO_API_KEY;
  const fromEmail = process.env.SMTP2GO_FROM_EMAIL;
  const fromName = process.env.SMTP2GO_FROM_NAME ?? 'Travels Americas';

  if (!apiKey || !fromEmail) {
    console.error('SMTP2GO env vars not set — skipping welcome email');
    return;
  }

  // TODO: replace placeholder href with real hosted PDF URL
  const pdfUrl = process.env.NYC_ITINERARY_PDF_URL ?? '#';

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#111827">
      <h2 style="color:#2563eb;margin-bottom:8px">Your NYC 3-Day Itinerary is ready 🗽</h2>
      <p>Thanks for signing up! Here is your free day-by-day NYC itinerary, complete with
      a packing list and budget breakdown.</p>
      <p style="margin:24px 0">
        <a href="${pdfUrl}"
           style="background:#2563eb;color:#fff;padding:12px 24px;border-radius:6px;
                  text-decoration:none;font-weight:600;display:inline-block">
          Download your free itinerary →
        </a>
      </p>
      <p style="color:#6b7280;font-size:13px">
        You will occasionally hear from us with NYC travel tips and guides.
        No spam — unsubscribe any time by replying STOP.
      </p>
    </div>
  `;

  const res = await fetch('https://api.smtp2go.com/v3/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: apiKey,
      to: [email],
      sender: `${fromName} <${fromEmail}>`,
      subject: 'Your free NYC 3-day itinerary 🗽',
      html_body: html,
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    console.error('SMTP2GO error:', data);
  }
}

export async function POST(req: NextRequest) {
  const { email, source } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
  }

  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL not set');
    return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
  }

  const client = await pool.connect();
  try {
    // Insert — ON CONFLICT DO NOTHING handles duplicates silently
    const result = await client.query(
      `INSERT INTO subscribers (email, source)
       VALUES ($1, $2)
       ON CONFLICT (email) DO NOTHING
       RETURNING id`,
      [email.toLowerCase().trim(), source ?? 'unknown']
    );

    const isNew = (result.rowCount ?? 0) > 0;

    // Only send the welcome email for genuinely new subscribers
    if (isNew) {
      try {
        await sendWelcomeEmail(email);
      } catch (err) {
        console.error('Welcome email error (non-fatal):', err);
        // Don't fail the subscription — email is best-effort
      }
    }

    return NextResponse.json({ message: 'Subscribed!' }, { status: 200 });
  } catch (err) {
    console.error('DB error:', err);
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
  } finally {
    client.release();
  }
}
