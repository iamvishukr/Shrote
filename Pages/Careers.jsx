import React, { useEffect } from "react";
import { motion } from "framer-motion";
import JobList from "../src/Components/Careers/JobList";
import SEO from '../src/Components/SEO';
import ogImage from '../src/assets/og-image.jpeg'


const Careers = () => {
  useEffect(() => {
    document.getElementById("logo").style.color = "black";
    const anchors = document.querySelectorAll("a");
    anchors.forEach((anchor) => {
      anchor.style.color = "black";
    });
  }, []);

  return (
    <div
      className="min-h-screen  bg-gradient-to-b from-purple-50 to-white"
      style={{ marginTop: "100px", marginBottom: "80px" }}
    >
       <SEO
        title="Careers"
        description="Join our team at Shrote and be part of creating innovative digital solutions that transform businesses."
        keywords="careers, jobs, web development jobs, tech careers, Shrote careers"
        image= {ogImage}
      />
      <div className="container mx-auto px-4 py-16 ">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 "
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6  text-black bg-clip-text ">
            Join Our <span className="text-blue-500">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of our mission to create innovative solutions that make a
            difference. We're always looking for talented individuals to join
            our growing team.
          </p>
        </motion.div>

        {/* Stats Section
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'Team Members', value: '50+' },
            { label: 'Countries', value: '15+' },
            { label: 'Open Positions', value: '8' },
            { label: 'Remote First', value: '100%' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}

        {/* Job Listings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 ">
            Open Positions
          </h2>
          <JobList />
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className=" bg-white rounded-2xl p-8 shadow-lg mt-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 ">
            Why Join Us?
          </h2>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Remote First",
                description:
                  "Work from anywhere in the world with flexible hours.",
              },
              {
                title: "Growth & Learning",
                description:
                  "Continuous learning opportunities and career development.",
              },
              {
                title: "Great Benefits",
                description:
                  "Competitive salary, health insurance, and annual retreats.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
