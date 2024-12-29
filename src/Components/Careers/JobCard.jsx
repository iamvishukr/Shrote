import React from 'react';
import { motion } from 'framer-motion';
// import { LucideIcon } from 'lucide-react';


const JobCard = ({ title, description, Icon, category, location, type, onApply }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300">
              <Icon className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-500">{category}</p>
            </div>
          </div>
          <span className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
            {type}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>📍</span>
            <span>{location}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onApply(title)}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow duration-300"
        >
          Apply Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default JobCard;