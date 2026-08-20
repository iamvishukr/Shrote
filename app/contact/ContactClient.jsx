"use client";
import Header from "../Header";
import ContactHero from "./ContactHero";
import FormSection from "./FormSection";
import MapSection from "./Map";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

function ContactUs() {
  return (
    <div className="min-h-screen relative" style={{ background: "#f5f9fd" }}>
      <AnimatedBackground variant="mesh" />
      <div className="relative z-10">
        <Header />
        <ContactHero />
        <FormSection />
        <MapSection />
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;