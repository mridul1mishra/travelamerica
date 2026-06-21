"use client"
import Header from "./components/Header/Header";
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
import Footer from "./components/Footer/Footer";
import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import WhyTrustThisGuide from "./components/whytrustthisguide/whytrustthisguide";
import BookingCTA from "./components/BookingCTA/BookingCTA";


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

        <Header />
        <BookingCTA variant="slim" text="Book your New York trip →" href="/destination/nyc/booking?tab=hotels&from=subway-safety-guide" label="Book your trip" />
        <div className={styles.pageWrapper}>
      <section id="banner">
        <Hero {...hero} />
      </section>
      <div style={{ width: "min(1100px, calc(100% - 2rem))", margin: "0.5rem auto 0", fontSize: "0.85rem", color: "#475569" }}>
        By <a href="/about" style={{ color: "#1d4ed8", fontWeight: 600, textDecoration: "none" }}>Mridul Mishra</a> · Updated June 2026 · Fact-checked against NYPD &amp; MTA data
      </div>

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
      <section aria-label="About the author" style={{ width: "min(1100px, calc(100% - 2rem))", margin: "1rem auto", padding: "1.25rem", border: "1px solid #e5e7eb", borderRadius: "8px", background: "#ffffff" }}>
        <p style={{ margin: 0, color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
          <strong style={{ color: "#111827" }}>About the author.</strong> <a href="/about" style={{ color: "#1d4ed8", textDecoration: "none" }}>Mridul Mishra</a> has visited New York City and writes the NYC travel guides for Travels Americas. Every safety claim here is checked against primary sources — current NYPD crime data and MTA rider surveys — not online rumor or recycled blog posts.
        </p>
      </section>
      </div>

      <BookingCTA variant="full" text="Plan and book your NYC trip" href="/destination/nyc/booking?tab=hotels&from=subway-safety-guide" label="Book your trip" />
      <Footer />

    </>
    );
}