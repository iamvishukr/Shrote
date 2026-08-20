"use client";
import Footer from '@/app/components/Footer'
import Header from '@/app/Header'
import PageBanner from '@/app/components/PageBanner'
import React from 'react'
import Objectives from './Objectives'
import ProjectSolutions from './ProjectSolutions'
import WebskittersSection from './WebskittersSection'
import CaseStudies from './CaseStudies'

function ViewPortfolio() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />
      <PageBanner
        title="Case Study"
        highlight="& Project Portfolio"
        subtitle="In-depth breakdown of architectural decisions, custom engineering challenges, and proven business results."
        breadcrumb={[
          { label: "Resources", href: "/portfolio" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Case Study" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Objectives />
        <ProjectSolutions />
        <WebskittersSection />
        <CaseStudies />
      </div>
      <Footer />
    </div>
  )
}

export default ViewPortfolio;