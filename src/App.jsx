import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features/Features";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  const [isDark, setDark] = useState(false);

  const switchTheme = () => {
    setDark(!isDark);
    console.log("toggled!");
  };
  return (
    <main className="outer-container">
      <div className={`hero-bg ${isDark ? "bg-dark" : ""}`}></div>

      <div className="inner-container">
        <Navbar isDark={isDark} onSwitch={switchTheme} />
        <Hero isDark={isDark} />
        <Features isDark={isDark} />
        <Articles isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </main>
  );
}

export default App;
