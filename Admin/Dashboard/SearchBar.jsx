// SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search specific keywords only. Ex: Microbiology, Commonwealth..."
        className="w-2/3 p-2 border border-gray-300 rounded-l"
      />
      <button className="bg-green-500 text-white p-2 rounded-r">
        Search
      </button>
    </div>
  );
};

export default SearchBar;