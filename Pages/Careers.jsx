import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBullhorn, FaPaintBrush } from 'react-icons/fa';
import SEO from '../src/Components/SEO';

const jobListings = [
  {
    title: 'Software Developer',
    description: 'Join us in creating amazing software applications.',
    icon: <FaBriefcase className="text-3xl mb-4 text-blue-500" />,
  },
  {
    title: 'Internships',
    description: 'Gain valuable experience and kickstart your career with us.',
    icon: <FaGraduationCap className="text-3xl mb-4 text-green-500" />,
  },
  {
    title: 'Marketing Manager',
    description: 'Lead our marketing efforts and drive growth.',
    icon: <FaBullhorn className="text-3xl mb-4 text-yellow-500" />,
  },
  {
    title: 'Graphics Designer',
    description: 'Create stunning visuals for our products and brand.',
    icon: <FaPaintBrush className="text-3xl mb-4 text-purple-500" />,
  },
];

const Careers = () => {
  const handleApply = (jobTitle) => {
    const googleFormUrl = `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=pp_url&entry.XXXXXX=${encodeURIComponent(jobTitle)}`;
    window.open(googleFormUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100"
    >
      <SEO
        title="Careers"
        description="Join our team and be part of creating innovative solutions."
        keywords="careers, jobs, web development, marketing, design"
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">Career Opportunities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center mb-6">
                {job.icon}
                <h2 className="text-3xl font-semibold mb-2 text-gray-800">{job.title}</h2>
              </div>
              <p className="text-gray-600 mb-6 text-center">{job.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleApply(job.title)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Careers;

