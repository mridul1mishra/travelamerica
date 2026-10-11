import { Pool } from "pg";
import type { Hotel } from "@/app/destination/la/bookings/components/BookingClient/BookingClient";
import type { HotelTag } from "./hotelTags";
import { getNycHotelTierAssessment } from "./hotelTiers";

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

export async function getNycHotels(tag?: HotelTag): Promise<Hotel[]> {
  const result = await database().query<{
    hotelId: string; hotelSourceId: string; hotelSource: string;
    img: string; title: string; area: string; rating: string | null;
    reviews: number | null; price: string; url: string; address: string | null;
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
      name AS title, area, address, rating, review_count AS reviews,
      COALESCE(price_text, 'See prices') AS price, booking_url AS url,
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
      AND ($2::text IS NULL OR EXISTS (SELECT 1 FROM hotel_tags ht JOIN tags t ON t.tag_id = ht.tag_id
        WHERE ht.hotel_id = hotels.id AND ht.tag = $2 AND t.is_active))
    ORDER BY sort_order, id LIMIT 50`, ["nyc", tag ?? null]);
  return result.rows.map(({ hotelSource, hotelTierModelVersion, hotelTierIsProvisional, hotelTierEvidenceCoverage, ...hotel }) => {
    // Saved assessments take precedence; scorecards cover rows awaiting migration.
    const tierAssessment = hotelTierModelVersion === "2" ? {
      hotelTierIsProvisional: hotelTierIsProvisional ?? undefined,
      hotelTierEvidenceCoverage: hotelTierEvidenceCoverage ?? undefined,
    } : getNycHotelTierAssessment(hotelSource, hotel.hotelSourceId);
    return {
      ...hotel,
      ...tierAssessment,
      rating: hotel.rating === null ? null : Number(hotel.rating),
    };
  });
}
