
import Header from './components/Header/header';
import Majorcities from "./components/Home/majorcities/majorcities";
import { StorySection } from './models/story';
import mySectionData from "./data/home/mysection.json";
import Footer from './components/Header/Footer/footer';
import banner from "./assets/Banner.jpg";
import FAQ from './components/faq/faq';
import { getFaq } from './lib/FaqData';
import Head from 'next/head';
import Script from 'next/script';

const section: StorySection = mySectionData as StorySection;
export default async function Home(){

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
      <>
        <Head>
          <title></title>
          <meta name="description" content="Discover carefully selected city guides for Las Vegas, Orlando, New York, and Los Angeles. Explore culture, food, and attractions with insider insights" />
          <link rel="preload" as="font" href="/data/corben-cdnfonts/Corben-Bold.woff2" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" as="image" href="/data/logo3.png" type="image/png"/>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
        </Head>
        <div className="App">      
          <Header image={banner} bannerText="Our Story"  />
          <div id="major-cities" style={{paddingTop: 150}}>
              <Majorcities section={section} />
              <FAQ groupedFaqs={faqTravelHubData}/>
          </div>
          <Footer />
        </div>
      </>
  );
}
