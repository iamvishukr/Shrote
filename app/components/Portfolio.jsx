"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink, ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Mobile Apps", "Web Development", "E-Commerce", "SEO & Marketing", "Web Design", "Software"];

  const projects = [
    {
      id: 110,
      title: "HITM Academic & Student Portal",
      category: "Web Development",
      tags: ["Next.js", "EdTech Portal", "Fee Gateway", "Student ERP"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      url: "/web-development",
      year: "2026",
      isNew: true,
      description: "Comprehensive institutional web portal & student ERP for HITM with online admissions, course syllabi & fee collection.",
    },
    {
      id: 111,
      title: "Shrote Enterprise HRMS Suite",
      category: "Software",
      tags: ["HRMS", "Automated Payroll", "Compliance", "Cloud SaaS"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
      url: "/products",
      year: "2026",
      isNew: true,
      description: "Cloud HR Management Software handling complete employee lifecycle, automated payroll processing & self-service employee portal.",
    },
    {
      id: 112,
      title: "Smart Geo-Fenced Attendance System",
      category: "Software",
      tags: ["Geo-Fencing", "Biometric Sync", "Mobile Check-In", "Shift Rota"],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
      url: "/products",
      year: "2026",
      isNew: true,
      description: "Touchless biometric & GPS geo-fenced attendance tracking software with real-time shift scheduling and overtime analytics.",
    },
    {
      id: 1,
      title: "Shrote Technology Platform",
      category: "Web Development",
      tags: ["Next.js 14", "Tailwind CSS", "Firebase"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      url: "https://www.shrote.com/",
      year: "2026",
      isNew: true,
      description: "Full enterprise architecture with Next.js 14 App Router, responsive design system & Firestore integrations.",
    },
    {
      id: 101,
      title: "BlueTees Golf Companion App",
      category: "Mobile Apps",
      tags: ["Flutter", "iOS & Android", "BLE", "Firebase"],
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800&auto=format&fit=crop",
      url: "/application-development",
      year: "2024",
      isNew: true,
      description: "Cross-platform golf GPS rangefinder mobile app with instant Bluetooth device sync and live player scorecards.",
    },
    {
      id: 102,
      title: "FitPulse Health & Workout Tracker",
      category: "Mobile Apps",
      tags: ["React Native", "HealthKit", "AI Plans"],
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
      url: "/application-development",
      year: "2024",
      description: "AI-powered mobile fitness application with Apple Health & Google Fit synchronization and real-time heart rate stats.",
    },
    {
      id: 2,
      title: "NES Electrical Supplies",
      category: "E-Commerce",
      tags: ["E-Commerce", "Next.js", "Payment Gateway"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      url: "https://www.neselectricalsupplies.com/",
      year: "2024",
      description: "End-to-end electrical supply store with custom catalog, live cart, automated billing & inventory management.",
    },
    {
      id: 3,
      title: "Luxify Digital Agency",
      category: "SEO & Marketing",
      tags: ["SEO", "Digital Marketing", "Analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      url: "https://luxifydigital.com/",
      year: "2024",
      description: "Global digital marketing agency platform engineered with headless CMS and high-speed core web vitals.",
    },
    {
      id: 4,
      title: "Zealwise Technologies",
      category: "Web Development",
      tags: ["React", "Cloud Microservices"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      url: "https://zealwise.com/",
      year: "2024",
      description: "Technology consulting corporate website delivering high-impact solutions with modern animations.",
    },
    {
      id: 5,
      title: "Knowledge C Distribution Portal",
      category: "Web Design",
      tags: ["UI/UX", "Enterprise Portal"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
      url: "https://appvenuz.com/",
      year: "2024",
      description: "Enterprise-grade web application for managing multi-tier distribution networks and order workflows.",
    },
    {
      id: 6,
      title: "Gentium Luxury Retail",
      category: "E-Commerce",
      tags: ["Shopify", "E-Commerce", "UX"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      url: "https://www.gentium.in/",
      year: "2023",
      description: "High-converting bespoke e-commerce storefront with integrated payment gateway and live shipping tracking.",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
            style={{ background: "#eef7f5", color: "#00A88F" }}
          >
            <Sparkles size={14} /> Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d2a4a] tracking-tight">
            Recent Client <span style={{
              background: "linear-gradient(90deg, #00A88F, #00d4b4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Deliveries</span> & Case Studies
          </h2>
        </div>

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-[14px] font-bold text-[#00A88F] hover:underline"
        >
          View All 200+ Projects <ArrowRight size={16} />
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className="px-4 py-2 rounded-full text-[13px] font-[600] border transition-all duration-200"
            style={{
              background: activeFilter === f ? "#00A88F" : "#ffffff",
              color: activeFilter === f ? "#ffffff" : "#0d2a4a",
              borderColor: activeFilter === f ? "#00A88F" : "#e8f0f7",
              boxShadow: activeFilter === f ? "0 4px 12px rgba(0,168,143,0.25)" : "none",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#e8f0f7] hover:border-[#00A88F]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {project.isNew && (
                <div
                  className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[11px] font-bold text-white uppercase tracking-wider"
                  style={{ background: "#00A88F" }}
                >
                  ✦ Latest Launch
                </div>
              )}

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11.5px] font-bold text-[#0d2a4a]">
                {project.year}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#eef7f5] text-[#00A88F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-[#0d2a4a] mb-2 group-hover:text-[#00A88F] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-[13px] text-[#5a7a9a] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f5fa] flex items-center justify-between">
                <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#0d2a4a] bg-[#f0f5fa] px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-[12px] font-medium text-[#7a9ab5]">
                  Case Study
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

