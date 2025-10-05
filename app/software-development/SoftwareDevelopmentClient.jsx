"use client";
import FloatingIcons from "../components/FloatingIcons";
import Header from "../Header";
import MouseCursor from "../components/MouseCursor";
import React from "react";
import SoftwareDevelopmentHero from "./SoftwareDevelopmentHero";
import ServiceCard from "../application-development/ServiceCard";
import DigitalMarketingFeatures from "../application-development/DigitalMarketingFeatures";
import ProcessSection from "../application-development/ProcessSection";
import FAQSection from "../application-development/FaqSection";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";

function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MouseCursor />
      <FloatingIcons />
      <Header />
      <SoftwareDevelopmentHero />
      <ServiceCard />
      <DigitalMarketingFeatures />
      <ProcessSection />
      <FAQSection />
      <Collaboration />
      <Footer />
    </div>
  );
}

export default SoftwareDevelopmentPage;