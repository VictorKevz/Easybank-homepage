import React, { useState } from "react";
import darkLogo from "../assets/images/logo.svg";
import lightLogo from "../assets/images/light-logo.svg";
import iconClose from "../assets/images/icon-close.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import light from "../assets/images/light.svg";
import dark from "../assets/images/dark.svg";

import "./css/navbar.css";

function Navbar({ isDark, onSwitch }) {
  const [isOpen, setOpen] = useState(false);
  const navLinks = ["Home", "About", "Contact", "Blog", "Careers"];
  function handleToggle() {
    setOpen(!isOpen);
  }

  return (
    <header className={`header-wrapper ${isDark?'bg-semi-dark':''}`}>
      <nav className="nav-container">
        <figure className="logo-container">
        <img
              src={isDark ? lightLogo : darkLogo}
              alt="logo"
            />
        </figure>
        <ul className={`links-container ${isOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <li className={`nav-link ${isDark && !isOpen ?'text-color':''}`} key={index}>
              {link}
            </li>
          ))}
        </ul>
        <div className="CTA-toggle-container">
          <div className="toggle-icons-container" onClick={onSwitch}>
            <img
              src={isDark ? light : dark}
              alt={isDark ? "light icon" : "dark icon"}
            />
            <p className={`toggle-text ${isDark?'text-color':''}`}>{isDark?'Light Mode ':'Dark Mode'}</p>
          </div>
          <a className="call-to-action nav">Request Invite</a>
        </div>
        <figure className="toggle-container" onClick={handleToggle}>
          <img
            src={isOpen ? iconClose : iconHamburger}
            alt={`${isOpen ? "icon-close menu" : "icon-open menu"}`}
            className={`${isOpen ? "icon-close" : ""}`}
          />
        </figure>
      </nav>
      <div className={`mask ${isOpen ? "show" : ""}`}></div>
    </header>
  );
}

export default Navbar;
