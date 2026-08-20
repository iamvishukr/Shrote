"use client";

import Header from "../Header";
import PortfolioHero from "./PortfolioHero";
import Portfolio from "./Portfolio";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen relative" style={{ background: "#f5f9fd" }}>
      <AnimatedBackground variant="grid" />
      <div className="relative z-10">
        <Header />
        <PortfolioHero />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}