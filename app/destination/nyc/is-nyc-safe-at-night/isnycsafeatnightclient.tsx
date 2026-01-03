import fs from "fs";
import path from "path";

import HeroSafety from "./components/hero/hero";
import SafetyMeter from "./components/SafetyMeter/SafetyMeter";
{/*import NeighborhoodSafetyGrid from "@/components/NeighborhoodSafetyGrid/NeighborhoodSafetyGrid";
import ScenarioCards from "@/components/ScenarioCards/ScenarioCards";
import PersonaSafetyBlocks from "@/components/PersonaSafetyBlocks/PersonaSafetyBlocks";
import CorePrinciples from "@/components/CorePrinciples/CorePrinciples";
import TransitSafety from "@/components/TransitSafety/TransitSafety";
import NeighborhoodCards from "@/components/NeighborhoodCards/NeighborhoodCards";
import EmergencyBlock from "@/components/EmergencyBlock/EmergencyBlock";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";
import InterlinkingGrid from "@/components/InterlinkingGrid/InterlinkingGrid";
import TrustBlock from "@/components/TrustBlock/TrustBlock";*/}

import type { IsNycSafeAtNightPage } from "./components/typesafeatnight";

export default function Page() {
    
  // Load JSON content
  const filePath = path.join(process.cwd(), "app/destination/nyc/is-nyc-safe-at-night/is-nyc-safe-at-night.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data: IsNycSafeAtNightPage = JSON.parse(jsonData);
  
  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSafety {...data.heroSafety} />

      {/* 2. Safety Verdict Snapshot */}
      <SafetyMeter {...data.safetyMeter} />
      

      {/* 3. Neighborhood Safety Grid */}
   {/*   <NeighborhoodSafetyGrid neighborhoods={data.neighborhoodSafetyGrid} />*/}

      {/* 4. Night Scenarios */}
      {/*<ScenarioCards scenarios={data.scenarioCards} />*/}

      {/* 5. Persona Safety Blocks */}
      {/*<PersonaSafetyBlocks personas={data.personaSafetyBlocks} />*/}

      {/* 6. Core Safety Principles */}
      {/*<CorePrinciples principles={data.corePrinciples} />*/}

      {/* 7. Transit Safety */}
      {/*<TransitSafety {...data.transitSafety} />*/}

      {/* 8. Neighborhood Deep Dives */}
      {/*<NeighborhoodCards neighborhoods={data.neighborhoodCards} />*/}

      {/* 9. Emergency Resources */}
      {/*<EmergencyBlock {...data.emergencyBlock} />*/}

      {/* 10. FAQ */}
      {/*<FAQAccordion faqs={data.faq} />*/}

      {/* 11. Internal Linking */}
      {/*<InterlinkingGrid links={data.interlinkingGrid} />*/}

      {/* 12. Trust Block */}
      {/*<TrustBlock {...data.trustBlock} />*/}
    </main>
  );
}
