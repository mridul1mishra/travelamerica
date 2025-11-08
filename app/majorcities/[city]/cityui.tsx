'use client';

import Airportsection from "@/app/components/majorcities/airportsection/airportsection";
import Propertylisting from "@/app/components/majorcities/flightsection/propertylisting";
import Plantripcontent from "@/app/components/majorcities/plantripcontent/plantripcontent";
import Plantripsection from "@/app/components/majorcities/plantripsection/plantripsection";
import PropertyListingModel, { Section } from "../../models/propertylisting";
import { PlantripcontentSection, PlantripcontentJson } from "../../models/plantripcontent";
import React, { useState } from "react";
type PlacevisitProps = {
  city: string; // e.g. "Newyork", "London"
  airportsection: any;
  propertySections: PropertyListingModel;
  personaContent: any;
  plantripcontentsections: any;
};
export default function CityUIPage({ airportsection, propertySections,personaContent, plantripcontentsections}: PlacevisitProps){
    
    
    const [activeSection, setActiveSection] = useState<number | null>(1);
    const [activeGroup, setActiveGroup] = useState<number | null>(1);
    


    return (
        <>
        <Airportsection content={airportsection} onSelect={setActiveSection} />
        <Propertylisting content={propertySections.sections} active={activeSection} />
        <Plantripsection content={personaContent} onSelect={setActiveGroup} />
        <Plantripcontent content={plantripcontentsections} active={activeGroup}/>
        </>
    );
}