import { useEffect, useState } from "react";

export default function ContentStrategy() {
  const companies = [
    {
      name: "Upwork",
      logo: "upwork",
      textColor: "text-blue-500",
    },
    {
      name: "fiverr",
      logo: "fiverr",
      textColor: "text-white",
    },
    {
      name: "Behance",
      logo: "behance",
      textColor: "text-white",
    },
    {
      name: "Trello",
      logo: "trello",
      textColor: "text-blue-500",
    },
    {
      name: "slack",
      logo: "slack",
      textColor: "text-white",
    },
    {
      name: "asana",
      logo: "asana",
      textColor: "text-pink-500",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="bg-black text-white  px-0 relative overflow-hidden">
      <div
        className="mx-4 sm:mx-6 md:mx-8 lg:mx-auto 
             max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-[90rem] xl:max-w-9xl 
             relative border-2 border-gray-700 rounded-2xl sm:rounded-3xl 
             p-1 sm:p-2 md:p-4"
      >
        <div className="flex flex-col md:flex-col lg:flex-row items-start lg:items-center">
          <div className="max-w-2xl p-8 -mb-4 lg:mb-0 lg:mr-8 order-1 lg:order-none">
            <h2 className="text-2xl font-bold kola sm:text-4xl md:text-3xl mb-4 md:mb-6 leading-tight">
              Content Creation And Strategy
            </h2>
            <p className="text-lg sm:text-xl kola text-white leading-relaxed pt-4 sm:pt-0">
              High-quality, engaging content across blogs, videos, and graphics
              designed to captivate and retain audiences.
            </p>
          </div>

          <div className="w-28 h-28 sm:w-36 sm:h-36 dsee md:w-40 md:h-40 lg:w-48 lg:h-48 order-2 lg:order-none mt-6 lg:mt-0 lg:ml-auto">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 animate-spin-slow">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  <path
                    id="circle"
                    d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                    fill="none"
                  />
                  <text className="text-[8px] sm:text-[9px] md:text-xs fill-blue-400 font-medium tracking-wide">
                    <textPath href="#circle">
                      {isMobile
                        ? "GET FREE CONSULTATION • GET FREE CONSULTATION • GET FREE CONSULTATION •"
                        : "GET FREE CONSULTATION • GET FREE CONSULTATION •"}
                    </textPath>
                  </text>
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden py-8 bg-black dseep md:mt-8">
          <div className="pointer-events-none absolute top-0 left-0 h-full w-16 z-10 bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 z-10 bg-gradient-to-l from-black via-black/50 to-transparent" />

          <div className="animate-infinite-scroll flex w-max items-center h-[140px]">
            {[...companies, ...companies].map((company, index) => {
              const sizeClass =
                index % 5 === 0
                  ? "min-w-[220px] h-[120px]"
                  : index % 3 === 0
                  ? "min-w-[180px] h-[100px]"
                  : "min-w-[200px] h-[110px]";

              return (
                <div
                  key={`${company.name}-${index}`}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-800/50 hover:border-gray-700/50 
              transition-all duration-300 group hover:bg-gray-800/50 flex items-center justify-center mx-4 ${sizeClass}`}
                >
                  {company.logo === "upwork" && (
                    <div className="flex items-center scale-110 group-hover:scale-125 transition-transform">
                      <span className="text-2xl font-bold text-blue-500">
                        Up
                      </span>
                      <span className="text-white text-2xl font-bold">
                        work
                      </span>
                    </div>
                  )}
                  {company.logo === "fiverr" && (
                    <div className="flex items-center scale-110 group-hover:scale-125 transition-transform">
                      <span className="text-2xl font-bold text-white">
                        fiverr
                      </span>
                      <span className="text-blue-500 text-3xl font-bold ml-1">
                        .
                      </span>
                    </div>
                  )}
                  {company.logo === "behance" && (
                    <div className="flex items-center scale-110 group-hover:scale-125 transition-transform">
                      <div className="w-8 h-8 bg-blue-600 rounded mr-2 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Be</span>
                      </div>
                      <span className="text-2xl font-bold text-white">
                        hance
                      </span>
                    </div>
                  )}
                  {company.logo === "trello" && (
                    <div className="flex items-center scale-110 group-hover:scale-125 transition-transform">
                      <div className="w-6 h-6 bg-blue-500 rounded mr-2"></div>
                      <span className="text-2xl font-bold text-blue-500">
                        Trello
                      </span>
                    </div>
                  )}
                  {company.logo === "slack" && (
                    <div className="flex items-center scale-110 group-hover:scale-125 transition-transform">
                      <div className="w-8 h-8 mr-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-blue-500 rounded-lg"></div>
                        <div className="absolute inset-1 bg-white rounded-sm"></div>
                      </div>
                      <span className="text-2xl font-bold text-white">
                        slack
                      </span>
                    </div>
                  )}
                  {company.logo === "asana" && (
                    <div className="flex items-center scale-110 group-hover:scale-125 transition-transform">
                      <div className="w-8 h-8 mr-2 relative">
                        <div className="w-3 h-3 bg-pink-500 rounded-full absolute top-0 left-2"></div>
                        <div className="w-3 h-3 bg-orange-500 rounded-full absolute top-2 left-0"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-2 right-0"></div>
                      </div>
                      <span className="text-2xl font-bold text-pink-500">
                        asana
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
