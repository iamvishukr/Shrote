"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const filters = ["All", "Mobile Apps", "Web Development", "E-Commerce", "SEO & Marketing", "Web Design", "Software"];

const projects = [
  {
    id: 110,
    title: "HITM Academic & Student Portal",
    description: "Full-scale institutional web portal & academic ERP for HITM — featuring online student admissions, digital fee collection, course management, syllabus repository & exam results.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    category: "Web Development",
    tags: ["Next.js", "EdTech Portal", "Fee Gateway", "Student ERP"],
    url: "https://www.shrote.com/web-development",
    year: "2026",
    isNew: true,
  },
  {
    id: 111,
    title: "Shrote Enterprise HRMS Suite",
    description: "Cloud-native HR Management Software handling end-to-end employee lifecycle, payroll processing (PF/ESI/TDS), digital onboarding, performance appraisals & self-service employee portal.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    category: "Software",
    tags: ["HRMS", "Automated Payroll", "Compliance", "Cloud SaaS"],
    url: "https://www.shrote.com/products",
    year: "2026",
    isNew: true,
  },
  {
    id: 112,
    title: "Smart Geo-Fenced Attendance System",
    description: "Touchless biometric & GPS geo-fenced attendance tracking software with real-time shift scheduling, automated overtime calculation, facial recognition check-in & leave approvals.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    category: "Software",
    tags: ["Geo-Fencing", "Biometric Sync", "Mobile Check-In", "Shift Rota"],
    url: "https://www.shrote.com/products",
    year: "2026",
    isNew: true,
  },
  {
    id: 120,
    title: "AuraAI Autonomous Support Agent",
    description: "Multi-channel autonomous AI customer support and lead qualification platform with live CRM synchronization, vector RAG database retrieval, and real-time sentiment analytics.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
    category: "Software",
    tags: ["Autonomous AI", "LangChain", "LLM Agent", "FastAPI"],
    url: "https://www.shrote.com/products",
    year: "2025",
  },
  {
    id: 121,
    title: "SupplyChainX Enterprise ERP Suite",
    description: "End-to-end multi-location warehouse management ERP system with live barcode tracking, automated purchase order pipelines, and GST e-invoicing compliance.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    category: "Software",
    tags: ["ERP Suite", "Inventory", "Barcoding", "Node.js"],
    url: "https://www.shrote.com/products",
    year: "2025",
  },
  {
    id: 122,
    title: "FinTrack Wealth & Investment App",
    description: "Next-gen investment and wealth tracking mobile app with automated mutual fund SIP portfolios, live stock market feeds, and instant DigiLocker KYC verification.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    category: "Mobile Apps",
    tags: ["Flutter", "Fintech API", "UPI Gateway", "Firebase"],
    url: "https://www.shrote.com/application-development",
    year: "2025",
  },
  {
    id: 123,
    title: "OmniStore Multi-Vendor D2C Platform",
    description: "High-concurrency headless D2C marketplace with AI product recommendations, 1-click checkout, automated carrier fulfillment routing, and vendor analytics.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    category: "E-Commerce",
    tags: ["Next.js", "Headless Shopify", "Stripe", "Tailwind"],
    url: "https://www.shrote.com/ecommerce-solution",
    year: "2025",
  },
  {
    id: 124,
    title: "EduVibe Live Learning & LMS Platform",
    description: "Interactive EdTech platform with HD live streaming classrooms, automated assignment evaluation, gamified leaderboards, and instant certificate generation.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    category: "Web Development",
    tags: ["Next.js", "WebRTC Video", "LMS", "AWS Cloud"],
    url: "https://www.shrote.com/web-development",
    year: "2025",
  },
  {
    id: 0,
    title: "Shrote Technology Platform",
    description: "Complete enterprise website architecture with Next.js 14, Tailwind CSS, Framer Motion animations, Firebase Firestore & Web3Forms integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    category: "Web Development",
    tags: ["Next.js 14", "Tailwind CSS", "Firebase"],
    url: "https://www.shrote.com/",
    year: "2025",
    isNew: true,
  },
  {
    id: 101,
    title: "BlueTees Golf Companion App",
    description: "Cross-platform mobile app featuring real-time GPS rangefinder, scorecard tracking, handicap calculation & Bluetooth device connectivity.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800&auto=format&fit=crop",
    category: "Mobile Apps",
    tags: ["Flutter", "iOS & Android", "BLE", "Firebase"],
    url: "https://www.shrote.com/application-development",
    year: "2025",
  },
  {
    id: 102,
    title: "FitPulse Health & Workout Tracker",
    description: "AI-powered mobile fitness application with Apple Health & Google Fit synchronization, custom workout builders & heart rate monitoring.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    category: "Mobile Apps",
    tags: ["React Native", "AI Plans", "HealthKit", "Node.js"],
    url: "https://www.shrote.com/application-development",
    year: "2025",
  },
  {
    id: 103,
    title: "QuickServe Delivery Driver App",
    description: "On-demand hyper-local logistics and dispatch mobile app with live GPS turn-by-turn routing, instant wallet payouts & customer chat.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=800&auto=format&fit=crop",
    category: "Mobile Apps",
    tags: ["Flutter", "Google Maps API", "WebSocket", "Razorpay"],
    url: "https://www.shrote.com/application-development",
    year: "2025",
  },
  {
    id: 104,
    title: "MediCare Telehealth Video App",
    description: "Secure telemedicine mobile app connecting patients with certified doctors for encrypted HD video consultations, digital Rx, and appointment booking.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    category: "Mobile Apps",
    tags: ["React Native", "WebRTC", "HIPAA Compliant", "AWS"],
    url: "https://www.shrote.com/application-development",
    year: "2025",
  },
  {
    id: 1,
    title: "NES Electrical Supplies",
    description: "Full e-commerce platform for industrial electrical supply needs — product catalog, cart, checkout & admin panel.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    category: "E-Commerce",
    tags: ["E-Commerce", "Next.js", "Payment Gateway"],
    url: "https://www.neselectricalsupplies.com/",
    year: "2025",
  },
  {
    id: 2,
    title: "Luxify Digital Agency",
    description: "A premium global digital marketing agency website that builds captivating brand experiences.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    category: "SEO & Marketing",
    tags: ["SEO", "Digital Marketing", "Analytics"],
    url: "https://luxifydigital.com/",
    year: "2025",
  },
  {
    id: 3,
    title: "Zealwise Technologies",
    description: "Technology-driven company website delivering innovative enterprise solutions with modern design.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    category: "Web Development",
    tags: ["Web Dev", "React", "Microservices"],
    url: "https://zealwise.com/",
    year: "2025",
  },
  {
    id: 4,
    title: "Knowledge C Portal",
    description: "Knowledge C Distribution Portal — enterprise-grade web application for managing distribution networks.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    category: "Web Design",
    tags: ["Web Design", "UI/UX", "Enterprise"],
    url: "https://appvenuz.com/",
    year: "2025",
  },
  {
    id: 5,
    title: "Gentium Luxury Retail",
    description: "Technology-driven e-commerce platform delivering innovative enterprise solutions with seamless UX.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    category: "E-Commerce",
    tags: ["E-Commerce", "Shopify", "UX"],
    url: "https://www.gentium.in/",
    year: "2023",
  },
  {
    id: 6,
    title: "Mind Spa Wellness",
    description: "Wellness & mental health platform — appointment booking, blog, and SEO-optimized landing pages.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    category: "SEO & Marketing",
    tags: ["SEO", "WordPress", "Healthcare"],
    url: "https://www.mindspa.in/",
    year: "2023",
  },
  {
    id: 7,
    title: "Casseva Beauty Store",
    description: "High-conversion cosmetics and skincare e-commerce storefront with cart & payment gateways.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    category: "E-Commerce",
    tags: ["E-Commerce", "Cosmetics", "Stripe"],
    url: "https://cassevabeauty.com/",
    year: "2023",
  },
  {
    id: 8,
    title: "Bionova Nutraceuticals",
    description: "Healthcare e-commerce portal with prescription management, wholesale pricing & instant checkout.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
    category: "E-Commerce",
    tags: ["Healthcare", "E-Commerce", "Direct-to-Consumer"],
    url: "https://bionovastore.com/",
    year: "2023",
  },
  {
    id: 9,
    title: "Jaladhama Luxury Resort",
    description: "Hospitality booking engine with real-time room availability, virtual tours, and SEO optimization.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    category: "SEO & Marketing",
    tags: ["Hospitality", "SEO", "Booking Engine"],
    url: "https://jaladhama.net/",
    year: "2023",
  },
  {
    id: 10,
    title: "Blubirch Reverse Commerce",
    description: "Enterprise reverse logistics and inventory management system with automated analytics.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    category: "Software",
    tags: ["Enterprise Software", "Logistics", "Cloud"],
    url: "https://www.blubirch.com/",
    year: "2023",
  },
  {
    id: 11,
    title: "Karnataka Furnishing",
    description: "Interior design showcase and custom home furnishing catalog with high-resolution image galleries.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    category: "Web Design",
    tags: ["Web Design", "Interior", "Gallery"],
    url: "https://karnatakafurnishing.com/",
    year: "2023",
  },
];


function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
      style={{
        background: "#fff",
        border: "1px solid #e8f0f7",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.08)" : "0 4px 16px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: "230px" }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
            onError={e => { e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"; }}
          />

          {/* New Badge */}
          {project.isNew && (
            <div
              className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-[11px] font-[700] uppercase tracking-wide text-white"
              style={{ background: "#00A88F" }}
            >
              ✦ Featured
            </div>
          )}

          {/* Year badge */}
          <div
            className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full text-[11px] font-[600] text-[#0d2a4a] bg-white/90 backdrop-blur-md border border-white/60"
          >
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-[500]"
                style={{ background: "#eef7f5", color: "#00A88F" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3
            className="font-bold text-[17px] mb-2 leading-snug transition-colors duration-150"
            style={{ color: hovered ? "#00A88F" : "#0d2a4a" }}
          >
            {project.title}
          </h3>
          <p className="text-[13.5px] leading-relaxed" style={{ color: "#5a7a9a" }}>
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <div className="pt-4 border-t border-[#f0f5fa] flex items-center justify-between">
          <span
            className="text-[11.5px] font-[700] uppercase tracking-wide px-3 py-1 rounded-full"
            style={{ background: "#f0f5fa", color: "#0d2a4a" }}
          >
            {project.category}
          </span>
          <span className="text-[12px] font-medium text-[#7a9ab5]">
            Enterprise Case Study
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#f5f9fd" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-[12px] font-[700] uppercase tracking-[2px] mb-3"
            style={{ color: "#00A88F" }}
          >
            Our Work
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: "#0d2a4a" }}
          >
            Featured Projects
          </h2>
          <p className="text-[15px] max-w-2xl mx-auto" style={{ color: "#6a8aaa" }}>
            Explore our portfolio of 200+ successful projects — web apps, e-commerce platforms, mobile apps and enterprise software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-2 rounded-full text-[13px] font-[500] border transition-all duration-200"
              style={{
                background: activeFilter === f ? "#00A88F" : "#fff",
                color: activeFilter === f ? "#fff" : "#1a2e44",
                borderColor: activeFilter === f ? "#00A88F" : "#dde8f2",
                boxShadow: activeFilter === f ? "0 4px 12px rgba(0,168,143,0.25)" : "none",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-[600] text-[14px] transition-all duration-200"
            style={{ background: "#00A88F" }}
            onMouseEnter={e => e.currentTarget.style.background = "#008f79"}
            onMouseLeave={e => e.currentTarget.style.background = "#00A88F"}
          >
            Start Your Project <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
