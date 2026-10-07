CREATE TABLE IF NOT EXISTS hotels (
  id BIGSERIAL PRIMARY KEY,
  city_slug TEXT NOT NULL,
  source TEXT NOT NULL,
  source_id TEXT NOT NULL,
  name TEXT NOT NULL,
  area TEXT,
  address TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  image_url TEXT,
  rating NUMERIC(3,2) CHECK (rating BETWEEN 0 AND 5),
  review_count INTEGER CHECK (review_count >= 0),
  price_text TEXT,
  booking_url TEXT NOT NULL,
  description TEXT,
  amenities JSONB NOT NULL DEFAULT '[]',
  raw_data JSONB NOT NULL DEFAULT '{}',
  sort_order INTEGER NOT NULL DEFAULT 0,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  price_checkin DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (city_slug, source, source_id)
);
CREATE INDEX IF NOT EXISTS hotels_city_active_order_idx
  ON hotels (city_slug, active, sort_order);
