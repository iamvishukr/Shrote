"use client";

import React from "react";
import { Handshake } from "lucide-react";

const techPartners = [
  { name: "Amazon Web Services", category: "Cloud Infrastructure", badge: "AWS Partner" },
  { name: "Google Cloud Platform", category: "AI & Analytics", badge: "GCP Certified" },
  { name: "Microsoft Azure", category: "Enterprise Cloud", badge: "Gold Tier" },
  { name: "MongoDB Atlas", category: "NoSQL Database", badge: "Technology Partner" },
  { name: "OpenAI Ecosystem", category: "Generative AI", badge: "AI Solution Partner" },
  { name: "Stripe & Razorpay", category: "Payment Gateways", badge: "Fintech Partner" },
];

const ExecutivePartners = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm"
        style={{ border: "1px solid #e8f0f7" }}
      >
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Left Heading */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
              style={{ background: "#eef7f5", color: "#00A88F" }}
            >
              <Handshake size={14} /> Technology Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight leading-tight">
              100+ Enterprise <span style={{
                background: "linear-gradient(90deg, #00A88F, #00d4b4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Partners</span> & Cloud Integrations
            </h2>
            <p className="text-[14px] text-[#6b8ba8] mt-3 leading-relaxed">
              We engineer on top of globally certified platforms to guarantee enterprise resilience and security.
            </p>
          </div>

          {/* Right Partner Badges Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techPartners.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] rounded-2xl p-5 border border-[#e8f0f7] hover:border-[#00A88F]/40 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-[#00A88F] bg-[#eef7f5]">
                  {item.badge}
                </span>
                <h3 className="text-[15px] font-bold text-[#0d2a4a] mt-3 group-hover:text-[#00A88F] transition-colors">
                  {item.name}
                </h3>
                <p className="text-[12px] text-[#6b8ba8] mt-0.5">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutivePartners;

