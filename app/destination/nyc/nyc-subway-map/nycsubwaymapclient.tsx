"use client"
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import HeroBanner from "./components/herobanner/herobanner";
import IconCardGrid from "./components/naviagtioncard/navigationcard"
import type {HighIntentPageBase} from "./nyc-subway-map";
import { StepList } from "./components/steplist/steplist";

const data: HighIntentPageBase = require("./nyc-subway-map.json");

export default function NYCSubwayMapClient() {
  return (
    <>
    <Header />
    <HeroBanner {...data.hero}/>
      <IconCardGrid items={data.quickNav} />
      <StepList steps={data.howToRead} />
    <Footer />
    </>
  );
}
