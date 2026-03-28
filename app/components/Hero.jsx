"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "16+", label: "Software Products" },
  { value: "98%", label: "Client Retention" },
  { value: "10+", label: "Years Experience" },
];

const dynamicTexts = [
  "HRMS & ERP Suite",
  "AI Chatbot & Agents",
  "E-Commerce Platform",
  "Payroll & Accounting",
  "Health Monitoring AI",
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden min-h-[100vh] flex flex-col justify-center">
        {/* Background video removed, using CSS particles and gradient instead */}

        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1]" style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,5,20,0.78) 50%, rgba(0,0,0,0.88) 100%)"
        }}></div>

        {/* Animated floating particles */}
        <div className="absolute inset-0 z-[2] overflow-hidden">
          <div className="hero-particle" style={{ left: "10%", top: "20%", animationDelay: "0s" }}></div>
          <div className="hero-particle" style={{ left: "25%", top: "70%", animationDelay: "2s" }}></div>
          <div className="hero-particle" style={{ left: "50%", top: "30%", animationDelay: "4s" }}></div>
          <div className="hero-particle" style={{ left: "70%", top: "60%", animationDelay: "1s" }}></div>
          <div className="hero-particle" style={{ left: "85%", top: "15%", animationDelay: "3s" }}></div>
          <div className="hero-particle" style={{ left: "40%", top: "80%", animationDelay: "5s" }}></div>
          <div className="hero-particle" style={{ left: "60%", top: "45%", animationDelay: "2.5s" }}></div>
          <div className="hero-particle" style={{ left: "15%", top: "50%", animationDelay: "3.5s" }}></div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-[20%] left-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] z-[2] hero-orb-1"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-cyan-500/8 rounded-full blur-[60px] md:blur-[100px] z-[2] hero-orb-2"></div>
        <div className="absolute top-[60%] left-[50%] w-[180px] h-[180px] md:w-[300px] md:h-[300px] bg-purple-600/6 rounded-full blur-[70px] md:blur-[110px] z-[2] hero-orb-3"></div>

        {/* Grid dots */}
        <div className="absolute inset-0 z-[2] opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.5) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}></div>

        <div className="relative z-[10] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
          {/* Main heading — mobile-first responsive */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.1] tracking-tight mb-1 sm:mb-2">
            Powering Enterprises
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-300/90 leading-[1.2] mb-3 sm:mb-4">
            with Intelligent
          </p>

          {/* Dynamic rotating text */}
          <div className="mb-6 sm:mb-8" style={{ minHeight: "45px" }}>
            <span
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold inline-block"
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 50%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(15px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              {dynamicTexts[currentTextIndex]}
            </span>
          </div>

          <p className="text-gray-300/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8 sm:mb-10">
            Shrote Technology delivers <strong className="text-white font-semibold">16+ enterprise-grade software products</strong> — from HRMS and ERP to AI Agents, E-Commerce, and Health Monitoring — designed to transform how businesses operate at scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16">
            <Link
              href="#products"
              className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-full font-bold text-white text-sm sm:text-base"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:opacity-90"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                boxShadow: "0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(34,211,238,0.2)"
              }}></span>
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] text-white font-semibold rounded-full hover:bg-white/[0.15] hover:border-white/[0.25] transition-all duration-300 text-sm sm:text-base"
            >
              Talk to Our Team
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-0.5 sm:mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050508] to-transparent z-[5]"></div>
      </section>

      {/* Scrolling product ribbon */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 py-3 sm:py-4">
        <div className="ribbon-scroll-rtl">
          <div className="ribbon-content-rtl">
            <span className="ribbon-text">HRMS Suite</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">ERP Platform</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">AI Chatbot</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">E-Commerce</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">Payroll Software</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">Health Monitoring AI</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">AI Agents</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">Inventory Management</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">School Management</span>
            <span className="ribbon-separator">✱</span>
          </div>
        </div>
      </div>
    </>
  );
}
