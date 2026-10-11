-- Extend the existing inventory without renaming columns used by live pages.
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS city_id BIGINT REFERENCES cities(city_id);
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS neighborhood_id BIGINT;
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS google_place_id TEXT;
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS google_rating NUMERIC(3,2)
  CHECK (google_rating BETWEEN 0 AND 5);
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS google_review_count INTEGER
  CHECK (google_review_count >= 0);

CREATE UNIQUE INDEX IF NOT EXISTS neighborhoods_id_city_idx
  ON neighborhoods (neighborhood_id, city_id);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conrelid = 'hotels'::regclass AND conname = 'hotels_neighborhood_city_fk') THEN
    ALTER TABLE hotels ADD CONSTRAINT hotels_neighborhood_city_fk
      FOREIGN KEY (neighborhood_id, city_id) REFERENCES neighborhoods(neighborhood_id, city_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conrelid = 'hotels'::regclass AND conname = 'hotels_neighborhood_requires_city') THEN
    ALTER TABLE hotels ADD CONSTRAINT hotels_neighborhood_requires_city
      CHECK (neighborhood_id IS NULL OR city_id IS NOT NULL);
  END IF;
END;
$$;

CREATE INDEX IF NOT EXISTS hotels_city_id_idx ON hotels (city_id);
CREATE INDEX IF NOT EXISTS hotels_neighborhood_id_idx ON hotels (neighborhood_id);

-- Expose the requested names while preserving existing application compatibility.
CREATE OR REPLACE VIEW hotel_catalog AS
SELECT id AS hotel_id, source_id, name, city_id, neighborhood_id,
  hotel_tier AS tier, google_place_id, image_url, google_rating,
  google_review_count, affiliate_url, active AS is_active
FROM hotels;
