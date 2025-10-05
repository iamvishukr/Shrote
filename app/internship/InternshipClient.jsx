"use client";
import FloatingIcons from '@/app/components/FloatingIcons'
import Footer from '@/app/components/Footer'
import MouseCursor from '@/app/components/MouseCursor'
import Header from '@/app/Header'
import React from 'react'
import Intern from './Intern'
import InternHero from './InternHero'

function InternshipPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MouseCursor />
      <FloatingIcons />
      <Header />
      <InternHero />
      <Intern/>
      <Footer /> 
    </div>
  )
}

export default InternshipPage;