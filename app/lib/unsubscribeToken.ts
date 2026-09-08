import { createHmac, timingSafeEqual } from 'crypto';

const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 365;

function secret(): string {
  const value = process.env.UNSUBSCRIBE_SECRET ?? process.env.CRON_SECRET;
  if (!value || value.length < 32) {
    throw new Error('UNSUBSCRIBE_SECRET must be at least 32 characters');
  }
  return value;
}

function sign(payload: string): string {
  return createHmac('sha256', secret()).update(payload).digest('base64url');
}

export function createUnsubscribeToken(email: string): string {
  const payload = Buffer.from(
    JSON.stringify({ email: email.toLowerCase().trim(), exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS })
  ).toString('base64url');

  return `${payload}.${sign(payload)}`;
}

export function verifyUnsubscribeToken(token: string): string | null {
  const [payload, suppliedSignature, extra] = token.split('.');
  if (!payload || !suppliedSignature || extra) return null;

  const expectedSignature = sign(payload);
  const supplied = Buffer.from(suppliedSignature);
  const expected = Buffer.from(expectedSignature);
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return null;

  try {
    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as {
      email?: unknown;
      exp?: unknown;
    };
    if (typeof decoded.email !== 'string' || !decoded.email.includes('@')) return null;
    if (typeof decoded.exp !== 'number' || decoded.exp < Math.floor(Date.now() / 1000)) return null;
    return decoded.email.toLowerCase().trim();
  } catch {
    return null;
  }
}
