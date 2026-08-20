"use client";

import { ArrowRight, Sparkles, Layout, BarChart2, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Features() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-4">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px]"
          style={{ background: "#eef7f5", color: "#00A88F" }}
        >
          <Sparkles size={14} /> Core Capabilities
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d2a4a] leading-tight">
            Innovative{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00A88F, #00d4b4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Features
            </span>{" "}
            For Your Digital Success
          </h2>
        </div>

        <div className="lg:w-1/2 lg:pt-2">
          <p className="text-[15.5px] text-[#5a7a9a] leading-relaxed mb-6">
            Our full-stack engineering and digital capabilities empower modern enterprises with high-velocity software, scalable architectures, and sustainable ROI.
          </p>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[13.5px] font-[600] transition-all shadow-sm hover:shadow-md"
            style={{ background: "#00A88F" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
          >
            <span>Explore All Capabilities</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Feature Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Large Left Card (7 cols) */}
        <div
          className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#e8f0f7] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
        >
          <div className="overflow-hidden rounded-2xl mb-6 relative h-64 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="Custom Branding & Digital Architecture"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-bold text-[#00A88F] border border-white/60">
              Enterprise Engineering
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0d2a4a] mb-2 group-hover:text-[#00A88F] transition-colors">
              Custom Software & Brand Architecture
            </h3>
            <p className="text-[14px] text-[#5a7a9a] leading-relaxed mb-4">
              Unique brand identity systems, Figma design tokens, scalable microservices backends, and responsive Next.js web applications built for zero downtime.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#f0f5fa]">
              {["Design Tokens", "Next.js SPAs", "GraphQL APIs", "CI/CD Deployment"].map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-full text-[11.5px] font-medium bg-[#f0f5fa] text-[#0d2a4a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card (5 cols) */}
        <div
          className="md:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#e8f0f7] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
        >
          <div className="overflow-hidden rounded-2xl mb-6 relative h-64 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              alt="Data-Driven Digital Strategy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-bold text-[#0d2a4a] border border-white/60">
              Growth & Analytics
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0d2a4a] mb-2 group-hover:text-[#00A88F] transition-colors">
              Data-Driven Growth & Optimization
            </h3>
            <p className="text-[14px] text-[#5a7a9a] leading-relaxed mb-4">
              Performance marketing, predictive user cohort modeling, high-ROI search engine optimization, and real-time BI attribution dashboards.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#f0f5fa]">
              {["Technical SEO", "Conversion Funnels", "Core Web Vitals"].map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-full text-[11.5px] font-medium bg-[#f0f5fa] text-[#0d2a4a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
