"use client";

import Link from "next/link";
import Header from "../Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import {
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Landmark,
  Factory,
  Building2,
  UtensilsCrossed,
  Car,
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    name: "Healthcare & Pharma",
    tag: "HIPAA Compliant",
    desc: "Telemedicine platforms, electronic health records (EHR/EMR), AI diagnostic tools, and pharmacy inventory software tailored for medical organizations.",
    points: ["Doctor-patient portals", "Automated appointment booking", "Real-time vitals monitoring", "Prescription & billing automation"],
    href: "/contact",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce & Retail",
    tag: "High Conversion",
    desc: "Custom multi-vendor storefronts, B2B wholesale portals, omnichannel checkout, payment gateway integrations, and intelligent inventory synchronization.",
    points: ["Headless commerce architecture", "Automated order fulfillment", "Personalized recommendations", "Integrated POS systems"],
    href: "/ecommerce-solution",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: GraduationCap,
    name: "Education & EdTech",
    tag: "Smart Learning",
    desc: "Interactive learning management systems (LMS), student information systems (SIS), online examination software, and campus management ERPs.",
    points: ["Virtual classroom tools", "Automated grading & analytics", "Fee management & online payments", "Parent-teacher communication app"],
    href: "/products/school-management",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    icon: Landmark,
    name: "BFSI & Fintech",
    tag: "Bank-Grade Security",
    desc: "Secure mobile banking apps, automated loan processing workflows, regulatory compliance tools, payment gateways, and wealth management software.",
    points: ["256-bit encryption & fraud detection", "Instant KYC & biometric verification", "Core banking API integrations", "Automated audit & compliance"],
    href: "/contact",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    icon: Factory,
    name: "Manufacturing & Logistics",
    tag: "Industry 4.0",
    desc: "Supply chain management (SCM), shop-floor production planning, IoT machine tracking, warehouse management, and ERP software.",
    points: ["Real-time supply tracking", "Predictive maintenance alerts", "Barcode & RFID integration", "End-to-end material tracking"],
    href: "/products/erp-suite",
    gradient: "from-slate-700 to-blue-600",
  },
  {
    icon: Building2,
    name: "Real Estate & Construction",
    tag: "Smart Property",
    desc: "Property management software, tenant portals, construction project trackers, interactive floorplan showcases, and automated lease agreements.",
    points: ["Lead management CRM for builders", "Automated rent collection", "Contractor & milestone tracking", "Virtual property tour integrations"],
    href: "/contact",
    gradient: "from-cyan-600 to-blue-500",
  },
  {
    icon: UtensilsCrossed,
    name: "Hospitality & Restaurants",
    tag: "Fast POS & Dining",
    desc: "Comprehensive restaurant POS, kitchen display systems (KDS), table booking platforms, contactless QR ordering, and hotel management systems.",
    points: ["Multi-outlet centralized billing", "Live kitchen display system", "Third-party delivery sync", "Customer loyalty & discount engine"],
    href: "/products/restaurant-management",
    gradient: "from-amber-600 to-red-500",
  },
  {
    icon: Car,
    name: "Travel & Mobility",
    tag: "Fleet Automation",
    desc: "On-demand taxi & cab booking systems, driver dispatch applications, fleet tracking GPS, and booking reservation engines.",
    points: ["Real-time GPS ride tracking", "Automated fare estimation", "Driver & rider native apps", "In-app SOS & security features"],
    href: "/products/cab-booking-app",
    gradient: "from-violet-600 to-pink-500",
  },
];

export default function IndustriesClient() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />
      <PageBanner
        title="Key"
        highlight="Industries We Serve"
        subtitle="Specialized domain expertise and tailor-made enterprise software architectures designed to solve complex industry-specific challenges."
        breadcrumb={[{ label: "Industries" }]}
      />

      {/* Stats bar */}
      <section className="py-10 px-4" style={{ background: "#ffffff", borderBottom: "1px solid #e8f0f7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-extrabold text-[#0d2a4a]">10+</p>
            <p className="text-[13px] text-[#7aa3c4] font-[500] mt-1">Industry Verticals</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-[#00A88F]">200+</p>
            <p className="text-[13px] text-[#7aa3c4] font-[500] mt-1">Enterprise Deliveries</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-[#0d2a4a]">99.9%</p>
            <p className="text-[13px] text-[#7aa3c4] font-[500] mt-1">Uptime SLA</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-[#00A88F]">100%</p>
            <p className="text-[13px] text-[#7aa3c4] font-[500] mt-1">Regulatory Compliant</p>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[12.5px] font-[700] uppercase tracking-[2px] mb-2" style={{ color: "#00A88F" }}>
            Tailored Domain Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight">
            Accelerating Digital Transformation Across Every Sector
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="bg-white rounded-2xl p-7 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
                style={{ border: "1px solid #e8f0f7" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{ background: "#eef7f5" }}
                    >
                      <Icon size={24} style={{ color: "#00A88F" }} />
                    </div>
                    <span
                      className="text-[11px] font-[700] px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{ background: "#f0f5fa", color: "#4a6a8a" }}
                    >
                      {ind.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0d2a4a] mb-2.5">{ind.name}</h3>
                  <p className="text-[14px] leading-relaxed text-[#5a7a9a] mb-5">{ind.desc}</p>

                  <div className="space-y-2 mb-6">
                    {ind.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[13px] text-[#2c4a6a]">
                        <CheckCircle2 size={15} style={{ color: "#00A88F", flexShrink: 0 }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t" style={{ borderColor: "#f0f5fa" }}>
                  <Link
                    href={ind.href}
                    className="inline-flex items-center gap-2 text-[13.5px] font-[600] transition-colors"
                    style={{ color: "#00A88F" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0d2a4a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#00A88F")}
                  >
                    Explore Industry Solution <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: "linear-gradient(135deg, #0d2a4a 0%, #0e4a7e 100%)" }}
        >
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Need a custom solution for your specific industry?
            </h3>
            <p className="text-blue-200 text-[14.5px] leading-relaxed">
              Consult with our principal architects and domain engineers to design a high-ROI digital roadmap.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full text-white font-[600] text-[14px] transition-all whitespace-nowrap shadow-lg"
            style={{ background: "#00A88F" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
          >
            Talk to an Expert
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
