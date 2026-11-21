import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavigationHeader from "@/app/components/Header/NavigationHeader";
import Footer from "@/app/components/Header/Footer/footer";
import { getCityHotels, getHotelBookingUrl, type HotelCity } from "@/app/lib/hotels";
import { HOTEL_TAGS } from "@/app/lib/hotelTags";
import { safeHotelBookingUrl } from "@/app/lib/member-hotel-access";
import GoogleHotelRating from "./GoogleHotelRating";
import HotelPriceLink from "./HotelPriceLink";
import styles from "./HotelDetailPage.module.css";

// Detail pages currently have only a short overview, address and tags, so they are kept
// out of search results. Add a city here once its detail pages carry enough original content.
const INDEXABLE_DETAIL_CITIES: HotelCity[] = [];

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
    description: `Explore ${hotel.title} in ${cityNames[city]}${hotel.neighborhood ? `, ${hotel.neighborhood}` : ""}. View hotel information and check availability and sign in for guest reviews.`,
    alternates: { canonical: `https://www.travelsamericas.com/destination/${city}/hotel/${hotel.hotelId}` },
    robots: INDEXABLE_DETAIL_CITIES.includes(city) ? undefined : { index: false, follow: true },
  };
}

export default async function HotelDetailPage({ city, params }: { city: HotelCity; params: Params }) {
  const { hotel, previous, next } = await findHotel(city, params);
  const path = `/destination/${city}/hotel/${hotel.hotelId}`;
  const cityLabel = city === "nyc" ? "NYC" : cityNames[city];
  const bookingUrl = await getHotelBookingUrl(hotel.hotelId!);
  const safeBookingUrl = bookingUrl && safeHotelBookingUrl(bookingUrl);
  const booking = safeBookingUrl ? new URL(safeBookingUrl) : undefined;
  return <>
    <div className={styles.stickyHeader}>
      <NavigationHeader fixed={false} prefetch={false} memberReturnTo={path} />
    </div>
    <main className={styles.main}>
      <nav className={styles.breadcrumb} aria-label="Hotel listing">
        <Link href={`/destination/${city}/hotel`}>← {cityLabel} hotels</Link>
      </nav>
      <header className={styles.intro}>
        <h1>{hotel.title}</h1>
        <p className={styles.location}>
          {hotel.neighborhood ?? hotel.area ?? cityNames[city]}
        </p>
      </header>
      <div className={styles.hero}>
        <div className={styles.media}>
          {hotel.googleRatingAvailable && hotel.hotelId
            ? <GoogleHotelRating key={hotel.hotelId} hotelId={hotel.hotelId} hotelName={hotel.title} photosOnly />
            : <section className={styles.photoUnavailable} data-hotel-photo="unavailable">
              <h2>Hotel photos</h2>
              <p>Hotel photos unavailable.</p>
            </section>}
        </div>
        <div className={styles.hotelSidebar}>
          <div className={styles.priceAction}>
            <HotelPriceLink key={hotel.hotelId} hotelId={hotel.hotelId!} className={styles.button}
              bookingUrl={booking?.href} bookingLinkClassName={styles.bookingLink} autoLoad />
            {booking && hotel.systemMetadata?.affiliateEnabled && <p>We may earn a commission if you book through this link.</p>}
          </div>
          {hotel.overview && <section className={`${styles.panel} ${styles.overview}`}>
            <h2>Hotel overview</h2>
            <p>{hotel.overview}</p>
          </section>}
        </div>
      </div>
      {hotel.googleRatingAvailable && hotel.hotelId && <section className={styles.guestReviews}>
        <h2>Google ratings &amp; reviews</h2>
        <GoogleHotelRating hotelId={hotel.hotelId} hotelName={hotel.title} showReviews />
      </section>}
      <div className={styles.sections}>
        <section id="location" className={styles.panel}>
          <h2>Location</h2>
          <p>{hotel.address ?? hotel.neighborhood ?? hotel.area ?? cityNames[city]}</p>
        </section>
        {!!hotel.tags?.length && <section className={styles.panel}>
          <h2>Good to know</h2>
          <ul className={styles.tags}>{hotel.tags.map(tag => <li key={tag}>{HOTEL_TAGS[tag]}</li>)}</ul>
        </section>}
      </div>
      {hotel.hotelTier && <details className={styles.assessment}>
        <summary>About our assessment</summary>
        <h2>{hotel.hotelTier} tier{hotel.hotelTierIsProvisional ? " · Provisional" : ""}</h2>
        <p>{hotel.hotelTier} reflects our assessment of rooms, guest service, dining, wellness and design.</p>
        {hotel.hotelTierIsProvisional && <p>This tier uses available evidence and may change as more details are confirmed.</p>}
      </details>}
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
      <Link className={styles.back} href={`/destination/${city}/hotel`}>← Browse all {cityLabel} hotels</Link>
    </main>
    <Footer />
  </>;
}
