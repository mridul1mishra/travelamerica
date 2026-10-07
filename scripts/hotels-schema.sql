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

ALTER TABLE hotels ADD COLUMN IF NOT EXISTS neighborhood TEXT;
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS hotel_tier TEXT
  CHECK (hotel_tier IN ('Budget', 'Premium', 'Luxury'));
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS first_time_visitor BOOLEAN;
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS safe_area BOOLEAN;
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS classification_evidence JSONB NOT NULL DEFAULT '{}';
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS featured_hotel BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS affiliate_url TEXT;
-- Written only by the detail-page generation/publishing workflow.
ALTER TABLE hotels ADD COLUMN IF NOT EXISTS detail_page_path TEXT;
CREATE TABLE IF NOT EXISTS hotel_tags (
  hotel_id BIGINT NOT NULL REFERENCES hotels(id) ON DELETE CASCADE,
  tag TEXT NOT NULL CHECK (tag IN ('SafeArea', 'NearSubway', 'FirstTimeVisitor', 'SoloTraveler', 'FamilyFriendly', 'BestValue')),
  source_url TEXT NOT NULL,
  rationale TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (hotel_id, tag)
);
CREATE INDEX IF NOT EXISTS hotel_tags_tag_idx ON hotel_tags(tag, hotel_id);

ALTER TABLE hotel_tags DROP CONSTRAINT IF EXISTS hotel_tags_tag_check;
ALTER TABLE hotel_tags ADD CONSTRAINT hotel_tags_tag_check CHECK (tag IN (
  'SafeArea', 'NearSubway', 'NearTransit', 'CityCenter', 'FirstTimeVisitor',
  'SoloTraveler', 'FamilyFriendly', 'BestValue', 'BudgetFriendly', 'Premium',
  'Luxury', 'NightlifeAccess', 'WalkableArea', 'BusinessFriendly',
  'EditorsChoice', 'CouplesFriendly'
));

-- Preserve unknown values as NULL: absence of a positive tag does not mean No.
UPDATE hotels h SET hotel_tier = 'Luxury',
  classification_evidence = classification_evidence || jsonb_build_object(
    'hotelTier', jsonb_build_object('sourceUrl', t.source_url, 'rationale', t.rationale))
FROM hotel_tags t WHERE t.hotel_id = h.id AND t.tag = 'Luxury' AND h.hotel_tier IS NULL;

CREATE OR REPLACE VIEW hotel_classification_review AS
SELECT id, city_slug, source_id, name, neighborhood, hotel_tier,
  first_time_visitor, safe_area,
  (NULLIF(TRIM(city_slug), '') IS NOT NULL AND NULLIF(TRIM(neighborhood), '') IS NOT NULL
    AND hotel_tier IS NOT NULL AND first_time_visitor IS NOT NULL AND safe_area IS NOT NULL)
    AS classification_complete
FROM hotels;

CREATE OR REPLACE VIEW hotel_system_metadata AS
SELECT id,
  '/destination/' || city_slug AS destination,
  sort_order AS display_order,
  active AS is_active,
  featured_hotel,
  updated_at AS last_updated,
  NULLIF(TRIM(affiliate_url), '') IS NOT NULL AS affiliate_enabled,
  (NULLIF(TRIM(image_url), '') IS NOT NULL
    AND image_url <> '/destination/nyc-neighborhoods.png') AS has_images,
  NULLIF(TRIM(detail_page_path), '') IS NOT NULL AS has_detail_page
FROM hotels;

CREATE OR REPLACE FUNCTION touch_hotel_updated_at() RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
DROP TRIGGER IF EXISTS hotels_touch_updated_at ON hotels;
CREATE TRIGGER hotels_touch_updated_at BEFORE UPDATE ON hotels
FOR EACH ROW EXECUTE FUNCTION touch_hotel_updated_at();

CREATE OR REPLACE FUNCTION touch_hotel_after_tag_change() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    UPDATE hotels SET updated_at = NOW() WHERE id = OLD.hotel_id;
    RETURN OLD;
  END IF;
  UPDATE hotels SET updated_at = NOW() WHERE id = NEW.hotel_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
DROP TRIGGER IF EXISTS hotel_tags_touch_hotel ON hotel_tags;
CREATE TRIGGER hotel_tags_touch_hotel AFTER INSERT OR UPDATE OR DELETE ON hotel_tags
FOR EACH ROW EXECUTE FUNCTION touch_hotel_after_tag_change();
