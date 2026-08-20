"use client";
import Footer from '@/app/components/Footer'
import Header from '@/app/Header'
import React from 'react'
import CurrentOpeningHero from './CurrentOpeningHero'
import Current from './Current'

function CurrentOpeningsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />
      <CurrentOpeningHero />
      <Current />
      <Footer />
    </div>
  )
}

export default CurrentOpeningsPage;