"use client";

import { Palette, Code2, Rocket, CheckCircle2 } from "lucide-react";

export default function ProjectSolutions() {
  const steps = [
    {
      number: "1",
      icon: Palette,
      title: "UI/UX Experience Strategy",
      description:
        "We designed a clean, intuitive UI/UX with Figma design tokens, WCAG 2.1 accessible contrasts, and interactive micro-animations that deliver high patient trust and seamless clinic onboarding.",
      stats: ["40+ Custom Component Tokens", "98% User Usability Rating"],
    },
    {
      number: "2",
      icon: Code2,
      title: "Full-Stack Web & API Architecture",
      description:
        "Shrote Technology engineered a high-throughput Next.js & Node.js backend with Redis caching, spatial geospatial indexing for instant practitioner discovery, and zero-downtime database pipelines.",
      stats: ["<150ms Average Query Latency", "99.99% Cloud Uptime SLA"],
    },
    {
      number: "3",
      icon: Rocket,
      title: "Production Scaling & Security Hardening",
      description:
        "Automated CI/CD deployment pipelines on AWS with CloudFront CDN global caching, SSL cert auto-renewals, and bank-grade HIPAA/GDPR encryption protocols for all confidential patient consultations.",
      stats: ["100% HIPAA & GDPR Compliant", "3.2x Increase in Inbound Bookings"],
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight">
          Delivered <span style={{
            background: "linear-gradient(90deg, #00A88F, #00d4b4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Solutions</span> & Architecture
        </h2>
        <p className="text-[#5a7a9a] text-[15px] mt-3 leading-relaxed">
          To achieve the client's ambitious goals, Shrote Technology executed a systematic three-phase product development lifecycle.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e8f0f7] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-xl text-white flex-shrink-0"
                style={{ background: "#00A88F" }}
              >
                {step.number}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2.5">
                  <Icon size={20} style={{ color: "#00A88F" }} />
                  <h3 className="text-xl font-bold text-[#0d2a4a]">{step.title}</h3>
                </div>
                <p className="text-[#5a7a9a] text-[14.5px] leading-relaxed mb-5">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {step.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12.5px] font-[600] text-[#0d2a4a] bg-[#f0f5fa] border border-[#e2eaf2]"
                    >
                      <CheckCircle2 size={14} style={{ color: "#00A88F" }} />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
