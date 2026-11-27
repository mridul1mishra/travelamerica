import HotelDetailPage, { hotelDetailMetadata } from "@/app/components/hotels/HotelDetailPage";

// Cache each hotel page for a day so crawlers don't wake the database on every visit.
export const revalidate = 86400;
type Props = { params: Promise<{ hotelId: string }> };
export function generateMetadata({ params }: Props) { return hotelDetailMetadata("nyc", params); }
export default function Page({ params }: Props) { return <HotelDetailPage city="nyc" params={params} />; }
