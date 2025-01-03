import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Anmol Gupta",
    company: "Partyvines",
    quote: "Shrote truly exceeded my expectations with their work on my event management website.I couldn't be happier with the outcome and would recommend Shrote to anyone looking for innovative and professional web solutions.",
  },
  {
    name: "Tanmay Sahoo",
    company: "Scroll Pedia",
    quote: "Shrote did an amazing job with our blog, Scrollpedia. The design is sleek, user-friendly, and perfectly fits our brand. Their team was professional, responsive, and delivered beyond expectations. Highly recommend them.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="bg-gray-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">What Our Clients Say</h2>
        <div className="relative">
          <div className="relative h-64 md:h-72 lg:h-80">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                className="absolute inset-0 w-full md:w-3/4 lg:w-1/2 mx-auto"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                  <p className="italic">{testimonials[currentIndex].quote}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
