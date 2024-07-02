import React from "react";
import footerLogo from "../assets/images/light-logo.svg";
import fbLogo from "../assets/images/icon-facebook.svg";
import ytLogo from "../assets/images/icon-youtube.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import pinterestLogo from "../assets/images/icon-pinterest.svg";
import igLogo from "../assets/images/icon-instagram.svg";
import "./css/footer.css";
function Footer({isDark}) {
  return (
    <section className={`footer-container ${isDark?'bg-semi-dark':''}`}>
    <div className="footer-inner-container"> 
      <div className="logo-socials-container">
        <figure>
          <img src={footerLogo} alt="footer-logo" className="footer-logo" />
        </figure>
        <ul className="social-links">
          <li>
            <img src={fbLogo} alt="facebook logo" className="social-icon" />
          </li>
          <li>
            <img src={ytLogo} alt="youtube logo" className="social-icon" />
          </li>
          <li>
            <img src={twitterLogo} alt="twitter logo" className="social-icon" />
          </li>
          <li>
            <img
              src={pinterestLogo}
              alt="pinterest logo"
              className="social-icon"
            />
          </li>
          <li>
            <img src={igLogo} alt="instagram logo" className="social-icon" />
          </li>
        </ul>
      </div>
      
        <ul className="footer-links-container first-set">
        <li>About Us</li>
        <li>Contanct</li>
        <li>Blog</li>
        </ul>

        <ul className="footer-links-container second-set">
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
        </ul>
      
      <div className="copy-right-CTA-container">
        <a className="call-to-action footer">Request Invite</a>
        <p className="legal"> © Easybank. All Rights Reserved</p>
         <a className="victor">by Victor.Kevz</a>
      </div>
      </div>
    </section>
  );
}
export default Footer;
