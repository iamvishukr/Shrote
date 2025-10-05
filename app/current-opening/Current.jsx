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
    <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job) => {
            const isExpanded = expandedJobId === job.id;

            return (
              <Card
                key={job.id}
                className="rounded-2xl bg-slate-900/70 backdrop-blur-sm border border-slate-800 
                         hover:ring-2 hover:ring-indigo-500/40 transition-all duration-300 flex flex-col shadow-xl"
              >
                <CardHeader className="bg-gradient-to-r  md:p-4 rounded-t-2xl">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-indigo-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3L20 9L12 15L4 9L12 3Z" />
                    </svg>
                    {job.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-5 flex flex-col flex-1">
                  <div className="space-y-3 -ml-8  md:ml-0 -mr-8 md:mr-0  mb-6 px-0 sm:px-4">
                    <div className="grid grid-cols-2 gap-3">
                      <MetaItem
                        icon={
                          <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                        }
                        label={job.location}
                      />
                      <MetaItem
                        icon={
                          <path d="M6 4l6 2l6-2M6 4v6c0 4 6 10 6 10s6-6 6-10V4" />
                        }
                        label={job.education}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <MetaItem
                        icon={
                          <>
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v4l3 2" />
                          </>
                        }
                        label={job.experience}
                      />
                      <MetaItem
                        icon={<path d="M6 12h12M12 4v16M8 8h8M8 16h8" />}
                        label={job.compensation}
                      />
                    </div>

                    <MetaItem
                      icon={
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM5.5 21a6.5 6.5 0 0113 0" />
                      }
                      label={job.functionalArea}
                    />
                  </div>

                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-2 text-xs  text-slate-400 list-disc ml-5">
                      {(isExpanded
                        ? job.responsibilities
                        : job.responsibilities.slice(0, 3)
                      ).map((res, i) => (
                        <li key={i} className="-ml-8">
                          {res}
                        </li>
                      ))}
                      {job.responsibilities.length > 3 && (
                        <li
                          className="text-indigo-400 cursor-pointer"
                          onClick={() => toggleExpand(job.id)}
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">
                      Required Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {job.keySkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full font-medium
                                     bg-gradient-to-r from-indigo-600/20 to-purple-600/20
                                     text-indigo-300 border border-indigo-700/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto text-center pt-4 border-t border-slate-800">
                    <Button
                      size="sm"
                      className="px-6 py-2 rounded-full font-semibold text-white
             bg-slate-900 shadow-lg  
             transition-transform hover:scale-105"
                    >
                      <Link
                        href={`/join-our-team?role=${encodeURIComponent(
                          job.title
                        )}`}
                        className="text-white"
                      >
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MetaItem({ icon, label }) {
  return (
    <div className="flex md:items-center md:gap-2 md:px-3 py-2 bg-slate-800/60 rounded-lg text-xs text-slate-300">
      <svg
        className="w-4 h-4 text-indigo-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
      <span className="truncate">{label}</span>
    </div>
  );
}
