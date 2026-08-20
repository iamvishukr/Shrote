"use client";

import { Search, PenTool, Code2, Rocket, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discovery & Technical Roadmap",
      desc: "We analyze your business objectives, target audience requirements, architecture constraints, and competitor landscape to define a clear milestone-driven roadmap.",
      points: ["Stakeholder requirement gathering", "Architecture & security feasibility", "Scope & sprint milestone planning"],
    },
    {
      step: "02",
      icon: PenTool,
      title: "UI/UX & System Architecture",
      desc: "Interactive wireframing, high-fidelity UI design systems, and microservices database schemas crafted for intuitive user journeys and rapid load speeds.",
      points: ["Figma interactive design system", "Database & API contract schemas", "Design approval & sprint kickoff"],
    },
    {
      step: "03",
      icon: Code2,
      title: "Agile Development & CI/CD",
      desc: "Clean modular code writing, unit testing, continuous integration pipelines, and weekly sprint demos that keep you in full control of progress.",
      points: ["Modular clean code standards", "Automated QA & vulnerability scans", "Weekly staging environment demos"],
    },
    {
      step: "04",
      icon: Rocket,
      title: "Deployment, Scaling & Support",
      desc: "Zero-downtime production deployment, cloud auto-scaling configuration, and 24/7 proactive monitoring with guaranteed uptime SLAs.",
      points: ["Cloud deployment with CDN caching", "Real-time error logging & metrics", "24/7 dedicated support & maintenance"],
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-[12px] font-[700] uppercase tracking-[2px] mb-2" style={{ color: "#00A88F" }}>
          Proven Execution Model
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight">
          How We Deliver Flawless Engineering
        </h2>
        <p className="text-[15px] text-[#5a7a9a] mt-3 leading-relaxed">
          From initial blueprint to global cloud deployment, our battle-tested agile methodology ensures transparency, speed, and uncompromising quality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
              style={{ border: "1px solid #e8f0f7" }}
            >
              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "#eef7f5", color: "#00A88F" }}
                  >
                    <Icon size={24} />
                  </div>
                  <span
                    className="text-[13px] font-extrabold px-3 py-1 rounded-full"
                    style={{ background: "#f0f5fa", color: "#00A88F" }}
                  >
                    STEP {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0d2a4a] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[13.5px] text-[#5a7a9a] leading-relaxed mb-6">
                  {item.desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t" style={{ borderColor: "#f0f5fa" }}>
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-[12.5px] text-[#2c4a6a]">
                      <CheckCircle2 size={15} style={{ color: "#00A88F", flexShrink: 0 }} className="mt-0.5" />
                      <span>{pt}</span>
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

