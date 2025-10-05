"use client";

import { ArrowUpRight, Grid3X3, Layers, Database } from "lucide-react";
import Image from "next/image";

export default function HowItWork() {
 const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Initial consultation to understand your brand, goals, and target audience. Conducting research and analysis.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M9.28585 17.1429C13.6252 17.1429 17.143 13.6251 17.143 9.28573C17.143 4.94635 13.6252 1.42859 9.28585 1.42859C4.94647 1.42859 1.42871 4.94635 1.42871 9.28573C1.42871 13.6251 4.94647 17.1429 9.28585 17.1429Z"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.7146 17.1429C35.0539 17.1429 38.5717 13.6251 38.5717 9.28573C38.5717 4.94635 35.0539 1.42859 30.7146 1.42859C26.3752 1.42859 22.8574 4.94635 22.8574 9.28573C22.8574 13.6251 26.3752 17.1429 30.7146 17.1429Z"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.28585 38.5715C13.6252 38.5715 17.143 35.0537 17.143 30.7143C17.143 26.3749 13.6252 22.8572 9.28585 22.8572C4.94647 22.8572 1.42871 26.3749 1.42871 30.7143C1.42871 35.0537 4.94647 38.5715 9.28585 38.5715Z"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.7146 38.5715C35.0539 38.5715 38.5717 35.0537 38.5717 30.7143C38.5717 26.3749 35.0539 22.8572 30.7146 22.8572C26.3752 22.8572 22.8574 26.3749 22.8574 30.7143C22.8574 35.0537 26.3752 38.5715 30.7146 38.5715Z"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Implementation",
    description:
      "Bringing ideas to life by executing strategies, developing solutions, and delivering high-quality outcomes.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 40 39"
        fill="none"
      >
        <path
          d="M21.5145 19.1904C21.0907 19.3744 20.6336 19.4693 20.1716 19.4693C19.7096 19.4693 19.2525 19.3744 18.8287 19.1904L2.54303 11.6475C2.27858 11.5141 2.05634 11.3099 1.90106 11.0577C1.74579 10.8055 1.66357 10.5151 1.66357 10.2189C1.66357 9.9227 1.74579 9.6324 1.90106 9.3801C2.05634 9.1279 2.27858 8.92374 2.54303 8.79035L18.8287 1.19035C19.2525 1.00633 19.7096 0.911377 20.1716 0.911377C20.6336 0.911377 21.0907 1.00633 21.5145 1.19035L37.8002 8.73321C38.0646 8.86659 38.2869 9.0708 38.4421 9.323C38.5974 9.5752 38.6796 9.8656 38.6796 10.1618C38.6796 10.458 38.5974 10.7483 38.4421 11.0006C38.2869 11.2528 38.0646 11.457 37.8002 11.5904L21.5145 19.1904Z"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38.743 20.4761L21.3144 28.5046C20.9422 28.6744 20.5378 28.7623 20.1287 28.7623C19.7195 28.7623 19.3152 28.6744 18.943 28.5046L1.6001 20.4761"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38.743 29.7618L21.3144 37.7903C20.9422 37.9601 20.5378 38.048 20.1287 38.048C19.7195 38.048 19.3152 37.9601 18.943 37.7903L1.6001 29.7618"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "Working together closely with clients to refine, improve, and ensure ongoing success of the delivered project.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20h16v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];


  return (
    <section className="bg-black text-white py-12 md:py-16 lg:py-16 px-8 ">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 mb-0 md:mb-8 lg:mb-8">
            <span className="text-blue-400 text-lg mr-2">✱{" "}HOW IT WORK</span>
            
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl dfd font-light leading-tight">
              Our proven{" "}
              <span className="text-blue-400 font-bold">process</span> for
              achieving success
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="text-xl alok text-white leading-relaxed">
              Our proven process combines research, strategy, and creativity to
              deliver tailored solutions that drive measurable results.
            </p>
          </div>
        </div>

        
        <div className="relative">
         
          <div className="absolute left-0 -top-16 mt-24 h-[90%] w-[40%] -translate-x-1/4 z-0 overflow-hidden">
            <Image
              src="/how-work-bg-shape.png"
              alt="Background shape"
              fill
              className="absolute left-[-100px] animate-slow-spin top-1/2 -translate-y-1/2 w-[300px] opacity-40 rotate-[25deg] pointer-events-none z-0"
            />
          </div>

          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group p-8 rounded-[2rem] sdcard bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden h-[340px] md:h-[400px] lg:h-[400px]`}
              >
               
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-300" />
                </div>

               
                <h3 className="text-xl md:text-2xllg:text-2xl font-semibold mb-4">{step.title}</h3>

               
                <p className=" md:text-xl lg:text-xl edem mb-16">{step.description}</p>

                
                <div className="absolute bottom-6  ml-2  left-6">
                  <p className="text-3xl electromotion">STEP</p>
                  <p className="text-4xl justify-center font-bold text-blue-400">
                    {step.number}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-1/2 h-40 bg-blue-500 rounded-tl-[3rem] overflow-hidden flex items-center justify-center z-10">
                  <div className="absolute inset-0 bg-white opacity-80 scale-0 group-hover:scale-100 origin-bottom-right transition-transform duration-700 pointer-events-none z-0" />
                  <step.icon className="w-12 h-12 text-black z-10 relative" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}