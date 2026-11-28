-- Ready-made analytics queries for the `visits` table (see scripts/import-visits-to-mysql.mjs).
USE travel_analytics;

-- 1. Daily visits by type
SELECT visit_day, visitor_type, COUNT(*) AS visits, COUNT(DISTINCT ip) AS visitors
FROM visits GROUP BY visit_day, visitor_type ORDER BY visit_day DESC, visitor_type;

-- 2. Pages real people read most (last 7 days)
SELECT path, COUNT(*) AS views, COUNT(DISTINCT ip) AS people
FROM visits WHERE visitor_type = 'human' AND visit_day >= CURDATE() - INTERVAL 7 DAY
GROUP BY path ORDER BY views DESC LIMIT 25;

-- 3. Which city guides people are interested in
SELECT SUBSTRING_INDEX(SUBSTRING_INDEX(path, '/', 3), '/', -1) AS city_section, COUNT(*) AS views, COUNT(DISTINCT ip) AS people
FROM visits WHERE visitor_type = 'human' AND path LIKE '/destination/%'
GROUP BY city_section ORDER BY views DESC;

-- 4. Human visits by hour of day (New York time)
SELECT HOUR(visited_at_ny) AS hour_ny, COUNT(*) AS views
FROM visits WHERE visitor_type = 'human' GROUP BY hour_ny ORDER BY hour_ny;

-- 5. Visitors by country
SELECT country, visitor_type, COUNT(*) AS visits, COUNT(DISTINCT ip) AS visitors
FROM visits GROUP BY country, visitor_type ORDER BY visits DESC LIMIT 30;

-- 6. Bot traffic by crawler
SELECT identified_as, COUNT(*) AS visits, COUNT(DISTINCT ip) AS ips
FROM visits WHERE visitor_type <> 'human' GROUP BY identified_as ORDER BY visits DESC;

-- 7. Engaged visitors: people who viewed 5+ pages in a day
SELECT visit_day, ip, country, city, COUNT(*) AS views, COUNT(DISTINCT path) AS pages,
       MIN(visited_at_ny) AS first_seen, MAX(visited_at_ny) AS last_seen
FROM visits WHERE visitor_type = 'human'
GROUP BY visit_day, ip, country, city HAVING views >= 5 ORDER BY visit_day DESC, views DESC;

-- 8. Possible scrapers labelled human: one IP hitting many different hotel pages
SELECT visit_day, ip, country, city, COUNT(DISTINCT path) AS hotel_pages, LEFT(MAX(user_agent), 80) AS user_agent
FROM visits WHERE path LIKE '/destination/%/hotel/%'
GROUP BY visit_day, ip, country, city HAVING hotel_pages >= 10 ORDER BY hotel_pages DESC;
