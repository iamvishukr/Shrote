"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const studies = [
    {
      id: 1,
      title:
        "Swing, Score, Scale: BlueTees Golf’s Mobile App Journey with Webskitters",
      description:
        "A Hole-in-One Digital Experience: Webskitters Swings Big with",
      image:
        "https://www.webskitters.com/wp-content/uploads/2025/06/about-blue-tees-golf-img.jpg",
      logo: "https://www.webskitters.com/wp-content/uploads/2025/06/blue-tees-golf-logo.png",
      button: "View Case Study",
    },
    {
      id: 2,
      title:
        "Boosting Organic Growth for a Pet Brand with Smart SEO Strategies",
      description: "How Comprehensive SEO Helped a Pet Brand Increase",
      image:
        "https://www.webskitters.com/wp-content/uploads/2025/06/dogistry-bnr-mobile.webp",
      logo: "https://www.webskitters.com/wp-content/uploads/2025/06/dogistry-logo.png",
      button: "View Case Study",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        More <span className="italic text-green-800">Case Studies</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {studies.map((study) => (
          <div
            key={study.id}
            className="bg-slate-900 rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-64">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow">
                <Image
                  src={study.logo}
                  alt="Case Study Logo"
                  width={80}
                  height={30}
                />
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-300">
                {study.title}
              </h3>
              <p className="mt-2 text-gray-400">{study.description}</p>

              <div className="mt-6 flex items-center gap-1  group">
                <button className="bg-slate-600 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-full shadow-md transition">
                  {study.button}
                </button>
                <button className="bg-slate-600 hover:bg-slate-800 text-white p-3 rounded-full shadow-md transition-transform duration-300 transform group-hover:translate-x-2">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
