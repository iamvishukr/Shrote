"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Component() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
        style={{
          background: "linear-gradient(135deg, #0d2a4a 0%, #0d3864 50%, #0e4a7e 100%)",
        }}
      >
        {/* Glow orb background */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,168,143,0.25) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11.5px] font-[700] uppercase tracking-[1.5px] mb-3"
            style={{ background: "rgba(0,168,143,0.2)", color: "#00d4b4" }}
          >
            <Sparkles size={13} /> Ready To Elevate Your Technology?
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-blue-200 text-[14.5px] leading-relaxed">
            Partner with Shrote Technology for enterprise-grade product engineering, cloud scalability, and end-to-end digital acceleration.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white text-[14px] font-[600] transition-all shadow-lg text-center"
            style={{ background: "#00A88F" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
          >
            Start Your Project <ArrowRight size={15} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white text-[14px] font-[600] border border-white/25 hover:bg-white/10 transition-all text-center"
          >
            Explore Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

