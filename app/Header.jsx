"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "./components/Logo";
import { useState } from "react";
import { Menu, X, ChevronDown, Globe, ArrowRight,
  Globe2, ShoppingCart, GraduationCap, Landmark, Factory, Building2,
  Code2, Smartphone, Box, ShoppingBag, SearchCheck, MessageSquare, Layout, Database,
  BarChart3, Cpu, HeartPulse, Warehouse, School, UtensilsCrossed,
  Briefcase, Users, BookOpen, FileText } from "lucide-react";

/* ─────────────────────────────────────────────────────
   MEGA MENU DATA — Tudip style: columns with icons
───────────────────────────────────────────────────── */
const megaMenus = {
  Industries: {
    columns: [
      {
        heading: "Key Industries",
        items: [
          { icon: HeartPulse,     label: "Healthcare & Pharma",   href: "/industries",         desc: "Smart health tech solutions" },
          { icon: ShoppingCart,   label: "E-Commerce & Retail",   href: "/ecommerce-solution", desc: "Full-stack store platforms" },
          { icon: GraduationCap,  label: "Education & EdTech",    href: "/products/school-management", desc: "Learning management systems" },
          { icon: Landmark,       label: "BFSI & Fintech",        href: "/industries",         desc: "Secure banking software" },
          { icon: Factory,        label: "Manufacturing",          href: "/products/erp-suite", desc: "ERP & production tools" },
          { icon: Building2,      label: "Real Estate",           href: "/industries",         desc: "Property management apps" },
        ],
      },
    ],
    featured: {
      label: "500+ Clients Served",
      desc: "Across 10+ industries pan-India",
      href: "/industries",
    },
  },
  Services: {
    columns: [
      {
        heading: "Development",
        items: [
          { icon: Code2,       label: "Web Development",      href: "/web-development",       desc: "Fast, scalable web apps" },
          { icon: Smartphone,  label: "App Development",      href: "/application-development", desc: "iOS & Android apps" },
          { icon: Box,         label: "Software Development",  href: "/software-development",  desc: "Custom enterprise software" },
          { icon: Layout,      label: "Web Design",           href: "/web-design",            desc: "UI/UX & branding" },
          { icon: Database,    label: "Portal Development",   href: "/portal-development",    desc: "B2B & B2C portals" },
        ],
      },
      {
        heading: "Marketing & More",
        items: [
          { icon: ShoppingBag,  label: "E-Commerce Solution",  href: "/ecommerce-solution",  desc: "Complete online stores" },
          { icon: SearchCheck,  label: "SEO / SEM",            href: "/seo-sem",             desc: "Google rankings & ads" },
          { icon: MessageSquare,label: "Bulk SMS",             href: "/bulk-sms",            desc: "Mass communication" },
        ],
      },
    ],
    featured: {
      label: "Explore All Services",
      desc: "View our complete service catalog",
      href: "/services",
    },
  },
  Products: {
    columns: [
      {
        heading: "Enterprise Products",
        items: [
          { icon: Users,        label: "HRMS Software",         href: "/products/hrms-suite", desc: "HR & payroll management" },
          { icon: BarChart3,    label: "ERP Suite",             href: "/products/erp-suite", desc: "Full business automation" },
          { icon: Cpu,          label: "AI Chatbot",            href: "/products/ai-chatbot", desc: "Intelligent bot solutions" },
          { icon: Briefcase,    label: "Payroll Management",    href: "/products/payroll-software", desc: "Salary & compliance" },
          { icon: Warehouse,    label: "Inventory System",      href: "/products/inventory-management", desc: "Stock & supply tracking" },
          { icon: School,       label: "School Management",     href: "/products/school-management", desc: "Academic ERP" },
          { icon: UtensilsCrossed, label: "Restaurant POS",    href: "/products/restaurant-management", desc: "Billing & table management" },
        ],
      },
    ],
    featured: {
      label: "16+ Software Products",
      desc: "Ready-to-deploy enterprise solutions",
      href: "/products",
    },
  },
  Resources: {
    columns: [
      {
        heading: "Resources",
        items: [
          { icon: Briefcase, label: "Portfolio",      href: "/portfolio",     desc: "Our recent projects" },
          { icon: BookOpen,  label: "Testimonials",   href: "/testimonials",  desc: "Client success stories" },
          { icon: FileText,  label: "Case Studies",   href: "/portfolio/view-portfolio", desc: "In-depth project reviews" },
          { icon: Globe2,    label: "About Company",  href: "/about",         desc: "Mission & leadership" },
        ],
      },
    ],
    featured: {
      label: "See Our Work",
      desc: "Explore portfolio of 500+ successful projects",
      href: "/portfolio",
    },
  },
  Careers: {
    columns: [
      {
        heading: "Join Shrote",
        items: [
          { icon: Briefcase, label: "Current Openings",    href: "/current-opening", desc: "Browse open positions" },
          { icon: GraduationCap, label: "Internship Program", href: "/internship",  desc: "Learn & grow with us" },
          { icon: Users,     label: "Join Our Team",       href: "/join-our-team",   desc: "Shape the future of tech" },
        ],
      },
    ],
    featured: {
      label: "We're Hiring!",
      desc: "Exciting roles in Bangalore & remote",
      href: "/current-opening",
    },
  },
};

const topNavLinks = [
  { label: "About Shrote", href: "/about", hasMega: false },
  { label: "Industries",   href: "/industries", hasMega: true },
  { label: "Services",     href: "/services", hasMega: true },
  { label: "Products",     href: "/products", hasMega: true },
  { label: "Resources",    href: "/portfolio", hasMega: true },
  { label: "Careers",      href: "/join-our-team", hasMega: true },
];

/* ─────────────────────────────────────────────────────
   MEGA MENU PANEL COMPONENT
───────────────────────────────────────────────────── */
function MegaPanel({ data }) {
  return (
    <div
      className="absolute top-full left-0 w-full z-[999] pt-0"
      style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.12))" }}
    >
      {/* Thin teal top border line like Tudip */}
      <div style={{ height: "3px", background: "#00A88F" }} />

      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 py-8 flex gap-10">

          {/* Columns */}
          <div className="flex gap-10 flex-1">
            {data.columns.map((col, ci) => {
              const isMultiCol = col.items.length > 4;
              return (
                <div key={ci} className={isMultiCol ? "min-w-[460px]" : "min-w-[210px]"}>
                  <p
                    className="text-[11px] font-[700] uppercase tracking-[1.2px] mb-4 pb-2 border-b"
                    style={{ color: "#00A88F", borderColor: "#e8f5f2" }}
                  >
                    {col.heading}
                  </p>
                  <ul className={isMultiCol ? "grid grid-cols-2 gap-x-4 gap-y-1.5" : "space-y-1"}>
                    {col.items.map((item) => (
                      <MegaItem key={item.label} item={item} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Featured CTA */}
          <div
            className="w-[220px] flex-shrink-0 rounded-xl p-5 flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #0d2a4a 0%, #0d4070 100%)" }}
          >
            <div>
              <div
                className="inline-block px-2.5 py-1 rounded-full text-[11px] font-[600] mb-3"
                style={{ background: "rgba(0,168,143,0.2)", color: "#00d4b4" }}
              >
                ✦ Featured
              </div>
              <h4 className="text-white font-bold text-[15px] mb-2 leading-snug">
                {data.featured.label}
              </h4>
              <p className="text-blue-300 text-[12.5px] leading-relaxed opacity-90">
                {data.featured.desc}
              </p>
            </div>
            <Link
              href={data.featured.href}
              className="mt-4 flex items-center gap-1.5 text-[12.5px] font-[600] transition-colors"
              style={{ color: "#00A88F" }}
              onMouseEnter={e => e.currentTarget.style.color = "#00d4b4"}
              onMouseLeave={e => e.currentTarget.style.color = "#00A88F"}
            >
              Learn More <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaItem({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <Link
        href={item.href}
        className="flex items-start gap-3 px-3 py-2 rounded-lg transition-all duration-150"
        style={{ background: hovered ? "#f0faf8" : "transparent" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-150"
          style={{ background: hovered ? "#00A88F" : "#eef7f5" }}
        >
          <item.icon size={14} style={{ color: hovered ? "#fff" : "#00A88F" }} />
        </div>
        <div>
          <p
            className="text-[13px] font-[500] leading-tight transition-colors duration-150"
            style={{ color: hovered ? "#00A88F" : "#1a2e44" }}
          >
            {item.label}
          </p>
          <p className="text-[11.5px] mt-0.5" style={{ color: "#8aadca" }}>
            {item.desc}
          </p>
        </div>
      </Link>
    </li>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN HEADER
───────────────────────────────────────────────────── */
export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const mobileLinks = [
    { label: "About Shrote", href: "/about" },
    { label: "Industries", href: "#", children: megaMenus.Industries.columns[0].items },
    { label: "Services", href: "/services", children: [...megaMenus.Services.columns[0].items, ...megaMenus.Services.columns[1].items] },
    { label: "Products", href: "/products", children: megaMenus.Products.columns[0].items },
    { label: "Resources", href: "#", children: megaMenus.Resources.columns[0].items },
    { label: "Careers", href: "/join-our-team", children: megaMenus.Careers.columns[0].items },
  ];

  return (
    <div className="w-full">

      {/* ══ TOP BAR ══ */}
      <div
        className="hidden md:flex items-center justify-between w-full px-6 lg:px-10 py-[7px] text-[12px]"
        style={{ background: "#eaf2fb", borderBottom: "1px solid #cddceb" }}
      >
        <div className="flex items-center gap-4">
          <Link href="/contact" className="font-[600]" style={{ color: "#00A88F" }}>
            🚀 Shrote Enterprise Solutions 2026
          </Link>
          <span style={{ color: "#aac4da" }}>|</span>
          <Link href="/contact"
            className="transition-colors"
            style={{ color: "#2c4a6a" }}
            onMouseEnter={e => e.currentTarget.style.color = "#00A88F"}
            onMouseLeave={e => e.currentTarget.style.color = "#2c4a6a"}
          >Contact</Link>
          <span style={{ color: "#aac4da" }}>|</span>
          <span style={{ color: "#2c4a6a" }} className="font-[500]">#DigitalIndia</span>
        </div>
        <div className="flex items-center gap-1 font-[500]" style={{ color: "#2c4a6a" }}>
          <Globe size={13} /><span>EN</span>
        </div>
      </div>

      {/* ══ MAIN NAVBAR ══ */}
      <header
        className="w-full sticky top-0 z-50 bg-white"
        style={{ borderBottom: "1px solid #dde8f2", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[80px] gap-6">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center" onClick={() => setActiveMenu(null)}>
              <Logo variant="dark" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0 flex-1 justify-center">
              {topNavLinks.map((link) => {
                const isActive = activeMenu === link.label;
                return (
                  <div
                    key={link.label}
                    onMouseEnter={() => link.hasMega ? setActiveMenu(link.label) : setActiveMenu(null)}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-[3px] px-3.5 py-[24px] text-[13.5px] font-[500] transition-colors duration-150 relative"
                      style={{ color: isActive ? "#00A88F" : "#1a2e44" }}
                    >
                      {link.label}
                      {link.hasMega && (
                        <ChevronDown
                          size={13}
                          className={`mt-[1px] flex-shrink-0 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                          style={{ opacity: 0.7 }}
                        />
                      )}
                      {/* Bottom highlight */}
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-200"
                        style={{
                          background: "#00A88F",
                          transform: isActive ? "scaleX(1)" : "scaleX(0)",
                          transformOrigin: "left",
                        }}
                      />
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex flex-shrink-0">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-[13.5px] font-[600] transition-all duration-200"
                style={{ background: "#00A88F" }}
                onMouseEnter={e => e.currentTarget.style.background = "#008f79"}
                onMouseLeave={e => e.currentTarget.style.background = "#00A88F"}
              >
                Get Free Consultation
                <svg width="13" height="13" viewBox="0 0 43 43" fill="none">
                  <path d="M28.54 17.15L13.38 32.31L10.89 29.82L26.05 14.66H12.69V11.13H32.06V30.51H28.54V17.15Z" fill="currentColor" />
                </svg>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" style={{ color: "#1a2e44" }}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ══ MEGA MENU PANEL ══ */}
        {activeMenu && megaMenus[activeMenu] && (
          <MegaPanel data={megaMenus[activeMenu]} />
        )}

        {/* ══ MOBILE MENU ══ */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t" style={{ borderColor: "#dde8f2" }}>
            <div className="px-4 py-3 max-h-[80vh] overflow-y-auto">
              {mobileLinks.map((link) => (
                <div key={link.label} className="border-b last:border-0" style={{ borderColor: "#f0f5fa" }}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => !link.children && setMobileOpen(false)}
                      className="flex-1 block px-3 py-3 text-[13.5px] font-[500]"
                      style={{ color: "#1a2e44" }}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="p-3"
                        style={{ color: "#00A88F" }}
                      >
                        <ChevronDown size={15} className={`transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {link.children && mobileExpanded === link.label && (
                    <div className="ml-3 pl-3 pb-2 border-l-2 mb-1" style={{ borderColor: "#00A88F" }}>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-[12.5px] rounded transition-colors"
                          style={{ color: "#4a6a8a" }}
                        >
                          {child.icon && <child.icon size={12} style={{ color: "#00A88F" }} />}
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-[13px] font-[600] text-white"
                  style={{ background: "#00A88F" }}
                >
                  Get Free Consultation ▶
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
