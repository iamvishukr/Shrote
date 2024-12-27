import React from 'react';
import { motion } from 'framer-motion';
// import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-0" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/90 to-gray-900/50 z-10" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20 h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Elevate Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We craft exceptional web experiences that drive growth and transform businesses in the digital age.
          </p>
          
          <div className="sm:flex-row gap-4 justify-center items-center">
            <button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg rounded-full"
            >
              Get Started
              {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
            </button>
            <button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:text-white px-8 py-6 text-lg rounded-full"
            >
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
        >
          {[
            { number: "150+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </section>
  );
};

export default Hero;

