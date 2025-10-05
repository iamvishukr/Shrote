"use client";

import { Arrow } from "@radix-ui/react-context-menu";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const JoinOurTeamHero = () => {
  return (
    <section
      className="relative w-full h-[200px] md:h-[250px] flex items-center  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbyrbuqbg/image/upload/v1742114476/it-stretegic-consulting-banner_bbmola.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="md:ml-[35px]  relative z-10 mt-24 md:mt-28 px-4 text-center">
        <h2 className="text-xl md:text-5xl -ml-20 md:ml-0 font-extrabold font-jakarta text-blue-400 mb-4">
          Join Our Team
        </h2>
        <p className="text-lg md:text-xl md:-ml-20 text-gray-200 max-w-2xl mx-auto">
          Explore Our Latest Oppurtunities
        </p>
        <div className="flex  gap-2 text-sm sm:text-lg mb-8">
            <Link href="/" className="hover:underline hover:text-blue-400">
              <span className="text-gray-300">Home</span>
            </Link>
            <span className="text-blue-400">★</span>
            <span className="text-blue-400">Join Our Team</span>
          </div>
      </div>
     
    </section>
  );
};

export default JoinOurTeamHero;
