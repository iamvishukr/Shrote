"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ContentStrategy() {
  const tools = [
    { name: "Next.js", desc: "React Framework", color: "#000000" },
    { name: "Node.js", desc: "Backend Engine", color: "#339933" },
    { name: "AWS Cloud", desc: "Cloud Hosting", color: "#FF9900" },
    { name: "Docker", desc: "Containerization", color: "#2496ED" },
    { name: "Tailwind CSS", desc: "Modern Styling", color: "#06B6D4" },
    { name: "Firebase", desc: "Realtime Data", color: "#FFCA28" },
    { name: "MongoDB", desc: "NoSQL Database", color: "#47A248" },
    { name: "PostgreSQL", desc: "SQL Relational", color: "#4169E1" },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-sm"
        style={{ border: "1px solid #e8f0f7" }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
              style={{ background: "#eef7f5", color: "#00A88F" }}
            >
              <Sparkles size={14} /> Technology Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0d2a4a] leading-tight">
              Enterprise Technology Stack & Tooling
            </h2>
            <p className="text-[#5a7a9a] text-[15px] mt-3 leading-relaxed">
              We leverage production-proven open-source engines, enterprise cloud platforms, and microservices architectures to build reliable, high-performance digital products.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[13.5px] font-[600] transition-all flex-shrink-0"
            style={{ background: "#00A88F" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
          >
            Schedule Consultation <ArrowRight size={15} />
          </Link>
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((t, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#f8fafc] border border-[#eef2f6] hover:border-[#00A88F]/40 hover:bg-[#f0f9f7] transition-all flex flex-col justify-center"
            >
              <span className="font-bold text-[#0d2a4a] text-[15px]">{t.name}</span>
              <span className="text-[#6b8ba8] text-[12.5px] mt-0.5">{t.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
