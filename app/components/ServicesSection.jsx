"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Box, Layout, Database, ShoppingBag, SearchCheck, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, scalable & SEO-optimised web applications built with modern frameworks.",
    href: "/web-development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    tag: "Development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native & cross-platform mobile apps for iOS and Android with seamless UX.",
    href: "/application-development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    tag: "Mobile",
  },
  {
    icon: Box,
    title: "Software Development",
    description: "Custom enterprise software — HRMS, ERP, Payroll, Inventory & more.",
    href: "/software-development",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
    tag: "Enterprise",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solution",
    description: "Complete online store development — product catalog, cart, payment gateway.",
    href: "/ecommerce-solution",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tag: "E-Commerce",
  },
  {
    icon: SearchCheck,
    title: "SEO / SEM",
    description: "Google rankings, paid ads & digital marketing to drive targeted traffic.",
    href: "/seo-sem",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    tag: "Marketing",
  },
  {
    icon: Layout,
    title: "Web Design",
    description: "Stunning UI/UX design — wireframes, prototypes & pixel-perfect interfaces.",
    href: "/web-design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    tag: "Design",
  },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: "#fff",
        border: "1px solid #e8f0f7",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.10)" : "0 4px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "180px" }}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
        />
        {/* Icon badge over image */}
        <div
          className="absolute bottom-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
          style={{ background: "#00A88F" }}
        >
          <service.icon size={18} className="text-white" />
        </div>
        {/* Tag */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-[600]"
          style={{ background: "rgba(13,42,74,0.75)", color: "#00d4b4" }}
        >
          {service.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-bold text-[16px] mb-2 transition-colors duration-150"
          style={{ color: hovered ? "#00A88F" : "#1a2e44" }}
        >
          {service.title}
        </h3>
        <p className="text-[13px] leading-relaxed mb-4" style={{ color: "#6a8aaa" }}>
          {service.description}
        </p>
        <Link
          href={service.href}
          className="flex items-center gap-1.5 text-[13px] font-[600] transition-colors duration-150"
          style={{ color: hovered ? "#00A88F" : "#2a5aaa" }}
        >
          Learn More <ArrowRight size={14} className={`transition-transform duration-200 ${hovered ? "translate-x-1" : ""}`} />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#f5f9fd" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p
              className="text-[12px] font-[700] uppercase tracking-[2px] mb-2"
              style={{ color: "#00A88F" }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold leading-tight"
              style={{ color: "#0d2a4a" }}
            >
              Comprehensive Technology
              <br />
              <span style={{
                background: "linear-gradient(90deg, #00A88F, #007a68)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Solutions
              </span>
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border font-[600] text-[13.5px] transition-all duration-200 self-start"
            style={{ borderColor: "#00A88F", color: "#00A88F" }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#00A88F";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#00A88F";
            }}
          >
            View More Services
            <svg width="14" height="14" viewBox="0 0 43 43" fill="none">
              <path d="M28.54 17.15L13.38 32.31L10.89 29.82L26.05 14.66H12.69V11.13H32.06V30.51H28.54V17.15Z" fill="currentColor" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
