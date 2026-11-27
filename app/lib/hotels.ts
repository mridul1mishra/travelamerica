import { Pool } from "pg";
import { unstable_cache } from "next/cache";
import type { Hotel } from "@/app/destination/la/bookings/components/BookingClient/BookingClient";
import type { HotelTag } from "./hotelTags";
import { getNycHotelTierAssessment } from "./hotelTiers";
import catalog from "@/content/cities/hotel-catalog.json";
import selection from "@/content/cities/newyork/hotel-selection.json";
import nycBookingSlugs from "@/content/cities/newyork/hotel-booking-slugs.json";
import otherCityBookingSlugs from "@/content/cities/hotel-booking-slugs.json";
import snapshot from "@/content/cities/hotel-snapshot.json";

const globalDatabase = globalThis as typeof globalThis & { hotelPool?: Pool };

function database() {
  if (!process.env.DATABASE_URL) throw new Error("Hotel database is not configured");
  return globalDatabase.hotelPool ??= new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: 3,
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
  });
}

export type HotelCity = "nyc" | "la" | "orlando" | "lasvegas";

type CityHotelRow = {
    hotelId: string; hotelSourceId: string; hotelSource: string;
    img: string; title: string; area: string; googlePlaceId: string | null; overview: string | null;
    price: string; url: string; address: string | null;
    neighborhood: string | null; tags: HotelTag[];
    city: string; hotelTier: "Standard" | "Premium" | "Luxury" | null;
    hotelTierModelVersion: string | null;
    hotelTierIsProvisional: boolean | null;
    hotelTierEvidenceCoverage: number | null;
    firstTimeVisitor: boolean | null; safeArea: boolean | null;
    systemMetadata: NonNullable<Hotel["systemMetadata"]>;
    tagOrder: Partial<Record<HotelTag, number>>;
  };

// Shared with scripts/export-hotel-snapshot.mjs, which reads this SQL from this file.
export const CITY_HOTELS_SQL = `SELECT id::text AS "hotelId", source_id AS "hotelSourceId", source AS "hotelSource",
      COALESCE(image_url, '/destination/nyc-neighborhoods.png') AS img,
      name AS title, area, address, google_place_id AS "googlePlaceId",
      to_jsonb(hotels)->>'editorial_overview' AS overview,
      'See prices' AS price, '/api/hotel-prices/' || id::text AS url,
      COALESCE((SELECT n.name FROM neighborhoods n WHERE n.neighborhood_id = hotels.neighborhood_id), neighborhood) AS neighborhood,
      city_slug AS city, hotel_tier AS "hotelTier",
      classification_evidence #>> '{hotelTier,modelVersion}' AS "hotelTierModelVersion",
      (classification_evidence #>> '{hotelTier,isProvisional}')::boolean AS "hotelTierIsProvisional",
      (classification_evidence #>> '{hotelTier,evidenceCoverage}')::double precision AS "hotelTierEvidenceCoverage",
      first_time_visitor AS "firstTimeVisitor", safe_area AS "safeArea",
      (SELECT jsonb_build_object(
        'destination', m.destination, 'displayOrder', m.display_order,
        'isActive', m.is_active, 'featuredHotel', m.featured_hotel,
        'lastUpdated', m.last_updated, 'affiliateEnabled', m.affiliate_enabled,
        'hasImages', m.has_images, 'hasDetailPage', m.has_detail_page)
        FROM hotel_system_metadata m WHERE m.id = hotels.id) AS "systemMetadata",
      ARRAY(SELECT ht.tag FROM hotel_tags ht JOIN tags t ON t.tag_id = ht.tag_id
        WHERE ht.hotel_id = hotels.id AND t.is_active ORDER BY t.display_order, ht.tag) AS tags,
      COALESCE((SELECT jsonb_object_agg(ht.tag, t.display_order)
        FROM hotel_tags ht JOIN tags t ON t.tag_id = ht.tag_id
        WHERE ht.hotel_id = hotels.id AND t.is_active), '{}'::jsonb) AS "tagOrder"
    FROM hotels WHERE city_slug = $1 AND active = TRUE
      AND ((city_slug = 'nyc' AND source = 'travel-advisor' AND source_id = ANY($3::text[]))
        OR (city_slug <> 'nyc' AND source = 'saved-listing' AND source_id = ANY($4::text[])))
      AND ($2::text IS NULL OR EXISTS (SELECT 1 FROM hotel_tags ht JOIN tags t ON t.tag_id = ht.tag_id
        WHERE ht.hotel_id = hotels.id AND ht.tag = $2 AND t.is_active))
    ORDER BY sort_order, id LIMIT 50`;

function cityHotelParams(city: HotelCity, tag?: HotelTag) {
  return [city, tag ?? null, selection.sourceIds, catalog.filter(h => h.city === city).map(h => h.sourceId)];
}

function toHotel(city: HotelCity, { hotelSource, googlePlaceId, hotelTierModelVersion, hotelTierIsProvisional, hotelTierEvidenceCoverage, ...hotel }: CityHotelRow) {
    // Saved assessments take precedence; scorecards cover rows awaiting migration.
    const tierAssessment = hotelTierModelVersion === "2" ? {
      hotelTierIsProvisional: hotelTierIsProvisional ?? undefined,
      hotelTierEvidenceCoverage: hotelTierEvidenceCoverage ?? undefined,
    } : city === "nyc" ? getNycHotelTierAssessment(hotelSource, hotel.hotelSourceId) : {};
    return {
      ...hotel,
      // User-selected Edison cover replaces the provider thumbnail.
      img: city === "nyc" && hotelSource === "travel-advisor" && hotel.hotelSourceId === "93437"
        ? "https://lh3.googleusercontent.com/grass-cs/AABkmLf5zATfjewZ7DqQlHtQRC4PVv3xYUcZa_-XrmRzQUmc52mgipKZg2GSNsjF6WYYExJEpogkd085ZM6UCpJX2v8NXhxfwsNF5OV7qJUoMLpe-jUo2FmLDMBRSvTqgzIOCJiMc2fpmg=s4800-w1200" : hotel.img,
      ...tierAssessment,
      googleRatingAvailable: Boolean(googlePlaceId),
      googleMapsUrl: googlePlaceId
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.title)}&query_place_id=${encodeURIComponent(googlePlaceId)}`
        : undefined,
    };
}

async function loadCityHotels(city: HotelCity, tag?: HotelTag): Promise<Hotel[]> {
  const result = await database().query<CityHotelRow>(CITY_HOTELS_SQL, cityHotelParams(city, tag));
  return result.rows.map(row => toHotel(city, row));
}

const bookingSlugsByCity: Record<HotelCity, Readonly<Partial<Record<string, string>>>> = {
  nyc: nycBookingSlugs,
  ...otherCityBookingSlugs,
};

type BookingRow = { url: string | null; city: HotelCity; sourceId: string };

// Shared with scripts/export-hotel-snapshot.mjs, which reads this SQL from this file.
export const HOTEL_BOOKING_SQL = `
    SELECT booking_url AS url, city_slug AS city, source_id AS "sourceId" FROM hotels
    WHERE id = $1::bigint AND active = TRUE
      AND ((city_slug = 'nyc' AND source = 'travel-advisor' AND source_id = ANY($2::text[]))
        OR (city_slug = ANY($3::text[]) AND source = 'saved-listing' AND source_id = ANY($4::text[])))
      LIMIT 1`;

// Resolve the configured provider destination for a published hotel.
function bookingUrlFromRow(hotel: BookingRow | undefined): string | null {
  const slug = hotel && bookingSlugsByCity[hotel.city]?.[hotel.sourceId];
  if (slug) {
    const destination = `https://www.booking.com/hotel/us/${slug}.html`;
    return `https://www.anrdoezrs.net/click-101909153-17293132?url=${encodeURIComponent(destination)}`;
  }
  return hotel?.url ?? null;
}

async function loadHotelBookingUrl(hotelId: string): Promise<string | null> {
  const result = await database().query<BookingRow>(HOTEL_BOOKING_SQL,
    [hotelId, selection.sourceIds, ["la", "orlando", "lasvegas"], catalog.map(h => h.sourceId)]);
  return bookingUrlFromRow(result.rows[0]);
}

// Hotel data changes rarely. Cache query results for a day so page visits,
// crawlers and made-up hotel IDs reuse one result per city instead of waking
// the database. Each deployment starts with fresh data.
const HOTEL_CACHE_SECONDS = 86400;
const HOTEL_CACHE_VERSION = process.env.VERCEL_DEPLOYMENT_ID ?? "local";

const cachedCityHotels = unstable_cache(
  loadCityHotels, ["city-hotels", HOTEL_CACHE_VERSION], { revalidate: HOTEL_CACHE_SECONDS, tags: ["hotels"] });

const cachedHotelBookingUrl = unstable_cache(
  loadHotelBookingUrl, ["hotel-booking-url", HOTEL_CACHE_VERSION], { revalidate: HOTEL_CACHE_SECONDS, tags: ["hotels"] });

type HotelSnapshot = {
  generatedAt: string | null;
  hotels: Partial<Record<HotelCity, CityHotelRow[]>>;
  bookings: Record<string, BookingRow>;
};
const backup = snapshot as unknown as HotelSnapshot;

// Order: cached result -> database -> JSON backup (content/cities/hotel-snapshot.json).
// Backup data is never written into the data cache, so the database is used
// again as soon as it is reachable. If the backup has nothing for this city,
// the database error is rethrown rather than rendering an empty page.
export async function getCityHotels(city: HotelCity, tag?: HotelTag): Promise<Hotel[]> {
  try {
    return await cachedCityHotels(city, tag);
  } catch (error) {
    const rows = backup.hotels[city];
    if (!rows?.length) throw error;
    console.warn(`Hotel database unavailable; serving ${city} from JSON backup (${backup.generatedAt})`);
    return rows.filter(row => !tag || row.tags?.includes(tag)).map(row => toHotel(city, row));
  }
}

export async function getHotelBookingUrl(hotelId: string): Promise<string | null> {
  try {
    return await cachedHotelBookingUrl(hotelId);
  } catch (error) {
    const row = backup.bookings[hotelId];
    if (!row) throw error;
    console.warn(`Hotel database unavailable; serving booking link ${hotelId} from JSON backup`);
    return bookingUrlFromRow(row);
  }
}

export function getNycHotels(tag?: HotelTag) { return getCityHotels("nyc", tag); }

export async function getHotelPriceIdentity(hotelId: string) {
  for (const city of ["nyc", "la", "orlando", "lasvegas"] as HotelCity[]) {
    const hotel = (await getCityHotels(city)).find(h => h.hotelId === hotelId);
    if (hotel) return { name: hotel.title, address: hotel.address, city };
  }
  return null;
}
