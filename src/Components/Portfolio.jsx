import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = forwardRef((_, ref) => {
  const portfolioItems = [
    {
      title: "Partyvines",
      category: "Event management",
      link: "https://www.partyvines.com",
      image: "../src/assets/e-commerce.jpg",
    },
    {
      title: "Shree Collection",
      category: "E-commerce Store",
      link: "https://demo6.crazymarketer.online",
    },
  ];

  return (
    <section id="portfolio" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={item.image} // Use the imported image directly here
                  className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
