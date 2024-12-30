"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";
import { Rocket, Shield, Zap } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    document.getElementById("logo").style.color = "black";
    const anchors = document.querySelectorAll("a");
    anchors.forEach((anchor) => {
      anchor.style.color = "black";
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
        style={{ marginTop: "80px", marginBottom: "100px" }}
      >
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-28"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Us</span>
          </h1>
          <h1 className="text-2xl text-gray-800 font-bold max-w-3xl mb-2 mx-auto ">
            "Empowering businesses with innovative digital solutions"
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We're on a mission to revolutionize the SaaS industry with
            innovative solutions that empower businesses to thrive in the
            digital age.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: FiTarget,
              title: "Our Mission",
              description:
                "To provide cutting-edge SaaS solutions that drive business growth and efficiency.",
            },
            {
              icon: FiTrendingUp,
              title: "Our Vision",
              description:
                "To become the global leader in innovative SaaS platforms, setting new industry standards.",
            },
            {
              icon: FiUsers,
              title: "Our Values",
              description:
                "Customer-centric approach, innovation, integrity, and continuous improvement.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <item.icon className="text-4xl text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {[
              { year: '2018', title: 'Founded', description: 'Our company was born from a vision to transform the SaaS landscape.' },
              { year: '2020', title: 'Rapid Growth', description: 'We expanded our team and client base, serving businesses worldwide.' },
              { year: '2022', title: 'Innovation Milestone', description: 'Launched our flagship product, revolutionizing the industry.' },
              { year: '2024', title: 'Global Expansion', description: 'Opened new offices across continents to better serve our global clientele.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{item.year.slice(-2)}</span>
                  </div>
                </div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Cutting-edge Technology",
                description:
                  "We leverage the latest technologies to deliver powerful and efficient solutions.",
              },
              {
                icon: Shield,
                title: "Robust Security",
                description:
                  "Your data security is our top priority, with state-of-the-art protection measures.",
              },
              {
                icon: Zap,
                title: "Unparalleled Performance",
                description:
                  "Our solutions are optimized for speed and reliability, ensuring smooth operations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <item.icon className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers and take your business to the
            next level.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Us Today
          </motion.button>
        </motion.section>
      </main>
    </div>
  );
};

export default AboutUs;
