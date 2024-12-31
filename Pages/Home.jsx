import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import SEO from '../src/Components/SEO';
import Hero from '../src/Components/Hero';
import About from '../src/Components/About';
import Services from '../src/Components/Services';
import Portfolio from '../src/Components/Portfolio';
import Testimonials from '../src/Components/Testimonials';
import CallToAction from '../src/Components/CallToAction';
import ogImage from '../src/assets/og-image.jpeg';

const Home = () => {
    const section1Ref = useRef(null);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
       <SEO
        title="Home"
        description="Transform your digital presence with Shrote's expert web design and development services."
        keywords="web design, web development, SEO, digital marketing"
        image={ogImage}
      />
      <Hero section1Ref={section1Ref} />
      <About />
      <Services />
      <Portfolio ref={section1Ref}/>
      <Testimonials />
      <CallToAction />
    </motion.div>
  );
};

export default Home;

