import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { BriefcaseBusiness, SquareCheckBig } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="max-w-sm bg-white rounded-[10px] shadow p-6">
  {/* Profile Header */}
  <div className="flex flex-col items-center mb-6">
    <div className="w-32 h-32 font-medium mt-4 rounded-[10px] overflow-hidden mb-3">
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQGOEOhBv69Qnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732119841139?e=2147483647&v=beta&t=Q26v2UHMS6whoDJ28jTVDIVR01JsBKOyTF9X_cVaVpE"
        alt="User Profile"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="text-center">
      <h2 className="text-[18px] text-gray-600 mb-[12px]">Violet Mendoza</h2>
      <span className="text-gray-500 bg-gray-200 rounded-[5px] px-2 py-1  text-sm">Author</span>
    </div>
  </div>

  {/* Task & Project Info */}
  <div className="flex flex-col items-center mb-6">
  {/* First Row */}
  <div className="flex items-center gap-3 mb-4">
    <SquareCheckBig
      className="text-violet-500 bg-violet-100 p-2 rounded"
      size={40}
    />
    <div className="leading-tight">
      <div className="text-[18px] text-gray-600 font-semibold">1.23k</div>
      <div className="text-gray-500 text-[15px] font-medium">Task Done</div>
    </div>
  </div>

  {/* Second Row (Updated to match first row) */}
  <div className="flex items-center gap-3 ml-4 mb-4">
    <BriefcaseBusiness
      className="text-violet-500 bg-violet-100 p-2 rounded"
      size={40}
    />
    <div className="leading-tight">
      <div className="text-[18px] text-gray-600 font-semibold">568</div>
      <div className="text-gray-500 text-[15px] font-medium">Project Done</div>
    </div>
  </div>
</div>



  {/* User Details */}

  <h5 className='text-gray-600'> Details</h5>
  <hr/>
  <div className="space-y-2 mb-6">
    <p className="text-[15px] text-gray-500"><strong>Username:</strong> @violet.dev</p>
    <p className="text-[15px] text-gray-500"><strong>Email:</strong> vafgot@vultukir.org</p>
    <p className="text-[15px] text-gray-500"><strong>Status:</strong> Active</p>
    <p className="text-[15px] text-gray-500"><strong>Role:</strong> Author</p>
    <p className="text-[15px] text-gray-500"><strong>Tax id:</strong> Tax-8965</p>
    <p className="text-[15px] text-gray-500"><strong>Contact:</strong> (123) 456-7890</p>
    <p className="text-[15px] text-gray-500"><strong>Languages:</strong> French</p>
    <p className="text-[15px] text-gray-500"><strong>Country:</strong> England</p>
  </div>

  {/* Action Buttons */}
  <div className="flex items-center justify-center space-x-4">
  <button className="px-4 py-2 text-white bg-[#7367F0] font-badboy font-medium text-[15px] rounded hover:bg-green-600 focus:outline-none">
    Edit
  </button>
  <button className="px-4 py-2 text-red-500 font-badboy font-medium rounded bg-red-200 text-[15px] rounded-md hover:bg-red-600 focus:outline-none">
    Suspend
  </button>
</div>

</div>

  );
};

export default UserProfile;
