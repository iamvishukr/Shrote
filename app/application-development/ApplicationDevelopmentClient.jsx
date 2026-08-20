"use client";
import Header from "../Header";
import React from "react";
import ApplicationDevelopmentHero from "./ApplicationDevelopmentHero";
import ServiceCard from "./ServiceCard";
import DigitalMarketingFeatures from "./DigitalMarketingFeatures";
import ProcessSection from "./ProcessSection";
import FAQSection from "./FaqSection";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

function ApplicationDevelopmentPage() {
  return (
    <div className="min-h-screen relative" style={{ background: "#f5f9fd" }}>
      <AnimatedBackground variant="circuit" />
      <div className="relative z-10">
        <Header />
        <ApplicationDevelopmentHero />
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

export default ApplicationDevelopmentPage;