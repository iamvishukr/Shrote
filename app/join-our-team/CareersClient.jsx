"use client";
import FloatingIcons from '@/app/components/FloatingIcons'
import Footer from '@/app/components/Footer'
import MouseCursor from '@/app/components/MouseCursor'
import Header from '@/app/Header'
import React from 'react'
import JoinOurTeam from './JoinOurTeam'
import JoinOurTeamHero from './JoinOurTeamHero'

function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MouseCursor />
      <FloatingIcons />
      <Header />
      <JoinOurTeamHero />
      <JoinOurTeam />
      <Footer />
    </div>
  )
}

export default CareersPage;