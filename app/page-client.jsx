"use client";
import { useEffect, useState } from "react";
import MouseCursor from "./components/MouseCursor";
import FloatingIcons from "./components/FloatingIcons";
import Header from "./Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChoose from "./components/WhyChoose";
import Stats from "./components/Stats";
import KeyBenefits from "./components/KeyBenefits";
import ProcessSteps from "./components/ProcessSteps";
import HowItWork from "./components/HowItWork";
import Testimonials from "./components/Testimonials";
import Collaboration from "./components/Collaboration";
import JoinAgency from "./components/JoinAgency";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";
    const style = document.createElement("style");
    style.textContent = `*, *::before, *::after { cursor: none !important; }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.position" content="12.9186122,77.5913122" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="geo.region" content="IN-KA" />
        <link rel="icon" type="image/ico" href="favicon.ico" />
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
      {isClient && (
        <>
          <MouseCursor />
          <FloatingIcons />
        </>
      )}
      <Header />
      <Hero />
      <About />
      <Products />
      <ServicesSection />
      <Stats />
      <WhyChoose />
      <HowItWork />
      <JoinAgency />
      <Testimonials />
      <KeyBenefits />
      <ProcessSteps />
      <Collaboration />
      <Footer />
    </div>
  );
}
