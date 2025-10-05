import React from 'react';

const TabButton = ({ isActive, onClick, label, icon, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`pt-2 pb-2  px-3 flex  items-center gap-2 ${
        isActive ? "text-gray-200 bg-[#7367F0]" : "text-gray-600"
      } font-medium text-[15px] overflow-hidden rounded-[5px]  hover:text-gray-200 hover:bg-[#7367F0] focus:outline-none ${className}`}
    >
      {icon}
      {label}
    </button>
  );
};


export default TabButton;
