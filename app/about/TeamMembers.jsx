"use client";

import Link from "next/link";
import React from "react";
import { Linkedin, Twitter, Sparkles, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "VP of Engineering & Architecture",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Ex-cloud architect specializing in scalable microservices & distributed systems.",
    linkedin: "https://www.linkedin.com/company/shrote/",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    role: "Head of Product Design (UI/UX)",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    bio: "Passionate design leader crafting intuitive design tokens and high-converting user journeys.",
    linkedin: "https://www.linkedin.com/company/shrote/",
  },
  {
    id: 3,
    name: "Aman Sharma",
    role: "Principal Full-Stack Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    bio: "Expert in Next.js 14, React Native, Node.js, and high-concurrency database optimizations.",
    linkedin: "https://www.linkedin.com/company/shrote/",
  },
  {
    id: 4,
    name: "Jessica Taylor",
    role: "Growth Strategy & SEO Director",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
    bio: "Data-driven marketing director driving organic acquisition across global enterprise accounts.",
    linkedin: "https://www.linkedin.com/company/shrote/",
  },
];

export default function TeamMembers() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
            style={{ background: "#eef7f5", color: "#00A88F" }}
          >
            <Sparkles size={14} /> Our Leadership & Engineering Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d2a4a] leading-tight">
            Dynamic{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00A88F, #00d4b4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Team
            </span>{" "}
            Of Digital Experts
          </h2>
          <p className="text-[15.5px] text-[#5a7a9a] leading-relaxed mt-3">
            Our engineers, designers, and strategy leads bring decades of cumulative experience building enterprise products for world-class brands.
          </p>
        </div>

        <Link
          href="/current-opening"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[13.5px] font-[600] transition-all shadow-sm hover:shadow-md flex-shrink-0"
          style={{ background: "#00A88F" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
        >
          <span>Join Our Engineering Team</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#e8f0f7] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="relative h-72 overflow-hidden bg-[#f0f5fa]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a4a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white text-[#0d2a4a] flex items-center justify-center hover:bg-[#00A88F] hover:text-white transition-all shadow-md"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-lg font-bold text-[#0d2a4a] group-hover:text-[#00A88F] transition-colors leading-snug">
                  {member.name}
                </h4>
                <p className="text-[12.5px] font-semibold text-[#00A88F] mt-1 mb-2.5">
                  {member.role}
                </p>
                <p className="text-[13px] text-[#5a7a9a] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
