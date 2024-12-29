import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <div className="logo">
          <Link to="/" className="text-4xl font-bold">
            <span className="text-blue-500">S</span><span id='logo' className={`text-white' ${isScrolled ? 'text-black' : 'text-white'}`}>hrote</span>
          </Link>
        </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Contact', 'Career'].map((item) => (
              <NavItem key={item} label={item} isScrolled={isScrolled} />
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
            >
              Request A Quote
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg rounded-b-2xl overflow-hidden"
            >
              <nav className="flex flex-col py-4">
                {['Home', 'About', 'Contact', 'Career'].map((item) => (
                  <motion.a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="px-6 py-3 text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                    whileHover={{ x: 10 }}
                  >
                    <span>{item}</span>
                  </motion.a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mx-6 mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium"
                >
                  Get Started
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

const NavItem = ({ label, isScrolled }) => {
  return (
    <motion.a
      href={`/${label.toLowerCase()}`}
      className={`relative font-medium transition-colors duration-300 ${
        isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.a>
  );
};

export default Header;