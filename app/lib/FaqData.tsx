// Static JSON imports — Next handles JSON natively (tsconfig has resolveJsonModule: true).
// Previously these were fetched over HTTP from https://www.travelamerica.work/data/faq/*.json,
// which meant SSR made outbound requests to its own production URL — broke local dev and
// previews. Importing makes the data part of the bundle and avoids the round-trip.
import travelHubFaq from "@/public/data/faq/travelhubfaq.json";
import itineraryFaq from "@/public/data/faq/itineraryfaq.json";

export async function getFaq() {
  return { faqTravelHubData: travelHubFaq };
}

export async function getFaqItinerary() {
  return { faqTravelHubData: itineraryFaq };
}
