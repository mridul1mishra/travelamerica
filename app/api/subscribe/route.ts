import { NextResponse } from 'next/server';

// Retired: all signups now happen on /register (the guide signup boxes link there).
// Kept so old cached pages or bookmarks get a clear answer instead of a 404.
export async function POST() {
  return NextResponse.json(
    { message: 'Sign-ups now happen on our registration page.', register: '/register' },
    { status: 410, headers: { 'Cache-Control': 'no-store' } },
  );
}
