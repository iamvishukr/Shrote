"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function WebskittersSection() {
  return (
    <section className="my-12">
      <div
        className="rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d2a4a 0%, #081d33 60%, #00A88F 100%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11.5px] font-[700] uppercase tracking-[1.5px] mb-4 text-[#00d4b4]"
              style={{ background: "rgba(0, 212, 180, 0.12)" }}
            >
              <Sparkles size={14} /> Enterprise Digital Transformation
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Scale Your Next Vision <br />
              <span className="text-[#00d4b4]">With Shrote Technology</span>
            </h2>

            <p className="mt-4 text-white/80 text-[15px] leading-relaxed">
              We engineer mission-critical digital products, headless e-commerce architectures, predictive AI pipelines, and enterprise software for brands worldwide. Let our engineering team build your next milestone.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-white/90 text-[13px]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00d4b4]" />
                <span>Zero Lock-in Codebase</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00d4b4]" />
                <span>24/7 Dedicated SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00d4b4]" />
                <span>100% On-Time Delivery</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-[600] text-[14px] transition-all shadow-lg"
                style={{ background: "#00A88F" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
              >
                <span>Book A Free Architecture Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="Shrote Engineering Collaboration"
              className="rounded-2xl shadow-2xl border border-white/10 max-h-[340px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
