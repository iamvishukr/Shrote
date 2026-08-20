"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Users, Award, Handshake, ShieldCheck, ArrowRight, Play, Sparkles } from "lucide-react";

const WhoWeAre = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    awards: 0,
    partners: 0,
    users: 0,
  });

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      customers: 200,
      awards: 25,
      partners: 120,
      users: 50000,
    };

    const duration = 1500;
    const steps = 40;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key];
      const increment = target / steps;
      let step = 0;

      return setInterval(() => {
        step++;
        const current = Math.min(Math.floor(increment * step), target);
        setCounters((prev) => ({ ...prev, [key]: current }));
        if (step >= steps) {
          clearInterval(intervals.find((interval) => interval === this));
        }
      }, stepDuration);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: counters.customers > 0 ? `${counters.customers}+` : "200+",
      label: "Enterprise Clients",
      sublabel: "Delivering software excellence pan-India & globally.",
    },
    {
      icon: Handshake,
      value: counters.partners > 0 ? `${counters.partners}+` : "120+",
      label: "Technology Partners",
      sublabel: "Collaborating with leading cloud & AI ecosystems.",
    },
    {
      icon: Award,
      value: counters.awards > 0 ? `${counters.awards}+` : "25+",
      label: "Industry Recognitions",
      sublabel: "Awarded for innovation & technical leadership.",
    },
    {
      icon: ShieldCheck,
      value: counters.users > 0 ? `${(counters.users / 1000).toFixed(0)}k+` : "50k+",
      label: "Daily Active Users",
      sublabel: "Relying on our deployed SaaS platforms & products.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Intro */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-4"
            style={{ background: "#eef7f5", color: "#00A88F" }}
          >
            <Sparkles size={14} /> Who We Are
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d2a4a] tracking-tight leading-tight mb-5">
            Pioneering <span style={{
              background: "linear-gradient(90deg, #00A88F, #00d4b4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Digital Transformation</span> & Product Engineering
          </h2>

          <p className="text-[15.5px] text-[#5a7a9a] leading-relaxed mb-6">
            Shrote Technology is a premier enterprise software and AI development company headquartered in Bangalore. We engineer scalable SaaS architectures, AI chatbots, ERP systems, and cloud web applications that empower businesses to lead in their industries.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-[13.5px] font-[600] transition-all shadow-md"
              style={{ background: "#00A88F" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
            >
              Get In Touch <ArrowRight size={14} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[#0d2a4a] text-[13.5px] font-[600] border border-gray-200 hover:bg-gray-50 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Right Visual Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl group">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Shrote Team Culture"
            className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a4a]/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-xl font-bold">2+ Years of Tech Excellence</p>
            <p className="text-blue-200 text-sm mt-1">Driving measurable business outcomes through high-velocity engineering.</p>
          </div>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              style={{ border: "1px solid #e8f0f7" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "#eef7f5", color: "#00A88F" }}
              >
                <Icon size={24} />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0d2a4a] mb-1.5">
                {item.value}
              </p>
              <h3 className="text-base font-bold text-[#0d2a4a] mb-1">
                {item.label}
              </h3>
              <p className="text-[13px] text-[#6b8ba8] leading-relaxed">
                {item.sublabel}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhoWeAre;

