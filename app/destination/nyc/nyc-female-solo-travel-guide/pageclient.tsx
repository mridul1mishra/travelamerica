"use client"
import Header from "@/app/components/destination/header/header";
import Hero from "./components/Hero";
import SafetyOverview from "./components/SafetyOverview";
/*import BestNeighborhoods from "./components/BestNeighborhoods";
import SubwaySafety from "./components/SubwaySafety";
import NightSafety from "./components/NightSafety";
import HotelChecklist from "./components/HotelChecklist";
import Situations from "./components/Situations";
import Itinerary from "./components/Itinerary";
import Packing from "./components/Packing";
import Apps from "./components/Apps";
import Scams from "./components/Scams";
import MeetingPeople from "./components/MeetingPeople";
import FinalChecklist from "./components/FinalChecklist";*/
import "./page.css";

export default function FemaleSoloTravelGuide() {
  return (
    <main className="page-wrapper">
      <Header />
      <Hero />

      <section className="content-section">
        <SafetyOverview />
      </section>

      {/* 
      <section className="content-section">
        <BestNeighborhoods />
      </section>

      <section className="content-section">
        <SubwaySafety />
      </section>

      <section className="content-section">
        <NightSafety />
      </section>

      <section className="content-section">
        <HotelChecklist />
      </section>

      <section className="content-section">
        <Situations />
      </section>

      <section className="content-section">
        <Itinerary />
      </section>

      <section className="content-section">
        <Packing />
      </section>

      <section className="content-section">
        <Apps />
      </section>

      <section className="content-section">
        <Scams />
      </section>

      <section className="content-section">
        <MeetingPeople />
      </section>

      <section className="content-section">
        <FinalChecklist />
      </section> */}
    </main>
  );
}
