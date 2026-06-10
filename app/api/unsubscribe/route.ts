import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 1,
});

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');

  if (!token) {
    return new NextResponse(unsubscribePage('Invalid link', 'This unsubscribe link is invalid or has expired.'), {
      status: 400,
      headers: { 'Content-Type': 'text/html' },
    });
  }

  let email: string;
  try {
    email = Buffer.from(token, 'base64').toString('utf8');
    if (!email.includes('@')) throw new Error('invalid');
  } catch {
    return new NextResponse(unsubscribePage('Invalid link', 'This unsubscribe link is invalid or has expired.'), {
      status: 400,
      headers: { 'Content-Type': 'text/html' },
    });
  }

  if (!process.env.DATABASE_URL) {
    return new NextResponse(unsubscribePage('Error', 'Something went wrong. Please try again later.'), {
      status: 500,
      headers: { 'Content-Type': 'text/html' },
    });
  }

  const client = await pool.connect();
  try {
    await client.query(
      `UPDATE subscribers SET unsubscribed_at = NOW() WHERE email = $1 AND unsubscribed_at IS NULL`,
      [email.toLowerCase().trim()]
    );
    return new NextResponse(
      unsubscribePage(
        "You've been unsubscribed",
        `${email} has been removed from our list. You won't hear from us again.`
      ),
      { status: 200, headers: { 'Content-Type': 'text/html' } }
    );
  } finally {
    client.release();
  }
}

function unsubscribePage(title: string, message: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${title} — Travels Americas</title>
  <style>
    body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;
         min-height:100vh;margin:0;background:#f9fafb;color:#111827}
    .card{background:#fff;border-radius:12px;padding:40px;max-width:440px;text-align:center;
          box-shadow:0 1px 3px rgba(0,0,0,.1)}
    h1{font-size:22px;margin:0 0 12px}
    p{color:#6b7280;margin:0 0 24px;line-height:1.6}
    a{color:#2563eb;text-decoration:none;font-weight:600}
  </style>
</head>
<body>
  <div class="card">
    <h1>${title}</h1>
    <p>${message}</p>
    <a href="https://www.travelsamericas.com">← Back to TravelsAmericas.com</a>
  </div>
</body>
</html>`;
}
