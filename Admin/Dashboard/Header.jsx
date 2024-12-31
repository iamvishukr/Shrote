// Header.jsx
import React from 'react';
// import Logo from './Logo';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      {/* <Logo /> */}
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/scholarships" className="text-blue-600">Scholarships</a></li>
          <li><a href="/edu-loans" className="text-gray-600">Edu loans</a></li>
          <li><a href="/more" className="text-gray-600">More</a></li>
        </ul>
      </nav>
      <div className="flex items-center">
        <img src="/user-avatar.png" alt="User avatar" className="w-8 h-8 rounded-full" />
        <span className="ml-2">▼</span>
      </div>
    </header>
  );
};

export default Header;