import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 1,
});

const siteUrl = 'https://www.travelsamericas.com';

type EmailLink = {
  label: string;
  url: string;
};

type SignupOffer = {
  subject: string;
  preheader: string;
  heading: string;
  intro: string;
  bullets: string[];
  primaryLabel: string;
  secondaryHeading: string;
  secondaryText: string;
  secondaryLinks: EmailLink[];
};

function unsubscribeUrl(email: string): string {
  const token = Buffer.from(email.toLowerCase().trim()).toString('base64');
  return `${siteUrl}/api/unsubscribe?token=${token}`;
}

function guideLink(label: string, path: string): EmailLink {
  return { label, url: `${siteUrl}${path}` };
}

function offerForSource(source?: string): SignupOffer {
  const normalizedSource = (source ?? '').toLowerCase();

  const defaultLinks = [
    guideLink('Open the 3-day NYC solo itinerary', '/destination/nyc/solo-itinerary'),
    guideLink('Compare the best areas to stay', '/destination/nyc/best-areas-to-stay'),
    guideLink('Check the NYC safety guide', '/destination/nyc/nyc-safety-guide'),
  ];

  const baseOffer: SignupOffer = {
    subject: 'Your NYC planning pack is ready',
    preheader:
      'Your 3-day NYC itinerary PDF is inside, plus the guide links that match what you requested.',
    heading: 'Your NYC planning pack is ready',
    intro:
      'Thanks for signing up. Start with the printable 3-day NYC itinerary PDF, then use the guide links below to plan the exact part of your trip you were researching.',
    bullets: [
      'A printable 3-day NYC itinerary PDF',
      'Route ideas you can adapt for your trip length',
      'Practical links for hotels, safety, transport, and timing',
      'A cleaner way to keep the main planning pieces in one place',
    ],
    primaryLabel: 'Download the 3-day NYC itinerary PDF',
    secondaryHeading: 'Useful next reads',
    secondaryText: 'These are the most relevant NYC planning guides based on where you signed up.',
    secondaryLinks: defaultLinks,
  };

  if (normalizedSource.includes('female-solo')) {
    return {
      ...baseOffer,
      subject: 'Your solo female NYC planning pack is ready',
      heading: 'Your solo female NYC planning pack is ready',
      intro:
        'Thanks for signing up. The PDF gives you a usable 3-day route, and the links below help with the solo-female-specific decisions: where to stay, subway comfort, and late-night judgment calls.',
      bullets: [
        'A printable 3-day NYC itinerary PDF',
        'Solo-friendly route structure you can adapt',
        'Safety and subway guides for decision points, not fear',
        'Neighborhood and hotel-area checks before you book',
      ],
      secondaryLinks: [
        guideLink('Read the solo female NYC guide', '/destination/nyc/nyc-female-solo-travel-guide'),
        guideLink('Check the NYC safety guide', '/destination/nyc/nyc-safety-guide'),
        guideLink('Use the NYC subway safety guide', '/destination/nyc/subway-safety-guide'),
      ],
    };
  }

  if (normalizedSource.includes('subway')) {
    return {
      ...baseOffer,
      subject: 'Your NYC subway safety planning pack is ready',
      heading: 'Your NYC subway safety planning pack is ready',
      intro:
        'Thanks for signing up. The PDF gives you the trip route, and the links below help you make calmer subway decisions by time of day, station, and route.',
      bullets: [
        'A printable 3-day NYC itinerary PDF',
        'Subway safety guidance for first-time visitors',
        'A quick official subway map link',
        'Late-night and airport-transfer planning links',
      ],
      secondaryLinks: [
        guideLink('Read the NYC subway safety guide', '/destination/nyc/subway-safety-guide'),
        guideLink(
          'Open the official NYC subway map PDF',
          '/data/majorcities/newyork/assets/map/nyc-subway-map.pdf'
        ),
        guideLink('Plan getting to NYC from the airport', '/destination/nyc/getting-to-nyc'),
      ],
    };
  }

  if (normalizedSource.includes('safety')) {
    return {
      ...baseOffer,
      subject: 'Your NYC safety planning pack is ready',
      heading: 'Your NYC safety planning pack is ready',
      intro:
        'Thanks for signing up. The PDF gives you a practical 3-day route, and the links below help you sense-check where to stay, how to move around, and what to avoid over-optimizing.',
      bullets: [
        'A printable 3-day NYC itinerary PDF',
        'Safety guidance based on practical traveler decisions',
        'Subway and late-night route checks',
        'Stay-area notes before you compare hotels',
      ],
      secondaryLinks: [
        guideLink('Read the NYC safety guide', '/destination/nyc/nyc-safety-guide'),
        guideLink('Use the NYC subway safety guide', '/destination/nyc/subway-safety-guide'),
        guideLink('Compare the best areas to stay', '/destination/nyc/best-areas-to-stay'),
      ],
    };
  }

  if (normalizedSource.includes('best-time')) {
    return {
      ...baseOffer,
      subject: 'Your NYC trip timing pack is ready',
      heading: 'Your NYC trip timing pack is ready',
      intro:
        'Thanks for signing up. The PDF gives you the 3-day route, and the links below help you decide when to go based on weather, crowds, prices, and booking windows.',
      bullets: [
        'A printable 3-day NYC itinerary PDF',
        'Timing notes for weather and crowds',
        'Booking-window checks before you lock flights or hotels',
        'A route you can adapt by season',
      ],
      secondaryLinks: [
        guideLink('Compare the best time to visit NYC', '/destination/nyc/best-time-to-visit'),
        guideLink('Open the 3-day NYC itinerary', '/destination/nyc/solo-itinerary'),
        guideLink('Compare NYC stay areas', '/destination/nyc/best-areas-to-stay'),
      ],
    };
  }

  if (normalizedSource.includes('getting-to-nyc')) {
    return {
      ...baseOffer,
      subject: 'Your NYC arrival planning pack is ready',
      heading: 'Your NYC arrival planning pack is ready',
      intro:
        'Thanks for signing up. The PDF gives you the 3-day route, and the links below help you handle the arrival pieces: airport transfers, first-day routing, and where to stay.',
      bullets: [
        'A printable 3-day NYC itinerary PDF',
        'Airport and arrival planning links',
        'First-day route checks',
        'Hotel-area guidance before you book',
      ],
      secondaryLinks: [
        guideLink('Plan getting to NYC', '/destination/nyc/getting-to-nyc'),
        guideLink('Compare the best areas to stay', '/destination/nyc/best-areas-to-stay'),
        guideLink('Open the 3-day NYC itinerary', '/destination/nyc/solo-itinerary'),
      ],
    };
  }

  if (normalizedSource.includes('free-things')) {
    return {
      ...baseOffer,
      subject: 'Your NYC free-things planning pack is ready',
      heading: 'Your NYC free-things planning pack is ready',
      intro:
        'Thanks for signing up. The PDF gives you the 3-day route, and the links below help you add free sights, low-cost breaks, and flexible backups.',
      bullets: [
        'A printable 3-day NYC itinerary PDF',
        'Free and low-cost planning links',
        'Rainy-day and flexible filler ideas',
        'A route you can adjust without blowing the budget',
      ],
      secondaryLinks: [
        guideLink('Browse free things to do in NYC', '/destination/nyc/free-things-to-do'),
        guideLink('Open the NYC things-to-do guide', '/destination/nyc/things-to-do'),
        guideLink('Open the 3-day NYC itinerary', '/destination/nyc/solo-itinerary'),
      ],
    };
  }

  if (normalizedSource.includes('best-areas')) {
    return {
      ...baseOffer,
      subject: 'Your NYC stay-area planning pack is ready',
      heading: 'Your NYC stay-area planning pack is ready',
      intro:
        'Thanks for signing up. The PDF gives you the route, and the links below help you choose a base that makes the trip easier instead of just chasing the cheapest hotel.',
      bullets: [
        'A printable 3-day NYC itinerary PDF',
        'Neighborhood and stay-area planning links',
        'Safety and subway checks before booking',
        'A route you can use to test hotel location fit',
      ],
      secondaryLinks: [
        guideLink('Compare the best areas to stay', '/destination/nyc/best-areas-to-stay'),
        guideLink('Check the NYC safety guide', '/destination/nyc/nyc-safety-guide'),
        guideLink('Use the NYC subway safety guide', '/destination/nyc/subway-safety-guide'),
      ],
    };
  }

  if (normalizedSource.includes('solo-trip')) {
    return {
      ...baseOffer,
      subject: 'Your NYC solo trip planning pack is ready',
      heading: 'Your NYC solo trip planning pack is ready',
      intro:
        'Thanks for signing up. The PDF gives you a concrete 3-day route, and the links below help with solo-specific choices: where to stay, how to move around, and how to keep the trip simple.',
      bullets: [
        'A printable 3-day NYC itinerary PDF',
        'Solo-friendly route structure',
        'Neighborhood and safety planning links',
        'Useful next reads for confidence and logistics',
      ],
      secondaryLinks: [
        guideLink('Read the NYC solo trip guide', '/destination/nyc/solo-trip-to-nyc'),
        guideLink('Open the 3-day NYC itinerary', '/destination/nyc/solo-itinerary'),
        guideLink('Compare the best areas to stay', '/destination/nyc/best-areas-to-stay'),
      ],
    };
  }

  if (normalizedSource.includes('solo-itinerary')) {
    return {
      ...baseOffer,
      subject: 'Your printable NYC itinerary is ready',
      heading: 'Your printable NYC itinerary is ready',
      intro:
        'Thanks for signing up. Your printable 3-day NYC itinerary PDF is below, with a few practical guide links to help you sense-check hotels, safety, and timing.',
      bullets: [
        'A printable 3-day NYC itinerary PDF',
        'Morning-to-night route structure',
        'Planning links for stay areas and safety',
        'A simple base you can customize for your exact dates',
      ],
    };
  }

  return baseOffer;
}

async function sendWelcomeEmail(email: string, source?: string): Promise<void> {
  const apiKey = process.env.SMTP2GO_API_KEY;
  const fromEmail = process.env.SMTP2GO_FROM_EMAIL;
  const fromName = process.env.SMTP2GO_FROM_NAME ?? 'Travels Americas';

  if (!apiKey || !fromEmail) {
    console.error('SMTP2GO env vars not set - skipping welcome email');
    return;
  }

  const offer = offerForSource(source);
  const pdfUrl = process.env.NYC_ITINERARY_PDF_URL ?? `${siteUrl}/nyc-3-day-itinerary.pdf`;
  const unsub = unsubscribeUrl(email);
  const bulletItems = offer.bullets.map((bullet) => `<li>${bullet}</li>`).join('');
  const secondaryLinks = offer.secondaryLinks
    .map(
      (link) =>
        `<li style="margin:0 0 10px"><a href="${link.url}" style="color:#2563eb;text-decoration:none;font-weight:700">${link.label}</a></li>`
    )
    .join('');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
    <body style="margin:0;padding:0;background:#f9fafb">

    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;color:#f9fafb">
      ${offer.preheader}
    </div>

    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#fff;padding:32px 24px;color:#111827">
      <p style="margin:0 0 4px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.05em">Travels Americas</p>
      <hr style="border:none;border-top:2px solid #2563eb;margin:0 0 24px"/>
      <img src="${siteUrl}/email/NYC-Itinerary.jpg" alt="NYC itinerary - Empire State Building at golden hour" width="560" style="width:100%;max-width:560px;height:auto;display:block;border-radius:8px;margin:0 0 24px"/>

      <h2 style="color:#2563eb;margin:0 0 8px;font-size:22px">${offer.heading}</h2>
      <p style="margin:0 0 16px;line-height:1.6">${offer.intro}</p>

      <ul style="margin:0 0 20px;padding-left:20px;line-height:2;color:#374151">
        ${bulletItems}
      </ul>

      <p style="margin:0 0 24px">
        <a href="${pdfUrl}"
           style="background:#2563eb;color:#fff;padding:14px 28px;border-radius:6px;
                  text-decoration:none;font-weight:700;font-size:15px;display:inline-block">
          ${offer.primaryLabel}
        </a>
      </p>

      <div style="background:#f9fafb;border-radius:8px;padding:16px 20px;margin:0 0 24px">
        <p style="margin:0 0 8px;font-weight:700;color:#111827">${offer.secondaryHeading}</p>
        <p style="margin:0 0 12px;color:#374151;line-height:1.8;font-size:14px">${offer.secondaryText}</p>
        <ul style="margin:0;padding-left:18px;line-height:1.6;color:#374151;font-size:14px">
          ${secondaryLinks}
        </ul>
      </div>

      <p style="margin:0 0 32px;color:#374151">Questions? Just reply to this email - we read every one.</p>

      <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 16px"/>
      <p style="color:#9ca3af;font-size:12px;margin:0;line-height:1.6">
        You signed up at TravelsAmericas.com. We'll only ever send you useful NYC travel content - no spam.<br/>
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
      subject: offer.subject,
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
  const normalizedEmail = typeof email === 'string' ? email.toLowerCase().trim() : '';

  if (!normalizedEmail || !normalizedEmail.includes('@')) {
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
      [normalizedEmail, source ?? 'unknown']
    );

    const isNew = (result.rowCount ?? 0) > 0;

    if (isNew) {
      try {
        await sendWelcomeEmail(normalizedEmail, source);
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
