"use client";

import Header from "../Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import { FileText, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import Link from "next/link";

export default function TermsOfServiceClient() {
  return (
    <div className="min-h-screen" style={{ background: "#f5f9fd" }}>
      <Header />

      <PageBanner
        title="Terms of"
        highlight="Service"
        subtitle="Standard terms and agreements governing our enterprise software development and consulting engagements."
        breadcrumb={[{ label: "Terms of Service" }]}
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e8f0f7] shadow-sm space-y-10">
          
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-[700] uppercase tracking-[1.5px] mb-3"
              style={{ background: "#eef7f5", color: "#00A88F" }}
            >
              <FileText size={14} /> Master Services Agreement
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2a4a]">
              Terms of Engagement & Service Delivery
            </h2>
            <p className="text-[15px] text-[#5a7a9a] leading-relaxed mt-3">
              By accessing the website of Shrote Technology Pvt. Ltd. or engaging our engineering teams for custom software development, cloud infrastructure, AI solutions, or digital consulting, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>

          <hr className="border-[#f0f5fa]" />

          {/* Section 1 */}
          <div>
            <h3 className="text-xl font-bold text-[#0d2a4a] mb-3 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#eef7f5] text-[#00A88F] flex items-center justify-center text-xs font-bold">1</span>
              Scope of Engineering Services
            </h3>
            <p className="text-[14.5px] text-[#5a7a9a] leading-relaxed mb-3">
              Shrote delivers bespoke web engineering, mobile applications (iOS/Android), enterprise ERP/HRMS suites, and digital marketing consulting as detailed in individual Statements of Work (SOWs) signed with our clients.
            </p>
            <ul className="space-y-2 text-[14px] text-[#5a7a9a]">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A88F] flex-shrink-0" />
                <span>All development follows sprint-based agile delivery with bi-weekly milestone sign-offs.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A88F] flex-shrink-0" />
                <span>Modifications to project scope will be evaluated under structured Change Request (CR) documentation.</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-bold text-[#0d2a4a] mb-3 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#eef7f5] text-[#00A88F] flex items-center justify-center text-xs font-bold">2</span>
              Intellectual Property (IP) Ownership
            </h3>
            <p className="text-[14.5px] text-[#5a7a9a] leading-relaxed">
              Upon receipt of full payment for agreed milestones, 100% of the custom source code, design assets, database architectures, and associated intellectual property rights created specifically for the client are irrevocably transferred to the client. Shrote retains rights only to pre-existing proprietary frameworks and open-source boilerplates.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-xl font-bold text-[#0d2a4a] mb-3 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#eef7f5] text-[#00A88F] flex items-center justify-center text-xs font-bold">3</span>
              Warranty & SLA Support
            </h3>
            <p className="text-[14.5px] text-[#5a7a9a] leading-relaxed">
              Every production release includes a standard 30 to 90-day defect warranty post-deployment. Extended 24/7 server monitoring, performance tuning, and critical patch updates are provided under dedicated Annual Maintenance Contracts (AMCs) and SLA tiers.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-xl font-bold text-[#0d2a4a] mb-3 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#eef7f5] text-[#00A88F] flex items-center justify-center text-xs font-bold">4</span>
              Governing Law & Jurisdiction
            </h3>
            <p className="text-[14.5px] text-[#5a7a9a] leading-relaxed mb-4">
              These terms and all related agreements shall be governed by and construed in accordance with the laws of the Republic of India. The courts of Bengaluru, Karnataka shall have exclusive jurisdiction over any disputes.
            </p>
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-[#e2eaf2] text-[14px] text-[#0d2a4a] space-y-1">
              <p><strong>Legal Inquiries:</strong> legal@shrote.com / info@shrote.com</p>
              <p><strong>Address:</strong> 25th Main Rd, Putlanpalya, Jayanagara 9th Block, Bengaluru, Karnataka 560041</p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#f0f5fa] flex items-center justify-between">
            <Link href="/" className="text-[14px] font-bold text-[#00A88F] hover:underline">
              ← Return to Home
            </Link>
            <Link href="/privacy-policy" className="text-[14px] font-bold text-[#0d2a4a] hover:text-[#00A88F]">
              Read Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
