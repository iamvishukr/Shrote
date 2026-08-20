"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

export default function CaseStudies() {
  const studies = [
    {
      id: 110,
      title: "HITM Academic & Student ERP: Digitizing Higher Education",
      description: "How Shrote Technology engineered a centralized academic portal and student lifecycle ERP for HITM — automating online admissions, syllabus delivery, fee receipts, and examination grading.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      category: "EdTech & Web Portal",
      url: "/web-development",
      metrics: "5,000+ Students Onboarded • 100% Paperless Admissions",
    },
    {
      id: 111,
      title: "Shrote Enterprise HRMS & Smart Attendance Suite",
      description: "How our cloud-native HRMS with GPS geo-fenced biometric tracking eliminated manual timekeeping, automated monthly multi-tier payroll, and reduced compliance processing time by 85%.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
      category: "Enterprise Software & HRMS",
      url: "/products",
      metrics: "85% Faster Payroll • Zero Geo-Fencing Spoofing",
    },
    {
      id: 1,
      title: "NES Electrical Supplies: High-Velocity E-Commerce Engine",
      description: "How custom Next.js full-stack architecture powered automated billing, real-time inventory synchronization, and accelerated checkout conversions.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      category: "E-Commerce Architecture",
      url: "https://www.neselectricalsupplies.com/",
      metrics: "3.4x Faster Checkouts • 99.99% Uptime",
    },
    {
      id: 2,
      title: "Luxify Digital: Scaling Organic Search & Lead Inflow",
      description: "How technical SEO architecture, structured schemas, and headless content hubs delivered top 3 Google SERP rankings in hyper-competitive niches.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      category: "SEO & Digital Strategy",
      url: "https://luxifydigital.com/",
      metrics: "+280% Organic Traffic • 4.2x Lead Velocity",
    },
  ];

  return (
    <section className="py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight">
          Featured <span style={{
            background: "linear-gradient(90deg, #00A88F, #00d4b4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Case Studies</span>
        </h2>
        <p className="text-[#5a7a9a] text-[15px] mt-2">
          Discover how Shrote Technology solves complex challenges for industry leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {studies.map((study) => (
          <div
            key={study.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#e8f0f7] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11.5px] font-bold text-[#00A88F] border border-white/60">
                {study.category}
              </div>
            </div>

            <div className="p-7 flex flex-col flex-1 justify-between">
              <div>
                <div className="text-[12px] font-bold text-[#00A88F] mb-2 uppercase tracking-wide">
                  {study.metrics}
                </div>
                <h3 className="text-xl font-bold text-[#0d2a4a] mb-3 group-hover:text-[#00A88F] transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-[#5a7a9a] text-[14px] leading-relaxed mb-6">
                  {study.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f5fa] flex items-center justify-between">
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#00A88F] hover:underline"
                >
                  <span>Explore Live Project</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
