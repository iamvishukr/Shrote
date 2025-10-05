import React from "react";

const partners = [
  {
    id: 1,
    name: "Logoipsum",
    logo: "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/company-logo-1.svg",
  },
  {
    id: 2,
    name: "Logoipsum",
    logo: "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/company-logo-2.svg",
  },
  {
    id: 3,
    name: "Logoipsum",
    logo: "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/company-logo-3.svg",
  },
  {
    id: 4,
    name: "Logoipsum",
    logo: "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/company-logo-3.svg",
  },
  {
    id: 5,
    name: "Logoipsum",
    logo: "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/company-logo-5.svg",
  },
  {
    id: 6,
    name: "Logoipsum",
    logo: "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/company-logo-1.svg",
  },
];

const ExecutivePartners = () => {
  return (
    <div className="bg-gray-900 text-white rounded-3xl p-4 md:p-8 md:mb-12 mx-4 sm:mx-12 md:mx-16">
      <div className="flex flex-col md:flex-row md:p-8 items-start md:items-center justify-between gap-8">
        
        <div className="flex flex-col gap-2 md:w-[40%]">
          
          <div className="inline-flex items-center gap-2 text-sm font-medium text-white mb-0 ">
            <span className="text-blue-400 text-lg">✱</span>Executive Partner
            
          </div>
          <h2 className="text-3xl sm:text-6xl">
            100+{" "}
            <span className="text-green-400 font-bold font-jakarta">
              partners
            </span>{" "}
            & supporters
          </h2>
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-[60%]">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-black rounded-xl p-4 flex flex-col items-center justify-center gap-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-[160px] h-auto sm:w-[200px] sm:h-auto md:w-[240px] md:h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutivePartners;
