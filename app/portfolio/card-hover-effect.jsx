"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "../../components/ui/moving-border";
import Link from "next/link";
export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "E-commerce", "SEO & Analytics", "Web Design"];
  const filteredProjects =
    activeFilter === "All"
      ? items
      : items.filter((items) => items.category === activeFilter);

  return (
    <>
      <div className="flex flex-wrap justify-start md:justify-center gap-2 md:gap-4   mt-8 md:mt-0 overflow-x-auto py-2 max-w-[90%] sm:max-w-full mx-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex items-center h-auto capitalize rounded-[10px] border transition-all duration-300 px-6 md:px-5 md:-mb-2 py-1 md:py-2 text-sm md:text-base ${
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
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-10",
          className
        )}
      >
        {filteredProjects.map((item, idx) => (
          <div
            key={item.id}
            className="relative group block p-2 h-full w-full   rounded-xl transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[130px] md:h-[330px] hover:scale-105 transition-all duration-500 object-cover rounded-xl"
              />
              <p className={" -mb-4 text-[30px]"}>{item.title} </p>
              <CardDescription className={"run mb-6 "}>
                {item.description}
              </CardDescription>
              <div className="flex items-center  ">
                
                <Button
                  as={Link}
                  href="/portfolio/view-portfolio"
                  borderRadius="1.75rem"
                  className="dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  View Project
                </Button>
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center group cursor-pointer hover:bg-slate-950 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white transform transition-transform duration-300 group-hover:animate-rotate-to-right"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17l9.2-9.2M17 17V7H7"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full jmm w-full p-4 overflow-hidden bg-zinc-950 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="md:p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
