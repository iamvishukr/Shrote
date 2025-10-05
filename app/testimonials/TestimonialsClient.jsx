"use client";
import React from 'react'

import MouseCursor from '../components/MouseCursor'
import FloatingIcons from '../components/FloatingIcons'
import Header from '../Header'
import TestimonialsHero from './TestimonialsHero'
import Footer from '../components/Footer'
import Testimoni from './Testimoni'

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MouseCursor />
      <FloatingIcons />
      <Header />
      <TestimonialsHero />
      <Testimoni/>
      <Footer />
    </div>
  )
}

export default TestimonialsPage;