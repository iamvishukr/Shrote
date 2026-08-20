"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageBanner({ title, highlight, breadcrumb, subtitle }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d2a4a 0%, #0d325a 50%, #0e4a7e 100%)",
        padding: "80px 24px 70px",
      }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,168,143,0.10) 0%, transparent 70%)" }} />

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ height: "50px" }}>
        <svg viewBox="0 0 1440 50" fill="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,30 C480,60 960,0 1440,30 L1440,50 L0,50 Z" fill="#f5f9fd" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[12.5px] mb-5">
          <Link href="/" className="transition-colors" style={{ color: "#7aa3c4" }}
            onMouseEnter={e => e.currentTarget.style.color = "#00A88F"}
            onMouseLeave={e => e.currentTarget.style.color = "#7aa3c4"}
          >Home</Link>
          <ChevronRight size={12} style={{ color: "#4a6a8a" }} />
          {breadcrumb?.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {b.href ? (
                <Link href={b.href} className="transition-colors" style={{ color: "#7aa3c4" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#00A88F"}
                  onMouseLeave={e => e.currentTarget.style.color = "#7aa3c4"}
                >{b.label}</Link>
              ) : (
                <span style={{ color: "#00A88F" }} className="font-[500]">{b.label}</span>
              )}
              {i < breadcrumb.length - 1 && <ChevronRight size={12} style={{ color: "#4a6a8a" }} />}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
          {title}{" "}
          {highlight && (
            <span style={{
              background: "linear-gradient(90deg, #00A88F, #00d4b4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {highlight}
            </span>
          )}
        </h1>

        {subtitle && (
          <p className="text-[15px] max-w-xl leading-relaxed" style={{ color: "#7aa3c4" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
