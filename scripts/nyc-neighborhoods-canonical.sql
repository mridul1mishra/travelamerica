BEGIN;
-- Merge earlier names into the user's eight planning neighborhoods.
INSERT INTO neighborhoods (city_id, name)
SELECT city_id, 'Central Park South' FROM cities WHERE slug = 'nyc'
ON CONFLICT (city_id, LOWER(TRIM(name))) DO NOTHING;

DO $$
DECLARE pair RECORD; city BIGINT; keep_id BIGINT; old_id BIGINT;
BEGIN
  SELECT city_id INTO city FROM cities WHERE slug = 'nyc';
  FOR pair IN SELECT * FROM (VALUES
    ('Midtown', 'Midtown / Times Square'),
    ('Times Square', 'Midtown / Times Square'),
    ('Financial District', 'Financial District / Downtown'),
    ('Battery Park', 'Financial District / Downtown')
  ) AS aliases(old_name, new_name) LOOP
    SELECT neighborhood_id INTO old_id FROM neighborhoods WHERE city_id = city AND name = pair.old_name;
    SELECT neighborhood_id INTO keep_id FROM neighborhoods WHERE city_id = city AND name = pair.new_name;
    IF old_id IS NOT NULL THEN
      IF keep_id IS NULL THEN
        UPDATE neighborhoods SET name = pair.new_name WHERE neighborhood_id = old_id;
      ELSE
        UPDATE hotels SET neighborhood_id = keep_id WHERE neighborhood_id = old_id AND city_id = city;
        DELETE FROM neighborhoods WHERE neighborhood_id = old_id;
      END IF;
    END IF;
  END LOOP;
  DELETE FROM neighborhoods n WHERE city_id = city AND name = 'DUMBO'
    AND NOT EXISTS (SELECT 1 FROM hotels h WHERE h.neighborhood_id = n.neighborhood_id);
END;
$$;
UPDATE hotels h SET neighborhood = n.name
FROM neighborhoods n WHERE h.neighborhood_id = n.neighborhood_id AND h.neighborhood IS DISTINCT FROM n.name;
COMMIT;
