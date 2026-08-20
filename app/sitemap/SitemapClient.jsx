"use client";

import Header from "../Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import Link from "next/link";
import { Compass, ExternalLink, ArrowRight, Layers } from "lucide-react";

const sitemapSections = [
  {
    category: "Main Pages",
    links: [
      { label: "Home", href: "/", desc: "Homepage of Shrote Technology" },
      { label: "About Us", href: "/about", desc: "Our story, values & leadership team" },
      { label: "Services", href: "/services", desc: "Comprehensive engineering & consulting" },
      { label: "Portfolio", href: "/portfolio", desc: "Selected case studies & shipped products" },
      { label: "Testimonials", href: "/testimonials", desc: "Client feedback & enterprise reviews" },
      { label: "Contact Us", href: "/contact", desc: "Get in touch for custom consultations" },
    ],
  },
  {
    category: "Services & Capabilities",
    links: [
      { label: "Web Development", href: "/web-development", desc: "Next.js, React & full-stack web platforms" },
      { label: "Application Development", href: "/application-development", desc: "iOS Swift, Android Kotlin & Flutter" },
      { label: "Software Development", href: "/software-development", desc: "Custom software & cloud microservices" },
      { label: "E-Commerce Solutions", href: "/ecommerce-solution", desc: "High-scale multi-vendor & B2B stores" },
      { label: "Portal Development", href: "/portal-development", desc: "Enterprise dashboards & workflows" },
      { label: "Data Science & AI", href: "/data-science-solution", desc: "Predictive analytics & AI agents" },
      { label: "SEO & Growth Marketing", href: "/seo-sem", desc: "Search optimization & performance ads" },
      { label: "Web Design & UI/UX", href: "/web-design", desc: "Figma design systems & modern UI" },
      { label: "Bulk SMS Services", href: "/bulk-sms", desc: "High-throughput messaging APIs" },
    ],
  },
  {
    category: "Enterprise Products",
    links: [
      { label: "All Products Overview", href: "/products", desc: "Explore all 16+ SaaS cloud suites" },
      { label: "HRMS Software", href: "/products/hrms-software", desc: "Human resource & attendance system" },
      { label: "ERP Suite", href: "/products/erp-software", desc: "Enterprise resource planning suite" },
      { label: "AI Chatbot Platform", href: "/products/ai-chatbot", desc: "Autonomous 24/7 customer support" },
      { label: "Payroll Management", href: "/products/payroll-software", desc: "Automated tax & salary disbursement" },
      { label: "Inventory Management", href: "/products/inventory-system", desc: "Warehouse stock & SKU tracking" },
      { label: "School Management System", href: "/products/school-management", desc: "EdTech student & fee management" },
      { label: "Restaurant POS", href: "/products/restaurant-pos", desc: "Billing, kitchen display & orders" },
    ],
  },
  {
    category: "Careers & Legal",
    links: [
      { label: "Current Openings", href: "/current-opening", desc: "Explore active engineering roles" },
      { label: "Internship Program", href: "/internship", desc: "Hands-on tech internship tracks" },
      { label: "Join Our Team", href: "/join-our-team", desc: "Direct recruitment application form" },
      { label: "Privacy Policy", href: "/privacy-policy", desc: "Data protection & privacy terms" },
      { label: "Terms of Service", href: "/terms-of-service", desc: "Engagement & master services terms" },
      { label: "XML Sitemap", href: "/sitemap.xml", desc: "Search engine crawler XML feed" },
    ],
  },
];

export default function SitemapClient() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />

      <PageBanner
        title="Website"
        highlight="Sitemap"
        subtitle="Complete index of all services, software products, and company pages on Shrote Technology."
        breadcrumb={[{ label: "Sitemap" }]}
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {sitemapSections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#e8f0f7] shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-[#0d2a4a] mb-6 flex items-center gap-2.5 pb-4 border-b border-[#f0f5fa]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A88F]" />
                {section.category}
              </h3>

              <div className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.href}
                    className="flex items-start justify-between p-3.5 rounded-2xl hover:bg-[#eef7f5] transition-all group"
                  >
                    <div>
                      <h4 className="font-bold text-[14.5px] text-[#0d2a4a] group-hover:text-[#00A88F] transition-colors flex items-center gap-1.5">
                        {link.label}
                      </h4>
                      <p className="text-[12.5px] text-[#5a7a9a] mt-0.5">
                        {link.desc}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-[#94a3b8] group-hover:text-[#00A88F] group-hover:translate-x-1 transition-all mt-1 flex-shrink-0"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
