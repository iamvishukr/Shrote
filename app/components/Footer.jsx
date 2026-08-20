"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Linkedin, Twitter, Instagram, Youtube, Facebook,
  Phone, Mail, MapPin, ArrowRight, Send, CheckCircle2, Loader2
} from "lucide-react";

const footerLinks = [
  {
    title: "Industries",
    links: [
      { label: "Healthcare & Pharma", href: "/services" },
      { label: "E-Commerce & Retail", href: "/ecommerce-solution" },
      { label: "Education & EdTech", href: "/services" },
      { label: "BFSI & Fintech", href: "/services" },
      { label: "Manufacturing", href: "/services" },
      { label: "Real Estate", href: "/services" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/web-development" },
      { label: "App Development", href: "/application-development" },
      { label: "Software Development", href: "/software-development" },
      { label: "E-Commerce Solution", href: "/ecommerce-solution" },
      { label: "SEO / SEM", href: "/seo-sem" },
      { label: "Web Design", href: "/web-design" },
      { label: "Bulk SMS", href: "/bulk-sms" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "HRMS Software", href: "/products" },
      { label: "ERP Suite", href: "/products" },
      { label: "AI Chatbot", href: "/products" },
      { label: "Payroll Management", href: "/products" },
      { label: "Inventory System", href: "/products" },
      { label: "School Management", href: "/products" },
      { label: "Restaurant POS", href: "/products" },
    ],
  },
  {
    title: "About Shrote",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Leadership Team", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Current Openings", href: "/current-opening" },
      { label: "Internship Program", href: "/internship" },
      { label: "Join Our Team", href: "/join-our-team" },
      { label: "Life at Shrote", href: "/about" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/shrote/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Shrote_services", label: "Twitter" },
  { icon: Facebook, href: "https://www.facebook.com/people/Shrote/61569121190721/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/shrotetechnology/", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const contactInfo = [
  { icon: MapPin, text: "25th Main Rd, Putlanpalya, Jayanagara 9th Block, Bengaluru, Karnataka 560041", href: "https://maps.google.com/?q=Shrote+Technology+Bengaluru" },
  { icon: Phone, text: "+91-7667983607", href: "tel:+917667983607" },
  { icon: Mail, text: "info@shrote.com", href: "mailto:info@shrote.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      // 1. Save to Firebase Firestore
      await addDoc(collection(db, "newsletterSubscribers"), {
        email: email.trim(),
        timestamp: new Date(),
        source: "Footer Newsletter",
      });

      // 2. Send notification via Web3Forms
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "41cea524-32f1-47ce-8c82-995b98110cbc",
            email: email.trim(),
            subject: "New Newsletter Subscriber - Shrote Technology",
            from_name: "Shrote Website - Footer Newsletter",
          }),
        });
      } catch (web3Err) {
        console.error("Web3Forms newsletter notify failed:", web3Err);
      }

      setSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      // Fallback state so user gets feedback
      setSubscribed(true);
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer style={{ background: "#0d2a4a" }}>

      {/* ── TOP CTA BANNER ── */}
      <div
        className="w-full py-10 px-6"
        style={{
          background: "linear-gradient(135deg, #00A88F 0%, #007a68 50%, #0d325a 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white font-extrabold text-2xl md:text-3xl mb-1">
              Ready to Transform Your Business?
            </h2>
            <p className="text-green-100 text-sm md:text-base opacity-90">
              Let's build something exceptional together. 500+ enterprises trust Shrote Technology.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white font-bold text-sm transition-all duration-200 hover:shadow-lg"
              style={{ color: "#00A88F" }}
            >
              Get Free Consultation
              <ArrowRight size={15} />
            </Link>
            <Link
              href="tel:+917667983607"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200"
            >
              <Phone size={14} /> Call Us Now
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER CONTAINER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">

        {/* ── ROW 1 (UPPER): 5 LINK COLUMNS (Industries, Services, Products, About, Careers) ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-[13px] uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] transition-colors duration-150 flex items-center gap-1.5 text-[#8eb0ce] hover:text-[#00A88F]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── ROW 2 (LOWER): BRAND + HQ ADDRESS + STAY IN THE LOOP NEWSLETTER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-white/10 items-start">
          {/* Brand & Mission (4 Cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Logo variant="light" />
            </Link>
            <p className="text-[13.5px] leading-relaxed mb-5 text-[#8eb0ce]">
              India's leading enterprise software & digital engineering company. Delivering 16+ innovative cloud products & custom technology solutions since 2014.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.12)", color: "#8eb0ce" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#00A88F";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#00A88F";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#8eb0ce";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Address & Direct Contact (4 Cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-[13px] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00A88F]" />
              Bengaluru Corporate HQ
            </h4>
            <div className="space-y-3">
              {contactInfo.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[13px] text-[#8eb0ce] hover:text-[#00A88F] transition-colors leading-relaxed group"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#00A88F] transition-colors mt-0.5">
                    <c.icon size={13} className="text-[#00A88F]" />
                  </div>
                  <span>{c.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Stay In The Loop Newsletter Box (4 Cols) */}
          <div className="lg:col-span-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
            <h5 className="text-white font-bold text-[15px] mb-1 flex items-center gap-2">
              <Send size={15} className="text-[#00A88F]" />
              Stay in the loop
            </h5>
            <p className="text-[12.5px] text-[#8eb0ce] leading-relaxed mb-4">
              Subscribe to our technology newsletter — insights, product updates & architecture trends.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-[#00d4b4] text-[13px] font-semibold bg-[#00A88F]/10 p-3 rounded-xl border border-[#00A88F]/30">
                <CheckCircle2 size={16} /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full px-3.5 py-2.5 rounded-xl text-[13px] outline-none border transition-all text-white placeholder-white/40"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.15)",
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white text-[13px] font-bold transition-all shadow-md disabled:opacity-60"
                  style={{ background: "#00A88F" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#008f79"}
                  onMouseLeave={e => e.currentTarget.style.background = "#00A88F"}
                >
                  {loading ? (
                    <>
                      <Loader2 size={15} className="animate-spin" /> Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe to Newsletter <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── ROW 3: BOTTOM BAR ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-[12.5px] text-[#6484a0]">
            © {new Date().getFullYear()} Shrote Technology Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href="/privacy-policy"
              className="text-[12.5px] text-[#6484a0] hover:text-[#00A88F] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-[12.5px] text-[#6484a0] hover:text-[#00A88F] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-[12.5px] text-[#6484a0] hover:text-[#00A88F] transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/contact"
              className="text-[12.5px] text-[#6484a0] hover:text-[#00A88F] transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
