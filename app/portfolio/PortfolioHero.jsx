"use client";

import { Arrow } from "@radix-ui/react-context-menu";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const PortfolioBanner = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[300px] flex items-center  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drfbuv5ll/image/upload/v1742187982/Portfolio-Banner_zzao0x.jpg')", // replace with your actual image path
      }}
    >
    
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10  px-6">
        <h2 className="text-xl md:text-5xl font-extrabold fry font-jakarta mt-20 md:m-20 pb-8 md:pb-4 text-blue-400 ">
          OUR PORTFOLIO SUMMARY
        </h2>
        <p className="text-lg md:text-xl text-gray-200 md:ml-20 md:-mt-20 pb-6 md:pb-2">
          Explore Our Latest Projects and Creative Work
        </p>

        <div className="flex md:ml-20">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-4 py-2 text-lg font-semibold text-white rounded-md bg-gradient-to-r from-orange-400 to-green-500 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            WORK PORTFOLIO
            <svg
              className="ml-2"
              width="13"
              height="10"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8001 7.01922L12.9335 1.15256L18.8001 7.01922ZM18.8001 7.01922L12.9335 12.8859L18.8001 7.01922ZM18.8001 7.01922H0.466797H18.8001Z"
                fill="white"
              />
              <path
                d="M18.8001 7.01922L12.9335 1.15256M18.8001 7.01922L12.9335 12.8859M18.8001 7.01922H0.466797"
                stroke="white"
                strokeWidth="1.7"
              />
            </svg>
          </Link>
          
        </div>
        <div className="flex md:ml-20  gap-2 text-sm sm:text-lg ">
            <Link href="/" className="hover:underline hover:text-blue-400">
              <span className="text-gray-300">Home</span>
            </Link>
            <span className="text-blue-400">★</span>
            <span className="text-blue-400">Portfolio</span>
          </div>
      </div>
    </section>
  );
};

export default PortfolioBanner;
