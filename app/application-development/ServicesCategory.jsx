import { ArrowUpRight } from "lucide-react";

export default function ServicesCategory() {
  const services = [
    "Branding And Identity",
    "Digital Marketing",
    "Creative Content Production",
    "Content Creation",
    "E-Commerce Solutions",
    "UX/UI Design",
  ];

  return (
    <div
  className="bg-gradient-to-b from-gray-900 to-black rounded-2xl 
  p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 
  w-full sm:max-w-sm md:max-w-2xl lg:max-w-lg xl:w-[400px] xxl:w-full 2xl:max-w-4xl
  shadow-lg hover:shadow-xl transition-shadow duration-300"
>


     
      <h2 className="text-blue-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold border-b border-gray-700 pb-2 sm:pb-3 mb-3 sm:mb-4">
        Services Category
      </h2>

      
      <ul className="space-y-2 sm:space-y-3">
        {services.map((service, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-2 py-3 sm:py-4 
              text-gray-300 border-b border-gray-800 last:border-none 
              group cursor-pointer transition-all duration-300 rounded-lg"
          >
            
            <span className="group-hover:text-blue-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium transition-colors duration-300 truncate pr-2">
              {service}
            </span>

            
            <ArrowUpRight
              size={20}
              className="text-[#F5F5F4] group-hover:text-blue-400 transform 
                group-hover:translate-x-0.5 group-hover:-translate-y-0.5 
                group-hover:rotate-45 transition-all duration-300 flex-shrink-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
