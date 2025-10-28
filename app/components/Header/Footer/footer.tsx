"use client"
import React from "react";
import "./footer.css"; // optional if you want to style it


const Footer = () => {
    return (
        <footer className="travel-footer">
  <div className="footer-top">
    <div>
      <h3>Explore</h3>
      <ul className="vertical-list">
        <li><a href="#">Group Traveller</a></li>
        <li><a href="#">Solo Traveller</a></li>
        <li><a href="#">Couple</a></li>
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