import React from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import uiux from "../assets/ui-ux.jpg";
import web from "../assets/web.jpg";
import seo from "../assets/seo.jpg";
import support from "../assets/support.jpg";
import consulting from "../assets/consulting.jpg";
import wordpress from "../assets/wordpress.jpeg";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: "bi bi-globe-central-south-asia",
    title: "Web Application",
    description:
      "Experienced web application developer proficient in designing and building dynamic, user-focused solutions. Skilled in utilizing various programming languages and frameworks.",
    image: web,
  },
  {
    icon: "bi bi-palette",
    title: "UI/UX Designer",
    description:
      "Creative UI/UX designer with a flair for producing visually captivating and impactful designs. Proficient in translating client visions into compelling graphics.",
    image: uiux,
  },
  {
    icon: "bi bi-wordpress",
    title: "Wordpress Development",
    description:
      "Experienced WordPress developer with a knack for crafting visually appealing and highly functional websites. Proficient in theme customization and plugin integration.",
    image: wordpress,
  },
  {
    icon: "bi bi-binoculars",
    title: "SEO",
    description:
      "Accomplished SEO expert specializing in enhancing online visibility and driving organic traffic growth. Proficient in keyword research and on-page optimization.",
    image: seo,
  },
  {
    icon: "bi bi-code-slash",
    title: "Consulting",
    description:
      "Providing expert advice and guidance on web development technologies, strategies, and best practices",
    image: consulting,
  },
  {
    icon: "bi bi-question-octagon",
    title: "24/7 Support",
    description:
      "Offering 24/7 support with a commitment to providing timely assistance and solutions. Dedicated to resolving inquiries and concerns around the clock.",
    image: support,
  },
];

const Services = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const navigate = useNavigate();
  const handleClick = () =>{

    navigate('/contact')
  }

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-100 to-white"
    >
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
              className="relative overflow-hidden rounded-lg shadow-lg group"
              onClick={handleClick}

            >
              <img
                src={service.image}
                alt=""
                srcset=""
                className="cursor-pointer object-cover blur-md w-full h-64 transition-transform opacity-90 duration-300 group-hover:blur-[2px] group-hover:scale-110"
              />
              <div className="absolute flex text-white items-center inset-0 bg-gradient-to-t from-black/60 to-black/40 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute px-4 left-0 right-0  text-center top-auto bottom-auto">
                  <i
                    className={`${service.icon} text-4xl text-blue-500 mb-4`}
                  ></i>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className=" text-white">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
