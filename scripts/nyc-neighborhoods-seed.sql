BEGIN;
INSERT INTO cities (name, slug) VALUES ('New York City', 'nyc')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO neighborhoods (city_id, name)
SELECT c.city_id, n.name
FROM cities c CROSS JOIN (VALUES
  ('Midtown / Times Square'),
  ('Chelsea'),
  ('Upper West Side'),
  ('Upper East Side'),
  ('Tribeca'),
  ('NoMad'),
  ('Financial District / Downtown'),
  ('Central Park South')
) AS n(name)
WHERE c.slug = 'nyc'
ON CONFLICT (city_id, LOWER(TRIM(name))) DO NOTHING;
COMMIT;
