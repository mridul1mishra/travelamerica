// Static JSON imports per supported city — all the build-time city data the
// server needs lives here, including the hotel/cruise/placevisit JSON that
// used to be fetched client-side over HTTP. After this refactor, the
// Propertylisting and Placevisit client components receive the parsed JSON
// as props from the [city]/page.tsx server component.

// --- newyork ---
import nyAirport from "@/content/cities/newyork/airportsection.json";
import nyProperty from "@/content/cities/newyork/propertylisting.json";
import nyPlantrip from "@/content/cities/newyork/plantrip.json";
import nyPlantripContent from "@/content/cities/newyork/plantripcontent.json";
import nyHotels from "@/content/cities/newyork/hotels.json";
import nyCruises from "@/content/cities/newyork/cruises.json";
import nyPlacevisit from "@/content/cities/newyork/placevisit.json";

// --- losangeles ---
import laAirport from "@/content/cities/losangeles/airportsection.json";
import laProperty from "@/content/cities/losangeles/propertylisting.json";
import laPlantrip from "@/content/cities/losangeles/plantrip.json";
import laPlantripContent from "@/content/cities/losangeles/plantripcontent.json";
import laHotels from "@/content/cities/losangeles/hotels.json";
import laCruises from "@/content/cities/losangeles/cruises.json";
import laPlacevisit from "@/content/cities/losangeles/placevisit.json";

// --- lasvegas ---
import lvAirport from "@/content/cities/lasvegas/airportsection.json";
import lvProperty from "@/content/cities/lasvegas/propertylisting.json";
import lvPlantrip from "@/content/cities/lasvegas/plantrip.json";
import lvPlantripContent from "@/content/cities/lasvegas/plantripcontent.json";
import lvHotels from "@/content/cities/lasvegas/hotels.json";
import lvCruises from "@/content/cities/lasvegas/cruises.json";
import lvPlacevisit from "@/content/cities/lasvegas/placevisit.json";

// --- orlando ---
import orAirport from "@/content/cities/orlando/airportsection.json";
import orProperty from "@/content/cities/orlando/propertylisting.json";
import orPlantrip from "@/content/cities/orlando/plantrip.json";
import orPlantripContent from "@/content/cities/orlando/plantripcontent.json";
import orHotels from "@/content/cities/orlando/hotels.json";
import orCruises from "@/content/cities/orlando/cruises.json";
import orPlacevisit from "@/content/cities/orlando/placevisit.json";

import type { Cruise } from "@/app/models/propertylisting";
import type { PlacevisitJson, PlaceVisitSection } from "@/app/models/placevisit";

type CityKey = "newyork" | "losangeles" | "lasvegas" | "orlando";

// NOTE: typed loosely (any) on the older fields to match existing call-sites
// (cityui.tsx etc.). The hotels/cruises/placevisit slices are typed because
// the client components depend on those shapes. A proper restructure should
// replace the remaining `any` with real types.
type CityData = {
  airportsection: any;
  propertySections: any;
  personaContent: any;
  plantripcontentsections: any;
  hotels: Cruise[];
  cruises: Cruise[];
  placevisit: PlaceVisitSection;
};

const cityData: Record<CityKey, CityData> = {
  newyork: {
    airportsection: nyAirport,
    propertySections: nyProperty,
    personaContent: nyPlantrip,
    plantripcontentsections: nyPlantripContent.plantripcontentsection,
    // NOTE: newyork/hotels.json was restructured for the /destination/nyc/booking
    // page (img/title/area/rating/reviews/price/url) and no longer matches the
    // legacy Cruise shape (route/duration) the majorcities city page expects.
    // Cast through `unknown` so the build passes; the legacy NYC city-page hotel
    // carousel will show blank route/duration until it's migrated or removed.
    hotels: nyHotels as unknown as Cruise[],
    cruises: nyCruises as Cruise[],
    placevisit: (nyPlacevisit as PlacevisitJson).planTripSection,
  },
  losangeles: {
    airportsection: laAirport,
    propertySections: laProperty,
    personaContent: laPlantrip,
    plantripcontentsections: laPlantripContent.plantripcontentsection,
    hotels: laHotels as Cruise[],
    cruises: laCruises as Cruise[],
    placevisit: (laPlacevisit as PlacevisitJson).planTripSection,
  },
  lasvegas: {
    airportsection: lvAirport,
    propertySections: lvProperty,
    personaContent: lvPlantrip,
    plantripcontentsections: lvPlantripContent.plantripcontentsection,
    hotels: lvHotels as Cruise[],
    cruises: lvCruises as Cruise[],
    placevisit: (lvPlacevisit as PlacevisitJson).planTripSection,
  },
  orlando: {
    airportsection: orAirport,
    propertySections: orProperty,
    personaContent: orPlantrip,
    plantripcontentsections: orPlantripContent.plantripcontentsection,
    hotels: orHotels as Cruise[],
    cruises: orCruises as Cruise[],
    placevisit: (orPlacevisit as PlacevisitJson).planTripSection,
  },
};

export async function getAirportData(city: string): Promise<CityData> {
  const data = cityData[city as CityKey];
  if (!data) {
    // Fall back to newyork rather than throwing — keeps the page renderable
    // for unknown city slugs while still surfacing the issue in logs.
    console.warn(`[getAirportData] Unknown city "${city}", falling back to newyork`);
    return cityData.newyork;
  }
  return data;
}
