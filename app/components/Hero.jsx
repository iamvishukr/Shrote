"use client";

import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const dynamicTexts = ["Social Marketing", "Art & Design", "Digital World"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden hero-bg-video pb-16 pt-12">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 scale-[1.4]"
        >
          <source src="/artistic.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute z-10 d-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-gray-700/20 rounded-full"
                style={{
                  width: `${Math.max(150, 200 + i * 90)}px`,
                  height: `${Math.max(150, 200 + i * 90)}px`,
                  top: `${Math.max(-75, -100 - i * 45)}px`,
                  left: `${Math.max(-75, -100 - i * 45)}px`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="min-h-[40vh] sm:min-h-[50vh] md:min-h-[55vh] flex items-center justify-center relative z-20">
          <div className="px-4 sm:px-6 md:px-8">
            <h1 className="text-[36px] mt-16 md:mt-16 fd36 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[8rem] leading-tight text-center md:text-left">
              Innovative solutions for
            </h1>

            <div
              className="text-[40px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9rem] leading-tight text-center md:text-left w-full whitespace-nowrap overflow-hidden"
              style={{ minHeight: "1em" }}
            >
              <span className="text-blue-400 dynamic-text-fancy inline-block w-full">
                {dynamicTexts[currentTextIndex]}
              </span>
            </div>
          </div>
        </div>

        <div className="container relative z-20 pb-8 sm:pb-10 md:pb-12 lg:pb-14">
          <div className="grid md:grid-cols-[40%_60%] gap-6 sm:gap-8 items-center max-w-6xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="relative flex items-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-24 h-24 rounded-full bg-blue-400 flex items-center justify-center z-10 shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <Play className="text-black w-7 h-7" fill="currentColor" />
                </button>

                <div className="relative w-28 h-28">
                  <div className="absolute inset-0 animate-spin-slow">
                    <svg className="w-full h-full" viewBox="0 0 176 176">
                      <path
                        id="learn-more-circle"
                        d="M 88,88 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        fill="none"
                        stroke="none"
                      />
                      <text className="text-[15px] fill-white uppercase tracking-[1.5px] font-medium">
                        <textPath href="#learn-more-circle" startOffset="0%">
                          LEARN MORE ✱ LEARN MORE ✱ LEARN MORE ✱ LEARN MORE
                        </textPath>
                      </text>
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12l7 7 7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left space-y-6">
              <p
                className="text-sm md:text-md leading-relaxed max-w-3xl line-clamp-3"
                style={{ color: "#F5F5F4" }}
              >
                At our Creative Digital Agency, we bring your ideas to life by
                crafting engaging, impactful digital experiences that captivate
                audiences and drive results. From innovative web design to
                compelling content and cutting-edge digital strategies.
              </p>

              <div className="relative inline-flex items-center group">
                <button className="flex items-center gap-3 px-5 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300">
                  Get In Touch
                </button>

                <div className="absolute left-full ml-1 top-1/2 -translate-y-1/2 w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-black arrow-hover-animate"
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
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden bg-blue-600 py-6">
        <div className="ribbon-scroll-rtl">
          <div className="ribbon-content-rtl">
            <span className="ribbon-text">Strategy Consulting</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">Custom Branding</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">Website Design</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">Digital Marketing</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">Analytics & Reporting</span>
            <span className="ribbon-separator">✱</span>
            <span className="ribbon-text">Content Creation</span>
            <span className="ribbon-separator">✱</span>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="Y-x0efG1seA"
      />
    </>
  );
}
