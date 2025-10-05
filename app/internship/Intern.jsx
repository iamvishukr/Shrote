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
                    {job.role}
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
                        label={job.internshipDuration}
                      />
                      <MetaItem
                        icon={<path d="M6 12h12M12 4v16M8 8h8M8 16h8" />}
                        label={job.jobType}
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
                    <ul className="space-y-2 text-xs text-slate-400 list-disc ml-5">
                      {(isExpanded
                        ? job.jobDescription
                        : job.jobDescription.slice(0, 1)
                      ).map((res, i) => (
                        <li key={i} className="-ml-8">{res}</li>
                      ))}
                      {job.jobDescription.length > 1 && (
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
                      Who Can Apply :-
                    </h3>
                    <h3>Only those students or fresher's can apply who:</h3>
                    <ul className="space-y-2 text-xs text-slate-400 list-disc ml-5">
                      {(isExpanded
                        ? job.whoCanApply
                        : job.whoCanApply.slice(0, 4)
                      ).map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                      {job.whoCanApply.length > 4 && (
                        <li
                          className="text-indigo-400 cursor-pointer"
                          onClick={() => toggleExpand(job.id)}
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </li>
                      )}
                    </ul>
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
                          job.role
                        )}&id=${job.id}`}
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
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/60 rounded-lg text-xs text-slate-300">
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
