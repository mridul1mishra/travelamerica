"use client"
import React from "react";
import Link from "next/link";
import AffiliateDisclosure from "@/app/components/AffiliateDisclosure/AffiliateDisclosure";
import "./footer.css"; // optional if you want to style it


const Footer = () => {
    return (
        <footer className="travel-footer">
      <AffiliateDisclosure />
  <div className="footer-top">
    <div>
      <h3>Plan Your Trip</h3>
      <ul className="vertical-list">
        <li className="link"><Link href="/destination/nyc">NYC Travel Hub</Link></li>
        <li className="link"><Link href="/destination/nyc/things-to-do">Things to Do in NYC</Link></li>
        <li className="link"><Link href="/destination/nyc/best-areas-to-stay">Best Areas to Stay</Link></li>
        <li className="link"><Link href="/destination/nyc/neighborhood-guide">Neighborhood Guide</Link></li>
      </ul>
    </div>
    <div>
      <h3>Solo Travel</h3>
      <ul className="vertical-list">
        <li className="link"><Link href="/destination/nyc/solo-trip-to-nyc">Solo Trip to NYC Guide</Link></li>
        <li className="link"><Link href="/destination/nyc/nyc-female-solo-travel-guide">Solo Female Travel Guide</Link></li>
        <li className="link"><Link href="/destination/nyc/solo-itinerary">Solo Travel Itinerary</Link></li>
        <li className="link"><Link href="/destination/nyc/food">Where to Eat Solo</Link></li>
      </ul>
    </div>
    <div>
      <h3>Group Travel</h3>
      <ul className="vertical-list">
        <li className="link"><Link href="/destination/nyc/group-travel">Group Travel Tips</Link></li>
        <li className="link"><Link href="/destination/nyc/group-travel#itinerary">Group Travel Itinerary</Link></li>
        <li className="link"><Link href="/destination/nyc/group-travel#dining">Group Dining in NYC</Link></li>
        <li className="link"><Link href="/destination/nyc/landmark">Top NYC Landmarks</Link></li>
      </ul>
    </div>
    <div>
      <h3>Safety &amp; Transit</h3>
      <ul className="vertical-list">
        <li className="link"><Link href="/destination/nyc/nyc-safety-guide">Is NYC Safe for Travel?</Link></li>
        <li className="link"><Link href="/destination/nyc/is-nyc-safe-at-night">Is NYC Safe at Night?</Link></li>
        <li className="link"><Link href="/destination/nyc/nyc-subway-map">NYC Subway Map</Link></li>
        <li className="link"><Link href="/destination/nyc/subway-safety-guide">Subway Safety Guide</Link></li>
      </ul>
    </div>
    <div>
      <h3>Company Info</h3>
      <ul className="vertical-list">
        <li className="link"><Link href="/termsandcondition">Terms of Service</Link></li>
        <li className="link"><Link href="/privacy">Privacy Policy</Link></li>
        <li className="link"><Link href="/about">About Us</Link></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Travels Americas | Designed with ❤️ for explorers</p>
  </div>
</footer>
    )
};

export default Footer;
