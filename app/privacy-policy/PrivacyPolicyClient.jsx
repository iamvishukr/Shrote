"use client";

import Header from "../Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyClient() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />

      <PageBanner
        title="Privacy"
        highlight="Policy"
        subtitle="Your privacy is paramount to Shrote Technology. Learn how we protect, secure, and manage your data."
        breadcrumb={[{ label: "Privacy Policy" }]}
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e8f0f7] shadow-sm space-y-10">
          
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
              style={{ background: "#eef7f5", color: "#00A88F" }}
            >
              <ShieldCheck size={14} /> Effective Date: January 1, 2026
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2a4a]">
              Commitment to Data Security & User Privacy
            </h2>
            <p className="text-[15px] text-[#5a7a9a] leading-relaxed mt-3">
              Shrote Technology Pvt. Ltd. ("Shrote", "we", "us", or "our") values the trust you place in us when sharing your personal and business data. This Privacy Policy outlines our standards regarding data collection, encryption, storage, and processing across all our websites, software products, and consulting engagements.
            </p>
          </div>

          <hr className="border-[#f0f5fa]" />

          {/* Section 1 */}
          <div>
            <h3 className="text-xl font-bold text-[#0d2a4a] mb-3 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#eef7f5] text-[#00A88F] flex items-center justify-center text-xs font-bold">1</span>
              Information We Collect
            </h3>
            <p className="text-[14.5px] text-[#5a7a9a] leading-relaxed mb-3">
              We collect information that you provide directly to us when filling out consultation forms, applying for job openings, or subscribing to our newsletters. This includes:
            </p>
            <ul className="space-y-2 text-[14px] text-[#5a7a9a]">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A88F] flex-shrink-0" />
                <span><strong>Personal Identification:</strong> Full name, professional email address, phone number, and physical office location.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A88F] flex-shrink-0" />
                <span><strong>Project Specifications:</strong> Technical requirements, project budgets, feature roadmaps, and business scope documents.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A88F] flex-shrink-0" />
                <span><strong>Candidate Data:</strong> Curricula Vitae (CV/Resume), previous employment history, academic qualifications, and key skills.</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-bold text-[#0d2a4a] mb-3 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#eef7f5] text-[#00A88F] flex items-center justify-center text-xs font-bold">2</span>
              How We Use Your Information
            </h3>
            <p className="text-[14.5px] text-[#5a7a9a] leading-relaxed mb-3">
              Your data is exclusively utilized to provide high-quality engineering services and transparent communication:
            </p>
            <ul className="space-y-2 text-[14px] text-[#5a7a9a]">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#00A88F] flex-shrink-0 mt-0.5" />
                <span>To respond to your service inquiries, schedule architecture consultations, and deliver technical proposals.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#00A88F] flex-shrink-0 mt-0.5" />
                <span>To process job applications, evaluate candidate qualifications, and schedule recruitment interviews.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-[#00A88F] flex-shrink-0 mt-0.5" />
                <span>To deliver our technology insights newsletter (you may opt out at any time with one click).</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-xl font-bold text-[#0d2a4a] mb-3 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#eef7f5] text-[#00A88F] flex items-center justify-center text-xs font-bold">3</span>
              Data Protection & Non-Disclosure (NDA)
            </h3>
            <p className="text-[14.5px] text-[#5a7a9a] leading-relaxed">
              We employ bank-grade AES-256 encryption at rest and TLS 1.3 in transit. We sign mutual Non-Disclosure Agreements (NDAs) before architectural discovery sessions, and we never sell, rent, or monetize your personal or proprietary enterprise data to third-party advertisers.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-xl font-bold text-[#0d2a4a] mb-3 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#eef7f5] text-[#00A88F] flex items-center justify-center text-xs font-bold">4</span>
              Contact Our Data Protection Officer
            </h3>
            <p className="text-[14.5px] text-[#5a7a9a] leading-relaxed mb-4">
              If you have questions regarding this Privacy Policy or wish to request data modification or deletion, contact our privacy team:
            </p>
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-[#e2eaf2] text-[14px] text-[#0d2a4a] space-y-1">
              <p><strong>Email:</strong> privacy@shrote.com / info@shrote.com</p>
              <p><strong>Phone:</strong> +91-7667983607</p>
              <p><strong>Corporate HQ:</strong> 25th Main Rd, Putlanpalya, Jayanagara 9th Block, Bengaluru, Karnataka 560041</p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#f0f5fa] flex items-center justify-between">
            <Link href="/" className="text-[14px] font-bold text-[#00A88F] hover:underline">
              ← Return to Home
            </Link>
            <Link href="/terms-of-service" className="text-[14px] font-bold text-[#0d2a4a] hover:text-[#00A88F]">
              Read Terms of Service →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
