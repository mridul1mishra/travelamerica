import { Pool } from "pg";
import type { Hotel } from "@/app/destination/la/bookings/components/BookingClient/BookingClient";

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

export async function getNycHotels(): Promise<Hotel[]> {
  const result = await database().query<{
    img: string; title: string; area: string; rating: string | null;
    reviews: number | null; price: string; url: string; address: string | null;
  }>(`SELECT COALESCE(image_url, '/destination/nyc-neighborhoods.png') AS img,
      name AS title, area, address, rating, review_count AS reviews,
      COALESCE(price_text, 'See prices') AS price, booking_url AS url
    FROM hotels WHERE city_slug = $1 AND active = TRUE
    ORDER BY sort_order, id LIMIT 50`, ["nyc"]);
  return result.rows.map((hotel) => ({ ...hotel, rating: hotel.rating === null ? null : Number(hotel.rating) }));
}
