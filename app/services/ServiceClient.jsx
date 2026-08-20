"use client";
import Header from "../Header";
import ServicesHero from "./ServicesHero";
import WhyChoose from "../components/WhyChoose";
import WhoWeAre from "../about/WhoWeAre";
import Testimonials from "../components/Testimonials";
import Features from "../components/KeyBenefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Services from "./Services";
import AnimatedBackground from "../components/AnimatedBackground";

function ServiceClient() {
  return (
    <div className="min-h-screen relative" style={{ background: "#f5f9fd" }}>
      <AnimatedBackground variant="mesh" />
      <div className="relative z-10">
        <Header />
        <ServicesHero name="Our" />
        <Services />
        <WhyChoose />
        <Testimonials />
        <Features />
        <Collaboration />
        <Footer />
      </div>
    </div>
  );
}

export default ServiceClient;