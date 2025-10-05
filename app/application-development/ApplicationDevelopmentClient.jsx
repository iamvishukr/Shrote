"use client";
import FloatingIcons from "../components/FloatingIcons";
import Header from "../Header";
import MouseCursor from "../components/MouseCursor";
import React from "react";
import ApplicationDevelopmentHero from "./ApplicationDevelopmentHero";
import ServicesCategory from "./ServicesCategory";
import ServiceCard from "./ServiceCard";
import DigitalMarketingFeatures from "./DigitalMarketingFeatures";
import ProcessSection from "./ProcessSection";
import FAQSection from "./FaqSection";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";

function ApplicationDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MouseCursor />
      <FloatingIcons />
      <Header />
      <ApplicationDevelopmentHero />
      
      <ServiceCard />
      <DigitalMarketingFeatures />
      <ProcessSection />
      
      <FAQSection />
      <Collaboration />
      <Footer />
    </div>
  );
}

export default ApplicationDevelopmentPage;