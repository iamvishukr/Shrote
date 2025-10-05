"use client";

import { Diamond, TrendingUp, Palette } from "lucide-react";
import { BsLaptop, BsRocketTakeoff } from "react-icons/bs";



export default function Services() {
  
  const CustomRocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90"
    height="90"
    viewBox="0 0 60 60"
    fill="none"
    className="w-18 h-18"
  >
    <g transform="rotate(45, 30, 30)">
      
      <path
        d="M30 4C25 10 22 18 22 26C22 33 26 41 30 46C34 41 38 33 38 26C38 18 35 10 30 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      
      <circle
        cx="30"
        cy="22"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

     
      <path
        d="M22 36L16 44L24 42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 36L44 44L36 42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      
      <path
        d="M26 48C27 52 33 52 34 48C33 50 27 50 26 48Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  </svg>
);

const CustomLaptopIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90"
    height="90"
    viewBox="0 0 60 60"
    fill="none"
    className="w-18 h-18"
  >
   
    <rect
      x="12"
      y="12"
      width="36"
      height="24"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />

    
    <rect
      x="14"
      y="14"
      width="32"
      height="20"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />

    
    <path
      d="M8 40H52L56 48H4L8 40Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

   
    <rect
      x="26"
      y="43"
      width="8"
      height="3"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);


  
  const CustomRavelryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90"
    height="90"
    viewBox="0 0 60 60"
    fill="none"
    className="w-18 h-18"
  >
   
    <circle
      cx="30"
      cy="30"
      r="20"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />

   
    <path
      d="M18 24C22 20 38 20 42 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16 30C22 26 38 26 44 30"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M18 36C22 40 38 40 42 36"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    
    <path
      d="M40 44C46 38 48 28 42 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const CustomServerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 60 60"
    fill="none"
    className="w-18 h-18"
  >
   
    <rect
      x="10" y="10" width="40" height="12" rx="3"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"
    />
    <circle cx="16" cy="16" r="1.6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="21" cy="16" r="1.6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path
      d="M28 14H46M28 18H38"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    />

    
    <rect
      x="10" y="24" width="40" height="12" rx="3"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"
    />
    <circle cx="16" cy="30" r="1.6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="21" cy="30" r="1.6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path
      d="M28 28H46M28 32H38"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    />

    
    <rect
      x="10" y="38" width="40" height="12" rx="3"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"
    />
    <circle cx="16" cy="44" r="1.6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="21" cy="44" r="1.6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path
      d="M28 42H46M28 46H38"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    />

    
    <path
      d="M10 22H50M10 36H50"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    />
  </svg>
);
const CustomEcommerceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 60 60"
    fill="none"
    className="w-18 h-18"
  >
    
    <path
      d="M12 16H48L42 40H18L12 16Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    
    <path
      d="M12 16L8 8H4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    
    <circle
      cx="20"
      cy="44"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="40"
      cy="44"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />

    
    <path
      d="M18 24H42"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 32H42"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const CustomSEOSearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90"
    height="90"
    viewBox="0 0 60 60"
    fill="none"
    className="w-18 h-18"
  >
    
    <circle
      cx="24"
      cy="24"
      r="14"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />

    
    <path
      d="M34 34L42 42"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

   
    <rect x="20" y="22" width="2" height="8" fill="currentColor" />
    <rect x="24" y="18" width="2" height="12" fill="currentColor" />
    <rect x="28" y="26" width="2" height="4" fill="currentColor" />

    
    <path
      d="M18 30L24 24L28 28"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);



  const services = [
    {
      icon: <CustomLaptopIcon/>,
      title: "Web Development",
      description:
        "A professional website scoped-out correctly translates measurable results.",
    },
    {
      icon: <CustomRocketIcon />,
      title: "Application Development",
      description:
        "We have solution for most dynamic and complex application that runs business.",
    },
    {
      icon: <CustomRavelryIcon />,
      title: "Portal Development",
      description:
        "We convert versatile shopping cart into an online super store for your business.",
    },
    {
      icon: <CustomServerIcon />,
      title: "Software Development",
      description:
        "Creative ideas addressing their expectations planned strategically",
    },
    {
      icon: <CustomEcommerceIcon />,
      title: "E-commerce Solution",
      description:
        "Transforming your idea into an engaging shopping experience.",
    },
    {
      icon: <CustomSEOSearchIcon />,
      title: "SEO & SEM",
      description:
        "Leverage the SEO Insights to Engage with Right targeted Audience",
    },
  ];

  return (
    <section id="services"  className=" md:mt-8  w-full">
      <div className="w-full px-4 sm:px-6 md:px-8">
        

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 md:p-[40px] border border-solid border-gray-700 overflow-visible"
              style={{
                "--overlay-opacity": "0.4",
                "--border-radius": "30px",
                "--padding-top": "40px",
                "--padding-bottom": "40px",
                "--padding-left": "40px",
                "--padding-right": "40px",
              }}
            >
              <div className="absolute inset-0 rounded-[30px] bg-blue-400  opacity-0 group-hover:opacity-[0.4] transition-opacity duration-300 z-0"></div>

              <div className="relative z-10 group">
                <div className="flex justify-between items-start mb-6 sm:mb-8 group">
                  <div className="text-blue-400 dsa text-[70px] w-10 h-10 sm:w-12 sm:h-12">
                    {service.icon}
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-transparent flex items-center justify-center rounded-full transition-all duration-300 group-hover:w-12 sm:group-hover:w-14 group-hover:h-12 sm:group-hover:h-14 group-hover:bg-white">
                    <svg
                      className="w-6 h-6 text-blue-400 transition-transform duration-300 rotate-45 group-hover:rotate-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17l9.2-9.2M17 17V7H7"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl pt-8 md:pt-12 font-bold mb-3 sm:mb-4 text-white">
                  {service.title}
                </h3>
                <p className="edem sm:text-base leading-relaxed" >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
}
