import { permanentRedirect } from "next/navigation";
export default async function BookingPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
 const params = await searchParams;
 const routes: Record<string, string> = { hotels: "hotel", flights: "flight", activities: "tours-and-tickets" };
 const tab = typeof params.tab === "string" ? params.tab.toLowerCase() : "flights";
 const query = new URLSearchParams();
 for (const [key, value] of Object.entries(params)) { if (key !== "tab" && value !== undefined) for (const entry of Array.isArray(value) ? value : [value]) query.append(key, entry); }
 permanentRedirect(`/destination/nyc/${routes[tab] ?? "flight"}${query.size ? `?${query}` : ""}`);
}
