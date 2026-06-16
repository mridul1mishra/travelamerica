"use client";
import HeroBanner from "../../../components/Header/HeroBanner";
import NavigationHeader from "../../../components/Header/NavigationHeader";
import Footer from "@/app/components/Header/Footer/footer";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import LandmarkIntro from "./components/LandmarkIntro/LandmarkIntro";
import LandmarkList from "./components/LandmarkList/LandmarkList";
import LandmarkRoutes from "./components/LandmarkRoutes/LandmarkRoutes";
import LandmarkFAQ from "./components/LandmarkFAQ/LandmarkFAQ";
import LandmarkRelatedLinks from "./components/LandmarkRelatedLinks/LandmarkRelatedLinks";

export default function LALandmarkClient() {
  return (
    <>
      <NavigationHeader />
      <HeroBanner
        image="/data/majorcities/losangeles/assets/losangeles.webp"
        bannerText=""
      />
      <BookingCTA variant="slim" text="Book your Los Angeles trip →" href="/destination/la/bookings?tab=activities&from=landmark" label="See tickets" />
      <LandmarkIntro />
      <LandmarkList />
      <LandmarkRoutes />
      <LandmarkFAQ />
      <LandmarkRelatedLinks />
      <BookingCTA variant="full" text="Get tickets to LA’s top landmarks" href="/destination/la/bookings?tab=activities&from=landmark" label="See tickets" />
      <Footer />
    </>
  );
}
