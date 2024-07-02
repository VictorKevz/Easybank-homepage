import React from "react";
import desktopImg from "../assets/images/image-mockups.png";
import "./css/hero.css";
function Hero({isDark}) {
  return (
    <section className="hero-container">
      <div className="hero-inner-container">
        <div >
        <figure className="hero-img-container">
          <img src={desktopImg} alt="hero image" className="hero-img" />
        </figure>
        </div>
        <div className="hero-text-container">
          <h1 className={`hero-title ${isDark?'text-color':''}`}>Next generation digital banking</h1>
          <p className="hero-paragraph">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <a className="call-to-action hero">Request Invite</a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
