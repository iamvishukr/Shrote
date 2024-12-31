// ScholarshipList.jsx
import React from 'react';

const ScholarshipCard = ({ title, deadline, eligibleDegrees, fundingType }) => (
  <div className="border border-gray-300 rounded p-4 mb-4">
    <h3 className="text-lg font-bold">{title}</h3>
    <div className="flex justify-between mt-2">
      <div>
        <p>Eligible Degrees: {eligibleDegrees}</p>
        <p>Funding Type: {fundingType}</p>
      </div>
      <div>
        <p className="text-green-500">Deadline: {deadline}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
          View & Apply
        </button>
      </div>
    </div>
  </div>
);

const ScholarshipList = () => {
  const scholarships = [
    {
      title: "Education Future International Scholarship - USA & Non-USA 2024",
      deadline: "ASAP",
      eligibleDegrees: "Bachelors, Masters",
      fundingType: "Partial Funding"
    },
    // Add more scholarship objects here
  ];

  return (
    <div className="w-1/2 p-4">
      <h2 className="text-xl font-bold mb-4">Study Abroad Scholarships For International Students</h2>
      {scholarships.map((scholarship, index) => (
        <ScholarshipCard key={index} {...scholarship} />
      ))}
    </div>
  );
};

export default ScholarshipList;