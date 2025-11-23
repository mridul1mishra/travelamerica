
import Header from './components/Header/header';
import Majorcities from "./components/Home/majorcities/majorcities";
import { StorySection } from './models/story';
import mySectionData from "./data/home/mysection.json";
import Footer from './components/Header/Footer/footer';

import FAQ from './components/faq/faq';
import { getFaq } from './lib/FaqData';
import Head from 'next/head';
import Script from 'next/script';

const section: StorySection = mySectionData as StorySection;
export default async function Home(){
  const banner = "/data/home/banner.webp";
  const { faqTravelHubData } = await getFaq();
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.travelamerica.work/travel",
      "url": "https://www.travelamerica.work/travel",
      "name": "Travel Hub",
      "description": "Your ultimate travel hub with guides, itineraries, landmarks, food, and safety tips for major cities.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://www.travelamerica.work/#organization"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.travelamerica.work/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Travel Hub",
            "item": "https://www.travelamerica.work/travel"
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.travelamerica.work/#organization",
      "name": "Travel America",
      "url": "https://www.travelamerica.work",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.travelamerica.work/data/logo.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-737-278-6292",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": ["en"]
      }
    }
  ]
};
    return (
        <div className="App">      
          <Header image={banner} bannerText="Our Story"  />
          <div id="major-cities" >
              <Majorcities section={section} />
              <FAQ groupedFaqs={faqTravelHubData}/>
          </div>
          <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
        </div>
  );
}
