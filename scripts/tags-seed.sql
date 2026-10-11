BEGIN;
LOCK TABLE tags, hotel_tags IN SHARE ROW EXCLUSIVE MODE;

ALTER TABLE hotel_tags DROP CONSTRAINT IF EXISTS hotel_tags_tag_id_fkey;
ALTER TABLE hotel_tags ADD CONSTRAINT hotel_tags_tag_id_fkey
  FOREIGN KEY (tag_id) REFERENCES tags(tag_id) ON UPDATE CASCADE;

CREATE TEMP TABLE requested_tags (
  tag_id BIGINT PRIMARY KEY, tag_name VARCHAR(50) UNIQUE, description VARCHAR(250)
) ON COMMIT DROP;
INSERT INTO requested_tags VALUES
  (1, 'FirstTimeVisitor', 'Recommended for first-time NYC visitors'),
  (2, 'SoloTraveler', 'Suitable for solo travelers'),
  (3, 'FamilyFriendly', 'Good for families'),
  (4, 'BusinessFriendly', 'Convenient for business travelers'),
  (5, 'NearTransit', 'Close to subway or public transit'),
  (6, 'NightlifeAccess', 'Near nightlife districts'),
  (7, 'WalkableArea', 'Attractions reachable on foot');

-- Free the requested IDs once, cascading changes to every existing assignment.
DO $$
DECLARE id_offset BIGINT;
BEGIN
  IF EXISTS (SELECT 1 FROM requested_tags r LEFT JOIN tags t USING (tag_name)
    WHERE t.tag_id IS DISTINCT FROM r.tag_id) THEN
    SELECT COALESCE(MAX(tag_id), 0) + 100 INTO id_offset FROM tags;
    UPDATE tags SET tag_id = tag_id + id_offset;
    UPDATE tags t SET tag_id = r.tag_id FROM requested_tags r WHERE t.tag_name = r.tag_name;
  END IF;
END;
$$;

INSERT INTO tags (tag_id, tag_name, description, is_active, display_order)
SELECT tag_id, tag_name, description, TRUE, tag_id::INTEGER FROM requested_tags
ON CONFLICT (tag_name) DO UPDATE SET
  description = EXCLUDED.description, is_active = TRUE, display_order = EXCLUDED.display_order;

-- Retain earlier assignments/evidence, but expose only the requested catalog.
UPDATE tags SET is_active = FALSE
WHERE tag_name NOT IN (SELECT tag_name FROM requested_tags);
SELECT setval(pg_get_serial_sequence('tags', 'tag_id'), (SELECT MAX(tag_id) FROM tags), TRUE);
COMMIT;
