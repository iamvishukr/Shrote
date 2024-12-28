import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BackgroundCarousel } from "./background-carousel";
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Hero = ({ section1Ref }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen text-white">
      <BackgroundCarousel />
      <div className="container mx-auto px-4 relative z-30 h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            <Typewriter
              options={{
                strings: ["Elevate Your Digital Presence"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We craft exceptional web experiences that drive growth and transform
            businesses in the digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full transition-colors duration-300"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection(section1Ref)}
              className="border border-gray-600 bg-slate-200 text-gray-800 hover:text-gray-900 hover:border-gray-400 px-8 py-3 text-lg rounded-full transition-colors duration-300"
            >
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
