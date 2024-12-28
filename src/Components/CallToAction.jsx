import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const CallToAction = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-blue-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Online Presence?</h2>
          <p className="text-xl mb-8">Let's create something amazing together!</p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;

