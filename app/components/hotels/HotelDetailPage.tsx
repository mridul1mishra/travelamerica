import type { Metadata } from "next";
import Link from "next/link";
import HotelCoverImage from "@/app/components/hotels/HotelCoverImage";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { getMemberSession } from "@/app/lib/auth";
import { defaultHotelPriceStay, findHotelPriceStay } from "@/app/lib/hotel-price-stay";
import { priceCacheKey, readPriceCache } from "@/app/lib/serpapi-hotel-prices";
import NavigationHeader from "@/app/components/Header/NavigationHeader";
import Footer from "@/app/components/Header/Footer/footer";
import { getCityHotels, type HotelCity } from "@/app/lib/hotels";
import { HOTEL_TAGS } from "@/app/lib/hotelTags";
import GoogleHotelRating from "./GoogleHotelRating";
import HotelPriceLink from "./HotelPriceLink";
import styles from "./HotelDetailPage.module.css";

const cityNames = { nyc: "New York City", la: "Los Angeles", orlando: "Orlando", lasvegas: "Las Vegas" };
type Params = Promise<{ hotelId: string }>;

async function findHotel(city: HotelCity, params: Params) {
  const { hotelId } = await params;
  if (!/^[1-9]\d{0,18}$/.test(hotelId)) notFound();
  const hotels = await getCityHotels(city);
  const index = hotels.findIndex(h => h.hotelId === hotelId);
  const hotel = hotels[index];
  if (!hotel) notFound();
  return { hotel, previous: hotels[index - 1], next: hotels[index + 1] };
}

export async function hotelDetailMetadata(city: HotelCity, params: Params): Promise<Metadata> {
  const { hotel } = await findHotel(city, params);
  return {
    title: `${hotel.title} | ${cityNames[city]} Hotels`,
    description: `Explore ${hotel.title} in ${cityNames[city]}${hotel.neighborhood ? `, ${hotel.neighborhood}` : ""}. View hotel information and sign in to check ratings and prices.`,
    alternates: { canonical: `https://www.travelsamericas.com/destination/${city}/hotel/${hotel.hotelId}` },
  };
}

export default async function HotelDetailPage({ city, params }: { city: HotelCity; params: Params }) {
  const { hotel, previous, next } = await findHotel(city, params);
  const path = `/destination/${city}/hotel/${hotel.hotelId}`;
  let cachedPrices = null;
  if (await getMemberSession(await headers())) {
    const stay = defaultHotelPriceStay();
    const query = `${hotel.title} ${hotel.address ?? cityNames[city]}`;
    try {
      cachedPrices = await findHotelPriceStay(stay, candidate =>
        readPriceCache(priceCacheKey(hotel.hotelId!, query, candidate)));
    } catch { /* Keep the hotel page usable when the cache is unavailable. */ }
  }
  return <>
    <NavigationHeader prefetch={false} memberReturnTo={path} />
    <main className={styles.main}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href={`/destination/${city}`}>{cityNames[city]}</Link><span aria-hidden="true">/</span>
        <Link href={`/destination/${city}/hotel`}>Hotels</Link>
      </nav>
      {(previous || next) && <nav className={styles.hotelNavigation} aria-label="Browse hotels">
        {previous && <Link href={`/destination/${city}/hotel/${previous.hotelId}`} prefetch={false} rel="prev">
          <span>← Previous hotel</span>
          <strong>{previous.title}</strong>
        </Link>}
        {next && <Link className={styles.nextHotel} href={`/destination/${city}/hotel/${next.hotelId}`} prefetch={false} rel="next">
          <span>Next hotel →</span>
          <strong>{next.title}</strong>
        </Link>}
      </nav>}
      <div className={styles.hero}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Your stay in {cityNames[city]}</p>
          <h1>{hotel.title}</h1>
          {hotel.hotelTier && <span className={styles.tier}>{hotel.hotelTier}{hotel.hotelTierIsProvisional ? " · Provisional" : ""}</span>}
          {hotel.neighborhood && <p className={styles.location}>{hotel.neighborhood}</p>}
          {hotel.address && <p>{hotel.address}</p>}
          <HotelPriceLink hotelId={hotel.hotelId!} className={styles.button} initialPrices={cachedPrices} />
        </div>
        <div>
          {hotel.googleRatingAvailable && hotel.hotelId
            ? <GoogleHotelRating hotelId={hotel.hotelId} hotelName={hotel.title} googleMapsUrl={hotel.googleMapsUrl} photosOnly coverImage={hotel.img} />
            : <HotelCoverImage className={styles.photo} src={hotel.img} hotelName={hotel.title} width={720} height={600} />}
        </div>
      </div>
      {hotel.googleRatingAvailable && hotel.hotelId && <div className={styles.guestReviews}>
        <GoogleHotelRating hotelId={hotel.hotelId} hotelName={hotel.title} googleMapsUrl={hotel.googleMapsUrl} showReviews />
      </div>}
      <div className={styles.sections}>
        <section className={styles.panel}>
          <h2>Location</h2>
          <p>{hotel.neighborhood ?? hotel.area ?? cityNames[city]}</p>
          {hotel.address && <p>{hotel.address}</p>}
          {hotel.googleMapsUrl && <a href={hotel.googleMapsUrl} target="_blank" rel="noopener noreferrer">View location on Google Maps ↗</a>}
        </section>
        {!!hotel.tags?.length && <section className={styles.panel}>
          <h2>Good to know</h2>
          <ul className={styles.tags}>{hotel.tags.map(tag => <li key={tag}>{HOTEL_TAGS[tag]}</li>)}</ul>
        </section>}
        {hotel.hotelTier && <section className={styles.panel}>
          <h2>Our hotel tier</h2>
          <p>{hotel.hotelTier} reflects our assessment of rooms, guest service, dining, wellness and design.</p>
          {hotel.hotelTierIsProvisional && <p>This tier uses available evidence and may change as more details are confirmed.</p>}
        </section>}
      </div>
      <Link className={styles.back} href={`/destination/${city}/hotel`}>← Browse all {cityNames[city]} hotels</Link>
    </main>
    <Footer />
  </>;
}
