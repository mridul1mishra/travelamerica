-- Additive Better Auth 1.7.7 schema. Member tables do not share newsletter subscriptions.
CREATE TABLE IF NOT EXISTS member_user (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  email_verified BOOLEAN NOT NULL DEFAULT FALSE,
  phone TEXT,
  image TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
-- Existing member rows remain valid; phone is optional profile data, not SMS authentication.
ALTER TABLE member_user ADD COLUMN IF NOT EXISTS phone TEXT;

CREATE TABLE IF NOT EXISTS member_session (
  id TEXT PRIMARY KEY,
  expires_at TIMESTAMPTZ NOT NULL,
  token TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ip_address TEXT,
  user_agent TEXT,
  user_id TEXT NOT NULL REFERENCES member_user(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS member_session_user_idx ON member_session(user_id);
CREATE INDEX IF NOT EXISTS member_session_expiry_idx ON member_session(expires_at);

CREATE TABLE IF NOT EXISTS member_account (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL,
  provider_id TEXT NOT NULL,
  user_id TEXT NOT NULL REFERENCES member_user(id) ON DELETE CASCADE,
  access_token TEXT,
  refresh_token TEXT,
  id_token TEXT,
  access_token_expires_at TIMESTAMPTZ,
  refresh_token_expires_at TIMESTAMPTZ,
  scope TEXT,
  password TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS member_account_user_idx ON member_account(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS member_account_provider_idx ON member_account(provider_id, account_id);

CREATE TABLE IF NOT EXISTS member_verification (
  id TEXT PRIMARY KEY,
  identifier TEXT NOT NULL,
  value TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS member_verification_identifier_idx ON member_verification(identifier);
CREATE INDEX IF NOT EXISTS member_verification_expiry_idx ON member_verification(expires_at);

CREATE TABLE IF NOT EXISTS member_rate_limit (
  id TEXT PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  count INTEGER NOT NULL,
  last_request BIGINT NOT NULL
);
CREATE INDEX IF NOT EXISTS member_rate_limit_last_request_idx ON member_rate_limit(last_request);
