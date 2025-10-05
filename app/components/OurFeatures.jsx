import { ArrowUpRight } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-black text-white py-6 md:py-16 lg:py-16 px-8">
      <div className="max-w-8xl mx-auto">
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-400  md:mb-0  lg:mb-0">
            <span className="text-blue-400 text-lg lg:mr-2">✱ FEATURES</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-16">
          <div className="lg:w-1/2 dsdd">
            <h2 className="text-2xl  md:text-6xl font-light leading-tight">
              Innovative{" "}
              <span className="text-blue-400 font-bold">features</span> for your
              digital success
            </h2>
          </div>

          <div className="lg:w-1/2 lg:pt-4 ">
            <p className="text-xl text-white leading-relaxed dsddd mb-8">
              Our digital services empower brands with innovative strategies and
              solutions for sustainable growth and engagement.
            </p>

            <div className="flex items-center gap-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200">
                Learn More
              </button>
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 cursor-pointer group">
                <ArrowUpRight className="w-6 h-6 text-black transition-transform duration-200 group-hover:rotate-45" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-8 -mx-4 md:mx-0">
         
          <div
            className="md:basis-3/5 w-full bg-gray-900/50 backdrop-blur-sm 
                  rounded-2xl md:rounded-3xl 
                  p-4 sm:p-6 md:p-8 
                  border border-gray-800/50 hover:border-gray-700/50 
                  transition-all duration-300 group"
          >
            <div className="mb-4 md:mb-6 overflow-hidden rounded-xl md:rounded-2xl">
              <img
                src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-1.jpg"
                alt="Professional business team"
                className="w-full h-44 sm:h-44 md:h-64  object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-4 md:mb-4 text-white">
              Custom Branding Solutions
            </h3>
            <p className="text-white leading-relaxed text-sm sm:text-base md:text-[1rem]">
              Unique brand identity development, including logos, color
              palettes.
            </p>
          </div>

          
          <div
            className="md:basis-2/6 w-full bg-gray-900/50 backdrop-blur-sm 
             rounded-2xl md:rounded-3xl 
             p-4 sm:p-6 md:px-8 md:pt-2  
             border border-gray-800/50 hover:border-gray-700/50 
             transition-all duration-300 group"
          >
            <div className="mb-4 md:mb-6 p-2 sm:p-4 md:p-6 overflow-hidden rounded-xl md:rounded-2xl">
              <img
                src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/digital-features-img-2.jpg"
                alt="Women working on laptop"
                className="w-full rounded-3xl h-44 sm:h-44 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">
              Data-Driven Digital Marketing
            </h3>
            <p className="text-white leading-relaxed text-sm sm:text-base md:text-[1rem]">
              Strategies combining SEO, PPC, content marketing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
