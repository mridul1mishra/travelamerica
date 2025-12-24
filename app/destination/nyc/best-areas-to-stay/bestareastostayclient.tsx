"use client"
import Banner from '@/app/components/destination/banner/banner';
import styles from './bestareatostay.module.css';
import Footer from '@/app/components/Header/Footer/footer';
import Header from '@/app/components/destination/header/header';
import QuickSummaryGrid from '@/app/components/destination/quicksummarygrid/quicksummarygrid';
import DecisionFramework from '@/app/components/destination/decisionframework/decisionframework';
import NeighborhoodRankingCards from '@/app/components/destination/neighborhoodrankingcard/neighborhoodrankingcard';
import MapSection from '@/app/components/destination/wherenottostay/wherenottostay';
import WhereNotToStay from '@/app/components/destination/wherenottostay/wherenottostay';
import FAQSection from '@/app/components/destination/faqsection/faqsection';

export default function BestAreatoStayClient() {
    return(
        <>
            <Header />
            <Banner />
            <QuickSummaryGrid />
            <DecisionFramework />
            <NeighborhoodRankingCards />
            <WhereNotToStay />
            <FAQSection />
            <Footer />
        </>

    );
    
}