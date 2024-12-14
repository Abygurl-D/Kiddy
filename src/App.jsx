import "./App.css";

import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
