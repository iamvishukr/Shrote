
"use client";

import FloatingIcons from "@/app/components/FloatingIcons";
import Header from "../Header";
import MouseCursor from "@/app/components/MouseCursor";
import React from "react";
import WebDevelopmentHero from "./WebDevelopmentHero";
import ServiceCard from "../application-development/ServiceCard";
import DigitalMarketingFeatures from "../application-development/DigitalMarketingFeatures";
import ProcessSection from "../application-development/ProcessSection";
import FAQSection from "../application-development/FaqSection";
import Collaboration from "../components/Collaboration";
import Footer from "@/app/components/Footer";

function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MouseCursor />
      <FloatingIcons />
      <Header />
      <WebDevelopmentHero />
      <ServiceCard />
      <DigitalMarketingFeatures />
      <ProcessSection />
      <FAQSection />
      <Collaboration />
      <Footer />
    </div>
  );
}

export default WebDevelopmentPage;
