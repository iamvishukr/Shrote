import React from 'react';
import UserProfile from './UserProfile';
import SecuritySettings from './SecuritySettings';

function AdrressCard() {
  return (
    <div className='md:-mt-[10px]'>
      {/* Desktop Layout */}
      <div className="hidden md:flex gap-4 mt-2 ">
        <div className="w-[400px]">
          <UserProfile />
        </div>
        <div className="w-[500px]">
          <SecuritySettings /> {/* Use SecuritySettings here */}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden space-y-4">
        <SecuritySettings /> {/* Tabs will still work on mobile */}
        <UserProfile />
      </div>
    </div>
  );
}

export default AdrressCard;
