"use client";
import React from 'react'
import MouseCursor from '../components/MouseCursor'
import FloatingIcons from '../components/FloatingIcons'
import Header from '../Header'
import ServicesHero from './ServicesHero'
import WhyChoose from '../components/WhyChoose'
import WhoWeAre from "../about/WhoWeAre"
import Testimonials from '../components/Testimonials'
import Features from '../components/KeyBenefits'
import Collaboration from '../components/Collaboration'
import Footer from '../components/Footer'
import Services from './Services'

function ServiceClient() {
  return (
   <div className="min-h-screen bg-black text-white">
         <MouseCursor />
         <FloatingIcons />
         <Header />
        <ServicesHero name="Our" />
        <Services />
        <WhyChoose />
        <WhoWeAre />
        <Testimonials />
        <Features />
        <Collaboration />
        <Footer />
        </div>
  )
}

export default ServiceClient;