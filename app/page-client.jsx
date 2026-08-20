"use client";

import Header from "./Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

/* Stats section inline (Tudip style — "Trusted by Leading Enterprises") */
function TrustedSection() {
  const clients = [
    { name: "Zealwise Technologies", tag: "FINTECH & SAAS", icon: "⚡" },
    { name: "NES Electrical", tag: "INDUSTRIAL IOT", icon: "🏭" },
    { name: "Luxify Digital", tag: "E-COMMERCE", icon: "💎" },
    { name: "Gentium Media", tag: "GLOBAL EDTECH", icon: "🌐" },
    { name: "Mind Spa Healthcare", tag: "TELEHEALTH AI", icon: "🧠" },
    { name: "BlueTees Digital", tag: "MOBILE APPS", icon: "📱" },
  ];

  return (
    <section className="py-10 px-4 relative z-10" style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8f0f7" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[12px] font-[700] uppercase tracking-[2px] mb-6" style={{ color: "#00A88F" }}>
          Trusted By 500+ High-Growth Enterprises & Global Brands
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center">
          {clients.map((c) => (
            <div
              key={c.name}
              className="bg-white/90 border border-[#e8f0f7] hover:border-[#00A88F]/50 px-4 py-3 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
                {c.icon}
              </div>
              <span className="text-[13px] font-extrabold text-[#0d2a4a] group-hover:text-[#00A88F] transition-colors leading-tight line-clamp-1">
                {c.name}
              </span>
              <span className="text-[9.5px] font-bold text-[#8aadca] uppercase tracking-wider mt-0.5">
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <div className="min-h-screen relative" style={{ background: "#f5f9fd" }}>
      <AnimatedBackground variant="neural" />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <TrustedSection />
          <ServicesSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
