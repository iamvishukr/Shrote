"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function ServiceCard() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm transition-all duration-300 hover:shadow-md"
        style={{ border: "1px solid #e8f0f7" }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-4"
              style={{ background: "#eef7f5", color: "#00A88F" }}
            >
              <Sparkles size={14} /> Full Lifecycle App Development
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d2a4a] leading-tight mb-5">
              Custom Mobile & Web Applications Built For{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00A88F, #00d4b4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                High Performance
              </span>
            </h2>

            <p className="text-[15px] text-[#5a7a9a] leading-relaxed mb-4">
              We design and develop high-converting iOS, Android, and cross-platform web applications engineered for lightning speed, intuitive gestures, and seamless offline connectivity.
            </p>

            <p className="text-[15px] text-[#5a7a9a] leading-relaxed mb-6">
              Whether you need a consumer mobile app, an enterprise logistics dashboard, or a HIPAA-compliant healthcare platform, our engineers deliver secure, test-driven architectures.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Native iOS (Swift) & Android (Kotlin)",
                "Cross-Platform Flutter & React Native",
                "Offline First Sync & WebSockets",
                "App Store & Play Store CI/CD Deploy",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[13.5px] font-[500] text-[#2c4a6a]">
                  <CheckCircle2 size={16} style={{ color: "#00A88F", flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[13.5px] font-[600] transition-all"
                style={{ background: "#00A88F" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
              >
                Schedule App Architecture Call <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop"
              alt="Shrote Mobile App Development"
              className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a4a]/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[12px] uppercase font-bold tracking-widest text-[#00d4b4]">Proven Results</span>
              <p className="text-lg font-bold">120+ Mobile & Web Apps Shipped to Production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


