import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const services = [
  {
    icon: 'bi bi-code-slash',
    title: 'Expert Coder',
    description: 'Expert coder with a passion for crafting clean, efficient, and innovative solutions. Proficient in multiple programming languages and frameworks.'
  },
  {
    icon: 'bi bi-palette',
    title: 'Creative Designer',
    description: 'Creative designer with a flair for producing visually captivating and impactful designs. Proficient in translating client visions into compelling graphics.'
  },
  {
    icon: 'bi bi-wordpress',
    title: 'Wordpress Developer',
    description: 'Experienced WordPress developer with a knack for crafting visually appealing and highly functional websites. Proficient in theme customization and plugin integration.'
  },
  {
    icon: 'bi bi-globe-central-south-asia',
    title: 'Web Application',
    description: 'Experienced web application developer proficient in designing and building dynamic, user-focused solutions. Skilled in utilizing various programming languages and frameworks.'
  },
  {
    icon: 'bi bi-binoculars',
    title: 'SEO Expert',
    description: 'Accomplished SEO expert specializing in enhancing online visibility and driving organic traffic growth. Proficient in keyword research and on-page optimization.'
  },
  {
    icon: 'bi bi-question-octagon',
    title: '24/7 Support',
    description: 'Offering 24/7 support with a commitment to providing timely assistance and solutions. Dedicated to resolving inquiries and concerns around the clock.'
  }
];

const Services = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <i className={`${service.icon} text-4xl text-blue-500 mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

