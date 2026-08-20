"use client";

import { Target, Compass, HeartHandshake, Sparkles } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      icon: Target,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      title: "Our Mission",
      description: "Delivering transformative digital products, cloud architectures, and scalable web solutions that maximize client ROI.",
    },
    {
      number: "02",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      title: "Our Vision",
      description: "To be the global benchmark for enterprise digital engineering, agility, security, and human-centric innovation.",
    },
    {
      number: "03",
      icon: HeartHandshake,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
      title: "Our Core Values",
      description: "Technical integrity, transparent communication, uncompromising quality, and client-first partnership.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
            style={{ background: "#eef7f5", color: "#00A88F" }}
          >
            <Sparkles size={14} /> Our Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight leading-tight">
            Crafting Impactful <span style={{
              background: "linear-gradient(90deg, #00A88F, #00d4b4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Digital Experiences</span>
          </h2>
        </div>

        <div>
          <p className="text-[15px] text-[#5a7a9a] leading-relaxed">
            We blend creativity, deep technical acumen, and agile execution to engineer software that elevates enterprise capabilities and solves complex operational challenges.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group flex flex-col justify-between"
              style={{ border: "1px solid #e8f0f7" }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-extrabold text-[#00A88F] shadow">
                  STEP {step.number}
                </div>
                <div
                  className="absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-lg"
                  style={{ background: "#00A88F" }}
                >
                  <Icon size={20} />
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold text-[#0d2a4a] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#5a7a9a] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

