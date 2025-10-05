import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CurrentOpening() {
  const jobOpenings = [
    {
      id: 1,
      title: "Software Engineer",
      experience: "2-3 Years",
      location: "Bangalore",
      compensation: "Best in Industry",
      education: "Any Degree",
      functionalArea: "IT Software - e-Commerce, Internet Technologies",
      responsibilities: [
        "Expert in the CodeIgniter Framework with PHP and MySQL",
        "Hands-on with MVC frameworks (Zend/CodeIgniter)",
        "Strong front-end skills (HTML, CSS, JS, jQuery, Bootstrap, AJAX)",
        "Work closely with global teams and APIs",
      ],
      keySkills: ["PHP", "MySQL", "JavaScript", "CodeIgniter", "HTML", "CSS"],
    },
    {
      id: 2,
      title: "Senior UI/UX Designer",
      experience: "3-5 Years",
      location: "Remote / Bangalore",
      compensation: "Best in Industry",
      education: "Any Degree",
      functionalArea: "IT Software - e-Commerce, Internet Technologies",
      responsibilities: [
        "Wireframing, prototyping, and UI/UX design using Figma/Adobe XD",
        "Responsive design across devices",
        "Testing accessibility & cross-browser performance",
      ],
      keySkills: ["Figma", "Adobe XD", "HTML", "CSS", "Accessibility"],
    },
  ]

  const [expanded, setExpanded] = useState(null)

  return (
    <div className="w-full px-4 py-12 sm:px-6 lg:px-8 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
       

        <div className="flex flex-col gap-10">
          {jobOpenings.map((job) => {
            const isOpen = expanded === job.id
            return (
              <Card
                key={job.id}
                onClick={() => setExpanded(isOpen ? null : job.id)}
                className="group cursor-pointer rounded-2xl bg-slate-900/60 backdrop-blur-md shadow-lg border border-slate-800
                           transition-all duration-500 ease-in-out overflow-hidden 
                           hover:ring-2 hover:ring-indigo-500/50 hover:scale-[1.01]"
              >
                
                <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between py-6 px-6 border-b border-slate-800">
                  <CardTitle className="text-xl font-semibold text-slate-100 group-hover:text-indigo-300 transition">
                    {job.title}
                  </CardTitle>
                  <span className="text-xs text-slate-400 italic">
                    {isOpen ? "Click to collapse" : "Click for details"}
                  </span>
                </CardHeader>

                
                <CardContent
                  className={`p-6 transition-all duration-700 ease-in-out ${
                    isOpen ? "max-h-[1200px] opacity-100" : "max-h-[220px] opacity-90"
                  } overflow-hidden`}
                >
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                    
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/70 rounded-lg text-xs text-slate-300">
                      <svg className="w-4 h-4 stroke-indigo-400" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.43 3 13.14 4.02 14 5.57C14.86 4.02 16.57 3 18.5 3C21.54 3 24 5.46 24 8.5C24 13.5 16 21 16 21H12Z" />
                      </svg>
                      {job.location}
                    </div>

                    
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/70 rounded-lg text-xs text-slate-300">
                      <svg className="w-4 h-4 stroke-indigo-400" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M2 7l10-5 10 5v1l-10 5-10-5V7zm0 6v4.5A2.5 2.5 0 004.5 20h15a2.5 2.5 0 002.5-2.5V13" />
                      </svg>
                      {job.education}
                    </div>

                    
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/70 rounded-lg text-xs text-slate-300">
                      <svg className="w-4 h-4 stroke-indigo-400" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {job.experience}
                    </div>

                    
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/70 rounded-lg text-xs text-slate-300">
                      <svg className="w-4 h-4 stroke-indigo-400" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 1v22M5 6h14M5 18h14" />
                      </svg>
                      {job.compensation}
                    </div>

                   
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/70 rounded-lg text-xs text-slate-300">
                      <svg className="w-4 h-4 stroke-indigo-400" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 7h18M3 12h18M3 17h18" />
                      </svg>
                      {job.functionalArea}
                    </div>
                  </div>

                  
                  {isOpen && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-indigo-300 mb-2">Key Responsibilities</h3>
                      <ul className="space-y-2 text-slate-400 text-sm list-disc ml-5">
                        {job.responsibilities.map((res, idx) => (
                          <li key={idx}>{res}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  
                  {isOpen && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-indigo-300 mb-2">Required Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {job.keySkills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-indigo-600/20 text-indigo-300 border border-indigo-600/40 px-3 py-1 rounded-full font-medium shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  
                  <div className="text-center border-t border-slate-800 pt-4">
                    <Button className="relative px-7 py-2 rounded-full font-semibold text-white
                                       bg-slate-950 hover:bg-slate-700
                                       shadow-lg transition-all">
                      <Link href={"/career/join-our-team"} >Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
