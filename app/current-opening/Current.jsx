import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

export default function Current() {
  const [expandedJobId, setExpandedJobId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const keySkills = [
    "PHP",
    "MySQL",
    "JavaScript",
    "jQuery",
    "CodeIgniter",
    "CakePHP",
    "MVC Architecture",
    "HTML",
    "Zend",
    "AJAX",
    "CSS",
  ];

  const responsibilities1 = [
    "Expert in the CodeIgniter Framework with strong experience in PHP and MySQL",

    "Strong experience in PHP programming with frameworks like Zend and CodeIgniter",
    "Strong knowledge of Web technologies (HTML, JavaScript, CSS, jQuery, Bootstrap, AJAX)",
    "Excellent written and verbal communication skills to work with the global team",
    "Exposure to RESTful API's (JSON/XML)",
    "Sound knowledge of database designing and application architecture planning",
    "Hands-on experience with third party integrations",
    "Solid understanding of object-oriented programming, relational databases, and MySQL for implementing database-driven, web-based applications.",
    "Ability to work independently and as part of a team",
  ];
  const responsibilities2 = [
    "Creative UX designer with extensive knowledge in front end UI development",
    "Demonstrable UI skills with a strong portfolio",
    "Hands on experience in UI design and frontend development",
    "HTML, CSS, Bootstrap (UI frameworks), JavaScript and jQuery",
    "User centered design concept, interaction design, wireframes, prototypes, mockups, style guides, responsive design, cross browser testing and accessibility",
    "Experienced with Ajax and JSON",
    "Experienced in CSS JavaScript performance optimization",
    "Graphic tools - Adobe XD, Photoshop",
    "Research and develop new user experience/user interface ideas, particularly for Mobile Desktop and Web consumption platforms.",
    "Work closely with developers and other co-workers to design the user experience to fulfill project requirements and day-to-day tasks.",
  ];
  const responsibilities3 = [
    "Preferably female candidates who have excellent communication skills and can generate a database of Prospective Business Leads, fix up appointments and work as backend support for the Marketing Team",
    "Great communication skills in English and Kannada.",
    "To act as an ambassador for the business, and promote the center and its products.",
    "Cold calling",
    "To use company databases to gain potential leads",
    "Build and maintain strong client relationships.",
    "B2B sales experience (Domestic Market).",
    "Lead generation to deal closure.",
    "Hard core sales.",
    "To be responsible for making outbound calls on a daily basis using data provided.",
    "Pre-Sales / Online Marketing / Email Marketing.",
    "To work closely with the Sales Manager and Sales team to ensure leads are generated within various business sectors.",
    "To convert the calls to new business leads.",
  ];
  const responsibilities4 = [
    "This role involves managing a portfolio of clients and improving their search engine optimization by using techniques including but not exclusive to: Keyword Research, Copy Optimization, Article Marketing, site structure, URL rewrites, social media, blogging and link building.",
    "An understanding of Paid search marketing would be a plus.",
    "A critical element of this role is to improve rankings for the clients assigned to your portfolio, and deliver reporting on a monthly basis.",
    "A high degree of energy, commitment, initiative and enthusiasm is required along with a thirst for knowledge in the internet marketing arena.",
    "The ability to organize, prioritize and meet deadlines is essential as is the ability to communicate with clients, in a polite and professional manner.",
  ];
  const responsibilities5 = [
    "Involving Business Development activities for US/UK market.",
    "Must have Elance / Guru / other Freelancing Websites experience.",
    "Must have International IT sales experience.",
    "Manage entire sales process communication.",
    "Lead generation to deal closure.",
    "B2B sales experience (US / UK Market)",
    "Build and maintain strong client relationships.",
    "Lead generation.",
    "Cold calling",
    "Outbond sales experience.",
    "Hard core sales.",
    "Pre-Sales / Online Marketing / Email Marketing.",
    "Excellent Communication Skills.",
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Software Engineer",
      experience: "2-3 Years",
      location: "Bangalore",
      compensation: "Best in Industry",
      education: "Any Degree",
      functionalArea: "IT Software - e-Commerce, Internet Technologies",
      responsibilities: responsibilities1.slice(0, 5),
      keySkills,
    },
    {
      id: 2,
      title: "Senior UI/UX Designer",
      experience: "1-2 Years",
      location: "Bangalore",
      compensation: "Competitive",
      education: "Any Degree",
      functionalArea:
        "Web Design, IT Software - e-Commerce , Internet Technologies",
      responsibilities: responsibilities2.slice(0, 5),
      keySkills: ["HTML5", "CSS", "Javascript", "JQuery", "Bootstrap"],
    },
    {
      id: 3,
      title: "Lead Generation Executive (Tele Marketing Executive)",
      experience: "1 Year",
      location: "Bangalore",
      compensation: "Best in the Industry",
      education: "Any Degree",
      functionalArea: "Marketing",
      responsibilities: responsibilities3.slice(0, 5),
      keySkills: [
        "English Communication",
        "Telemarketing",
        "Sales",
        "Customer Service",
      ],
    },
    {
      id: 4,
      title: "SEO Analyst",
      experience: "1-3 Years",
      location: "Bangalore",
      compensation: "Best in the Industry",
      education: "Any Degree",
      functionalArea: "Marketing",
      responsibilities: responsibilities4.slice(0, 5),
      keySkills: [
        "SEO",
        "Search Engine Ranking",
        "Search Engine Optimization",
        "Link Building",
        "Search Engine Marketing",
        "Search Engine Optimiser",
        "Pay Per Click",
        "On-Page SEO",
        "Off-Page SEO",
        "Link Builder",
        "PPC",
        " Social Media",
        " Keyword Research",
      ],
    },
    {
      id: 5,
      title: "Business Development Support / Executives - US Market",
      experience: "1-2 Years",
      location: "Bangalore",
      compensation: "Best in the Industry",
      education: "Any Degree / MBA Marketing",
      functionalArea:
        "Marketing & Communications, Sales / Business Development",
      responsibilities: responsibilities5.slice(0, 5),
      keySkills: [
        "Customer Service",
        "Email Marketing",
        "Sales",
        "Business Development",
        "Business Planning",
      ],
    },
  ];

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
                    {job.location} • {job.experience}
                  </div>
                  <h3 className="text-lg font-bold text-[#0d2a4a] leading-snug">
                    {job.title}
                  </h3>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                  <div className="grid grid-cols-2 gap-2 text-[12px] text-[#5a7a9a]">
                    <div className="bg-[#f8fafc] p-2.5 rounded-xl border border-[#eef2f6]">
                      <span className="block font-bold text-[#0d2a4a]">Education</span>
                      <span className="truncate block">{job.education}</span>
                    </div>
                    <div className="bg-[#f8fafc] p-2.5 rounded-xl border border-[#eef2f6]">
                      <span className="block font-bold text-[#0d2a4a]">Compensation</span>
                      <span className="truncate block">{job.compensation}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[13px] font-bold text-[#0d2a4a] mb-2">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1.5 text-[12.5px] text-[#5a7a9a]">
                      {(isExpanded
                        ? job.responsibilities
                        : job.responsibilities.slice(0, 3)
                      ).map((res, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#00A88F] font-bold">•</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                    {job.responsibilities.length > 3 && (
                      <button
                        className="text-[12px] font-bold text-[#00A88F] hover:underline mt-2 inline-block cursor-pointer"
                        onClick={() => toggleExpand(job.id)}
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>

                  <div>
                    <h4 className="text-[13px] font-bold text-[#0d2a4a] mb-2">
                      Required Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {job.keySkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-[11.5px] rounded-full font-medium bg-[#f0f5fa] text-[#0d2a4a] border border-[#e2eaf2]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#f0f5fa]">
                    <Link
                      href={`/join-our-team?role=${encodeURIComponent(job.title)}`}
                      className="w-full py-2.5 rounded-full text-center block text-white text-[13.5px] font-[600] transition-all shadow-sm"
                      style={{ background: "#00A88F" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
                    >
                      Apply For Position
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
