"use client";
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
import { PriorityLoader } from "../components/FastLoader";
import { RoutePrefetcher } from "../components/RoutePrefetcher";
import AnimatedBackground from "../components/AnimatedBackground";

function AboutU() {
  return (
    <div className="min-h-screen relative" style={{ background: "#f5f9fd" }}>
      <AnimatedBackground variant="deep-learning" />
      <div className="relative z-10">
      
      <RoutePrefetcher />
      
      
      <PriorityLoader priority="high">
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
    </div>
   )
 }

export default AboutU;