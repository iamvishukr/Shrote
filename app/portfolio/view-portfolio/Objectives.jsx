"use client";

import { Sparkles, Layout, Smartphone } from "lucide-react";

export default function Objectives() {
  return (
    <section className="py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
          style={{ background: "#eef7f5", color: "#00A88F" }}
        >
          <Sparkles size={14} /> Engineering Challenges & Scope
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight">
          Project Core <span style={{
            background: "linear-gradient(90deg, #00A88F, #00d4b4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Objectives</span>
        </h2>
        <p className="text-[#5a7a9a] text-[15px] mt-3 leading-relaxed">
          The platform required a modern, accessible user experience integrated with high-concurrency database queries, location-based practitioner filtering, and zero-downtime scalability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-[#e8f0f7] shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: "#00A88F" }}>
              <Layout size={20} />
            </div>
            <h3 className="text-xl font-bold text-[#0d2a4a]">UI/UX Experience Architecture</h3>
          </div>
          <p className="text-[#5a7a9a] text-[14px] leading-relaxed mb-6">
            A key challenge was engineering dual-portal UX for healthcare professionals and patients. We created accessible design systems in Figma with WCAG 2.1 compliance, intuitive appointment funnels, and soothing color psychology.
          </p>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
            alt="Mobile UI Design"
            className="rounded-2xl w-full h-64 object-cover"
          />
        </div>

        <div className="bg-white rounded-3xl p-8 border border-[#e8f0f7] shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: "#0d2a4a" }}>
              <Smartphone size={20} />
            </div>
            <h3 className="text-xl font-bold text-[#0d2a4a]">Geo-Targeted Performance Engine</h3>
          </div>
          <p className="text-[#5a7a9a] text-[14px] leading-relaxed mb-6">
            We implemented sub-second geolocation spatial indexing, allowing users to match with certified specialists nearby with instant filtering, real-time calendar availability, and automated SMS reminders.
          </p>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
            alt="Web App Development"
            className="rounded-2xl w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

