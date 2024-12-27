import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../src/Components/SEO';

const jobListings = [
  {
    title: 'Software Developer',
    description: 'Join us in creating amazing software applications.',
  },
  {
    title: 'Internships',
    description: 'Join us in creating amazing software applications.',
  },
  {
    title: 'Marketing Manager',
    description: 'Join us in Marketing.',
  },
  {
    title: 'Graphics Designer',
    description: 'Join us in Design amazing software applications.',
  },
];

const Careers = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleApply = (index) => {
    setActiveForm(index);
  };

  const handleSubmit = (e, index) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Application submitted for:', jobListings[index].title);
    // Reset form after submission
    setActiveForm(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Careers"
        description="Join our team at Shrote and be part of creating innovative web solutions."
        keywords="careers, jobs, web development, marketing, design"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Career Opportunities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <button
                onClick={() => handleApply(index)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Apply Now
              </button>
              {activeForm === index && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={(e) => handleSubmit(e, index)}
                  className="mt-4 space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name:</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume/CV:</label>
                    <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                  </div>
                  <div>
                    <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700">Cover Letter:</label>
                    <textarea id="cover-letter" name="coverLetter" rows="4" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    Submit Application
                  </button>
                </motion.form>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Careers;

