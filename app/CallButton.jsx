"use client"; // If using App Router

import Link from "next/link";
import { FaPhone } from "react-icons/fa";

export default function CallButton() {
  return (
    <Link
      href="Call:+91767983607" 
      target="_blank"
      rel="noopener noreferrer"
      
      className="fixed bottom-5 left-5 bg-[#164058]   text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
    >
      <FaPhone size={28} />
    </Link>
  );
}
