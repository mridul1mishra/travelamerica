CREATE TABLE IF NOT EXISTS tags (
  tag_id BIGSERIAL PRIMARY KEY,
  tag_name VARCHAR(50) NOT NULL UNIQUE CHECK (LENGTH(TRIM(tag_name)) > 0),
  description VARCHAR(250),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  display_order INTEGER NOT NULL DEFAULT 0
);

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'tags' AND column_name = 'name') THEN
    ALTER TABLE tags RENAME COLUMN name TO tag_name;
  END IF;
END;
$$;
ALTER TABLE tags ALTER COLUMN tag_name TYPE VARCHAR(50);
ALTER TABLE tags ADD COLUMN IF NOT EXISTS description VARCHAR(250);
ALTER TABLE tags ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT TRUE;
ALTER TABLE tags ADD COLUMN IF NOT EXISTS display_order INTEGER NOT NULL DEFAULT 0;

INSERT INTO tags (tag_name)
SELECT DISTINCT tag FROM hotel_tags
ON CONFLICT (tag_name) DO NOTHING;

ALTER TABLE hotel_tags ADD COLUMN IF NOT EXISTS tag_id BIGINT REFERENCES tags(tag_id);
UPDATE hotel_tags ht SET tag_id = t.tag_id
FROM tags t WHERE t.tag_name = ht.tag AND ht.tag_id IS DISTINCT FROM t.tag_id;
ALTER TABLE hotel_tags ALTER COLUMN tag_id SET NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS hotel_tags_hotel_tag_id_idx ON hotel_tags (hotel_id, tag_id);
CREATE INDEX IF NOT EXISTS hotel_tags_tag_id_idx ON hotel_tags (tag_id);

-- Keep legacy tag-key writers working while maintaining the normalized reference.
CREATE OR REPLACE FUNCTION resolve_hotel_tag_id() RETURNS TRIGGER AS $$
DECLARE resolved_id BIGINT;
BEGIN
  INSERT INTO tags (tag_name) VALUES (NEW.tag) ON CONFLICT (tag_name) DO NOTHING;
  SELECT tag_id INTO resolved_id FROM tags WHERE tag_name = NEW.tag;
  IF TG_OP = 'INSERT' THEN
    IF NEW.tag_id IS NOT NULL AND NEW.tag_id <> resolved_id THEN
      RAISE EXCEPTION 'TagId does not match tag key';
    END IF;
  ELSIF NEW.tag_id IS DISTINCT FROM OLD.tag_id AND NEW.tag_id <> resolved_id THEN
    RAISE EXCEPTION 'TagId does not match tag key';
  END IF;
  NEW.tag_id = resolved_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
DROP TRIGGER IF EXISTS hotel_tags_resolve_tag_id ON hotel_tags;
CREATE TRIGGER hotel_tags_resolve_tag_id BEFORE INSERT OR UPDATE ON hotel_tags
FOR EACH ROW EXECUTE FUNCTION resolve_hotel_tag_id();

CREATE OR REPLACE VIEW hotel_tag AS
SELECT hotel_id, tag_id FROM hotel_tags;
