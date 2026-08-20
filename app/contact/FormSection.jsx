"use client";

import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles, Clock, ShieldCheck } from "lucide-react";

function FormSection() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    address: "",
    service: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("Sending your message...");

    try {
      // 1. Save to Firebase Firestore
      const response = await addDoc(collection(db, "contactUs"), {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
        address: formData.address,
        service: formData.service,
        city: formData.city,
        timestamp: new Date(),
      });

      // 2. Send via Web3Forms
      if (response) {
        try {
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: "41cea524-32f1-47ce-8c82-995b98110cbc",
              name: formData.name,
              email: formData.email,
              mobile: formData.mobile,
              message: formData.message,
              address: formData.address,
              service: formData.service,
              city: formData.city,
              subject: "New Contact Form Submission - Shrote Technology",
              from_name: "Shrote Website - Contact Page"
            }),
          });
        } catch (err) {
          console.error("Web3Forms submit failed:", err);
        }

        setResult("Message sent successfully! Our team will contact you shortly. ✅");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
          address: "",
          service: "",
          city: "",
        });
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      setResult("Something went wrong. Please try again or call us directly. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
        
        {/* ── Left Column: Contact Cards & Info ── */}
        <div className="space-y-8">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
              style={{ background: "#eef7f5", color: "#00A88F" }}
            >
              <Sparkles size={14} /> Get in touch with us
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0d2a4a] tracking-tight mb-4">
              Let's Discuss Your <br className="hidden sm:block" />
              <span
                style={{
                  background: "linear-gradient(90deg, #00A88F, #00d4b4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Technology Vision
              </span>
            </h2>

            <p className="text-[15.5px] text-[#5a7a9a] leading-relaxed">
              We'd love to hear from you! Whether you have questions about custom software, need an enterprise product demo, or want to discuss a dedicated team, reach out today.
            </p>
          </div>

          {/* Quick Contact Info Cards */}
          <div className="space-y-4">
            {/* Phone & Email Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:+917667983607"
                className="bg-white p-6 rounded-3xl border border-[#e8f0f7] hover:border-[#00A88F]/50 hover:shadow-lg transition-all group flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{ background: "#00A88F" }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0d2a4a] text-[14.5px] mb-1">Direct Line</h4>
                  <p className="text-[13.5px] text-[#5a7a9a] font-medium">+91 76679 83607</p>
                  <span className="text-[11.5px] text-[#00A88F] font-semibold">Mon–Sat, 9AM–7PM</span>
                </div>
              </a>

              <a
                href="mailto:info@shrote.com"
                className="bg-white p-6 rounded-3xl border border-[#e8f0f7] hover:border-[#00A88F]/50 hover:shadow-lg transition-all group flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{ background: "#0d2a4a" }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0d2a4a] text-[14.5px] mb-1">Official Email</h4>
                  <p className="text-[13.5px] text-[#5a7a9a] font-medium">info@shrote.com</p>
                  <span className="text-[11.5px] text-[#00A88F] font-semibold">&lt; 2hr Response Time</span>
                </div>
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#e8f0f7] hover:shadow-md transition-all flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #0d2a4a 0%, #00A88F 100%)" }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0d2a4a] text-[14.5px] mb-1">Bengaluru Corporate HQ</h4>
                <p className="text-[13.5px] text-[#5a7a9a] leading-relaxed">
                  25th Main Rd, Putlanpalya, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560041
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-[12.5px] text-[#5a7a9a] bg-white px-4 py-2.5 rounded-xl border border-[#e8f0f7]">
                <ShieldCheck size={16} className="text-[#00A88F]" />
                <span>Strict Non-Disclosure NDA</span>
              </div>
              <div className="flex items-center gap-2 text-[12.5px] text-[#5a7a9a] bg-white px-4 py-2.5 rounded-xl border border-[#e8f0f7]">
                <Clock size={16} className="text-[#00A88F]" />
                <span>Free Initial Architecture Scope</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column: Consultation Form Card ── */}
        <div
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#e8f0f7]"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-[#0d2a4a]">Send Us A Message</h3>
            <p className="text-[13.5px] text-[#5a7a9a] mt-1">
              Fill in your project requirements below to receive a free consultation & roadmap.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12.5px] font-bold text-[#0d2a4a] mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#f8fafc] border border-[#e2eaf2] rounded-xl px-4 py-3 text-[14px] text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12.5px] font-bold text-[#0d2a4a] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full bg-[#f8fafc] border border-[#e2eaf2] rounded-xl px-4 py-3 text-[14px] text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[12.5px] font-bold text-[#0d2a4a] mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="10-digit number"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  className="w-full bg-[#f8fafc] border border-[#e2eaf2] rounded-xl px-4 py-3 text-[14px] text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12.5px] font-bold text-[#0d2a4a] mb-1.5">
                  Service Requirement *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#f8fafc] border border-[#e2eaf2] rounded-xl px-4 py-3 text-[14px] text-[#0d2a4a] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all cursor-pointer"
                >
                  <option value="">Select Service Area</option>
                  <option value="webDevelopment">Web Development (Next.js/React)</option>
                  <option value="applicationDevelopment">Mobile App (iOS/Android/Flutter)</option>
                  <option value="softwareDevelopment">Software & Cloud Architecture</option>
                  <option value="eCommerceSolution">E-Commerce Storefront</option>
                  <option value="portalDevelopment">Enterprise Portal / ERP</option>
                  <option value="seoSem">SEO & Growth Marketing</option>
                  <option value="webDesign">UI/UX Design Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-[12.5px] font-bold text-[#0d2a4a] mb-1.5">
                  City / Location *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Bengaluru, Mumbai"
                  required
                  className="w-full bg-[#f8fafc] border border-[#e2eaf2] rounded-xl px-4 py-3 text-[14px] text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12.5px] font-bold text-[#0d2a4a] mb-1.5">
                Company Name / Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Company name or location"
                className="w-full bg-[#f8fafc] border border-[#e2eaf2] rounded-xl px-4 py-3 text-[14px] text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[12.5px] font-bold text-[#0d2a4a] mb-1.5">
                Project Scope / Message *
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project goals, timelines, or features..."
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#f8fafc] border border-[#e2eaf2] rounded-xl px-4 py-3 text-[14px] text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-full text-white font-bold text-[14.5px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              style={{ background: "#00A88F" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
            >
              <Send size={16} />
              <span>{loading ? "Submitting Request..." : "Submit Consultation Request"}</span>
            </button>
          </form>

          {result && (
            <div
              className={`mt-4 p-3.5 rounded-xl text-[13px] font-medium text-center ${
                result.includes("successfully")
                  ? "bg-[#eef7f5] text-[#00A88F] border border-[#00A88F]/30"
                  : "bg-red-50 text-red-600 border border-red-200"
              }`}
            >
              {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FormSection;
