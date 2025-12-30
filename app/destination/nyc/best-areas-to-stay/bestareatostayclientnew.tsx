"use client"
import Banner from '@/app/components/destination/bestareatostay/Banner/Banner';
import QuickSummary from '@/app/components/destination/bestareatostay/QuickSummary/quicksummary';
import SectionSafestNeighborhoods from '@/app/components/destination/bestareatostay/safestneighborhood/safestneighborhood';
import SoloTripIntro from '@/app/components/destination/bestareatostay/solotripintro/solotripintro';
import Header from '@/app/components/destination/header/header';
import faqData from "@/app/data/destination/bestplacetostay/faqsection.json";
import guideContent from '@/app/data/destination/bestplacetostay/guideContent.json';
import NeighborhoodRankingCards from '@/app/components/destination/neighborhoodrankingcard/neighborhoodrankingcard';
import Footer from '@/app/components/Header/Footer/footer';

export default function Home() {
  return (
    <>
    <Header />
      <Banner content={guideContent.banner} />
      <SoloTripIntro />
      <SectionSafestNeighborhoods />
      <NeighborhoodRankingCards />
      <FAQAccordion faqs={faqData} />
      <Footer />
    </>
  );
}
