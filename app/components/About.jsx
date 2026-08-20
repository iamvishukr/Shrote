"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

export default function About() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 40 39"
          fill="none"
        >
          <path
            d="M15.8858 2.33325H1.6001V16.619H15.8858V2.33325Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M38.0289 38.0475H23.7432"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M23.7432 23.7618H38.0289"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M23.7432 30.9047H38.0289"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M38.7431 16.6189H23.0288L30.886 0.904663L38.7431 16.6189Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8.74296 38.0475C12.6878 38.0475 15.8858 34.8495 15.8858 30.9046C15.8858 26.9597 12.6878 23.7618 8.74296 23.7618C4.79806 23.7618 1.6001 26.9597 1.6001 30.9046C1.6001 34.8495 4.79806 38.0475 8.74296 38.0475Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Autonomous AI Agents",
      description:
        "Deploy intelligent AI agents that autonomously execute complex workflows, orchestrate tasks across APIs, and act as smart copilots for operations, database processing, and data entry.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 40 39"
          fill="none"
        >
          <path
            d="M35.8858 0.904663H4.45724C2.87928 0.904663 1.6001 2.18385 1.6001 3.76181V35.1904C1.6001 36.7683 2.87928 38.0475 4.45724 38.0475H35.8858C37.4638 38.0475 38.743 36.7683 38.743 35.1904V3.76181C38.743 2.18385 37.4638 0.904663 35.8858 0.904663Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M20.1714 32.3333C25.6942 32.3333 30.1714 27.8561 30.1714 22.3333C30.1714 16.8104 25.6942 12.3333 20.1714 12.3333C14.6485 12.3333 10.1714 16.8104 10.1714 22.3333C10.1714 27.8561 14.6485 32.3333 20.1714 32.3333Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M1.6001 9.47607H10.1715"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M30.1714 9.47607H38.7428"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M20.1714 22.2476V32.2476"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M11.6001 17.1904L20.1715 22.2475"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M28.7428 17.1904L20.1714 22.2475"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Generative LLM Chatbots",
      description:
        "Deliver human-grade customer experiences 24/7 with bespoke conversational AI assistants, fine-tuned on custom datasets and deployed across web, mobile, and popular chat tools.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 40 39"
          fill="none"
        >
          <path
            d="M21.5145 19.1904C21.0907 19.3744 20.6336 19.4693 20.1716 19.4693C19.7096 19.4693 19.2525 19.3744 18.8287 19.1904L2.54303 11.6475C2.27858 11.5141 2.05634 11.3099 1.90106 11.0577C1.74579 10.8055 1.66357 10.5151 1.66357 10.2189C1.66357 9.9227 1.74579 9.6324 1.90106 9.3801C2.05634 9.1279 2.27858 8.92374 2.54303 8.79035L18.8287 1.19035C19.2525 1.00633 19.7096 0.911377 20.1716 0.911377C20.6336 0.911377 21.0907 1.00633 21.5145 1.19035L37.8002 8.73321C38.0646 8.86659 38.2869 9.0708 38.4421 9.323C38.5974 9.5752 38.6796 9.8656 38.6796 10.1618C38.6796 10.458 38.5974 10.7483 38.4421 11.0006C38.2869 11.2528 38.0646 11.457 37.8002 11.5904L21.5145 19.1904Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M38.743 20.4761L21.3144 28.5046C20.9422 28.6744 20.5378 28.7623 20.1287 28.7623C19.7195 28.7623 19.3152 28.6744 18.943 28.5046L1.6001 20.4761"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M38.743 29.7618L21.3144 37.7903C20.9422 37.9601 20.5378 38.048 20.1287 38.048C19.7195 38.048 19.3152 37.9601 18.943 37.7903L1.6001 29.7618"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Cognitive Enterprise Systems",
      description:
        "Upgrade traditional systems to intelligent software. Infuse legacy ERPs, payroll portals, and school directories with predictive analytics and cognitive machine learning pipelines.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20.0006 15.7143C30.2573 15.7143 38.5721 12.5163 38.5721 8.57145C38.5721 4.62656 30.2573 1.42859 20.0006 1.42859C9.74391 1.42859 1.4292 4.62656 1.4292 8.57145C1.4292 12.5163 9.74391 15.7143 20.0006 15.7143Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M1.4292 8.57141V31.4286C1.4292 35.3714 9.74349 38.5714 20.0006 38.5714C30.2578 38.5714 38.5721 35.3714 38.5721 31.4286V8.57141"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M38.5721 20C38.5721 23.9429 30.2578 27.1429 20.0006 27.1429C9.74349 27.1429 1.4292 23.9429 1.4292 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Predictive Big Data Analytics",
      description:
        "Unlock deeper analytics. Process millions of data points to generate demand forecasts, financial reconciliations, and behavioral modeling in real-time.",
    },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && timelineRef.current) {
        const section = sectionRef.current;
        const timeline = timelineRef.current;
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        const progress = Math.min(
          1,
          Math.max(
            0,
            (windowHeight - sectionTop) / (sectionBottom - sectionTop)
          )
        );
        setScrollProgress(progress);

        const activeHeight = progress * timeline.offsetHeight;
        timeline.style.setProperty("--active-height", `${activeHeight}px`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="section-padding relative mb-8 sm:mb-12 md:mb-16 bg-transparent"
    >
      {/* Background Orbs */}
      <div className="absolute left-[-50px] sm:left-[-75px] md:left-[-100px] top-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-indigo-600/15 rounded-full blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute right-[-50px] top-1/4 w-[250px] h-[250px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="mr-2 ml-2 sm:ml-3 md:ml-5 relative z-10" ref={sectionRef}>
        <div className="grid md:grid-cols-2  items-start">
          <div className="lg:sticky top-32 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-8 lg:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.06)]">
            <div className="section-tag bg-stone-100 border-gray-200 text-stone-500 font-semibold tracking-wider">ABOUT AGENCY</div>
            <h2 className="text-5xl md:text-6xl text-stone-900 mb-8 leading-tight font-extrabold">
              Crafting{" "}
              <span className="font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">unique digital</span>
              <br />
              experiences that elevate
              <br />
              your brand
            </h2>

            <div className="flex items-center gap-6 mb-12">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-full hover:opacity-95 shadow-[0_4px_15px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm tracking-wide"
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="w-14 h-14 bg-stone-100 border border-gray-200 rounded-full flex items-center justify-center group cursor-pointer hover:bg-stone-200 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
              >
                <svg
                  className="w-6 h-6 text-purple-600 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M7 17l9.2-9.2M17 17V7H7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              ref={timelineRef}
              className="absolute left-[26px] top-0 h-full w-0.5 bg-gray-200"
            >
              <div
                className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                style={{ height: `var(--active-height, 0)` }}
              />
            </div>

            <div className="space-y-12 pl-16">
              {features.map((feature, index) => {
                const isActive = scrollProgress >= index / features.length;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-6 group p-6 rounded-xl hover:bg-stone-50 transition-all duration-300"
                  >
                    <div className="absolute left-[18px] mt-2">
                      <div
                        className={`w-4 h-4 rounded-full flex-shrink-0 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0)] ${
                          isActive ? "bg-blue-500 scale-150 shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-gray-300"
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center">
                          <span className="text-blue-600 text-4xl">
                            {feature.icon}
                          </span>
                        </div>
                      </div>

                      <h3
                        className={`text-3xl font-bold mb-4 abcd transition-colors duration-300 ${
                          isActive
                            ? "text-stone-900"
                            : "text-stone-400 group-hover:text-stone-600"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-stone-600 jj leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blue-accent {
          color: #4ade80;
        }
      `}</style>
    </section>
  );
}
