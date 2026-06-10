/**
 * Database migration script.
 * Runs automatically before `next build` (see package.json).
 * Safe to run multiple times — all statements use IF NOT EXISTS.
 */

import pg from 'pg';

const { Pool } = pg;

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.warn('⚠️  DATABASE_URL not set — skipping migration.');
  process.exit(0);
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 1,
});

const migrations = [
  {
    name: 'create_subscribers_table',
    sql: `
      CREATE TABLE IF NOT EXISTS subscribers (
        id         SERIAL PRIMARY KEY,
        email      TEXT NOT NULL UNIQUE,
        source     TEXT NOT NULL DEFAULT 'unknown',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `,
  },
  {
    name: 'create_subscribers_email_index',
    sql: `
      CREATE INDEX IF NOT EXISTS subscribers_email_idx ON subscribers (email);
    `,
  },
  {
    name: 'add_drip_columns',
    sql: `
      ALTER TABLE subscribers
        ADD COLUMN IF NOT EXISTS drip_step        INTEGER     NOT NULL DEFAULT 1,
        ADD COLUMN IF NOT EXISTS last_drip_sent_at TIMESTAMPTZ;
    `,
  },
  {
    name: 'add_unsubscribed_at',
    sql: `
      ALTER TABLE subscribers
        ADD COLUMN IF NOT EXISTS unsubscribed_at TIMESTAMPTZ;
    `,
  },
];

async function migrate() {
  const client = await pool.connect();
  try {
    for (const { name, sql } of migrations) {
      console.log(`  → Running migration: ${name}`);
      await client.query(sql);
      console.log(`  ✓ Done: ${name}`);
    }
    console.log('\n✅ All migrations complete.\n');
  } catch (err) {
    console.error('\n❌ Migration failed:', err.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

console.log('\n🗄️  Running database migrations...\n');
migrate();
