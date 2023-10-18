import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer _container">
      <div className="Footer__logoBox">
        <img src="/logo.png" alt="" />
      </div>
      <div className="Footer__addressBox">
        <p className="title">Address</p>
        <p className="path">
          Shop No - 15, New Complex <br /> Delhi, NCR{" "}
        </p>
        <br />
        <p className="title">Customer Support</p>
        <p className="path">+91-00000000000</p>
      </div>
      <div className="Footer__siteBox">
        <p className="title">Site Map</p>
        <p className="path">Home</p>
        <p className="path">About</p>
        <p className="path">Products</p>
        <p className="path">Terms and Conditions</p>
      </div>
      <div className="Footer__socialBox"></div>
    </div>
  );
}

export default Footer;
