"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cloud, Database, Globe, Shield, Smartphone } from "lucide-react";

const industryTags = [
  { label: "Web Development", href: "/web-development" },
  { label: "Mobile Apps", href: "/application-development" },
  { label: "AI & Chatbot", href: "/software-development" },
  { label: "E-Commerce", href: "/ecommerce-solution" },
  { label: "Digital Marketing", href: "/seo-sem" },
];

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "16+", label: "Software Products" },
  { value: "10+", label: "Years Experience" },
  { value: "99.9%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d2a4a 0%, #0d325a 40%, #113d6e 70%, #0e4a7e 100%)",
        minHeight: "88vh",
      }}
    >
      {/* Animated background curves */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: "120px", overflow: "hidden" }}
      >
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <path d="M0,60 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="#00A88F" opacity="0.15" />
          <path d="M0,80 C480,20 960,120 1440,60 L1440,120 L0,120 Z" fill="#f0f4f8" />
        </svg>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-20 right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,168,143,0.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-[10%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,120,200,0.1) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ paddingTop: "80px", paddingBottom: "100px" }}>

          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#00A88F]/40 bg-[#00A88F]/10 text-[#00d4b4] text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A88F] animate-pulse"></span>
              Trusted by 500+ Businesses Across India
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Transforming{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00A88F, #00d4b4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Businesses
              </span>{" "}
              with Smart Technology
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-blue-200 text-lg leading-relaxed mb-8 max-w-xl"
              style={{ opacity: 0.85 }}
            >
              Shrote Technology delivers 16+ enterprise-grade software products & custom solutions — HRMS, ERP, AI Chatbots, E-Commerce & more. Powering India's digital future.
            </motion.p>

            {/* Industry Tags / CTA Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {industryTags.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:border-[#00A88F] hover:bg-[#00A88F]/10 transition-all duration-200"
                >
                  {tag.label}
                  <span
                    className="w-6 h-6 rounded-md flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: "#00A88F" }}
                  >
                    <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ background: "#00A88F" }}
              >
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                Book Free Consultation
              </Link>
            </motion.div>
          </div>

          {/* Right — Circular Image like Tudip */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div
              className="relative rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              style={{
                width: "420px",
                height: "420px",
                background: "linear-gradient(135deg, #0e3a65 0%, #1a4f8a 100%)",
              }}
            >
              {/* Decorative techy circles */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00A88F]/20"></div>
              <div className="absolute inset-4 rounded-full border border-[#00A88F]/10"></div>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #00A88F, #007a68)" }}>
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">AI-Powered Solutions</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  From HRMS to AI Chatbots — intelligent software for modern enterprises
                </p>

                {/* Floating icon badges */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { icon: <Globe size={18} />, label: "Web" },
                    { icon: <Smartphone size={18} />, label: "Apps" },
                    { icon: <Cloud size={18} />, label: "Cloud" },
                    { icon: <Database size={18} />, label: "Data" },
                    { icon: <Shield size={18} />, label: "Security" },
                    { icon: <Brain size={18} />, label: "AI" },
                  ].map((item) => (
                    <div key={item.label}
                      className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/10 border border-white/10">
                      <div className="text-[#00A88F]">{item.icon}</div>
                      <span className="text-white text-[10px] font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row — "Trusted by Leading Global Enterprises" style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 pb-16"
        >
          <p className="text-center text-white font-bold text-xl md:text-2xl mb-8 opacity-90">
            Trusted by Leading Enterprises Across India
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center py-6 px-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div
                  className="text-3xl md:text-4xl font-extrabold mb-1"
                  style={{
                    background: "linear-gradient(90deg, #00A88F, #00d4b4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
