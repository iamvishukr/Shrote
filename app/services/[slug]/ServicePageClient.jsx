"use client";

import Link from "next/link";
import Header from "@/app/Header";
import Footer from "@/app/components/Footer";

export default function ServicePageClient({ service }) {
  return (
    <div className="min-h-screen bg-[#050508] text-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0a0a18] to-[#050508]"></div>
        <div className={`absolute top-20 left-10 w-[300px] h-[300px] bg-gradient-to-br ${service.gradient} opacity-[0.06] rounded-full blur-[100px]`}></div>
        <div className={`absolute bottom-0 right-10 w-[250px] h-[250px] bg-gradient-to-br ${service.gradient} opacity-[0.04] rounded-full blur-[80px]`}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-md bg-gradient-to-r ${service.gradient} text-white uppercase tracking-wider mb-4`}>
            Service
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3">
            {service.name}
          </h1>
          <p className={`text-lg sm:text-xl font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-6`}>
            {service.tagline}
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
            {service.longDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-full hover:opacity-90 transition-all text-sm sm:text-base`}>
              Get a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/[0.1] text-white font-semibold rounded-full hover:bg-white/[0.12] transition-all text-sm sm:text-base">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.features.map((f, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white font-bold text-sm mb-3 group-hover:scale-110 transition-transform`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-white font-semibold text-sm">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Why Choose Shrote for {service.name}?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className={`w-6 h-6 shrink-0 mt-0.5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3">
            {service.techStack.map((t, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-gray-300 text-sm font-medium hover:bg-white/[0.1] hover:border-white/[0.15] transition-all">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Share your requirements and our team will get back to you within 24 hours with a tailored proposal.</p>
          <Link href="/contact" className={`inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-full hover:opacity-90 hover:shadow-xl transition-all text-base`}>
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
