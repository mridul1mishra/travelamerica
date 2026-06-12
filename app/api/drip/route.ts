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

function emailShell(preheader: string, imgSrc: string, imgAlt: string, body: string, email: string): string {
  const unsub = unsubscribeUrl(email);
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f9fafb">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;color:#f9fafb">${preheader}</div>
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#fff;padding:32px 24px;color:#111827">
  <p style="margin:0 0 4px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.05em">Travels Americas</p>
  <hr style="border:none;border-top:2px solid #2563eb;margin:0 0 24px"/>
  <img src="${imgSrc}" alt="${imgAlt}" width="560" style="width:100%;max-width:560px;height:auto;display:block;border-radius:8px;margin:0 0 24px"/>
  ${body}
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:32px 0 16px"/>
  <p style="color:#9ca3af;font-size:12px;margin:0;line-height:1.6">
    You signed up at TravelsAmericas.com. We only send useful NYC travel content — no spam.<br/>
    <a href="${unsub}" style="color:#9ca3af">Unsubscribe</a>
  </p>
</div>
</body>
</html>`;
}

const DRIP_SCHEDULE = [
  {
    step: 2,
    daysAfterPrev: 3,
    subject: 'Manhattan vs Brooklyn: where should you actually stay in NYC? 🏙️',
    html: (email: string) => emailShell(
      'The honest breakdown with price ranges — and the one area most guides skip.',
      'https://www.travelsamericas.com/email/Neighbourhoods.jpg',
      'Tree-lined brownstone street in New York City',
      `
      <h2 style="color:#2563eb;margin:0 0 8px;font-size:22px">Where should you actually stay in NYC?</h2>
      <p style="margin:0 0 16px;line-height:1.6">The neighbourhood you pick shapes your entire trip. Here's an honest breakdown for first-time visitors — with real price ranges, not just vibes:</p>

      <div style="border-left:4px solid #2563eb;background:#eff6ff;padding:14px 16px;margin:0 0 12px;border-radius:0 8px 8px 0">
        <strong style="font-size:15px">Midtown Manhattan</strong>
        <span style="font-size:12px;background:#2563eb;color:#fff;padding:2px 8px;border-radius:20px;margin-left:8px;vertical-align:middle">Best for first-timers</span><br/>
        <span style="color:#374151;font-size:14px;line-height:1.6">Central, loud, convenient. Steps from Times Square, the Empire State Building, and every subway line. Rooms from <strong>$180–$350/night</strong>. Not the "real" NYC but hard to beat for access.</span>
      </div>

      <div style="border-left:4px solid #16a34a;background:#f0fdf4;padding:14px 16px;margin:0 0 12px;border-radius:0 8px 8px 0">
        <strong style="font-size:15px">Upper West Side</strong>
        <span style="font-size:12px;background:#16a34a;color:#fff;padding:2px 8px;border-radius:20px;margin-left:8px;vertical-align:middle">Best for solo travelers</span><br/>
        <span style="color:#374151;font-size:14px;line-height:1.6">Residential, safe, walkable. Right next to Central Park and the Natural History Museum. Rooms from <strong>$150–$280/night</strong> — noticeably cheaper than Midtown with better local atmosphere.</span>
      </div>

      <div style="border-left:4px solid #d97706;background:#fffbeb;padding:14px 16px;margin:0 0 12px;border-radius:0 8px 8px 0">
        <strong style="font-size:15px">Hell's Kitchen</strong>
        <span style="font-size:12px;background:#d97706;color:#fff;padding:2px 8px;border-radius:20px;margin-left:8px;vertical-align:middle">Best value in Manhattan</span><br/>
        <span style="color:#374151;font-size:14px;line-height:1.6">The most underrated neighbourhood for tourists. One subway stop from Times Square, excellent food scene, safe streets. Rooms from <strong>$120–$220/night</strong>. Most locals would stay here.</span>
      </div>

      <div style="border-left:4px solid #7c3aed;background:#f5f3ff;padding:14px 16px;margin:0 0 12px;border-radius:0 8px 8px 0">
        <strong style="font-size:15px">Williamsburg, Brooklyn</strong>
        <span style="font-size:12px;background:#7c3aed;color:#fff;padding:2px 8px;border-radius:20px;margin-left:8px;vertical-align:middle">Best for food &amp; nightlife</span><br/>
        <span style="color:#374151;font-size:14px;line-height:1.6">Trendy, creative, and cheaper than Manhattan. Direct L train to Midtown in 20 minutes. Rooms from <strong>$100–$180/night</strong>. Best skyline views you'll find without paying Manhattan prices.</span>
      </div>

      <p style="margin:16px 0;color:#374151;line-height:1.6">💡 <strong>Subway rule:</strong> Whatever neighbourhood you pick, stay within a 10-minute walk of a stop on the A, C, E, 1, 2, or 3 lines — you can get anywhere in the city in under 30 minutes.</p>

      <p style="margin:24px 0 12px">
        <a href="https://www.travelsamericas.com/destination/nyc/best-areas-to-stay"
           style="background:#2563eb;color:#fff;padding:13px 24px;border-radius:6px;
                  text-decoration:none;font-weight:700;font-size:14px;display:inline-block">
          Read the full neighbourhood guide →
        </a>
      </p>
      <p style="margin:0">
        <a href="https://www.travelsamericas.com/destination/nyc/booking?tab=hotels&from=drip-email"
           style="background:#fff;color:#2563eb;padding:13px 24px;border-radius:6px;border:2px solid #2563eb;
                  text-decoration:none;font-weight:700;font-size:14px;display:inline-block">
          Compare hotel prices in these areas →
        </a>
      </p>
      `,
      email
    ),
  },
  {
    step: 3,
    daysAfterPrev: 4,
    subject: 'NYC in spring vs fall — which is actually better for your trip? 📅',
    html: (email: string) => emailShell(
      'And the one season that\'s secretly the best value — most tourists overlook it completely.',
      'https://www.travelsamericas.com/email/Best-Time-to-Visit.jpg',
      'Central Park in autumn with golden foliage and Manhattan skyline',
      `
      <h2 style="color:#2563eb;margin:0 0 8px;font-size:22px">When should you visit New York City?</h2>
      <p style="margin:0 0 16px;line-height:1.6">There's no bad time to visit NYC — but there is a <em>best</em> time depending on your budget and what you want. Here's the honest breakdown:</p>

      <div style="border-left:4px solid #2563eb;padding:14px 16px;background:#eff6ff;margin:0 0 12px;border-radius:0 8px 8px 0">
        <strong>🌸 Spring (Apr–May) — Our top pick</strong><br/>
        <span style="color:#374151;font-size:14px;line-height:1.7">Mild 50–68°F (10–20°C), cherry blossoms in Central Park, outdoor dining at its best. Hotel rates run <strong>15–25% cheaper than summer</strong>. Smaller crowds at major attractions. The sweet spot of weather, price, and experience.</span>
      </div>

      <div style="border-left:4px solid #16a34a;padding:14px 16px;background:#f0fdf4;margin:0 0 12px;border-radius:0 8px 8px 0">
        <strong>🍂 Fall (Sep–Nov) — Close second</strong><br/>
        <span style="color:#374151;font-size:14px;line-height:1.7">Crisp 45–65°F (7–18°C), stunning foliage in Central Park, the NYC Marathon in November. Hotel rates creep back up in October but the atmosphere is unmatched. September is the hidden gem — summer crowds are gone but weather is still warm.</span>
      </div>

      <div style="border-left:4px solid #d97706;padding:14px 16px;background:#fffbeb;margin:0 0 12px;border-radius:0 8px 8px 0">
        <strong>☀️ Summer (Jun–Aug) — Busy &amp; expensive</strong><br/>
        <span style="color:#374151;font-size:14px;line-height:1.7">Hot and humid at 75–90°F (24–32°C), peak tourist season, highest hotel prices of the year. If you're going in summer, book 3–4 months ahead — good hotels sell out fast and prices jump 40–60% above the spring average.</span>
      </div>

      <div style="border-left:4px solid #6b7280;padding:14px 16px;background:#f9fafb;margin:0 0 16px;border-radius:0 8px 8px 0">
        <strong>❄️ Winter (Dec–Feb) — The budget gem</strong><br/>
        <span style="color:#374151;font-size:14px;line-height:1.7">Cold at 25–40°F (-4–4°C) but genuinely magical — Rockefeller ice rink, Christmas market at Bryant Park, and the cheapest hotels and flights of the year. <strong>Avoid Christmas week</strong> (prices spike). January is the single cheapest month to visit NYC.</span>
      </div>

      <p style="margin:0 0 24px;padding:12px 16px;background:#f9fafb;border-radius:8px;font-size:14px;color:#374151;line-height:1.6">
        📊 <strong>Price comparison:</strong> A hotel room that costs $280/night in July averages $190 in April and just $140 in January (outside holiday weeks).
      </p>

      <p style="margin:24px 0 12px">
        <a href="https://www.travelsamericas.com/destination/nyc/best-time-to-visit"
           style="background:#2563eb;color:#fff;padding:13px 24px;border-radius:6px;
                  text-decoration:none;font-weight:700;font-size:14px;display:inline-block">
          See the full month-by-month guide →
        </a>
      </p>
      <p style="margin:0">
        <a href="https://www.travelsamericas.com/destination/nyc/booking?tab=hotels&from=drip-email"
           style="background:#fff;color:#2563eb;padding:13px 24px;border-radius:6px;border:2px solid #2563eb;
                  text-decoration:none;font-weight:700;font-size:14px;display:inline-block">
          Check hotel prices for your dates →
        </a>
      </p>
      `,
      email
    ),
  },
  {
    step: 4,
    daysAfterPrev: 7,
    subject: 'Getting from the airport to NYC (without getting ripped off) ✈️',
    html: (email: string) => emailShell(
      'JFK, LGA, and EWR — the insider routes locals actually use. Plus the one scam every tourist falls for.',
      'https://www.travelsamericas.com/email/Getting-to-NYC.jpg',
      'JFK AirTrain with Manhattan skyline in the background at dusk',
      `
      <h2 style="color:#2563eb;margin:0 0 8px;font-size:22px">Airport → NYC: the smartest way in</h2>
      <p style="margin:0 0 20px;line-height:1.6">NYC has three airports and each one has a catch. Here's the fastest and cheapest route from each — and what to avoid.</p>

      <div style="background:#f9fafb;border-radius:8px;padding:16px 20px;margin:0 0 16px">
        <p style="margin:0 0 10px;font-size:16px;font-weight:700">🛬 JFK Airport</p>
        <p style="margin:0 0 6px;font-size:14px;color:#374151"><strong>Cheapest:</strong> AirTrain → E/J/Z subway — <strong>$10.90</strong> total, 50–70 min to Midtown</p>
        <p style="margin:0 0 6px;font-size:14px;color:#374151"><strong>Easiest:</strong> Uber Shuttle — <strong>$25/person</strong> fixed rate to Grand Central or Downtown Brooklyn. Book in the Uber app in advance.</p>
        <p style="margin:0;font-size:14px;color:#dc2626">⚠️ <strong>Avoid:</strong> Anyone approaching you inside the terminal offering a ride. Always use the official yellow cab stand outside or your rideshare app.</p>
      </div>

      <div style="background:#f9fafb;border-radius:8px;padding:16px 20px;margin:0 0 16px">
        <p style="margin:0 0 10px;font-size:16px;font-weight:700">🛬 LaGuardia (LGA)</p>
        <p style="margin:0 0 6px;font-size:14px;color:#374151"><strong>Cheapest:</strong> Q70 LaGuardia Link bus to Jackson Heights subway — <strong>~$2.90</strong>, 45–60 min to Midtown</p>
        <p style="margin:0 0 6px;font-size:14px;color:#374151"><strong>Easiest:</strong> Uber/Lyft — <strong>$35–$55</strong>, 25–40 min (no traffic)</p>
        <p style="margin:0;font-size:14px;color:#374151">💡 No direct subway. Take the Q70 from outside the terminal — it connects to the E, F, M, N, and R trains.</p>
      </div>

      <div style="background:#f9fafb;border-radius:8px;padding:16px 20px;margin:0 0 20px">
        <p style="margin:0 0 10px;font-size:16px;font-weight:700">🛬 Newark Airport (EWR)</p>
        <p style="margin:0 0 6px;font-size:14px;color:#374151"><strong>Best option:</strong> AirTrain → NJ Transit to Penn Station — <strong>$17.85</strong> total, 45–60 min</p>
        <p style="margin:0 0 6px;font-size:14px;color:#374151"><strong>Alternative:</strong> Uber/Lyft — <strong>$60–$90</strong> plus a $21 tunnel/bridge toll</p>
        <p style="margin:0;font-size:14px;color:#374151">💡 One ticket covers both the AirTrain and the NJ Transit train — buy it at the kiosks before boarding, not from people on the platform.</p>
      </div>

      <p style="margin:24px 0 12px">
        <a href="https://www.travelsamericas.com/destination/nyc/getting-to-nyc"
           style="background:#2563eb;color:#fff;padding:13px 24px;border-radius:6px;
                  text-decoration:none;font-weight:700;font-size:14px;display:inline-block">
          Read the full airport guide →
        </a>
      </p>
      <p style="margin:0">
        <a href="https://www.travelsamericas.com/destination/nyc/booking?tab=flights&from=drip-email"
           style="background:#fff;color:#2563eb;padding:13px 24px;border-radius:6px;border:2px solid #2563eb;
                  text-decoration:none;font-weight:700;font-size:14px;display:inline-block">
          Compare flights to NYC →
        </a>
      </p>
      `,
      email
    ),
  },
  {
    step: 5,
    daysAfterPrev: 7,
    subject: 'The 5 things to book before NYC sells out 🗽',
    html: (email: string) => emailShell(
      'Most first-timers miss at least one of these — and regret it on the trip.',
      'https://www.travelsamericas.com/email/Ready-to-book.jpg',
      'Solo traveler on Brooklyn Bridge looking toward Manhattan skyline at golden hour',
      `
      <h2 style="color:#2563eb;margin:0 0 8px;font-size:22px">Don't leave these until the last minute</h2>
      <p style="margin:0 0 16px;line-height:1.6">You've got the itinerary, the neighborhood guide, the airport routes. Now let's get you booked — here are the 5 things that sell out or get expensive fast:</p>

      <div style="display:flex;gap:16px;margin:0 0 20px;align-items:flex-start">
        <div style="background:#2563eb;color:#fff;border-radius:50%;min-width:32px;height:32px;font-weight:700;font-size:15px;line-height:32px;text-align:center">1</div>
        <div>
          <p style="margin:0 0 4px;font-weight:700;font-size:15px">✈️ Flights — book 6–8 weeks out</p>
          <p style="margin:0;color:#374151;font-size:14px;line-height:1.6">Set a price alert on Google Flights as soon as you have your dates. NYC flights are price-volatile — the same route can swing $100–$200 in a week. Locking in early consistently beats last-minute pricing.</p>
        </div>
      </div>

      <div style="display:flex;gap:16px;margin:0 0 20px;align-items:flex-start">
        <div style="background:#2563eb;color:#fff;border-radius:50%;min-width:32px;height:32px;font-weight:700;font-size:15px;line-height:32px;text-align:center">2</div>
        <div>
          <p style="margin:0 0 4px;font-weight:700;font-size:15px">🏨 Hotels — book refundable, then watch for drops</p>
          <p style="margin:0;color:#374151;font-size:14px;line-height:1.6">Book a refundable rate now to lock in availability, then check back weekly. NYC hotel prices fluctuate constantly — you can often rebook the same room 10–20% cheaper closer to your dates.</p>
        </div>
      </div>

      <div style="display:flex;gap:16px;margin:0 0 20px;align-items:flex-start">
        <div style="background:#2563eb;color:#fff;border-radius:50%;min-width:32px;height:32px;font-weight:700;font-size:15px;line-height:32px;text-align:center">3</div>
        <div>
          <p style="margin:0 0 4px;font-weight:700;font-size:15px">🎟️ Top attractions — book at least 2 weeks ahead</p>
          <p style="margin:0;color:#374151;font-size:14px;line-height:1.6">The Statue of Liberty ferry, 9/11 Memorial, and Empire State Building timed entry all sell out — especially in summer. Don't assume you can buy on the day. Book these before you book anything else.</p>
        </div>
      </div>

      <div style="display:flex;gap:16px;margin:0 0 24px;align-items:flex-start">
        <div style="background:#2563eb;color:#fff;border-radius:50%;min-width:32px;height:32px;font-weight:700;font-size:15px;line-height:32px;text-align:center">4</div>
        <div>
          <p style="margin:0 0 4px;font-weight:700;font-size:15px">🚇 OMNY card — get it at the airport</p>
          <p style="margin:0;color:#374151;font-size:14px;line-height:1.6">Tap your credit card or get an OMNY card at any subway station. The 7-day unlimited pass costs <strong>$34</strong> and pays for itself after 12 rides. Skip the single-ride tickets — they waste time at the machines.</p>
        </div>
      </div>

      <div style="display:flex;gap:16px;margin:0 0 24px;align-items:flex-start">
        <div style="background:#2563eb;color:#fff;border-radius:50%;min-width:32px;height:32px;font-weight:700;font-size:15px;line-height:32px;text-align:center">5</div>
        <div>
          <p style="margin:0 0 4px;font-weight:700;font-size:15px">🛡️ Travel insurance — buy before you fly</p>
          <p style="margin:0;color:#374151;font-size:14px;line-height:1.6">Visiting from outside the US? Your home health plan likely won't cover you here, and even a minor ER visit gets expensive. A traveler policy like <a href="${process.env.NEXT_PUBLIC_SAFETYWING_URL || 'https://safetywing.com/nomad-insurance/'}" style="color:#2563eb;font-weight:600">SafetyWing Nomad Insurance</a> costs a few dollars a day — it only works if you buy it before departure.</p>
        </div>
      </div>

      <p style="margin:0 0 24px;padding:14px 18px;background:#eff6ff;border-radius:8px;font-size:14px;color:#1e40af;line-height:1.6;border-left:4px solid #2563eb">
        🗽 <strong>Ready to start?</strong> Use our booking page to compare live flight and hotel prices for your exact dates — all in one place.
      </p>

      <p style="margin:0 0 12px;text-align:center">
        <a href="https://www.travelsamericas.com/destination/nyc/booking?from=drip-email"
           style="background:#2563eb;color:#fff;padding:15px 36px;border-radius:6px;
                  text-decoration:none;font-weight:700;font-size:16px;display:inline-block">
          Compare flights &amp; hotels for NYC →
        </a>
      </p>

      <p style="margin:20px 0 0;text-align:center;color:#6b7280;font-size:14px">Questions about your trip? Just reply to this email — we read every one.</p>
      `,
      email
    ),
  },
];

async function sendDripEmail(email: string, subject: string, html: string): Promise<void> {
  const apiKey = process.env.SMTP2GO_API_KEY;
  const fromEmail = process.env.SMTP2GO_FROM_EMAIL;
  const fromName = process.env.SMTP2GO_FROM_NAME ?? 'Travels Americas';

  if (!apiKey || !fromEmail) throw new Error('SMTP2GO env vars not set');

  const res = await fetch('https://api.smtp2go.com/v3/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: apiKey,
      to: [email],
      sender: `${fromName} <${fromEmail}>`,
      subject,
      html_body: html,
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(`SMTP2GO error: ${JSON.stringify(data)}`);
  }
}

function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;
  return req.headers.get('authorization') === `Bearer ${secret}`;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'DATABASE_URL not set' }, { status: 500 });
  }

  const client = await pool.connect();
  let sent = 0, skipped = 0, errors = 0;

  try {
    const { rows } = await client.query<{ id: number; email: string; drip_step: number }>(`
      SELECT id, email, drip_step
      FROM subscribers
      WHERE drip_step <= 5
        AND unsubscribed_at IS NULL
        AND (
          (drip_step = 2 AND last_drip_sent_at IS NULL
            AND created_at <= NOW() - INTERVAL '3 days')
          OR
          (drip_step >= 3 AND last_drip_sent_at IS NOT NULL
            AND CASE drip_step
              WHEN 3 THEN last_drip_sent_at <= NOW() - INTERVAL '4 days'
              WHEN 4 THEN last_drip_sent_at <= NOW() - INTERVAL '7 days'
              WHEN 5 THEN last_drip_sent_at <= NOW() - INTERVAL '7 days'
              ELSE FALSE
            END)
        )
    `);

    for (const row of rows) {
      const drip = DRIP_SCHEDULE.find((d) => d.step === row.drip_step);
      if (!drip) { skipped++; continue; }

      try {
        await sendDripEmail(row.email, drip.subject, drip.html(row.email));
        await client.query(
          `UPDATE subscribers SET drip_step = drip_step + 1, last_drip_sent_at = NOW() WHERE id = $1`,
          [row.id]
        );
        sent++;
      } catch (err) {
        console.error(`Drip email error for ${row.email}:`, err);
        errors++;
      }
    }

    return NextResponse.json({ sent, skipped, errors });
  } finally {
    client.release();
  }
}
