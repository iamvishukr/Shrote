"use client";
import FloatingIcons from '@/app/components/FloatingIcons'
import Footer from '@/app/components/Footer'
import MouseCursor from '@/app/components/MouseCursor'
import Header from '@/app/Header'
import React from 'react'
import CurrentOpeningHero from './CurrentOpeningHero'
import Current from './Current'

function CurrentOpeningsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MouseCursor />
      <FloatingIcons />
      <Header />
      <CurrentOpeningHero />
      <Current />
      <Footer />
    </div>
  )
}

export default CurrentOpeningsPage;