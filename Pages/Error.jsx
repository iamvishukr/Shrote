"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl text-center p-8 bg-white rounded-2xl shadow-2xl"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex items-center justify-center mb-8"
        >
          <AlertCircle size={80} className="text-red-500" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          We apologize, but the page you're looking for doesn't exist or has
          been moved.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 flex justify-center"
        >
          <Link
            to="/"
            className="text-white flex px-4 rounded-xl transition-all duration-300 hover:shadow-lg items-center border border-yellow-600"
            style={{ backgroundColor: "gray" }}
          >
            <span>
              <ArrowLeftCircle className="text-white text-center" />
            </span>
            <span className="p-2">Return to Homepage</span>
          </Link>
        </motion.div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
