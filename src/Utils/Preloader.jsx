"use client";

import { motion } from "framer-motion";

export default function Preloader() {
  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1,
  };

  const colorTransition = {
    loop: Infinity,
    ease: "easeInOut",
    duration: 1,
    repeat: Infinity,
    repeatType: "reverse",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className="relative w-24 h-24"
      >
        <motion.div
          animate={{ color: ["#3B82F6", "#000000"] }}
          transition={colorTransition}
          className="absolute inset-0 flex items-center justify-center text-6xl font-bold"
        >
          S
        </motion.div>
      </motion.div>
      <span className="p-0 text-6xl -ml-4">hrote</span>
    </div>
  );
}
