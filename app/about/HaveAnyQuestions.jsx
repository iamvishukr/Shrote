"use client";

import { Minus, Plus, PhoneCall, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What enterprise engineering services does Shrote Technology deliver?",
    answer:
      "We build custom enterprise software, cloud-native web architectures, cross-platform mobile apps (iOS & Android), AI chatbots & autonomous agents, ERP/HRMS systems, and full-funnel digital growth solutions.",
  },
  {
    question: "What is your typical project delivery timeline?",
    answer:
      "Timelines depend on scope and architecture complexity. MVPs are delivered in 2-4 weeks, while large-scale enterprise platforms take 2-4 months delivered in transparent, bi-weekly agile sprint milestones.",
  },
  {
    question: "Do you work with startups as well as established enterprises?",
    answer:
      "Yes! We work with high-growth funded startups, mid-market businesses, and large corporate enterprises, tailoring architecture, compliance, and scaling strategies for each stage.",
  },
  {
    question: "Can you modernize or optimize our existing legacy systems?",
    answer:
      "Absolutely. We provide deep technical audits, database query optimization, cloud migration (AWS/Azure/GCP), and complete UI/UX modernization with zero downtime.",
  },
];

export default function HaveAnyQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Visual Card with Helpline */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
            alt="Shrote Tech Consultation Team"
            className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a4a]/90 via-[#0d2a4a]/30 to-transparent" />

          {/* Floating Helpline Pill */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                style={{ background: "#00A88F" }}
              >
                <PhoneCall size={22} />
              </div>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#7aa3c4]">Direct Hotline</p>
                <a href="tel:+917667983607" className="text-[16px] font-extrabold text-[#0d2a4a] hover:text-[#00A88F] transition-colors">
                  +91 7667983607
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-[12.5px] font-[600] transition-all"
              style={{ background: "#0d2a4a" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#00A88F")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0d2a4a")}
            >
              Contact Us <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div>
          <div className="mb-8">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
              style={{ background: "#eef7f5", color: "#00A88F" }}
            >
              <HelpCircle size={14} /> Clear Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight leading-tight">
              Let Us Address Your <span style={{
                background: "linear-gradient(90deg, #00A88F, #00d4b4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Questions</span> Today
            </h2>
            <p className="text-[14.5px] text-[#6b8ba8] mt-2.5 leading-relaxed">
              Find quick answers to common questions about our engagement models, delivery workflows, and post-launch SLAs.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer border ${
                    isOpen ? "border-[#00A88F]/40 shadow-md" : "border-[#e8f0f7] hover:border-gray-300"
                  }`}
                  onClick={() => toggleIndex(index)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className={`text-[15px] sm:text-[16px] font-bold leading-snug ${isOpen ? "text-[#00A88F]" : "text-[#0d2a4a]"}`}>
                      {faq.question}
                    </h3>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-[#00A88F] text-white rotate-180" : "bg-[#f0f5fa] text-[#4a6a8a]"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-[14px] text-[#5a7a9a] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
