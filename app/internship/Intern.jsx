import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

export default function Intern() {
  const keySkills1 = [
    "Are available for full time (in-office) internship.",
    "Have relevant skills and interests.",
    "Can start the internship immediately.",
    "Are available for duration of 3 months.",
    "Have already graduated or are currently in any year of study.",
    "Interns hired will be absorbed later depending on their competence.",
  ];
  const keySkills2 = [
    "Are available for full time (in-office) internship.",
    "Have relevant skills and interests.",
    "Can start the internship immediately.",
    "Are available for duration of 3 months.",
    "Have already graduated or are currently in any year of study.",
    "Interns hired will be absorbed later depending on their competence.",
  ];
  const keySkills3 = [
    "Are available for full time (in-office) internship.",
    "Have relevant skills and interests.",
    "Can start the internship immediately.",
    "Are available for duration of 3 months.",
    "Have already graduated or are currently in any year of study.",
    "Interns hired will be absorbed later depending on their competence.",
  ];
  const keySkills4 = [
    "Are available for full time (in-office) internship.",
    "Have relevant skills and interests.",
    "Can start the internship immediately.",
    "Are available for duration of 3 months.",
    "Have already graduated or are currently in any year of study.",
    "Interns hired will be absorbed later depending on their competence.",
  ];
  const keySkills5 = [
    "Are available for full time (in-office) internship.",
    "Have relevant skills and interests.",
    "Can start the internship immediately.",
    "Are available for duration of 3 months.",
    "Have already graduated or are currently in any year of study.",
    "Interns hired will be absorbed later depending on their competence.",
  ];
  const keySkills6 = [
    "Are available for full time (in-office) internship.",
    "Have relevant skills and interests.",
    "Can start the internship immediately.",
    "Are available for duration of 3 months.",
    "Have already graduated or are currently in any year of study.",
    "Interns hired will be absorbed later depending on their competence.",
  ];

  const jobDescription1 = [
    "We are looking to hire an enthusiastic digital marketer who has hands-on Google Ads, Facebook and other Social media platforms. Selected intern's day-to-day responsibilities include developing the right promotions, offers & media at account level to get maximum ROI.",
  ];
  const jobDescription2 = [
    "The job of SEO (Search Engine Optimizer) involves promoting websites for various search engines. The incumbent will work on web directory submission, Link building and promoting websites through articles, blogs etc. The job responsibilities also involve competitive keywords research and preparation of reports on Link popularity and ranking.",
  ];
  const jobDescription3 = [
    "Required technical skills like HTML, HTML5, CSS, CSS3, Bootstrap, JavaScript, JQuery.",
    "We are looking for Trainee who have completed his / her degree and very passion about IT carrier and strong desire to work as a IT professional to start careers as a Junior Web Designer can apply for this positions.",
    "Candidates who is having good practical knowledge on programming skills in HTML, CSS, HTML5, CSS3, JavaScript or candidates who are very keen to learn these technical skills quickly and faster can apply for this job.",
  ];
  const jobDescription4 = [
    "Identify new business opportunities in the existing and similar range of products- including new markets, growth areas, trends, customers, products and services.",
    "Seek out the appropriate contact in an organization.",
    "Generate leads and cold call for prospective customers.",
    "Meet with customers/clients face to face or over the phone.",
    "Understand the needs of the customers and be able to respond effectively with a plan of how to meet them within the stipulated time line.",
    "Think strategically - seeing the bigger picture and setting aims and objectives in order to expand the business.",
  ];
  const jobDescription5 = [
    "We are looking for a Software Development Intern who is passionate about building scalable systems, willing join a dynamic and fast-paced environment and work with cross-functional teams to design, develop and roll out products that deliver the company's vision and strategy.",
  ];
  const jobDescription6 = [
    "Preferably female candidates who have excellent communication skills and can generate a database of prospective business leads, fix up appointments and work as a backend support for the marketing team.",
  ];

  const jobOpenings = [
    {
      id: 1,
      role: "Internship - Digital Marketing",
      location: "Bangalore",
      jobType: "Full Time",
      education: "Any Degree",
      functionalArea:
        "Marketing & Communications, Sales / Business Development",
      internshipDuration: "Minimum 3 Months",
      jobDescription: jobDescription1,
      whoCanApply: keySkills1,
    },
    {
      id: 2,
      role: "Internship - SEO Analyst",
      location: "Bangalore",
      jobType: "Full Time",
      education: "Any Degree",
      functionalArea: "Marketing ",
      internshipDuration: "Minimum 3 Months",
      jobDescription: jobDescription2,
      whoCanApply: keySkills2,
    },
    {
      id: 3,
      role: "Internship - Website Designer",
      location: "Bangalore",
      jobType: "Full Time",
      education: "Any Degree",
      functionalArea: "UI Designer",
      internshipDuration: "Minimum 3 Months",
      jobDescription: jobDescription3,
      whoCanApply: keySkills3,
    },
    {
      id: 4,
      role: "Internship - Business Development Executive",
      location: "Bangalore",
      jobType: "Full Time",
      education: "Any Degree",
      functionalArea: "Business Development (Sales)",
      internshipDuration: "Minimum 3 Months",
      jobDescription: jobDescription4,
      whoCanApply: keySkills4,
    },
    {
      id: 5,
      role: "Internship - Software Developer",
      location: "Bangalore",
      jobType: "Full Time",
      education: "Any Degree",
      functionalArea: "Software Developer",
      internshipDuration: "Minimum 4 Months",
      jobDescription: jobDescription5,
      whoCanApply: keySkills5,
    },
    {
      id: 6,
      role: "Internship - Lead Generation Executive (Female Candidate only)",
      location: "Bangalore",
      jobType: "Full Time",
      education: "Any Degree",
      functionalArea: "Software Developer",
      internshipDuration: "Minimum 3 Months",
      jobDescription: jobDescription6,
      whoCanApply: keySkills6,
    },
  ];

  const [expandedJobId, setExpandedJobId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };
  return (
    <div className="min-h-screen py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#f5f9fd" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job) => {
            const isExpanded = expandedJobId === job.id;

            return (
              <div
                key={job.id}
                className="rounded-3xl bg-white border border-[#e8f0f7] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 border-b border-[#f0f5fa] bg-[#fbfdfe]">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#00A88F] bg-[#eef7f5] mb-2.5">
                    {job.location} • {job.internshipDuration} • {job.jobType}
                  </div>
                  <h3 className="text-lg font-bold text-[#0d2a4a] leading-snug">
                    {job.role}
                  </h3>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                  <div className="grid grid-cols-2 gap-2 text-[12px] text-[#5a7a9a]">
                    <div className="bg-[#f8fafc] p-2.5 rounded-xl border border-[#eef2f6]">
                      <span className="block font-bold text-[#0d2a4a]">Education</span>
                      <span className="truncate block">{job.education}</span>
                    </div>
                    <div className="bg-[#f8fafc] p-2.5 rounded-xl border border-[#eef2f6]">
                      <span className="block font-bold text-[#0d2a4a]">Functional Area</span>
                      <span className="truncate block">{job.functionalArea}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[13px] font-bold text-[#0d2a4a] mb-2">
                      Role Overview & Responsibilities
                    </h4>
                    <ul className="space-y-1.5 text-[12.5px] text-[#5a7a9a]">
                      {(isExpanded
                        ? job.jobDescription
                        : job.jobDescription.slice(0, 2)
                      ).map((res, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#00A88F] font-bold">•</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[13px] font-bold text-[#0d2a4a] mb-2">
                      Who Can Apply
                    </h4>
                    <ul className="space-y-1 text-[12px] text-[#5a7a9a]">
                      {(isExpanded
                        ? job.whoCanApply
                        : job.whoCanApply.slice(0, 2)
                      ).map((res, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#00A88F] font-bold">•</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                    {job.whoCanApply.length > 2 && (
                      <button
                        className="text-[12px] font-bold text-[#00A88F] hover:underline mt-2 inline-block cursor-pointer"
                        onClick={() => toggleExpand(job.id)}
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#f0f5fa]">
                    <Link
                      href={`/join-our-team?role=${encodeURIComponent(job.role)}&id=${job.id}`}
                      className="w-full py-2.5 rounded-full text-center block text-white text-[13.5px] font-[600] transition-all shadow-sm"
                      style={{ background: "#00A88F" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
                    >
                      Apply For Internship
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
