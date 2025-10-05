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
      className="py-0 md:py-20 lg:py-20 bg-black"
    >
      <div className="max-w-8xl mx-auto px-4">
        <div
          className="relative rounded-[30px] p-[2px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #60A5FA 0%, #00000000 90.04%)",
          }}
        >
          <div className="bg-black rounded-[28px] px-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center text-white">
              <div>
                <h2 className="text-4xl md:text-5xl mr-2 mb-12 leading-tight">
                  Expertise that drives
                  <br />
                  digital <span className="text-blue-400">success</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-6xl font-bold text-blue-400">
                      +{count1}%
                    </div>
                    <p className="text-gray-300 mt-2">
                      By optimizing your website for search engines.
                    </p>
                  </div>
                  <div>
                    <div className="text-6xl font-bold text-blue-400">
                      +{count2}%
                    </div>
                    <p className="text-gray-300 mt-2">
                      Rise in revenue as more visitors convert into paying
                      customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    <span className="text-blue-400">✱</span> Social Media
                    Management:
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our social media management services focus on building and
                    enhancing your brand's online presence. We create engaging
                    content, manage your social media accounts, and analyze
                    performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    <span className="text-blue-400">✱</span> E-commerce
                    Solutions:
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our e-commerce solutions are designed to create seamless
                    online shopping experiences. From user-friendly website
                    design to secure payment processing and inventory
                    management.
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