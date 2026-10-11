CREATE TABLE IF NOT EXISTS cities (
  city_id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL CHECK (LENGTH(TRIM(name)) > 0),
  slug TEXT NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$')
);
