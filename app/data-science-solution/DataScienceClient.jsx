"use client";
import Header from "../Header";
import React from "react";
import DataScienceSolutionHero from "./DataScienceSolutionHero";
import ServiceCard from "../application-development/ServiceCard";
import DigitalMarketingFeatures from "../application-development/DigitalMarketingFeatures";
import ProcessSection from "../application-development/ProcessSection";
import FAQSection from "../application-development/FaqSection";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

function DataSciencePage() {
  return (
    <div className="min-h-screen relative" style={{ background: "#f5f9fd" }}>
      <AnimatedBackground variant="neural" />
      <div className="relative z-10">
        <Header />
        <DataScienceSolutionHero />
        <ServiceCard />
        <DigitalMarketingFeatures />
        <ProcessSection />
        <FAQSection />
        <Collaboration />
        <Footer />
      </div>
    </div>
  );
}

export default DataSciencePage;