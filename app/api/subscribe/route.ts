import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 1,
});

function unsubscribeUrl(email: string): string {
  const token = Buffer.from(email.toLowerCase().trim()).toString('base64');
  return `https://www.travelsamericas.com/api/unsubscribe?token=${token}`;
}

async function sendWelcomeEmail(email: string): Promise<void> {
  const apiKey = process.env.SMTP2GO_API_KEY;
  const fromEmail = process.env.SMTP2GO_FROM_EMAIL;
  const fromName = process.env.SMTP2GO_FROM_NAME ?? 'Travels Americas';

  if (!apiKey || !fromEmail) {
    console.error('SMTP2GO env vars not set — skipping welcome email');
    return;
  }

  const pdfUrl = process.env.NYC_ITINERARY_PDF_URL ?? '#';
  const unsub = unsubscribeUrl(email);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
    <body style="margin:0;padding:0;background:#f9fafb">

    <!-- Preheader (hidden, shows in inbox preview) -->
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;color:#f9fafb">
      Day-by-day plan, packing list, and budget breakdown — all inside. Plus 4 more NYC guides on the way.
    </div>

    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#fff;padding:32px 24px;color:#111827">

      <!-- Header -->
      <p style="margin:0 0 4px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.05em">Travels Americas</p>
      <hr style="border:none;border-top:2px solid #2563eb;margin:0 0 24px"/>
      <img src="https://www.travelsamericas.com/email/NYC-Itinerary.jpg" alt="NYC 3-day itinerary — Empire State Building at golden hour" width="560" style="width:100%;max-width:560px;height:auto;display:block;border-radius:8px;margin:0 0 24px"/>

      <h2 style="color:#2563eb;margin:0 0 8px;font-size:22px">Your NYC 3-Day Itinerary is ready 🗽</h2>
      <p style="margin:0 0 16px;line-height:1.6">Thanks for signing up! Your free day-by-day NYC itinerary is packed with everything you need to hit the ground running — here's what's inside:</p>

      <ul style="margin:0 0 20px;padding-left:20px;line-height:2;color:#374151">
        <li>A complete <strong>3-day itinerary</strong> (morning to night)</li>
        <li>A <strong>packing list</strong> built for NYC's seasons</li>
        <li>A <strong>budget breakdown</strong> so there are no surprises</li>
        <li>A <strong>Before You Go</strong> checklist for first-timers</li>
      </ul>

      <p style="margin:0 0 24px">
        <a href="${pdfUrl}"
           style="background:#2563eb;color:#fff;padding:14px 28px;border-radius:6px;
                  text-decoration:none;font-weight:700;font-size:15px;display:inline-block">
          Download your free NYC itinerary →
        </a>
      </p>

      <!-- What's coming next -->
      <div style="background:#f9fafb;border-radius:8px;padding:16px 20px;margin:0 0 24px">
        <p style="margin:0 0 8px;font-weight:700;color:#111827">What's coming next:</p>
        <p style="margin:0;color:#374151;line-height:1.8;font-size:14px">
          Over the next few weeks we'll send you our best NYC guides — the right neighbourhood to stay in,
          the cheapest time to visit, how to get from the airport without getting overcharged, and how to
          lock in the best flight and hotel prices.
        </p>
      </div>

      <p style="margin:0 0 32px;color:#374151">Questions? Just reply to this email — we read every one.</p>

      <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 16px"/>
      <p style="color:#9ca3af;font-size:12px;margin:0;line-height:1.6">
        You signed up at TravelsAmericas.com. We'll only ever send you useful NYC travel content — no spam.<br/>
        <a href="${unsub}" style="color:#9ca3af">Unsubscribe</a>
      </p>

    </div>
    </body>
    </html>
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
    const result = await client.query(
      `INSERT INTO subscribers (email, source)
       VALUES ($1, $2)
       ON CONFLICT (email) DO NOTHING
       RETURNING id`,
      [email.toLowerCase().trim(), source ?? 'unknown']
    );

    const isNew = (result.rowCount ?? 0) > 0;

    if (isNew) {
      try {
        await sendWelcomeEmail(email);
      } catch (err) {
        console.error('Welcome email error (non-fatal):', err);
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
