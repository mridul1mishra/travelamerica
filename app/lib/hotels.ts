import { Pool } from "pg";
import type { Hotel } from "@/app/destination/la/bookings/components/BookingClient/BookingClient";
import type { HotelTag } from "./hotelTags";

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
    img: string; title: string; area: string; rating: string | null;
    reviews: number | null; price: string; url: string; address: string | null;
    neighborhood: string | null; tags: HotelTag[];
    city: string; hotelTier: "Budget" | "Premium" | "Luxury" | null;
    firstTimeVisitor: boolean | null; safeArea: boolean | null;
    systemMetadata: NonNullable<Hotel["systemMetadata"]>;
  }>(`SELECT COALESCE(image_url, '/destination/nyc-neighborhoods.png') AS img,
      name AS title, area, address, rating, review_count AS reviews,
      COALESCE(price_text, 'See prices') AS price, booking_url AS url, neighborhood,
      city_slug AS city, hotel_tier AS "hotelTier",
      first_time_visitor AS "firstTimeVisitor", safe_area AS "safeArea",
      (SELECT jsonb_build_object(
        'destination', m.destination, 'displayOrder', m.display_order,
        'isActive', m.is_active, 'featuredHotel', m.featured_hotel,
        'lastUpdated', m.last_updated, 'affiliateEnabled', m.affiliate_enabled,
        'hasImages', m.has_images, 'hasDetailPage', m.has_detail_page)
        FROM hotel_system_metadata m WHERE m.id = hotels.id) AS "systemMetadata",
      ARRAY(SELECT tag FROM hotel_tags WHERE hotel_id = hotels.id ORDER BY tag) AS tags
    FROM hotels WHERE city_slug = $1 AND active = TRUE
      AND ($2::text IS NULL OR EXISTS (SELECT 1 FROM hotel_tags WHERE hotel_id = hotels.id AND tag = $2))
    ORDER BY sort_order, id LIMIT 50`, ["nyc", tag ?? null]);
  return result.rows.map((hotel) => ({ ...hotel, rating: hotel.rating === null ? null : Number(hotel.rating) }));
}
