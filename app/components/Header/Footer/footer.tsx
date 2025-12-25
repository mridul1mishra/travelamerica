"use client"
import React from "react";
import "./footer.css"; // optional if you want to style it


const Footer = () => {
    return (
        <footer className="travel-footer">
  <div className="footer-top">
    <div>
      <h3>Solo Travel</h3>
      <ul className="vertical-list">
        <li style={{cursor: 'pointer'}}><a href="/majorcities/newyork/solo-travel">Solo Travel Tips</a></li>
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
        <li style={{cursor: 'pointer'}}><a href="/majorcities/newyork/nyc-safety-solo-travelers">Is NYC safe for travel?</a></li>
        <li style={{cursor: 'pointer'}}><a href="/majorcities/newyork/nyc-safety-solo-travelers-action-guide">Safety Action Guide</a></li>
        <li style={{cursor: 'pointer'}}><a href="/majorcities/newyork/solo-travel">Solo Travel Safety tips</a></li>
      </ul>
    </div>
    
    <div>
      <h3></h3>
      <ul className="vertical-list">
       { /* <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">YouTube</a></li>
        <li><a href="#">Pinterest</a></li> */}
      </ul>
    </div>
    <div>
      <h3>Company Info</h3>
      <ul className="vertical-list">
        <li className="link"><a href="/termsandcondition">Terms of Service</a></li>
        <li className="link"><a href="/privacy">Privacy Policy</a></li>
        <li className="link"><a href="/companydetails">Company Details</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2025 Travel America | Designed with ❤️ for explorers</p>
  </div>
</footer>
    )
};

export default Footer;