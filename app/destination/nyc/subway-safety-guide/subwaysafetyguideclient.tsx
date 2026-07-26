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
        official_sources,
        safety_data,
        search_intent_sections,
        route_examples,
        safety_checklist_table
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

      <SectionWrapper id="subway-safety-quick-checklist">
        <EmailSignup
          source="nyc-subway-safety-hero-checklist"
          city="NYC"
          headline="Get the NYC subway safety checklist"
          subheadline="Get night ride tips, solo travel defaults, scam warnings, emergency steps, and station checks in one quick PDF."
          buttonLabel="Send me the checklist"
          offerName="NYC subway safety checklist"
          successMessage="Your NYC subway safety checklist is on its way."
        />
      </SectionWrapper>

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

      <SectionWrapper id="what-the-data-says">
        <div className={styles.tablePanel}>
          <p className={styles.kicker}>What the data says</p>
          <h2 className={styles.panelTitle}>Is the NYC Subway Safe? The Numbers in Plain English</h2>
          <p className={styles.panelIntro}>
            Subway safety feels easier to judge when you separate total rider volume from the small number of serious incidents.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>What it means</th>
                  <th>Traveler takeaway</th>
                </tr>
              </thead>
              <tbody>
                {safety_data.map((row) => (
                  <tr key={row.metric}>
                    <td>{row.metric}</td>
                    <td>{row.detail}</td>
                    <td>{row.traveler_takeaway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="subway-safety-answers">
        <div className={styles.intentStack}>
          {search_intent_sections.map((section) => (
            <article className={styles.intentBlock} key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
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
      <SectionWrapper id="route-examples">
        <div className={styles.routePanel}>
          <p className={styles.kicker}>Station and route examples</p>
          <h2 className={styles.panelTitle}>Safer Subway Choices for Common Tourist Routes</h2>
          <div className={styles.routeGrid}>
            {route_examples.map((example) => (
              <article className={styles.routeCard} key={example.route}>
                <h3>{example.route}</h3>
                <p><strong>Best for:</strong> {example.best_for}</p>
                <p><strong>Safety note:</strong> {example.safety_note}</p>
                <p><strong>Watch out:</strong> {example.watch_out}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper id="faq">
      <FAQ items={faq} />
      </SectionWrapper>
      <SectionWrapper id="checklist">
      <Checklist data={checklist} />
      </SectionWrapper>
      <SectionWrapper id="quick-safety-checklist">
        <div className={styles.tablePanel}>
          <p className={styles.kicker}>Quick checklist</p>
          <h2 className={styles.panelTitle}>NYC Subway Safety Checklist by Situation</h2>
          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Situation</th>
                  <th>Do this</th>
                  <th>Avoid this</th>
                </tr>
              </thead>
              <tbody>
                {safety_checklist_table.map((row) => (
                  <tr key={row.situation}>
                    <td>{row.situation}</td>
                    <td>{row.do_this}</td>
                    <td>{row.avoid_this}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper id="subway-safety-checklist">
        <EmailSignup
          source="nyc-subway-safety-checklist"
          city="NYC"
          headline="Get the NYC subway safety checklist"
          subheadline="Get night ride tips, solo travel defaults, scam warnings, emergency steps, and station checks in one quick PDF."
          buttonLabel="Send me the checklist"
          offerName="NYC subway safety checklist"
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
          <strong style={{ color: "#111827" }}>About the author.</strong> <a href="/about" style={{ color: "#1d4ed8", textDecoration: "none" }}>Mridul Mishra</a> has traveled to New York City multiple times and personally tested every subway route referenced in this guide. He writes the NYC travel guides for Travels Americas. Every safety claim here is checked against primary sources — current NYPD crime data and MTA rider surveys — not online rumor or recycled blog posts.
        </p>
      </section>
      </div>

      <BookingCTA variant="full" text="Plan and book your NYC trip" href="/destination/nyc/booking?tab=hotels&from=subway-safety-guide" label="Book your trip" />
      <Footer />

    </>
    );
}
