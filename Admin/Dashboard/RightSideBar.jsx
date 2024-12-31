// RightSidebar.jsx
import React from 'react';

const RightSidebar = () => {
  return (
    <aside className="w-1/4 p-4">
      <div className="bg-blue-100 p-4 rounded mb-4">
        <h3 className="text-lg font-bold mb-2">We will help you get Scholarships</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Ask your questions
        </button>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Abroad Education loan</h3>
        <ul>
          <li className="flex items-center mb-2">
            <img src="/sbi-logo.png" alt="SBI Logo" className="w-8 h-8 mr-2" />
            <span>State Bank of India (SBI)</span>
          </li>
          <li className="flex items-center mb-2">
            <img src="/bob-logo.png" alt="BOB Logo" className="w-8 h-8 mr-2" />
            <span>Bank of Baroda (BOB)</span>
          </li>
          <li className="flex items-center mb-2">
            <img src="/pnb-logo.png" alt="PNB Logo" className="w-8 h-8 mr-2" />
            <span>Punjab National Bank (PNB)</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;