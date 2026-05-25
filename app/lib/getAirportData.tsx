// Static JSON imports per supported city.
// Previously these were fetched over HTTP from https://www.travelamerica.work/data/...
// which broke local dev (it pulled production data) and preview deploys (they fetched
// production too). Static imports make data part of the build, give us compile-time
// validation that the JSON parses, and remove 4 HTTP round-trips per city-page render.

// --- newyork ---
import nyAirport from "@/public/data/majorcities/newyork/airportsection.json";
import nyProperty from "@/public/data/majorcities/newyork/propertylisting.json";
import nyPlantrip from "@/public/data/majorcities/newyork/plantrip.json";
import nyPlantripContent from "@/public/data/majorcities/newyork/plantripcontent.json";

// --- losangeles ---
import laAirport from "@/public/data/majorcities/losangeles/airportsection.json";
import laProperty from "@/public/data/majorcities/losangeles/propertylisting.json";
import laPlantrip from "@/public/data/majorcities/losangeles/plantrip.json";
import laPlantripContent from "@/public/data/majorcities/losangeles/plantripcontent.json";

// --- lasvegas ---
import lvAirport from "@/public/data/majorcities/lasvegas/airportsection.json";
import lvProperty from "@/public/data/majorcities/lasvegas/propertylisting.json";
import lvPlantrip from "@/public/data/majorcities/lasvegas/plantrip.json";
import lvPlantripContent from "@/public/data/majorcities/lasvegas/plantripcontent.json";

// --- orlando ---
import orAirport from "@/public/data/majorcities/orlando/airportsection.json";
import orProperty from "@/public/data/majorcities/orlando/propertylisting.json";
import orPlantrip from "@/public/data/majorcities/orlando/plantrip.json";
import orPlantripContent from "@/public/data/majorcities/orlando/plantripcontent.json";

type CityKey = "newyork" | "losangeles" | "lasvegas" | "orlando";

// NOTE: typed loosely (any) to match the existing call-site shapes (cityui.tsx etc.).
// The original code did `await res.json()` which also returns `any`, so this preserves
// behavior. A proper restructure (Phase 3 in the deep review) should replace `any` with
// PropertyListingModel and friends, then thread the typed values all the way through.
const cityData: Record<
  CityKey,
  {
    airportsection: any;
    propertySections: any;
    personaContent: any;
    plantripcontentsections: any;
  }
> = {
  newyork: {
    airportsection: nyAirport,
    propertySections: nyProperty,
    personaContent: nyPlantrip,
    plantripcontentsections: nyPlantripContent.plantripcontentsection,
  },
  losangeles: {
    airportsection: laAirport,
    propertySections: laProperty,
    personaContent: laPlantrip,
    plantripcontentsections: laPlantripContent.plantripcontentsection,
  },
  lasvegas: {
    airportsection: lvAirport,
    propertySections: lvProperty,
    personaContent: lvPlantrip,
    plantripcontentsections: lvPlantripContent.plantripcontentsection,
  },
  orlando: {
    airportsection: orAirport,
    propertySections: orProperty,
    personaContent: orPlantrip,
    plantripcontentsections: orPlantripContent.plantripcontentsection,
  },
};

export async function getAirportData(city: string) {
  const data = cityData[city as CityKey];
  if (!data) {
    // Fall back to newyork rather than throwing — keeps the page renderable
    // for unknown city slugs while still surfacing the issue in logs.
    console.warn(`[getAirportData] Unknown city "${city}", falling back to newyork`);
    return cityData.newyork;
  }
  return data;
}
