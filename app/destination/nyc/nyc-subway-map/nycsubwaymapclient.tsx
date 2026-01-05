"use client"
import Header from "@/app/components/destination/header/header";
import Footer from "@/app/components/Header/Footer/footer";
import HeroBanner from "./components/herobanner/herobanner";
import IconCardGrid from "./components/naviagtioncard/navigationcard"
import { StepList } from "./components/steplist/steplist";
import { ScenarioCards } from "./components/ScenarioCards/ScenarioCards";
import styles from "./nycsubwaymap.module.css";

const data: HighIntentPageBase = require("./nyc-subway-map.json");
import type {HighIntentPageBase} from "./nyc-subway-map";

export default function NYCSubwayMapClient() {
  return (
    <>
    <Header />
      <div className={style.pagecontainer}>
      <div className={styles.pagestack}>
    <HeroBanner {...data.hero}/>
      <IconCardGrid items={data.quickNav} />
      <StepList steps={data.howToRead} />
      <ScenarioCards routes={data.routes} />
      </div>
      </div>
    <Footer />
    </>
  );
}
