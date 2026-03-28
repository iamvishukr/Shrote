"use client";
import MouseCursor from "../components/MouseCursor"
import FloatingIcons from "../components/FloatingIcons"
import Header from "@/app/Header"
import AboutHero from "./AboutHero"
import Footer from "../components/Footer"
import About from "../components/About"
import ProcessSteps from "./ProcessSteps"
import WhoWeAre from "./WhoWeAre"
import ExexcutivePartners from "./ExexcutivePartner"
import Features from "../components/OurFeatures"
import ContentStrategy from "../components/ContentStrategy"
import TeamMemberss from "./TeamMembers"
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Featuress from "../components/KeyBenefits";
import HaveAnyQuestions from "./HaveAnyQuestions";
import Component from "../components/Collaboration";
import { PriorityLoader, SkeletonLoader } from "../components/FastLoader";
import { RoutePrefetcher } from "../components/RoutePrefetcher";

function AboutU() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <RoutePrefetcher />
      
      
      <PriorityLoader priority="high">
        <MouseCursor />
        <FloatingIcons />
        <Header />
        <AboutHero name="About" />
      </PriorityLoader>

      
      <PriorityLoader priority="normal">
        <About/>
        <ProcessSteps/>
        <WhoWeAre/>
        <ExexcutivePartners/>
      </PriorityLoader>

      <div className="relative z-10"> 
        <PriorityLoader priority="normal">
          <Features />
        </PriorityLoader>
      </div>
      
      <div className="relative z-0 flex justify-end items-center -mt-[190px] mb-[-40px] overflow-hidden">
        <div className="relative w-[300px] h-[300px] overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 right-[-20%] w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <PriorityLoader priority="normal">
          <ContentStrategy />
        </PriorityLoader>
      </div>

      
      <PriorityLoader priority="low">
        <TeamMemberss/>
        <WhyChoose/>
        <Testimonials/>
        <Featuress/>
        <HaveAnyQuestions/>
        <Component/>
      </PriorityLoader>

      <Footer/>
    </div>
   )
 }

export default AboutU;