import React from "react";
import { Chrome, Smartphone } from "lucide-react"; // using lucide-react icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons"; // Apple logo
import { faWindows } from "@fortawesome/free-brands-svg-icons";

const devices = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon icon={faWindows} className="text-blue-500 text-lg" />
    ),
    browser: "Chrome on Windows",
    device: "HP Spectre 360",
    location: "Switzerland",
    activity: "10, July 2021 20:07",
  },
  {
    id: 2,
    icon: <Smartphone className="w-5 h-5 text-red-500" />,
    browser: "Chrome on iPhone",
    device: "iPhone 12x",
    location: "Australia",
    activity: "13, July 2021 10:10",
  },
  {
    id: 3,
    icon: <Smartphone className="w-5 h-5 text-green-500" />,
    browser: "Chrome on Android",
    device: "Oneplus 9 Pro",
    location: "Dubai",
    activity: "14, July 2021 15:15",
  },
  {
    id: 4,
    icon: (
      <FontAwesomeIcon
        icon={faApple}
        size="2x" // options: "xs", "sm", "lg", "1x", "2x", "3x", "5x", "7x", "10x"
        className="text-gray-500"
      />
    ),
    browser: "Chrome on MacOS",
    device: "Apple iMac",
    location: "India",
    activity: "16, July 2021 16:17",
  },
];

const RecentDevices = () => {
  return (
    <div className="bg-white w-full sm:w-[670px] shadow mt-4 p-6 sm:p-6 rounded-[8px] overflow-hidden min-h-[350px] sm:min-h-[auto]">
      <h2 className="text-lg font-semibold text-gray-600 mb-4">
        Recent Devices
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b border-gray-200">
              <th className="pb-3 font-medium">BROWSER</th>
              <th className="pb-3 font-medium">DEVICE</th>
              <th className="pb-3 font-medium">LOCATION</th>
              <th className="pb-3 font-medium">RECENT ACTIVITIES</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((d) => (
              <tr key={d.id} className="border-b border-gray-200 last:border-0">
                <td className="py-3 flex items-center space-x-2 min-w-[120px]">
                  {d.icon}
                  <span className="text-gray-700 text-sm font-medium">{d.browser}</span>
                </td>
                <td className="py-3 text-gray-700 text-sm min-w-[100px]">{d.device}</td>
                <td className="py-3 text-gray-700 text-sm min-w-[100px]">{d.location}</td>
                <td className="py-3 text-gray-700 text-sm min-w-[140px]">{d.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default RecentDevices;
