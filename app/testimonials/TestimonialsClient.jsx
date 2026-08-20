"use client";
import React from 'react';
import Header from '../Header';
import TestimonialsHero from './TestimonialsHero';
import Footer from '../components/Footer';
import Testimoni from './Testimoni';

function TestimonialsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />
      <TestimonialsHero />
      <Testimoni />
      <Footer />
    </div>
  );
}

export default TestimonialsPage;