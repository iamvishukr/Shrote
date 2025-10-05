"use client";
import FloatingIcons from '@/app/components/FloatingIcons'
import Footer from '@/app/components/Footer'
import MouseCursor from '@/app/components/MouseCursor'
import Header from '@/app/Header'
import React from 'react'
import Objectives from './Objectives'
import ProjectSolutions from './ProjectSolutions'
import WebskittersSection from './WebskittersSection'
import CaseStudies from './CaseStudies'

function ViewPortfolio() {
  return (
   <div className="min-h-screen bg-black text-white">
         <MouseCursor />
         <FloatingIcons />
         <Header />
         <Objectives />
         <ProjectSolutions />
         <WebskittersSection />
         <CaseStudies />
         
         <Footer />
       </div>
  )
}

export default ViewPortfolio