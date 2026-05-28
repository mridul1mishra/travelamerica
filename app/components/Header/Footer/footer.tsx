"use client"
import React from "react";
import AffiliateDisclosure from "@/app/components/AffiliateDisclosure/AffiliateDisclosure";
import "./footer.css"; // optional if you want to style it


const Footer = () => {
    return (
        <footer className="travel-footer">
      <AffiliateDisclosure />
  <div className="footer-top">
    <div>
      <h3>Solo Travel</h3>
      <ul className="vertical-list">
        <li style={{cursor: 'pointer'}}><a href="/destination/nyc/solo-trip-to-nyc">Solo Travel Tips</a></li>
        <li style={{cursor: 'pointer'}}><a href="/majorcities/newyork/solo-itinerary">Solo Travel Itinerary</a></li>
        <li style={{cursor: 'pointer'}}><a href="/destination/nyc/solo-trip-to-nyc">Solo Trip to NYC Guide</a></li>
      </ul>
    </div>
    <div>
      <h3>Group Travel</h3>
      <ul className="vertical-list">
        <li style={{cursor: 'pointer'}}><a href="/majorcities/newyork/group-travel">Group Travel Tips</a></li>
        <li style={{cursor: 'pointer'}}><a href="/majorcities/newyork/group-itinerary">Group Travel Itinerary</a></li>
        <li style={{cursor: 'pointer'}}><a href="/majorcities/newyork/group-landmarks">Landmark in New York</a></li>
      </ul>
    </div>
    <div>
      <h3>Safety Tips</h3>
      <ul className="vertical-list">
        <li style={{cursor: 'pointer'}}><a href="/destination/nyc/nyc-safety-guide">Is NYC safe for travel?</a></li>
        <li style={{cursor: 'pointer'}}><a href="/destination/nyc/nyc-safety-guide">Safety Action Guide</a></li>
        <li style={{cursor: 'pointer'}}><a href="/destination/nyc/solo-trip-to-nyc">Solo Travel Safety tips</a></li>
      </ul>
    </div>
    <div>
      <h3>Destinations</h3>
      <ul className="vertical-list">
        <li style={{cursor: 'pointer'}}><a href="/destination/nyc">NYC Travel Hub</a></li>
        <li style={{cursor: 'pointer'}}><a href="/destination/nyc/best-areas-to-stay">Best Areas to Stay</a></li>
        <li style={{cursor: 'pointer'}}><a href="/destination/nyc/neighborhood-guide">Neighborhood Guide</a></li>
        <li style={{cursor: 'pointer'}}><a href="/destination/nyc/things-to-do">Things to Do</a></li>
      </ul>
    </div>
    <div>
      <h3>Company Info</h3>
      <ul className="vertical-list">
        <li className="link"><a href="/termsandcondition">Terms of Service</a></li>
        <li className="link"><a href="/privacy">Privacy Policy</a></li>
        <li className="link"><a href="/about">About Us</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2025 Travels Americas | Designed with ❤️ for explorers</p>
  </div>
</footer>
    )
};

export default Footer;
