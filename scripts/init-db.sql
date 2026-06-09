-- Run this once in your Neon DB console (or via psql) to create the subscribers table.

CREATE TABLE IF NOT EXISTS subscribers (
  id         SERIAL PRIMARY KEY,
  email      TEXT NOT NULL UNIQUE,
  source     TEXT NOT NULL DEFAULT 'unknown',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for fast duplicate checks
CREATE INDEX IF NOT EXISTS subscribers_email_idx ON subscribers (email);
