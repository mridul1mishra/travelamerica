
import HeroBanner from './components/Header/HeroBanner';
import NavigationHeader from './components/Header/NavigationHeader';
import Majorcities from "./components/Home/majorcities/majorcities";
import { StorySection } from './models/story';
import mySectionData from "@/content/home/mysection.json";
import Footer from './components/Header/Footer/footer';

import FAQ from './components/faq/faq';
import { getFaq } from './lib/FaqData';

const section: StorySection = mySectionData as StorySection;
export default async function Home(){
  const banner = "/data/home/banner_new.webp";
  const { faqTravelHubData } = await getFaq();
      return (
        <div className="App">      
          <NavigationHeader />
          <HeroBanner
            image={banner}
          />
          <div id="major-cities" >
              <Majorcities section={section} />
              <FAQ groupedFaqs={faqTravelHubData}/>
          </div>
          <Footer />
        </div>
  );
}
