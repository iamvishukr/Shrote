"use client";

import React from "react";
import { DollarSign, Cpu, ShieldCheck, Headphones, CheckCircle2, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Low Cost & High ROI",
      badge: "Cost Efficiency",
      icon: DollarSign,
      description: "Optimized architecture and flexible billing models that cut operational overhead.",
      benefits: ["Competitive fee structure", "Flexible on-demand rates", "No hidden infrastructure costs"],
      accentColor: "#00A88F",
      bgLight: "#eef7f5",
    },
    {
      id: 2,
      title: "Permission-Less & Open",
      badge: "Full Ownership",
      icon: Cpu,
      description: "Seamless API integrations and zero vendor lock-in for enterprise freedom.",
      benefits: ["Open for third-party integration", "Run & deploy on your own nodes", "Modular plug-and-play code"],
      accentColor: "#3b82f6",
      bgLight: "#eff6ff",
    },
    {
      id: 3,
      title: "Secure & Encrypted Data",
      badge: "Bank-Grade Security",
      icon: ShieldCheck,
      description: "End-to-end data encryption and complete compliance with global privacy standards.",
      benefits: ["Open source audit compliance", "360° security & threat shielding", "Automated backup & disaster recovery"],
      accentColor: "#8b5cf6",
      bgLight: "#f5f3ff",
    },
    {
      id: 4,
      title: "24/7 Dedicated Support",
      badge: "Instant SLA",
      icon: Headphones,
      description: "Round-the-clock technical assistance with dedicated account managers.",
      benefits: ["Toll-free priority hotline", "Instant ticketing system", "99.9% guaranteed uptime SLA"],
      accentColor: "#f59e0b",
      bgLight: "#fffbeb",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
          style={{ background: "#eef7f5", color: "#00A88F" }}
        >
          <Sparkles size={14} /> Key Value Propositions
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight">
          Engineered for Enterprise Scalability & Security
        </h2>
        <p className="text-[15px] text-[#6b8ba8] mt-3 leading-relaxed">
          We combine transparent pricing, open-standard engineering, military-grade security, and round-the-clock human support.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
              style={{ border: "1px solid #e8f0f7" }}
            >
              {/* Top Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 group-hover:h-[4px]"
                style={{ background: feature.accentColor }}
              />

              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-13 h-13 p-3 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: feature.bgLight, color: feature.accentColor }}
                  >
                    <Icon size={26} strokeWidth={2.2} />
                  </div>
                  <span
                    className="text-[11px] font-[700] px-2.5 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: feature.bgLight, color: feature.accentColor }}
                  >
                    {feature.badge}
                  </span>
                </div>

                {/* Title & description */}
                <h3 className="text-lg font-bold text-[#0d2a4a] mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-[#6b8ba8] mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 pt-4 border-t" style={{ borderColor: "#f0f5fa" }}>
                  {feature.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-[13px] text-[#2c4a6a]">
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: feature.accentColor }}
                      />
                      <span className="font-[500] leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

