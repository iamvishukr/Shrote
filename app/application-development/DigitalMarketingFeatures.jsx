"use client";

import { Smartphone, Layers, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function DigitalMarketingFeatures() {
  const features = [
    {
      icon: Smartphone,
      title: "Cross-Platform & Native Apps",
      desc: "High-performance iOS and Android applications built with Flutter, React Native, Swift, and Kotlin for 60fps native feel.",
    },
    {
      icon: Layers,
      title: "Scalable API & Cloud Microservices",
      desc: "Robust backends engineered with Node.js, GraphQL, PostgreSQL, and Redis caching for ultra-low latency.",
    },
    {
      icon: ShieldCheck,
      title: "Bank-Grade App Security",
      desc: "End-to-end data encryption, biometrics (FaceID/Fingerprint), OAuth2, and HIPAA/GDPR compliance out of the box.",
    },
    {
      icon: Zap,
      title: "Real-Time Sync & Offline First",
      desc: "Seamless offline SQLite caching, instant WebSocket messaging, and background sync when connection resumes.",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-[12px] font-[700] uppercase tracking-[2px] mb-2" style={{ color: "#00A88F" }}>
          Core Engineering Pillars
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight">
          Modern Capabilities for Scalable Apps
        </h2>
        <p className="text-[15px] text-[#5a7a9a] mt-3 leading-relaxed">
          From concept and UI/UX design to App Store / Google Play publishing and cloud scaling, we build mobile apps users love.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group flex flex-col justify-between"
              style={{ border: "1px solid #e8f0f7" }}
            >
              <div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "#eef7f5", color: "#00A88F" }}
                >
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-[#0d2a4a] mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-[#5a7a9a] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#f0f5fa] flex items-center gap-1 text-[12px] font-bold text-[#00A88F]">
                <span>Enterprise Grade</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
