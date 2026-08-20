"use client";
import Header from "../Header";
import React from "react";
import EcommerceSolutionHero from "./EcommerceSolutionHero";
import ServiceCard from "../application-development/ServiceCard";
import DigitalMarketingFeatures from "../application-development/DigitalMarketingFeatures";
import ProcessSection from "../application-development/ProcessSection";
import FAQSection from "../application-development/FaqSection";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";

function EcommercePage() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />
      <EcommerceSolutionHero />
      <ServiceCard />
      <DigitalMarketingFeatures />
      <ProcessSection />
      <FAQSection />
      <Collaboration />
      <Footer />
    </div>
  );
}

export default EcommercePage;