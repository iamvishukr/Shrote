"use client";

import { Arrow } from "@radix-ui/react-context-menu";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const InternHero = () => {
  return (
    <section
      className="relative w-full h-[200px] md:h-[250px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbyrbuqbg/image/upload/v1742114453/cloud-servers-banner_jrwlf6.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="w-full flex justify-end px-4">
        <div className="relative z-10 mt-24 md:mt-28 max-w-2xl text-right">
          <h2 className="text-xl md:text-5xl font-extrabold font-jakarta text-blue-400 mb-4">
            Internship
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-4">
            Explore Our Latest Opportunities
          </p>
          <div className="flex justify-end gap-2 text-sm sm:text-lg">
            <Link href="/" className="hover:underline hover:text-blue-400">
              <span className="text-gray-300">Home</span>
            </Link>
            <span className="text-blue-400">★</span>
            <span className="text-blue-400">Internship</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternHero;
