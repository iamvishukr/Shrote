"use client";

import { useState } from "react";
import { Plus, Minus, PhoneCall, MessageCircle, HelpCircle, Mail } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What enterprise services does Shrote Technology deliver?",
      answer:
        "We engineer end-to-end custom web applications, native iOS & Android mobile apps, cloud microservices, AI chatbots & agents, ERP & HRMS suites, e-commerce storefronts, and full-funnel digital marketing strategies.",
    },
    {
      question: "What is your typical project delivery timeline?",
      answer:
        "Project delivery timelines range from 2 to 6 weeks for MVP deployments and 2 to 4 months for complex enterprise platforms, executed through transparent 2-week agile sprints with continuous staging access.",
    },
    {
      question: "Do you offer post-launch support and maintenance SLAs?",
      answer:
        "Yes! Every deployment includes comprehensive post-launch warranty, 24/7 server monitoring, performance optimization, automated backups, and dedicated SLA-backed support tiers.",
    },
    {
      question: "Can you modernize or optimize our existing legacy codebase?",
      answer:
        "Absolutely. We specialize in legacy system migration, database optimization, cloud architecture restructuring (AWS/GCP/Azure), and UI/UX modernization with zero downtime.",
    },
    {
      question: "How do you protect data security and intellectual property?",
      answer:
        "We sign mutual Non-Disclosure Agreements (NDAs) before discovery, transfer 100% IP ownership upon milestone completion, and adhere to bank-grade AES-256 encryption and global data compliance standards.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-10 items-start">
        {/* Left 2 Cols: FAQs Accordion */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
              style={{ background: "#eef7f5", color: "#00A88F" }}
            >
              <HelpCircle size={14} /> Clear Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[14.5px] text-[#6b8ba8] mt-2">
              Everything you need to know about our engineering process, security, and engagement models.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 transition-all duration-200 cursor-pointer border ${
                    isOpen ? "border-[#00A88F]/40 shadow-md" : "border-[#e8f0f7] hover:border-gray-300"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className={`text-[15.5px] font-bold ${isOpen ? "text-[#00A88F]" : "text-[#0d2a4a]"}`}>
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-[#00A88F] text-white rotate-180" : "bg-[#f0f5fa] text-[#4a6a8a]"
                      }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-3.5 pt-3.5 border-t border-gray-100">
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

        {/* Right 1 Col: Support Card */}
        <div
          className="rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg"
          style={{ background: "linear-gradient(135deg, #0d2a4a 0%, #0d3d6b 100%)" }}
        >
          <div>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "rgba(0,168,143,0.2)" }}
            >
              <MessageCircle size={28} style={{ color: "#00d4b4" }} />
            </div>

            <h3 className="text-2xl font-extrabold mb-3">
              Have a Specific Requirement?
            </h3>
            <p className="text-blue-200 text-[14px] leading-relaxed mb-8">
              Speak directly with our solutions architects to get a tailored estimate and free technical consultation within 24 hours.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="tel:+917667983607"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full text-[14px] font-[600] text-white transition-all shadow-md"
              style={{ background: "#00A88F" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
            >
              <PhoneCall size={16} /> +91 7667983607
            </a>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-full text-[13.5px] font-[600] text-white border border-white/20 hover:bg-white/10 transition-all"
            >
              <Mail size={16} /> Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

