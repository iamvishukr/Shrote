import React from 'react';
import ChangePassword from './ChangePassword';
import TwoStepVerification from './TwoStepVerification';
import RecentDevices from './RecentDevices';

const SecurityContent = () => {
  return (
    <div className="flex flex-col space-y-4">
      <ChangePassword />
      <TwoStepVerification />
      <RecentDevices />
    </div>
  );
};

export default SecurityContent;
