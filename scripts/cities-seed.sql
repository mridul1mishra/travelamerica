BEGIN;
INSERT INTO cities (city_id, name, slug) VALUES
  (1, 'NYC', 'nyc'),
  (2, 'LA', 'la'),
  (3, 'Las Vegas', 'lasvegas'),
  (4, 'Orlando', 'orlando')
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name;

-- Fail safely if existing IDs conflict with the requested mapping.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM (VALUES (1, 'nyc'), (2, 'la'), (3, 'lasvegas'), (4, 'orlando')) AS expected(id, slug)
    LEFT JOIN cities c ON c.slug = expected.slug
    WHERE c.city_id IS DISTINCT FROM expected.id::BIGINT
  ) THEN
    RAISE EXCEPTION 'Existing city IDs conflict with requested mapping';
  END IF;
END;
$$;
SELECT setval(pg_get_serial_sequence('cities', 'city_id'), (SELECT MAX(city_id) FROM cities), TRUE);
COMMIT;
