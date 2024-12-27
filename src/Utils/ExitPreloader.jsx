"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in production and use real loading logic)
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1,
  };

  const colorTransition = {
    loop: Infinity,
    ease: "easeInOut",
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
  };

  const exitTransition = {
    duration: 0.8,
    ease: "easeInOut",
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader" // Add a key to identify the component for AnimatePresence
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ scale: 1, opacity: 1 }} // Define initial state for the animation
          exit={{
            scale: 20, // Scale up for the zooming-out effect
            opacity: 0,
            transition: exitTransition,
          }}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
