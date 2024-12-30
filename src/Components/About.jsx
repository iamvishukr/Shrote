import React from "react";
import { motion } from "framer-motion";
// import { button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import ERP from "../assets/ERP.jpg";
import ecommerce from "../assets/e-commerce.jpg";
import digitalSpace from "../assets/digital-workplace.jpg";
import virtual from '../assets/virtual.png'
import hours from '../assets/hours.jpg'

const features = [
  "Custom Web Development",
  "Responsive Design",
  "SEO Optimization",
  "24/7 Support",
  "Performance Optimization",
  "Security Implementation",
];

const portfolioImages = [
  {
    src: ERP,
    alt: "ERP Solutions",
    width: 600,
    height: 400,
  },
  {
    src: ecommerce,
    alt: "E-commerce Solutions",
    width: 600,
    height: 400,
  },
  {
    src: digitalSpace,
    alt: "HRM Solutions",
    width: 600,
    height: 400,
  },
];

const About = () => {
  const navigate = useNavigate();

const handleStartProject = () => {
  navigate("/contact");
};
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Logo and Intro Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {/* <img
              // src="Shrote-Water-Logo.png"
              alt="Shrote Logo"
              width={300}
              height={100}
              className="mx-auto mb-8"
            /> */}
            <div className="logo">
              <Link to="/" className="text-8xl font-bold mx-auto mb-8">
                <span className="text-blue-500">S</span>hrote
              </Link>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Shrote, we're more than just a web design and development
              company – we're your dedicated digital partners. Our mission is
              simple yet powerful: empowering businesses to excel in the online
              world with exceptional web solutions that make a lasting
              impression.
            </p>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {portfolioImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={img.src} // Use the imported image directly here
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{img.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interior Showcase
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src= {virtual}
              alt="Virual Reality"
              width={800}
              height={600}
              className="object-cover w-full h-[400px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={hours}
              alt="Cozy Living Room"
              width={800}
              height={600}
              className="object-cover w-full h-[400px]"
            />
          </motion.div>
        </div> */}

        {/* Features Section */}
        <div className="grid grid-cols-1 p-12 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Why Choose Shrote?</h3>
            <p className="text-gray-600">
              What sets us apart is our commitment to innovation and excellence.
              We specialize in creating websites that are not only visually
              stunning but also highly functional and user-friendly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <button
              size="lg"
              className="bg-blue-600 p-6 rounded-2xl hover:bg-blue-700 text-white"
              onClick={handleStartProject}
            >
              Start Your Project
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Our Expertise</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <span>Passionate Team of Experts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <span>Tailored Solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <span>98% Client Satisfaction Rate</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
