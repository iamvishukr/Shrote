"use client";
import Header from "../Header";
import WebDevelopmentHero from "./WebDevelopmentHero";
import ServiceCard from "../application-development/ServiceCard";
import DigitalMarketingFeatures from "../application-development/DigitalMarketingFeatures";
import ProcessSection from "../application-development/ProcessSection";
import FAQSection from "../application-development/FaqSection";
import Collaboration from "../components/Collaboration";
import Footer from "@/app/components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

function WebDevelopmentPage() {
  return (
    <div className="min-h-screen relative" style={{ background: "#f5f9fd" }}>
      <AnimatedBackground variant="circuit" />
      <div className="relative z-10">
        <Header />
        <WebDevelopmentHero />
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

export default WebDevelopmentPage;
