"use client";

import React, { useState } from "react";

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "E-commerce", "SEO & Analytics", "Web Design"];

  const projects = [
    {
      id: 1,
      title: "Knowledge C",
      description: "Knowledge C Distribution Portal",
      image: "https://www.marswebsolution.com/images/portfolio/design57.jpg",
      category: "Web Design",
      bg: "from-zinc-300 to-zinc-500",
      url: "https://appvenuz.com/",
    },
    {
      id: 2,
      title: "Luxify Digital ",
      description:
        "A premium global digital marketing agency that builds captivating brand experiences.",
      image: "https://mplussoft.com/portfolio-images/LuxifyDigital.jpg",
      category: "SEO & Analytics",
      bg: "from-zinc-300 to-zinc-500",
      url: "https://luxifydigital.com/",
    },
    {
      id: 3,
      title: "Zealwise Technologies Pvt. Ltd.",
      description:
        "Technology-driven company delivering innovative solutions with expertise.",
      image: "https://mplussoft.com/portfolio-images/Zealwise.jpg",
      bg: "from-slate-900 to-slate-950",
      category: "E-commerce",
      url: "https://zealwise.com/",
    },
    {
      id: 4,
      title: "NES Electrical Supplies",
      description:
        "Your home for all your electrical supply needs with quality and reliability.",
      image:
        "https://res.cloudinary.com/drfbuv5ll/image/upload/v1742189429/NES_wy9r22.jpg",
      category: "E-commerce",
      bg: "from-zinc-300 to-zinc-500",
      url: "https://www.neselectricalsupplies.com/",
    },
    {
      id: 5,
      title: "Gentium",
      description:
        "Technology-driven company delivering innovative solutions with expertise.",
      image: "https://mplussoft.com/portfolio-images/Gentium.jpg",
      category: "E-commerce",
      bg: "from-zinc-300 to-zinc-500",
      url: "https://www.gentium.in/",
    },
    {
      id: 6,
      title: "Mind Spa",
      description:
        "Your home for all your electrical supply needs with quality and reliability.",
      image: "https://mplussoft.com/portfolio-images/Mind_Spa.jpg",
      category: "SEO & Analytics",
      bg: "from-zinc-300 to-zinc-400",
      url: "https://www.mindspa.in/",
    },
  ];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="flex flex-wrap justify-start md:justify-center gap-2 md:gap-4 mb-4 md:mb-8 overflow-x-auto py-2 max-w-[90%] sm:max-w-full mx-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex items-center h-auto capitalize rounded-[10px] border transition-all duration-300 px-3 md:px-5 py-1 md:py-2 text-sm md:text-base ${
              filter === "All" && activeFilter === "All"
                ? "bg-blue-400 text-black border-blue-400"
                : activeFilter === filter
                ? "border-blue-400 text-white bg-blue-400 hover:bg-blue-500 hover:text-black"
                : "border-blue-400 text-white hover:bg-blue-500 hover:text-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className={`absolute inset-0  cardbg `}></div>

            <div className="relative z-10 p-6  flex flex-col">
              <div className="mb-8 md:mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-auto group">
                <div className="flex flex-col group-hover:pt-[10px] sm:group-hover:mt-0 transition-all duration-300">
                  <h3 className="text-lg font-jakarta text-center font-bold text-gray-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
