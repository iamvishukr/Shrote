import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";
import { Rocket, Shield, Zap } from "lucide-react";
import SEO from '../src/Components/SEO';
import ogImage from '../src/assets/og-image.jpeg'
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    document.getElementById("logo").style.color = "black";
    const anchors = document.querySelectorAll("a");
    anchors.forEach((anchor) => {
      anchor.style.color = "black";
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="About Us"
        description="Learn about Shrote's mission to revolutionize web development and empower businesses in the digital age."
        keywords="about us, web development company, digital solutions, Shrote team"
        image={ogImage}
      />
      <main
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
        style={{ marginTop: "80px", marginBottom: "100px" }}
      >
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-28"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            About <span className="text-blue-600">Us</span>
          </h1>

          {/* Profile Card */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-12"
          >
            <div className="relative">
              <img 
                src="./profilepic1.png" 
                alt="Vishal Kumar"
                className="w-full h-[20px] object-cover object-center"
                style={{ objectPosition: "50% 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Vishal Kumar</h2>
              <p className="text-blue-600 font-medium mb-4">Co-founder & Developer</p>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Passionate about creating innovative solutions and driving technological advancement in the SaaS industry.</p>
            </div>
          </motion.div> */}

          <h1 className="text-2xl text-gray-800 font-bold max-w-3xl mb-2 mx-auto">
            "Empowering businesses with innovative digital solutions"
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We're on a mission to revolutionize the SaaS industry with
            innovative solutions that empower businesses to thrive in the
            digital age.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: FiTarget,
              title: "Our Mission",
              description:
                "To provide cutting-edge SaaS solutions that drive business growth and efficiency.",
            },
            {
              icon: FiTrendingUp,
              title: "Our Vision",
              description:
                "To become the global leader in innovative SaaS platforms, setting new industry standards.",
            },
            {
              icon: FiUsers,
              title: "Our Values",
              description:
                "Customer-centric approach, innovation, integrity, and continuous improvement.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <item.icon className="text-4xl text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Cutting-edge Technology",
                description:
                  "We leverage the latest technologies to deliver powerful and efficient solutions.",
              },
              {
                icon: Shield,
                title: "Robust Security",
                description:
                  "Your data security is our top priority, with state-of-the-art protection measures.",
              },
              {
                icon: Zap,
                title: "Unparalleled Performance",
                description:
                  "Our solutions are optimized for speed and reliability, ensuring smooth operations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <item.icon className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers and take your business to the
            next level.
          </p>
          <Link to='/contact'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Contact Us Today
            </motion.button>
          </Link>
        </motion.section>
      </main>
    </div>
  );
};

export default AboutUs;