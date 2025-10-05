"use client";
import MouseCursor from "../components/MouseCursor"
import FloatingIcons from "../components/FloatingIcons"
import Header from "../Header"
import MapSection from "./Map"
import ContactHero from "./ContactHero"
import FormSection from "./FormSection"
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer"

function ContactUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MouseCursor />
      <FloatingIcons />
      <Header />

     <ContactHero />

      <FormSection />

      
      <MapSection />
      
      <Footer/>
    </div>
  )
}

export default ContactUs;