"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

function useIntersection(opts = {}) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } }, { threshold: 0.15, ...opts });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

const services = [
  {
    title: "Web Development",
    description: "We build fast, responsive, SEO-optimized websites and web applications using React, Next.js, Node.js, and modern frameworks — tailored for enterprise scale and performance.",
    features: ["React & Next.js", "Progressive Web Apps", "Custom CMS", "API Development"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: "from-blue-600 to-cyan-500",
    glow: "bg-blue-500/20",
    slug: "web-development",
  },
  {
    title: "AI Agent Development",
    description: "We design and deploy custom AI agents powered by LLMs that automate workflows, extract insights, handle complex reasoning tasks, and seamlessly integrate into your business systems.",
    features: ["LLM Integration", "RAG Pipelines", "Tool Calling", "Custom Fine-tuning"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    gradient: "from-fuchsia-600 to-pink-500",
    glow: "bg-fuchsia-500/20",
    slug: "ai-agent-development",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform and native mobile app development for Android using React Native, Flutter, and Kotlin. From concept to Play Store launch — we handle the complete lifecycle.",
    features: ["React Native", "Flutter", "Kotlin/Java", "Play Store Launch"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-400",
    glow: "bg-green-500/20",
    slug: "mobile-app-development",
  },
  {
    title: "iOS App Development",
    description: "Premium iOS application development using Swift and SwiftUI. We create pixel-perfect, high-performance apps that meet Apple's design standards and App Store guidelines.",
    features: ["Swift & SwiftUI", "App Store Optimization", "Core Data", "Apple Design Guidelines"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    gradient: "from-gray-500 to-slate-400",
    glow: "bg-gray-500/20",
    slug: "ios-app-development",
  },
  {
    title: "IoT Software Development",
    description: "End-to-end IoT software solutions — from device firmware and edge computing to cloud dashboards and real-time data analytics. We connect your devices to intelligent systems.",
    features: ["Device Firmware", "Edge Computing", "Cloud Dashboards", "MQTT & Protocols"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    gradient: "from-orange-500 to-yellow-400",
    glow: "bg-orange-500/20",
    slug: "iot-software-development",
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing services including SEO, SEM, social media marketing, content marketing, and analytics — all driven by data and focused on measurable ROI.",
    features: ["SEO & On-page", "Google Ads (SEM)", "Social Media", "Content Marketing"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-400",
    glow: "bg-amber-500/20",
    slug: "digital-marketing",
  },
];

export default function ServicesSection() {
  const [headerRef, headerVis] = useIntersection();

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060610]"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-700/[0.04] rounded-full blur-[140px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700/[0.04] rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVis ? 1 : 0,
            transform: headerVis ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span></span>
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Development Services{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              We Offer
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Beyond our product suite, we provide end-to-end custom development services — from web and mobile to AI agents and IoT solutions — engineered for your business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}

          {/* Talk to us CTA card */}
          <TalkCard />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const [ref, vis] = useIntersection();
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(35px)",
        transition: `all 0.6s cubic-bezier(.4,0,.2,1) ${index * 0.08}s`,
      }}
      className="group relative rounded-2xl overflow-hidden"
    >
      {/* Hover border */}
      <div className={`absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}></div>

      <div className="relative z-10 bg-[#0a0a14] rounded-2xl p-7 h-full flex flex-col gap-5 group-hover:bg-[#0e0e1a] transition-colors duration-500">
        {/* Glow */}
        <div className={`absolute -top-10 -right-10 w-40 h-40 ${service.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

        {/* Icon */}
        <div className="relative">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-50 transition-colors">{service.title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors flex-1">{service.description}</p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2">
          {service.features.map((f, i) => (
            <span key={i} className="text-[11px] px-3 py-1 rounded-full bg-white/[0.05] text-gray-400 group-hover:bg-white/[0.1] group-hover:text-gray-200 transition-all duration-300 font-medium">
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link href={`/services/${service.slug}`} className="flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-purple-400 transition-all duration-300 pt-1">
          Learn More
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function TalkCard() {
  const [ref, vis] = useIntersection();
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(35px)",
        transition: "all 0.6s cubic-bezier(.4,0,.2,1) 0.4s",
      }}
      className="group relative rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1"
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 bg-[#0a0a14] rounded-2xl p-7 h-full flex flex-col items-center justify-center text-center gap-5 min-h-[320px] group-hover:bg-[#0e0e1a] transition-colors duration-500">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Have a Custom Idea?</h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">We love turning ambitious ideas into reality. Let's discuss your project and create something extraordinary together.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          Let's Talk
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </div>
  );
}
