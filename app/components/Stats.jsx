"use client";

import { useEffect, useState, useRef } from "react";

export default function Stats() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  const startCounting = () => {
    if (hasStarted) return;
    setHasStarted(true);

    let start1 = 0;
    let start2 = 0;
    const end1 = 60;
    const end2 = 70;
    const duration = 2400;
    const steps = 60;
    const stepTime = duration / steps;

    const interval1 = setInterval(() => {
      start1 += 1;
      setCount1(start1);
      if (start1 >= end1) clearInterval(interval1);
    }, stepTime);

    const interval2 = setInterval(() => {
      start2 += 1;
      setCount2(start2);
      if (start2 >= end2) clearInterval(interval2);
    }, stepTime);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseEnter = () => startCounting();

    section.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      section.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [hasStarted]);

  return (
    <section 
      ref={sectionRef}
      className="py-0 md:py-20 lg:py-20 bg-[#FAFAF9]"
    >
      <div className="max-w-8xl mx-auto px-4">
        <div
          className="relative rounded-[30px] p-[2px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #93C5FD 0%, #FFFFFF00 90.04%)",
          }}
        >
          <div className="bg-white rounded-[28px] px-10 py-20 shadow-[0_10px_40px_rgb(0,0,0,0.05)] border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center text-stone-900">
              <div>
                <h2 className="text-4xl md:text-5xl mr-2 mb-12 leading-tight">
                  Expertise that scales
                  <br />
                  enterprise <span className="text-blue-600">intelligence</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-6xl font-bold text-blue-600">
                      +{count1}%
                    </div>
                    <p className="text-stone-500 mt-2">
                      Task automation achieved with bespoke LLM agents.
                    </p>
                  </div>
                  <div>
                    <div className="text-6xl font-bold text-blue-600">
                      +{count2}%
                    </div>
                    <p className="text-stone-500 mt-2">
                      Reduction in manual operational overhead after integrating our cognitive automation suite.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    <span className="text-blue-600">✱</span> Cognitive Search Integration:
                  </h3>
                  <p className="text-stone-500 leading-relaxed">
                    Our cognitive search systems leverage semantic vector databases to help your enterprise index internal knowledge bases and provide instant AI-driven answers.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    <span className="text-blue-600">✱</span> Intelligent Automations:
                  </h3>
                  <p className="text-stone-500 leading-relaxed">
                    We deploy multi-agent systems that can navigate software autonomously, automate repetitive data entry, and orchestrate complex ERP and HR workflows seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}