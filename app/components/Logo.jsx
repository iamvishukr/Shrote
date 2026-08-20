"use client";

import React from "react";

export default function Logo({ variant = "dark", className = "" }) {
  const isLight = variant === "light"; // For dark backgrounds like footer

  if (isLight) {
    return (
      <div className={`inline-flex items-center bg-white px-3 py-2 rounded-2xl shadow-md border border-white/30 select-none ${className}`}>
        <img
          src="/images.png"
          alt="Shrote Technologies"
          className="h-14 sm:h-16 w-auto object-contain rounded-xl"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none py-1 ${className}`}>
      <img
        src="/images.png"
        alt="Shrote Technologies"
        className="h-14 sm:h-[62px] md:h-[66px] w-auto object-contain rounded-xl transition-transform duration-200 hover:scale-105"
      />
    </div>
  );
}
