"use client";

import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "E-commerce",
    
    "SEO & Analytics",
    "Web Design",
  ];

  const projects = [
    {
      id: 1,
      title: "Beauty Products",
      category: "E-commerce",
      image:
        "https://www.marswebsolution.com/images/portfolio/e-commerce1.jpg",
        url: "https://cassevabeauty.com/" // Added URL
    },
    {
      id: 2,
      title: "Bionova Store",
      category: "E-commerce",
      image:
        "https://www.marswebsolution.com/images/portfolio/design56.jpg",
        url: "https://bionovastore.com/"
    },
    {
      id: 3,
      title: "Family Resort",
      category: "SEO & Analytics",
      image:
        "https://www.marswebsolution.com/images/portfolio/seo3.jpg",
        url: "https://jaladhama.net/"
    },
    {
      id: 4,
      title: "Reverse Inventory Commerce",
      category: "Web Design",
      image:
        "https://www.marswebsolution.com/images/portfolio/design11.jpg",
        url: "https://www.blubirch.com/"
    },
    {
      id: 5,
      title: "Interior & Home Furnishing",
      category: "SEO & Analytics",
      image:
        "https://www.marswebsolution.com/images/portfolio/seo2.jpg",
        url: "https://karnatakafurnishing.com/"
    }
    ,
    {
      id: 6,
      title: "Granite & Stone Cladding",
      category: "Web Design",
      image:
        "https://www.marswebsolution.com/images/portfolio/design7.jpg",
        url: "http://floorsandwalls.in/"
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="section-padding px-4 md:px-8 lg:mr-16 lg:ml-16 bg-black min-h-screen">
  <div className="mb-8 md:mb-16 max-w-[90%] sm:max-w-full mx-auto">
    <p className="text-sm uppercase text-white/60 tracking-wider mb-4 md:mb-6 font-medium">
      <span className="text-blue-400 text-lg mr-2">✱</span>
      <span className="text-white/90">Portfolio</span>
    </p>

    <div className="flex flex-col md:flex-row flex-wrap items-start gap-4 md:gap-0 mb-12 md:mb-24 overflow-visible">
      <div className="w-full md:flex-1">
        <div className="lojpa md:text-5xl leading-tight text-white">
          Proven our{" "}
          <span className="text-blue-400 font-bold">process</span> for{" "}
          <br className="hidden md:block" />
          achieving success
        </div>
      </div>
      <div className="w-full md:flex-1">
        <p className="text-base  md:text-xl text-gray-300 leading-relaxed" style={{ color:"#f5f5f4"}}>
          Proven our process combines research, strategy, and creativity to
          deliver tailored solutions that drive measurable results.
        </p>
      </div>
    </div>

    
    <div className="flex flex-wrap justify-start md:justify-center gap-2 md:gap-4 mb-12 md:mb-24 overflow-x-auto py-2 max-w-[90%] sm:max-w-full mx-auto">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`flex items-center h-auto capitalize rounded-[10px] border transition-all duration-300 px-3 md:px-5 py-1 md:py-2 text-sm md:text-base ${
            filter === "All" && activeFilter === "All"
              ? "bg-blue-400 text-black border-blue-400"
              : activeFilter === filter
              ? "border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-black"
              : "border-white/10 text-gray-300 hover:bg-blue-500 hover:text-black"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-[90%] sm:max-w-full mx-auto">
      {filteredProjects.map((project) => (
        <div
          key={project.id}
          className="group relative rounded-xl md:rounded-3xl overflow-hidden transition-all duration-300"
        >
          <div className="relative">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-blue-400">
                   <Link 
                      href={project.url} target="_blank" 
                      className="w-12 h-12 md:w-16 md:h-16 border-2 border-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-blue-400"
                      aria-label={`View ${project.title} project`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white transition-all duration-300 ease-in-out transform -rotate-45 hover:rotate-0 hover:text-black hover:translate-x-1"
                      >
                        <path
                          d="M5 12H19M19 12L13 6M19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                </div>
              </div>

              <div className="absolute top-2 right-2 md:top-4 md:right-4">
                <span
                  className="inline-block text-xs md:text-[14px] capitalize rounded-lg md:rounded-xl px-2 py-1 md:px-[15px] md:py-[6px] text-[var(--e-global-color-text)] bg-[var(--e-global-color-divider)] backdrop-blur-[20px] supports-[backdrop-filter]:backdrop-blur-[20px]"
                  style={{ WebkitBackdropFilter: "blur(20px)" }}
                >
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          <h5 className="mt-2 md:mt-4 text-center text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h5>
        </div>
      ))}
    </div>

    
    {filteredProjects.length === 0 && (
      <div className="text-center py-8 md:py-16">
        <p className="text-gray-400 text-base md:text-lg">
          No projects found for "{activeFilter}"
        </p>
      </div>
    )}
  </div>
</section>

  );
}
