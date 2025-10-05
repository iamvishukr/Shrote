"use client";
import React from 'react'
import MouseCursor from "../components/MouseCursor"
import FloatingIcons from "../components/FloatingIcons"
import Header from "../Header"
import PortfolioHero from "./PortfolioHero"
import Portfolio from "./Portfolio"
import Footer from '../components/Footer';
import CardHoverEffectDemo from "./card-hover-effect-demo"

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MouseCursor />
      <FloatingIcons />
      <Header />
      <PortfolioHero />
    
      <CardHoverEffectDemo />
      <Footer />
    </div>
  )
}

export default PortfolioPage;