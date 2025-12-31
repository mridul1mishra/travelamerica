"use client"


import Header from '@/app/components/destination/header/header';
import SafetyHero from './components/herobanner/safetyhero';
import Footer from '@/app/components/Header/Footer/footer';
import ScenarioCard from './components/scenariosection/scenariocard';
import ScenarioSection from './components/scenariosection/scenariosection';
import NeighborhoodSafetySection from './components/neighborhoodsection/neighborhoodsafetysection';
import { WhyTrustThisGuide } from '@/app/components/destination/whytrustitem/whytrustthisguide';
import SafetyCardGrid from './components/safetycardgrid/safetycardgrid';
import SafetyTipsGrid from './components/SafetyTips/safetytipcardgrid';
import FAQAccordion from './components/FAQAccordian/faqsection';
import faqData from "./components/FAQAccordian/FAQACcordina.json";
import styles from './nycsafetyguide.module.css';
import LinkHubGrid from './components/linkhubgrid/LinkHubGrid';
import InfoSection from './components/infosection/infosection';
import sectionsData from "./components/infosection/infosection.json";
import EmergencyContactBlock from './components/emergencycontactblock/EmergencyContactBlock';

export default function NYCSafetyGuideClient() {
  return (
    <>
        <Header />
        <div className={styles.container}>
        <SafetyHero />
        <InfoSection sections={sectionsData.sections}  />
        <ScenarioSection />
        <SafetyTipsGrid />        
        <NeighborhoodSafetySection />        
        <EmergencyContactBlock />
        <FAQAccordion faqs={faqData}/>
        <LinkHubGrid />
        
        <WhyTrustThisGuide />
        </div>        
        <Footer />
        
    </>
  );
}
