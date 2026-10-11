CREATE TABLE IF NOT EXISTS neighborhoods (
  neighborhood_id BIGSERIAL PRIMARY KEY,
  city_id BIGINT NOT NULL REFERENCES cities(city_id),
  name TEXT NOT NULL CHECK (LENGTH(TRIM(name)) > 0)
);

ALTER TABLE neighborhoods DROP COLUMN IF EXISTS safety_level;
ALTER TABLE neighborhoods DROP COLUMN IF EXISTS is_safe_area;

CREATE UNIQUE INDEX IF NOT EXISTS neighborhoods_city_name_idx
  ON neighborhoods (city_id, LOWER(TRIM(name)));
