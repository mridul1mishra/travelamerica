"use client"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import type { SubwaySafetyGuide } from "./components/types-subwaySafetyGuide";
import subwaySafetyGuideData from "./components/subway-safety-guide.json";
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
import EmailSignup from "@/app/components/destination/EmailSignup/EmailSignup";

const data = subwaySafetyGuideData as unknown as SubwaySafetyGuide;

export default function SubwaySafetyGuidePage(){
    const {
        hero,
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
        official_sources
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

      <SectionWrapper id="official-sources">
        <div className={styles.sourcePanel}>
          <div>
            <p className={styles.kicker}>Official sources</p>
            <h2 className={styles.panelTitle}>What the latest subway safety guidance says</h2>
            <p className={styles.panelIntro}>
              This guide prioritizes official MTA and NYPD references before turning the data into practical tourist decisions.
            </p>
          </div>
          <div className={styles.sourceGrid}>
            {official_sources.map((source) => (
              <a
                className={styles.sourceCard}
                href={source.url}
                key={source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{source.label}</span>
                <p>{source.note}</p>
              </a>
            ))}
          </div>
        </div>
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
      <SectionWrapper id="behavioral-cues">
        <div style={{ width: "min(1100px, calc(100% - 2rem))", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 0.75rem", color: "#111827" }}>Reading the platform: green flags vs. red flags</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            <div style={{ padding: "1rem 1.25rem", border: "1px solid #bbf7d0", borderRadius: "8px", background: "#f0fdf4" }}>
              <h3 style={{ margin: "0 0 0.5rem", color: "#15803d", fontSize: "1rem" }}>Green flags — you&apos;re probably fine</h3>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "#374151", lineHeight: 1.7 }}>
                {behavioral_cues.green_flags.map((f) => (<li key={f}>{f}</li>))}
              </ul>
            </div>
            <div style={{ padding: "1rem 1.25rem", border: "1px solid #fecaca", borderRadius: "8px", background: "#fef2f2" }}>
              <h3 style={{ margin: "0 0 0.5rem", color: "#b91c1c", fontSize: "1rem" }}>Red flags — move or step off</h3>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "#374151", lineHeight: 1.7 }}>
                {behavioral_cues.red_flags.map((f) => (<li key={f}>{f}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper id="neighborhoods">
      <p style={{ width: "min(1100px, calc(100% - 2rem))", margin: "0 auto 0.5rem", fontSize: "0.85rem", color: "#6b7280" }}>
        These notes reflect typical station foot traffic, layout, and time-of-day patterns from rider experience — general guidance, not official safety ratings.
      </p>
      <NeighborhoodNotes items={neighborhood_notes} />
      </SectionWrapper>
      <SectionWrapper id="faq">
      <FAQ items={faq} />
      </SectionWrapper>
      <SectionWrapper id="checklist">
      <Checklist data={checklist} />
      </SectionWrapper>
      <SectionWrapper id="subway-safety-checklist">
        <EmailSignup
          source="nyc-subway-safety-checklist"
          city="NYC"
          headline="Get the NYC subway safety checklist"
          subheadline="A quick PDF for night rides, solo travel, scams, emergency steps, and station checks."
          successMessage="Your NYC subway safety checklist is on its way."
        />
      </SectionWrapper>
      <SectionWrapper id="emergency">
      <EmergencyPlaybook data={emergency_playbook} />
      </SectionWrapper>
      <SectionWrapper id="tools">
      <ToolsAndApps items={tools_and_apps} />
      </SectionWrapper>
      <SectionWrapper id="etiquette">
      <Etiquette data={etiquette} />
      </SectionWrapper>
      <SectionWrapper id="links">
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
