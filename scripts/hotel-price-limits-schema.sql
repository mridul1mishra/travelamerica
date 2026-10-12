CREATE TABLE IF NOT EXISTS hotel_price_usage (
  bucket TEXT PRIMARY KEY,
  requests INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS hotel_price_cache (
  cache_key TEXT PRIMARY KEY,
  results JSONB NOT NULL,
  checked_at TIMESTAMPTZ NOT NULL
);
