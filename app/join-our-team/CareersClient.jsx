"use client";
import Footer from '@/app/components/Footer'
import Header from '@/app/Header'
import React from 'react'
import JoinOurTeam from './JoinOurTeam'
import JoinOurTeamHero from './JoinOurTeamHero'

function CareersPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />
      <JoinOurTeamHero />
      <JoinOurTeam />
      <Footer />
    </div>
  )
}

export default CareersPage;