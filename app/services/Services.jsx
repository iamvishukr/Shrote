"use client";

import Link from "next/link";
import {
  Code2,
  Layout,
  Smartphone,
  Globe2,
  Server,
  ShoppingCart,
  LineChart,
  Search,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications, responsive SPAs, and robust SaaS platforms built with Next.js, React, and Node.js.",
      href: "/web-development",
    },
    {
      icon: Layout,
      title: "UI/UX & Web Design",
      description: "High-converting user interfaces, design systems in Figma, and interactive user journeys tailored for scale.",
      href: "/web-design",
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description: "Cross-platform mobile applications for iOS & Android built with React Native and Flutter with real-time sync.",
      href: "/application-development",
    },
    {
      icon: Globe2,
      title: "Portal Development",
      description: "Enterprise intranets, B2B supplier hubs, and customer self-service portals with strict role permissions.",
      href: "/portal-development",
    },
    {
      icon: Server,
      title: "Software Development",
      description: "Custom ERP, CRM, microservices backends, and cloud data pipelines engineered for 99.9% uptime.",
      href: "/software-development",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Scalable digital storefronts, custom checkout flows, and automated inventory sync with Shopify and headless setups.",
      href: "/ecommerce-solution",
    },
    {
      icon: LineChart,
      title: "Data Science & AI",
      description: "Predictive machine learning models, autonomous LLM agents, chatbots, and actionable BI dashboard analytics.",
      href: "/data-science-solution",
    },
    {
      icon: Search,
      title: "SEO & SEM Optimization",
      description: "Technical SEO audits, organic ranking acceleration, and high-ROI Google Ads campaigns.",
      href: "/seo-sem",
    },
    {
      icon: MessageSquare,
      title: "Bulk SMS & OTP Services",
      description: "Enterprise-grade transactional OTP messaging, promotional campaigns, and high-throughput WhatsApp APIs.",
      href: "/bulk-sms",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
          style={{ background: "#eef7f5", color: "#00A88F" }}
        >
          <Sparkles size={14} /> Full-Stack Engineering Capabilities
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d2a4a] tracking-tight">
          Comprehensive Technology Services
        </h2>
        <p className="text-[15.5px] text-[#5a7a9a] mt-3.5 leading-relaxed">
          From concept and design to deployment and cloud scaling, we deliver end-to-end digital solutions for modern businesses.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link
              key={index}
              href={service.href}
              className="bg-white rounded-3xl p-8 border border-[#e8f0f7] hover:border-[#00A88F]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "#eef7f5", color: "#00A88F" }}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#f0f5fa] flex items-center justify-center text-[#0d2a4a] group-hover:bg-[#00A88F] group-hover:text-white transition-all duration-300">
                    <ArrowRight size={16} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0d2a4a] mb-3 group-hover:text-[#00A88F] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-[14px] text-[#5a7a9a] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0f5fa] flex items-center gap-1 text-[13px] font-bold text-[#00A88F]">
                <span>Explore Service</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
