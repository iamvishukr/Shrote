'use client'

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Tanmay Sahoo',
    position: 'Founder',
    company: 'Scrollpedia',
    quote: "Working with Shrote was an absolute pleasure! They transformed our vision for Scrollpedia into a stunning and functional blog website. Their attention to detail, creativity, and seamless communication made the entire process effortless. Thanks to Shrote, our platform now stands out with a user-friendly design and exceptional performance. Highly recommended!"
  },
  {
    name: 'Anmol Gupta',
    position: 'CEO & Founder',
    company: 'Partyvines',
    quote: "I'm thrilled with the exceptional service provided by Shrote for my event management website. Their expertise, dedication, and creative approach resulted in a stunning and functional platform that exceeded my expectations. Shrote is a top-notch choice for anyone seeking professional and innovative web solutions."
  },
  
];

const Testimonials = () => {
  // Duplicate testimonials to create a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-gray-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">What Our Clients Say</h2>
        <motion.div 
          className="flex"
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-[80vw] md:w-[40vw] p-4">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="flex items-center mb-4">
                  {/* <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div> */}
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="italic">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

