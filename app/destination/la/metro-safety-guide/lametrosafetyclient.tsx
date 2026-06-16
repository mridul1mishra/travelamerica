"use client"
import Header from "@/app/components/destination/header/header";
import MetroBanner from "./components/MetroBanner/MetroBanner";
import type { MetroSafetyGuide } from "./components/types-metroSafetyGuide";
const data: MetroSafetyGuide = require("./components/metro-safety-guide.json");
import styles from "./MetroSafetyGuide.module.css";
import CorePrinciples from "./components/coreprinciples/coreprinciples";
import MetroBasics from "./components/metrobasics/MetroBasics";
import PersonaBlock from "./components/PersonaBlock/PersonalBlock";
import ScenarioList from "./components/ScenarioList/ScenarioList";
import NeighborhoodNotes from "./components/neighborhood/neighborhood";
import FAQ from "./components/FAQ/FAQ";
import Checklist from "./components/checklist/checklist";
import EmergencyPlaybook from "./components/EmergencyPlaybook/EmergencyPlaybook";
import ToolsAndApps from "./components/Toolsandapps/Toolsandapps";
import Etiquette from "./components/Etiquette/Etiquette";
import InternalLinks from "./components/Interlink/Interlink";
import Footer from "../../../../app/components/Header/Footer/footer";
import WhyTrustThisGuide from "./components/whytrustthisguide/whytrustthisguide";
import BookingCTA from './components/BookingCTA/BookingCTA';


export default function LAMetroSafetyClient(){
    const {
        hero,
        why_trust_this_guide,
        core_principles,
        metro_basics,
        personas,
        scenarios,
        neighborhood_notes,
        tools_and_apps,
        behavioral_cues,
        emergency_playbook,
        etiquette,
        checklist,
        faq,
        internal_links,
        footer_cta
    } = data;
    return(
        <>

        <Header />
        <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=flights&from=metro-safety-guide" label="Book your trip" />
        <div className={styles.pageWrapper}>
      <MetroBanner hero={hero} />

      <WhyTrustThisGuide data={data.why_trust_this_guide} />

      <CorePrinciples items={core_principles} />
      <MetroBasics data={metro_basics} />
      <PersonaBlock personas={personas} />
      <ScenarioList scenarios={scenarios} />
      <NeighborhoodNotes items={neighborhood_notes} />
      <FAQ items={faq} />
      <Checklist data={checklist} />
      <EmergencyPlaybook data={emergency_playbook} />
      <ToolsAndApps items={tools_and_apps} />
      <Etiquette data={etiquette} />
      <InternalLinks items={internal_links} />
      </div>

      <BookingCTA variant="full" text="Plan and book your LA trip" href="/destination/la/bookings?tab=flights&from=metro-safety-guide" label="Book your trip" />
      <Footer />

    </>
    );
}
