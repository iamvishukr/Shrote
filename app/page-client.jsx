"use client";
import { useEffect,useState } from "react";
import MouseCursor from "./components/MouseCursor";
import FloatingIcons from "./components/FloatingIcons";
import Header from "./Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Stats from "./components/Stats";
import KeyBenefits from "./components/KeyBenefits";
import ProcessSteps from "./components/ProcessSteps";
import Portfolio from "./components/Portfolio";
import ContentStrategy from "./components/ContentStrategy";
import HowItWork from "./components/HowItWork";
import LatestNews from "./components/LatestNews";
import Testimonials from "./components/Testimonials";
import Collaboration from "./components/Collaboration";
import JoinAgency from "./components/JoinAgency";
import Footer from "./components/Footer";
import OurFeatures from "./components/OurFeatures";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    const style = document.createElement("style");
    style.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
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
    <div className="min-h-screen bg-black text-white">
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
      <Services />
      <Stats />
      <WhyChoose />
      <JoinAgency />
      <HowItWork />

      <div className="relative z-10">
        <OurFeatures />
      </div>

      <div className="relative z-0 flex justify-end items-center -mt-[190px] mb-[-40px] overflow-hidden">
        <div className="relative w-[300px] h-[300px] overflow-hidden">
          <img
            src="/features-bg-shape.png"
            alt="Rotating Shape"
            className="absolute top-1/2 -translate-y-1/2 right-[-40%] w-[330px] object-contain spin-clockwise"
          />
        </div>
      </div>

      <div className="relative z-10">
        <ContentStrategy />
      </div>

      <Portfolio />
      <Testimonials />
      <KeyBenefits />
      <ProcessSteps />
      <LatestNews />
      <Collaboration />
      <Footer />
    </div>
  );
}
