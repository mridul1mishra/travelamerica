import { readFileSync } from "node:fs";
import { seedCityHotels } from "./seed-city-hotels.mjs";
/**
 * Database migration script.
 * Runs automatically before `next build` (see package.json).
 * Safe to run multiple times — all statements use IF NOT EXISTS.
 */

import pg from 'pg';

const { Pool } = pg;

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  process.exit(0);
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 1,
});

const migrations = [
  { name: "create_hotel_price_limits", sql: readFileSync(new URL("./hotel-price-limits-schema.sql", import.meta.url), "utf8") },
  { name: "create_cities_table", sql: readFileSync(new URL("./cities-schema.sql", import.meta.url), "utf8") },
  { name: "seed_cities", sql: readFileSync(new URL("./cities-seed.sql", import.meta.url), "utf8") },
  { name: "create_neighborhoods_table", sql: readFileSync(new URL("./neighborhoods-schema.sql", import.meta.url), "utf8") },
  { name: "seed_nyc_neighborhoods", sql: readFileSync(new URL("./nyc-neighborhoods-seed.sql", import.meta.url), "utf8") },
  { name: "create_hotels_table", sql: readFileSync(new URL("./hotels-schema.sql", import.meta.url), "utf8") },
  { name: "add_hotel_relations", sql: readFileSync(new URL("./hotel-relations-schema.sql", import.meta.url), "utf8") },
  { name: "canonical_nyc_neighborhoods", sql: readFileSync(new URL("./nyc-neighborhoods-canonical.sql", import.meta.url), "utf8") },
  { name: "normalize_hotel_tags", sql: readFileSync(new URL("./hotel-tag-relations-schema.sql", import.meta.url), "utf8") },
  { name: "seed_requested_tags", sql: readFileSync(new URL("./tags-seed.sql", import.meta.url), "utf8") },
  { name: "create_hotel_rating_limits", sql: readFileSync(new URL("./hotel-rating-limits-schema.sql", import.meta.url), "utf8") },
  { name: "create_member_auth", sql: readFileSync(new URL("./member-auth-schema.sql", import.meta.url), "utf8") },
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
  {
    name: 'create_signup_rate_limits_table',
    sql: `
      CREATE TABLE IF NOT EXISTS signup_rate_limits (
        key            TEXT PRIMARY KEY,
        window_started TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        attempts       INTEGER NOT NULL DEFAULT 1
      );
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
    await seedCityHotels(client);
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
