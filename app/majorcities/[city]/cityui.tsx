"use client";

import Airportsection from "@/app/components/majorcities/airportsection/airportsection";
import Propertylisting from "@/app/components/majorcities/flightsection/propertylisting";
import Plantripcontent from "@/app/components/majorcities/plantripcontent/plantripcontent";
import Plantripsection from "@/app/components/majorcities/plantripsection/plantripsection";
import PropertyListingModel from "../../models/propertylisting";
import type { Cruise } from "../../models/propertylisting";
import { useState } from "react";

type CityUIProps = {
  city: string;
  airportsection: any;
  propertySections: PropertyListingModel;
  personaContent: any;
  plantripcontentsections: any;
  hotels: Cruise[];
  cruises: Cruise[];
};

export default function CityUIPage({
  airportsection,
  propertySections,
  personaContent,
  plantripcontentsections,
  hotels,
  cruises,
}: CityUIProps) {
  const [activeSection, setActiveSection] = useState<number | null>(1);
  const [activeGroup, setActiveGroup] = useState<number | null>(1);
  return (
    <>
      <Airportsection content={airportsection} onSelect={setActiveSection} />
      <Propertylisting
        content={propertySections.sections}
        active={activeSection}
        hotels={hotels}
        cruises={cruises}
      />
      <Plantripsection content={personaContent} onSelect={setActiveGroup} />
      <Plantripcontent content={plantripcontentsections} active={activeGroup}/>
    </>
  );
}
