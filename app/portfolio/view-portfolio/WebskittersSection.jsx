"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function WebskittersSection() {
  return (
    <section className="bg-green-50 py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Digitally Engineered Success <br />
            <span className="text-green-800 italic">With Webskitters</span>
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            We’re Excited To Share That Webskitters Technology Solutions Pvt.
            Ltd. Is Growing! We’re Opening A New Office As Part Of Our
            Expansion. This Big Step Is Possible Because Of Our Amazing And
            Hardworking Team. Just Like Our Other Offices, The New One Will
            Offer Services Like UI/UX Design, Web And Mobile App Development,
            Digital Marketing, Artificial Intelligence, And Internet Of Things.
            With Our Great Team, We’re Ready To Grow Even More And Create
            Exciting New Opportunities.
          </p>
          <div className="mt-8 flex items-center gap-1 group">
            <button className="bg-slate-600 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-full shadow-md transition">
              Book A Free Consultation
            </button>

            <button className="bg-slate-600 text-white p-3 rounded-full shadow-md transition-transform duration-300 transform group-hover:translate-x-2">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="https://www.webskitters.com/wp-content/uploads/2025/07/digital-transform-img.png"
            alt="Webskitters Office"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
