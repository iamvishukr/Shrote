"use client";

import { ArrowUpRight } from "lucide-react";

export default function Component() {
  return (
   <div className="bg-black relative mt-[10px] md:-mt-[50px] pb-8 mb-[-110px] md:mb-0 overflow-hidden">
  <div className="absolute inset-0">
    {/* Background SVG */}
  </div>

  {/* Shape Image */}
  <div className="hidden sm:block absolute top-[4rem] left-0 w-[150px] sm:w-[200px] h-[60%] sm:h-[80%] -translate-x-[20%] animate-moveRotate pointer-events-none z-0">
    <img
      src="/work-together-bg-shape.png"
      alt="Work Together Shape"
      className="w-full h-full object-contain opacity-30 sm:opacity-50"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center mt-6 sm:mt-12 px-4 sm:px-6 lg:px-8">
    <div className="mb-3 sm:mb-8">
      <h2 className="text-white text-xs sm:text-lg md:text-xl font-medium tracking-wider text-center">
        {"LET'S COLLABORATE"}
      </h2>
    </div>

    <div className="relative text-center w-full max-w-6xl">
      <div className="relative flex flex-col items-center gap-10 sm:gap-12 md:gap-16">
        {/* Instead of negative margins, use gap for spacing */}
        <h1 className="text-white font-bold leading-none text-2xl sm:text-5xl md:text-7xl">
          {"LET'S WORK"}
        </h1>

        <h1 className="text-white font-bold leading-none text-2xl sm:text-5xl md:text-7xl">
          TOGETHER
        </h1>

        {/* Center Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <button className="bg-blue-400 hover:bg-gray-500 active:bg-blue-600 transition-all duration-300 rounded-full w-14 h-14 sm:w-28 sm:h-28 flex flex-col items-center justify-center group touch-manipulation shadow-lg hover:shadow-xl">
            <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 text-black mb-1 transition-transform duration-300 group-hover:rotate-45 group-active:scale-95" />
            <span className="text-black font-semibold text-[9px] sm:text-xs md:text-sm leading-tight text-center px-1">
              Get In Touch
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Keyframes same as before */}
  <style jsx>{`
    @keyframes moveRotate {
      0% { transform: translate(-20%, -5%) rotate(0deg); }
      50% { transform: translate(-20%, 5%) rotate(180deg); }
      100% { transform: translate(-20%, -5%) rotate(360deg); }
    }
    @keyframes moveRotateMobile {
      0% { transform: translate(-20%, -2%) rotate(0deg); }
      50% { transform: translate(-20%, 2%) rotate(90deg); }
      100% { transform: translate(-20%, -2%) rotate(180deg); }
    }
    .animate-moveRotate {
      animation: moveRotate 12s ease-in-out infinite;
    }
    @media (max-width: 640px) {
      .animate-moveRotate { animation: moveRotateMobile 8s ease-in-out infinite; }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-moveRotate { animation: none; }
    }
  `}</style>
</div>

  );
}
