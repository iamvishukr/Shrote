"use client";

import React from "react";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Low Cost",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="40"
          viewBox="0 0 37 40"
          fill="none"
          className="w-12 h-12 text-blue-400"
        >
          <path
            d="M18.5 28.5278V31.4135"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M18.5 14.2134V16.8991"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M18.5002 38.4422C28.5002 38.4422 35.6431 34.8993 35.6431 27.0136C35.6431 18.4422 31.3574 12.7279 22.7859 8.44219L26.1574 4.09933C26.3287 3.81439 26.4216 3.48923 26.4267 3.15681C26.4318 2.8244 26.3489 2.49654 26.1865 2.20647C26.024 1.9164 25.7878 1.67443 25.5017 1.50508C25.2156 1.33574 24.8898 1.24504 24.5574 1.24219H12.4431C12.1106 1.24504 11.7849 1.33574 11.4988 1.50508C11.2127 1.67443 10.9764 1.9164 10.814 2.20647C10.6516 2.49654 10.5687 2.8244 10.5738 3.15681C10.5789 3.48923 10.6718 3.81439 10.8431 4.09933L14.2145 8.47076C5.64313 12.785 1.35742 18.4993 1.35742 27.0708C1.35742 34.8993 8.50024 38.4422 18.5002 38.4422Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M15.6435 27.2135C15.9921 27.6273 16.4308 27.9558 16.9261 28.1737C17.4214 28.3916 17.96 28.4932 18.5006 28.4706C19.3269 28.527 20.1429 28.2607 20.7769 27.7279C21.411 27.1951 21.8138 26.4372 21.9006 25.6135C21.8138 24.7898 21.411 24.0319 20.7769 23.4991C20.1429 22.9663 19.3269 22.7 18.5006 22.7564C17.6743 22.8127 16.8583 22.5464 16.2243 22.0136C15.5902 21.4808 15.1874 20.7229 15.1006 19.8992C15.1804 19.0727 15.5813 18.3104 16.217 17.7762C16.8527 17.2419 17.6727 16.9784 18.5006 17.0421C19.0317 17.0096 19.5634 17.0952 20.0574 17.2928C20.5515 17.4904 20.9956 17.7951 21.3577 18.1849"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      benefits: ["Competitive fee", "Flexible rates"],
    },
    {
      id: 2,
      title: "Permission Less",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="40"
          viewBox="0 0 39 40"
          fill="none"
          className="w-12 h-12 text-blue-400"
        >
          <path
            d="M36.3859 15.6138H2.61447C1.01447 15.6138 0.328755 13.8709 1.5859 13.0423L18.4716 1.98518C18.7833 1.80179 19.1384 1.70508 19.5001 1.70508C19.8618 1.70508 20.217 1.80179 20.5287 1.98518L37.4144 13.0423C38.6716 13.8709 37.9859 15.6138 36.3859 15.6138Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M36.643 31.3281H2.35728C1.5683 31.3281 0.928711 31.9677 0.928711 32.7567V37.0424C0.928711 37.8314 1.5683 38.471 2.35728 38.471H36.643C37.4319 38.471 38.0715 37.8314 38.0715 37.0424V32.7567C38.0715 31.9677 37.4319 31.3281 36.643 31.3281Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M5.21436 15.6138V31.3281"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.3569 15.6138V31.3281"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19.5 15.6138V31.3281"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M26.6431 15.6138V31.3281"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M33.7856 15.6138V31.3281"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      benefits: ["Open for integration", "Run your own nodes"],
    },
    {
      id: 3,
      title: "Secure Data",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="39"
          viewBox="0 0 40 39"
          fill="none"
          className="w-12 h-12 text-blue-400"
        >
          <path
            d="M35.5617 3.93506L25.8188 13.6779"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4.13281 3.93506L13.8757 13.6779"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4.13281 35.364L13.8757 25.6211"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M35.5617 35.364L25.8188 25.6211"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19.8473 38.221C30.104 38.221 38.4187 29.9063 38.4187 19.6496C38.4187 9.39281 30.104 1.07812 19.8473 1.07812C9.5906 1.07812 1.27588 9.39281 1.27588 19.6496C1.27588 29.9063 9.5906 38.221 19.8473 38.221Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19.8475 28.0783C24.5025 28.0783 28.2761 24.3047 28.2761 19.6498C28.2761 14.9948 24.5025 11.2212 19.8475 11.2212C15.1925 11.2212 11.4189 14.9948 11.4189 19.6498C11.4189 24.3047 15.1925 28.0783 19.8475 28.0783Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      benefits: ["Open source sheet", "360 Security"],
    },
    {
      id: 4,
      title: "24 X 7 Support",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="w-12 h-12 text-blue-400"
        >
          <path
            d="M12.8574 21.3281H10.0002C8.42225 21.3281 7.14307 22.6073 7.14307 24.1853V35.6138C7.14307 37.1918 8.42225 38.471 10.0002 38.471H12.8574C14.4353 38.471 15.7145 37.1918 15.7145 35.6138V24.1853C15.7145 22.6073 14.4353 21.3281 12.8574 21.3281Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M29.9999 21.3281H27.1428C25.5648 21.3281 24.2856 22.6073 24.2856 24.1853V35.6138C24.2856 37.1918 25.5648 38.471 27.1428 38.471H29.9999C31.5779 38.471 32.8571 37.1918 32.8571 35.6138V24.1853C32.8571 22.6073 31.5779 21.3281 29.9999 21.3281Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M1.42871 27.0424V19.8996C1.42871 14.9741 3.38534 10.2504 6.86816 6.76758C10.351 3.28476 15.0747 1.32813 20.0001 1.32812C24.9256 1.32813 29.6493 3.28476 33.1321 6.76758C36.6149 10.2504 38.5716 14.9741 38.5716 19.8996V27.0424"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      benefits: ["Toll free number", "Ticket systems"],
    },
  ];

  return (
   <section className="py-8 md:py-16 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-xl md:rounded-3xl overflow-hidden border border-gray-800/50 backdrop-blur-sm bg-gray-900/10">
      {features.map((feature, index) => (
        <div 
          key={feature.id} 
          className="relative group bg-[#121212] py-6 md:py-8 pl-6 md:pl-8 transition-colors duration-300 border-b sm:border-b-0 border-gray-800/50 last:border-b-0"
        >
          
          <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
            
           
            <div className="mb-4 text-blue-400 md:mb-6">
              {React.cloneElement(feature.icon, {
                className: "w-8 h-8 md:w-10 md:h-10" // Adjust icon size for mobile
              })}
            </div>

           
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6">
              {feature.title}
            </h3>

           
            <ul className="space-y-2 -ml-9 md:space-y-4">
              {feature.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex} className="flex items-start gap-2">
                  <span className="text-blue-400 text-base md:text-lg mt-0.5">✱</span>
                  <span className="text-white text-base md:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

         
          {index < features.length - 1 && (
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 h-24 md:h-36 w-px bg-gray-800/50"></div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
