// FiltersSidebar.jsx
import React from 'react';

const FiltersSidebar = () => {
  return (
    <aside className="w-1/4 p-4">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2">Nationality</label>
        <select className="w-full p-2 border border-gray-300 rounded">
          <option>Select Country</option>
          {/* Add more options here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">I'm looking for</label>
        <select className="w-full p-2 border border-gray-300 rounded">
          <option>Select Degree</option>
          {/* Add more options here */}
        </select>
      </div>
      {/* Add more filter options here */}
    </aside>
  );
};

export default FiltersSidebar;