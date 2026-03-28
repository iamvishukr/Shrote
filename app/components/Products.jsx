"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─── Intersection Observer Hook ─── */
function useIntersection(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.12, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── Product data ─── */
const products = [
  {
    id: 1, slug: "hrms-suite", category: "HR & Workforce", tag: "Enterprise", name: "HRMS Suite",
    tagline: "Mobile & Web Admin Dashboard",
    description: "Complete Human Resource Management System with powerful mobile app and web admin dashboard. Manage employees, attendance, leaves, payroll, and performance — all in one unified platform.",
    features: ["Employee Onboarding", "Leave & Attendance", "Performance Review", "Role-based Access"],
    gradient: "from-blue-600 to-cyan-500", iconBg: "bg-blue-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>,
  },
  {
    id: 2, slug: "erp-suite", category: "Business Management", tag: "Enterprise", name: "ERP Suite",
    tagline: "End-to-End Enterprise Resource Planning",
    description: "A powerful ERP suite designed for enterprises to streamline operations, manage supply chains, finances, procurement, and reporting within a single integrated ecosystem.",
    features: ["Finance Management", "Supply Chain", "Procurement Module", "Real-time Analytics"],
    gradient: "from-violet-600 to-purple-500", iconBg: "bg-violet-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"/></svg>,
  },
  {
    id: 3, slug: "e-commerce-application", category: "E-Commerce", tag: "Scalable", name: "E-Commerce Application",
    tagline: "Next-Gen Online Retail Platform",
    description: "Full-featured e-commerce application supporting multi-vendor management, seamless payments, inventory tracking, and a stunning storefront built for scale and conversion.",
    features: ["Multi-Vendor Support", "Payment Gateway", "Smart Inventory", "Mobile Commerce"],
    gradient: "from-orange-500 to-amber-400", iconBg: "bg-orange-500",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/></svg>,
  },
  {
    id: 4, slug: "accounting-software", category: "Finance", tag: "Enterprise", name: "Accounting Software",
    tagline: "Smart Financial Management",
    description: "Comprehensive accounting software enabling businesses to manage ledgers, invoicing, GST/tax compliance, financial reports, and cash flows with unmatched accuracy.",
    features: ["GST & Tax Filing", "Invoice Generation", "P&L Reports", "Bank Reconciliation"],
    gradient: "from-emerald-600 to-green-400", iconBg: "bg-emerald-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  },
  {
    id: 5, slug: "payroll-software", category: "HR & Workforce", tag: "Automation", name: "Payroll Software",
    tagline: "Automated Salary & Compliance",
    description: "End-to-end payroll automation covering salary computation, tax deductions, PF/ESI compliance, payslip generation, and direct bank disbursement — error-free and on time.",
    features: ["Auto Salary Calc", "PF/ESI Compliance", "Payslip Generation", "Bank Integration"],
    gradient: "from-sky-600 to-blue-400", iconBg: "bg-sky-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008H14.25V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>,
  },
  {
    id: 6, slug: "ai-agents", category: "Artificial Intelligence", tag: "AI-Powered", name: "AI Agents",
    tagline: "Intelligent Automation Agents",
    description: "Deploy intelligent AI agents that autonomously handle complex business workflows — from data analysis to decision automation — powered by cutting-edge large language models.",
    features: ["Workflow Automation", "NLP Processing", "Data Extraction", "Custom Training"],
    gradient: "from-fuchsia-600 to-pink-500", iconBg: "bg-fuchsia-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>,
  },
  {
    id: 7, slug: "ai-chatbot", category: "Artificial Intelligence", tag: "AI-Powered", name: "AI Chatbot",
    tagline: "24/7 Conversational AI",
    description: "Deploy smart AI chatbots on your website, apps, or WhatsApp. Handle customer queries, lead generation, support tickets, and sales conversations — automatically.",
    features: ["Multi-Platform", "Lead Capture", "Live Handover", "Analytics Dashboard"],
    gradient: "from-teal-600 to-cyan-400", iconBg: "bg-teal-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>,
  },
  {
    id: 8, slug: "health-monitoring-ai", category: "Health & Fitness", tag: "AI-Powered", name: "Health Monitoring AI",
    tagline: "AI Fitness & Health Tracker",
    description: "Advanced AI-driven health monitoring that tracks vitals, fitness metrics, sleep patterns, and offers personalized recommendations — empowering smarter wellness decisions.",
    features: ["Vital Tracking", "AI Health Insights", "Diet Planning", "Fitness Analytics"],
    gradient: "from-rose-600 to-red-400", iconBg: "bg-rose-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>,
  },
  {
    id: 9, slug: "inventory-management", category: "Operations", tag: "Enterprise", name: "Inventory Management",
    tagline: "Smart Stock Control System",
    description: "Real-time inventory management for tracking stock levels, warehouse operations, supplier management, and auto-reorder — delivering zero stockout and zero overstock.",
    features: ["Real-time Tracking", "Warehouse Mgmt", "Auto Reorder", "Barcode Support"],
    gradient: "from-yellow-600 to-amber-400", iconBg: "bg-yellow-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>,
  },
  {
    id: 10, slug: "restaurant-management", category: "Hospitality", tag: "Industry", name: "Restaurant Management",
    tagline: "Complete Restaurant OS",
    description: "All-in-one restaurant management covering table reservations, order management, billing, kitchen display, menu management, and staff operations.",
    features: ["Table Management", "KDS Integration", "Billing & POS", "Online Orders"],
    gradient: "from-lime-600 to-green-500", iconBg: "bg-lime-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-3 1.5v-1.5m-3 1.5v-1.5M3 16.5h18M3 21h18M3 12h18"/></svg>,
  },
  {
    id: 11, slug: "book-shop-management", category: "Retail", tag: "Industry", name: "Book Shop Management",
    tagline: "Modern Bookstore Solution",
    description: "Comprehensive bookstore management with catalogue management, ISBN tracking, point of sale, online storefront integration, and customer loyalty programs.",
    features: ["ISBN Tracking", "POS System", "Online Store Sync", "Loyalty Program"],
    gradient: "from-indigo-600 to-blue-500", iconBg: "bg-indigo-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>,
  },
  {
    id: 12, slug: "ai-games", category: "AI Gaming", tag: "AI-Powered", name: "AI Games",
    tagline: "Intelligent Game Experiences",
    description: "Next-gen AI-powered gaming with adaptive difficulty, smart NPCs, procedural content generation, and personalized gameplay — redefining entertainment through AI.",
    features: ["Adaptive AI NPCs", "Procedural Content", "Personalized Play", "Cross-Platform"],
    gradient: "from-purple-600 to-fuchsia-500", iconBg: "bg-purple-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.4.959.4v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"/></svg>,
  },
  {
    id: 13, slug: "auto-booking-app", category: "Transport", tag: "Industry", name: "Auto Booking App",
    tagline: "Smart Transport Booking Platform",
    description: "Modern vehicle and cab booking app with real-time tracking, dynamic pricing, driver management, and seamless payment — built for transport businesses of all sizes.",
    features: ["Real-time Tracking", "Driver Management", "Dynamic Pricing", "Digital Payments"],
    gradient: "from-cyan-600 to-sky-400", iconBg: "bg-cyan-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>,
  },
  {
    id: 14, slug: "gift-shop-management", category: "Retail", tag: "Industry", name: "Gift Shop Management",
    tagline: "Complete Gift Retail Solution",
    description: "Tailored gift shop management with catalogue, custom order handling, seasonal promotions, inventory, POS billing, and CRM for growing gift businesses.",
    features: ["Custom Orders", "Seasonal Promos", "POS & Billing", "CRM Integration"],
    gradient: "from-pink-600 to-rose-400", iconBg: "bg-pink-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>,
  },
  {
    id: 15, slug: "school-management", category: "Education", tag: "Enterprise", name: "School Management",
    tagline: "Complete EdTech Platform",
    description: "All-in-one school management handling admissions, attendance, timetables, fee collection, examinations, parent communication, and performance analytics.",
    features: ["Admission Mgmt", "Fee Collection", "Exam Portal", "Parent App"],
    gradient: "from-blue-700 to-indigo-500", iconBg: "bg-blue-700",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>,
  },
  {
    id: 16, slug: "studio-management", category: "Creative", tag: "Industry", name: "Studio Management",
    tagline: "Photography & Studio OS",
    description: "Professional studio management for photographers and videographers — booking management, client portals, delivery tracking, and invoice management.",
    features: ["Session Booking", "Client Portal", "Delivery Tracking", "Invoice & Billing"],
    gradient: "from-gray-600 to-slate-500", iconBg: "bg-gray-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/></svg>,
  },
];

const categories = ["All", "HR & Workforce", "Business Management", "E-Commerce", "Finance", "Artificial Intelligence", "Health & Fitness", "Operations", "Hospitality", "Retail", "AI Gaming", "Transport", "Education", "Creative"];

/* ─── Single animated card ─── */
function ProductCard({ product, index }) {
  const [cardRef, cardVisible] = useIntersection();
  return (
    <div
      ref={cardRef}
      style={{
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
        transition: `opacity 0.5s cubic-bezier(.4,0,.2,1) ${index * 0.06}s, transform 0.5s cubic-bezier(.4,0,.2,1) ${index * 0.06}s`,
      }}
      className="group relative rounded-2xl overflow-hidden"
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}>
      </div>
      <div className={`absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-gradient-to-br ${product.gradient}`}></div>

      {/* Card inner */}
      <div className="relative z-10 bg-[#0a0a12] rounded-2xl p-6 h-full flex flex-col gap-4 group-hover:bg-[#0d0d18] transition-colors duration-500">
        {/* Glow effect */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.07] rounded-full blur-3xl transition-opacity duration-700 -translate-y-8 translate-x-8`}></div>

        {/* Header — tag + category */}
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md bg-gradient-to-r ${product.gradient} text-white uppercase tracking-wider`}>
            {product.tag}
          </span>
          <span className="text-[11px] text-gray-500 font-medium">{product.category}</span>
        </div>

        {/* Icon with animated ring — hidden on mobile */}
        <div className="relative w-14 h-14 hidden sm:block">
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${product.gradient} opacity-20 blur-sm group-hover:opacity-40 group-hover:blur-md transition-all duration-500`}></div>
          <div className={`relative w-14 h-14 rounded-xl ${product.iconBg} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            {product.icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-50 transition-colors">{product.name}</h3>
          <p className={`text-transparent bg-clip-text bg-gradient-to-r ${product.gradient} text-xs font-semibold mb-3 tracking-wide`} style={{ marginTop: "26px" }}>{product.tagline}</p>
          <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">{product.description}</p>
        </div>

        {/* Features pills */}
        <div className="flex flex-wrap gap-1.5">
          {product.features.map((f, i) => (
            <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-gray-400 group-hover:bg-white/[0.1] group-hover:text-gray-200 transition-all duration-300">
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link href={`/products/${product.slug}`} className="mt-auto pt-2 flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-blue-400 transition-all duration-300">
          <span>View Details</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

/* ─── Main Products Section ─── */
export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [headerRef, headerVisible] = useIntersection();

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#050508]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/[0.03] rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/[0.03] rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span></span>
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Enterprise-Grade{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Software Products
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Powering businesses across industries with purpose-built, scalable software solutions.
            Every product is engineered for enterprise performance and ease of use.
          </p>
        </div>

        {/* ── Category Filter ── */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(.4,0,.2,1) 0.15s",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white/[0.04] text-gray-400 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Products Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="mt-20 relative overflow-hidden rounded-3xl"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(.4,0,.2,1) 0.3s",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/10 to-purple-600/20"></div>
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Need a Custom Enterprise Solution?</h3>
              <p className="text-gray-400 text-lg">We build tailor-made software for your specific business requirements.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Consultation
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
