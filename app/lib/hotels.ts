import { Pool } from "pg";
import type { Hotel } from "@/app/destination/la/bookings/components/BookingClient/BookingClient";
import type { HotelTag } from "./hotelTags";
import { getNycHotelTierAssessment } from "./hotelTiers";
import catalog from "@/content/cities/hotel-catalog.json";
import selection from "@/content/cities/newyork/hotel-selection.json";

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

export async function getCityHotels(city: HotelCity, tag?: HotelTag): Promise<Hotel[]> {
  const result = await database().query<{
    hotelId: string; hotelSourceId: string; hotelSource: string;
    img: string; title: string; area: string; googlePlaceId: string | null;
    price: string; url: string; address: string | null;
    neighborhood: string | null; tags: HotelTag[];
    city: string; hotelTier: "Standard" | "Premium" | "Luxury" | null;
    hotelTierModelVersion: string | null;
    hotelTierIsProvisional: boolean | null;
    hotelTierEvidenceCoverage: number | null;
    firstTimeVisitor: boolean | null; safeArea: boolean | null;
    systemMetadata: NonNullable<Hotel["systemMetadata"]>;
    tagOrder: Partial<Record<HotelTag, number>>;
  }>(`SELECT id::text AS "hotelId", source_id AS "hotelSourceId", source AS "hotelSource",
      COALESCE(image_url, '/destination/nyc-neighborhoods.png') AS img,
      name AS title, area, address, google_place_id AS "googlePlaceId",
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
    ORDER BY sort_order, id LIMIT 50`, [city, tag ?? null, selection.sourceIds, catalog.filter(h => h.city === city).map(h => h.sourceId)]);
  return result.rows.map(({ hotelSource, googlePlaceId, hotelTierModelVersion, hotelTierIsProvisional, hotelTierEvidenceCoverage, ...hotel }) => {
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
  });
}

// Resolve destinations only after the prices route has verified the session.
// Neither the public page nor its React payload includes booking destinations.
export async function getHotelBookingUrl(hotelId: string): Promise<string | null> {
  const result = await database().query<{ url: string }>(`SELECT booking_url AS url FROM hotels
    WHERE id = $1::bigint AND active = TRUE
      AND ((city_slug = 'nyc' AND source = 'travel-advisor' AND source_id = ANY($2::text[]))
        OR (city_slug = ANY($3::text[]) AND source = 'saved-listing' AND source_id = ANY($4::text[])))
      LIMIT 1`, [hotelId, selection.sourceIds, ['la', 'orlando', 'lasvegas'], catalog.map(h => h.sourceId)]);
  return result.rows[0]?.url ?? null;
}

export function getNycHotels(tag?: HotelTag) { return getCityHotels("nyc", tag); }

export async function getHotelPriceIdentity(hotelId: string) {
  for (const city of ["nyc", "la", "orlando", "lasvegas"] as HotelCity[]) {
    const hotel = (await getCityHotels(city)).find(h => h.hotelId === hotelId);
    if (hotel) return { name: hotel.title, address: hotel.address, city };
  }
  return null;
}
