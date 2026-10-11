import scorecards from "@/content/cities/newyork/hotel-tier-scorecards.json";
import type { Hotel, HotelTier } from "@/app/destination/la/bookings/components/BookingClient/BookingClient";

const assessmentsBySourceId = new Map(scorecards.hotels.map((hotel) => [hotel.sourceId, hotel]));

function isHotelTier(value: string | null): value is HotelTier {
  return value === "Standard" || value === "Premium" || value === "Luxury";
}

// Provider IDs survive database imports; names and local row IDs may change.
export function getNycHotelTierAssessment(source: string, sourceId: string): Pick<Hotel,
  "hotelTier" | "hotelTierIsProvisional" | "hotelTierEvidenceCoverage"
> | undefined {
  if (source !== "travel-advisor") return undefined;
  const assessment = assessmentsBySourceId.get(sourceId);
  if (!assessment || !isHotelTier(assessment.tier)) return undefined;
  return {
    hotelTier: assessment.tier,
    hotelTierIsProvisional: assessment.isProvisional,
    hotelTierEvidenceCoverage: assessment.evidenceCoverage,
  };
}
