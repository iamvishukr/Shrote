import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../src/Components/SEO';
import Hero from '../src/Components/Hero';
import About from '../src/Components/About';
import Services from '../src/Components/Services';
import Portfolio from '../src/Components/Portfolio';
import Testimonials from '../src/Components/Testimonials';
import CallToAction from '../src/Components/CallToAction';
import Contact from '../src/Components/Contact';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Home"
        description="Shrote - Elevate your online presence with our expert team's innovative designs and seamless functionality."
        keywords="web design, web development, SEO, digital marketing"
      />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <CallToAction />
    </motion.div>
  );
};

export default Home;

