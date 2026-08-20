"use client";

import { Star, Quote } from "lucide-react";

export const reviews = [
  {
    title: "Amit Kumar",
    position: "CEO, Perfect Metal Works",
    description:
      "Shrote Technology is the place where you can rely for web and application engineering. Excellent execution, timely deliveries, and great communication.",
  },
  {
    title: "Lavanya",
    position: "Director, Navashakthi Herbal Labs",
    description:
      "Having worked closely with Shrote Technology on our digital platforms, we recommend them as true engineering leaders in modern web & cloud development.",
  },
  {
    title: "Latha M.",
    position: "Managing Director, AWI",
    description:
      "It has been a real pleasure working with Shrote Technology. They are one of the most customer-centric software firms we have partnered with.",
  },
  {
    title: "Suresh R.",
    position: "Founder, Infinite Space Solutions",
    description:
      "Thank you for the excellent service provided for our enterprise portal. The proactive support and technical acumen of the team is truly exceptional.",
  },
  {
    title: "Ramesh K.",
    position: "CEO, A S C Furniture",
    description:
      "Outstanding commitment, clean code, and delivered before the deadline. We saw an immediate 3x increase in user engagement after the revamp.",
  },
  {
    title: "Krishnakanth",
    position: "CEO, RAAH Technologies, Inc",
    description:
      "I am very pleased with the work done by Shrote Technology. The team is dedicated, fast, and brings genuine architecture expertise to the table.",
  },
];

export default function CardHoverEffectDemo() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group"
            style={{ border: "1px solid #e8f0f7" }}
          >
            <div>
              {/* Stars & Quote */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "#eef7f5", color: "#00A88F" }}
                >
                  <Quote size={16} />
                </div>
              </div>

              <p className="text-[14px] text-[#5a7a9a] leading-relaxed mb-6 italic">
                "{item.description}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#f0f5fa] flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-[13px]"
                style={{ background: "linear-gradient(135deg, #0d2a4a 0%, #00A88F 100%)" }}
              >
                {item.title.charAt(0)}
              </div>
              <div>
                <h4 className="text-[14.5px] font-bold text-[#0d2a4a]">
                  {item.title}
                </h4>
                <p className="text-[12px] text-[#6b8ba8]">
                  {item.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

