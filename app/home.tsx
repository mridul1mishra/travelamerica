
import Header from './components/Header/header';
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
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.travelsamericas.com/travel",
      "url": "https://www.travelsamericas.com/travel",
      "name": "Travel Hub",
      "description": "Your ultimate travel hub with guides, itineraries, landmarks, food, and safety tips for major cities.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://www.travelsamericas.com/#organization"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.travelsamericas.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Travel Hub",
            "item": "https://www.travelsamericas.com/travel"
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.travelsamericas.com/#organization",
      "name": "Travels Americas",
      "url": "https://www.travelsamericas.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.travelsamericas.com/data/logo.png"
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
          <Header image={banner} bannerText="Banner Image Discover America Most Iconic Cities"  />
          <div id="major-cities" >
              <Majorcities section={section} />
              <FAQ groupedFaqs={faqTravelHubData}/>
          </div>
          <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
        </div>
  );
}
