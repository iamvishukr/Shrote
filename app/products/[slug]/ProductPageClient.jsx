"use client";

import Link from "next/link";
import Header from "@/app/Header";
import Footer from "@/app/components/Footer";
import PageBanner from "@/app/components/PageBanner";
import { CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

export default function ProductPageClient({ product }) {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />

      {/* Modern Banner */}
      <PageBanner
        title={product.name}
        highlight="Enterprise Suite"
        subtitle={product.tagline || product.longDescription}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      {/* Main Overview Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm mb-16"
          style={{ border: "1px solid #e8f0f7" }}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                  style={{ background: "#eef7f5", color: "#00A88F" }}
                >
                  {product.tag || "Enterprise Edition"}
                </span>
                <span className="text-[13px] font-semibold text-[#6b8ba8]">
                  {product.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0d2a4a] leading-tight mb-4">
                Scalable & Intuitive{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #00A88F, #00d4b4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {product.name}
                </span>
              </h2>

              <p className="text-[15px] text-[#5a7a9a] leading-relaxed mb-6">
                {product.longDescription}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-[14px] font-[600] transition-all shadow-md"
                  style={{ background: "#00A88F" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
                >
                  Request Live Demo <ArrowRight size={15} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[#0d2a4a] text-[14px] font-[600] border border-gray-200 hover:bg-gray-50 transition-all"
                >
                  All Products
                </Link>
              </div>
            </div>

            {/* Visual Feature Highlights */}
            <div className="bg-[#f8fafc] rounded-2xl p-6 sm:p-8 border border-[#e8f0f7]">
              <h3 className="text-lg font-bold text-[#0d2a4a] mb-5 flex items-center gap-2">
                <ShieldCheck size={20} style={{ color: "#00A88F" }} /> Core Specifications
              </h3>
              <div className="space-y-3.5">
                {[
                  "Bank-grade AES-256 data encryption",
                  "Automated compliance & audit logging",
                  "Multi-role user permission hierarchies",
                  "Real-time analytics and CSV/PDF reports",
                  "Modular REST & GraphQL API webhooks",
                ].map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2.5 text-[13.5px] font-[500] text-[#2c4a6a]">
                    <CheckCircle2 size={16} style={{ color: "#00A88F", flexShrink: 0 }} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
              style={{ background: "#eef7f5", color: "#00A88F" }}
            >
              <Sparkles size={14} /> Product Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight">
              Engineered For Modern Workflows
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                style={{ border: "1px solid #e8f0f7" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm mb-4 transition-transform group-hover:scale-110"
                  style={{ background: "#eef7f5", color: "#00A88F" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[15px] font-bold text-[#0d2a4a] leading-snug">
                  {f}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight">
              Why Choose {product.name}?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 flex items-start gap-3.5 transition-all duration-200 hover:shadow-md"
                style={{ border: "1px solid #e8f0f7" }}
              >
                <div
                  className="w-6 h-6 shrink-0 mt-0.5 rounded-full flex items-center justify-center text-white"
                  style={{ background: "#00A88F" }}
                >
                  <CheckCircle2 size={15} />
                </div>
                <span className="text-[14px] font-[500] text-[#2c4a6a] leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm mb-16"
          style={{ border: "1px solid #e8f0f7" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "#eef7f5", color: "#00A88F" }}
            >
              <Layers size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0d2a4a]">Technology Stack & Architecture</h3>
              <p className="text-[13px] text-[#6b8ba8]">Powered by enterprise-grade frameworks and cloud protocols.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {product.techStack.map((t, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-[13px] font-[600] bg-[#f0f5fa] text-[#0d2a4a] border border-[#e2eaf2] hover:bg-[#e6f0fa] transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-xl"
          style={{ background: "linear-gradient(135deg, #0d2a4a 0%, #0d3864 50%, #0e4a7e 100%)" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11.5px] font-[700] uppercase tracking-[1.5px] mb-3"
            style={{ background: "rgba(0,168,143,0.2)", color: "#00d4b4" }}
          >
            <Sparkles size={13} /> Accelerate Your Operations
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Ready to Deploy {product.name}?
          </h2>
          <p className="text-blue-200 text-[14.5px] max-w-2xl mx-auto mb-8 leading-relaxed">
            Get a tailored live product demonstration with custom configuration for your business requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-[14px] font-[600] transition-all shadow-lg"
            style={{ background: "#00A88F" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
          >
            Schedule Free Demo <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

