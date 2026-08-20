"use client";
import Header from "../Header";
import React from "react";
import SeoSemHero from "./SeoSemHero";
import ServiceCard from "../application-development/ServiceCard";
import DigitalMarketingFeatures from "../application-development/DigitalMarketingFeatures";
import ProcessSection from "../application-development/ProcessSection";
import FAQSection from "../application-development/FaqSection";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";

function SeoSemPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />
      <SeoSemHero />
      <ServiceCard />
      <DigitalMarketingFeatures />
      <ProcessSection />
      <FAQSection />
      <Collaboration />
      <Footer />
    </div>
  );
}

export default SeoSemPage;