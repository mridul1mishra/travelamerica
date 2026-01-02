"use client"
import Header from "@/app/components/destination/header/header";
import Hero from "./components/Hero/Hero";
import type { SubwaySafetyGuide } from "./components/types-subwaySafetyGuide";
const data: SubwaySafetyGuide = require("./components/subway-safety-guide.json");
import styles from "./SubwaySafetyGuide.module.css";
import CorePrinciples from "./components/coreprinciples/coreprinciples";
import SubwayBasics from "./components/subwaybasics/SubwayBasics";
import PersonaBlock from "./components/PersonaBlock/PersonalBlock";
import ScenarioList from "./components/ScenarioList/ScenarioList";
import NeighborhoodNotes from "./components/neighborhood/neighborhood";
import FAQ from "./components/FAQ/FAQ";
import Checklist from "./components/checklist/checklist";
import EmergencyPlaybook from "./components/EmergencyPlaybook/EmergencyPlaybook";
import ToolsAndApps from "./components/Toolsandapps/Toolsandapps";
import Etiquette from "./components/Etiquette/Etiquette";
import InternalLinks from "./components/Interlink/Interlink";
import Footer from "@/app/components/Header/Footer/footer";
import SectionWrapper from "./Sectionwrapper";
import WhyTrustThisGuide from "./components/whytrustthisguide/whytrustthisguide";


export default function SubwaySafetyGuidePage(){
    const { 
        hero, 
        why_trust_this_guide, 
        core_principles, 
        subway_basics, 
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
    <main className={styles.pageWrapper}>
        <Header />
        
        <Hero {...hero} />
        
      <SectionWrapper id="why-trust-this-guide">
        <WhyTrustThisGuide data={data.why_trust_this_guide} />
      </SectionWrapper>

      <SectionWrapper id="core-principles">
        <CorePrinciples items={core_principles} />
      </SectionWrapper>
      <SectionWrapper id="subway_basics">
      <SubwayBasics data={subway_basics} />
      </SectionWrapper>
      <SectionWrapper id="personas">
      <PersonaBlock personas={personas} />
      </SectionWrapper>
      <SectionWrapper id="scenarios">
      <ScenarioList scenarios={scenarios} />
      </SectionWrapper>
      <SectionWrapper id="scenarios">
      <NeighborhoodNotes items={neighborhood_notes} />
      </SectionWrapper>
      <SectionWrapper id="scenarios">
      <FAQ items={faq} />
      </SectionWrapper>
      <SectionWrapper id="scenarios">
      <Checklist data={checklist} />
      </SectionWrapper>
      <SectionWrapper id="scenarios">
      <EmergencyPlaybook data={emergency_playbook} />
      </SectionWrapper>
      <SectionWrapper id="scenarios">
      <ToolsAndApps items={tools_and_apps} />
      </SectionWrapper>
      <SectionWrapper id="scenarios">
      <Etiquette data={etiquette} />
      </SectionWrapper>
      <SectionWrapper id="scenarios">
      <InternalLinks items={internal_links} />
      </SectionWrapper>
      </main>
      
      <Footer />
      
    </>
    );
}