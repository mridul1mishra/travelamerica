-- Application-owned request counters only. Never store Google rating content.
CREATE TABLE IF NOT EXISTS hotel_rating_usage (
  scope TEXT NOT NULL CHECK (scope IN ('day', 'month', 'ip')),
  requester_key TEXT NOT NULL,
  window_started TIMESTAMPTZ NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0 CHECK (attempts >= 0),
  PRIMARY KEY (scope, requester_key),
  CHECK ((scope IN ('day', 'month') AND requester_key = 'global')
    OR (scope = 'ip' AND requester_key ~ '^[a-f0-9]{64}$'))
);

CREATE INDEX IF NOT EXISTS hotel_rating_usage_ip_window_idx
  ON hotel_rating_usage (window_started) WHERE scope = 'ip';
