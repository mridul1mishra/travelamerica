import { handleGoogleHotelRating } from "@/app/lib/google-hotel-ratings";
import { getMemberSession } from "@/app/lib/auth";
import { handleMemberHotelRating } from "@/app/lib/member-hotel-access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 60;

export async function POST(request: Request): Promise<Response> {
  const mode = new URL(request.url).searchParams.get("mode") === "gallery" ? "gallery" : "lead";
  return handleMemberHotelRating(request, {
    getMember: getMemberSession,
    lookup: (verifiedRequest) => handleGoogleHotelRating(verifiedRequest, mode),
  });
}
