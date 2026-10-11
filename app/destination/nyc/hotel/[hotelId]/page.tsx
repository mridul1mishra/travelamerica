import HotelDetailPage, { hotelDetailMetadata } from "@/app/components/hotels/HotelDetailPage";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ hotelId: string }> };
export function generateMetadata({ params }: Props) { return hotelDetailMetadata("nyc", params); }
export default function Page({ params }: Props) { return <HotelDetailPage city="nyc" params={params} />; }
