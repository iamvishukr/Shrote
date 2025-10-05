"use client";

import { useState } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      company: "Logoipsum",
      rating: 5,
      text: "The team transformed our brand's online presence with creativity and precision. Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.",
      author: "Sarah Mitchell",
      position: "Marketing Director",
      avatar:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/satisfy-client-img-1.jpg",
    },
    {
      id: 2,
      company: "TechCorp",
      rating: 5,
      text: "Outstanding service and exceptional results. Their innovative approach to our digital transformation project was exactly what we needed to stay competitive in the market.",
      author: "John Davis",
      position: "CEO",
      avatar:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/satisfy-client-img-2.jpg",
    },
    {
      id: 3,
      company: "StartupXYZ",
      rating: 5,
      text: "Professional, creative, and results-driven. They helped us establish a strong online presence from scratch and guided us through every step of the process.",
      author: "Emily Chen",
      position: "Founder",
      avatar:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/satisfy-client-img-3.jpg",
    },
    {
      id: 4,
      company: "StXYZ",
      rating: 5,
      text: "Professional, creative, and results-driven. They helped us establish a strong online presence from scratch and guided us through every step of the process.",
      author: "Emily Chen",
      position: "Founder",
      avatar:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/satisfy-client-img-4.jpg",
    },
    {
      id: 5,
      company: "YZ",
      rating: 5,
      text: "Professional, creative, and results-driven. They helped us establish a strong online presence from scratch and guided us through every step of the process.",
      author: "Emily Chen",
      position: "Founder",
      avatar:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/satisfy-client-img-5.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl md:text-2xl font-black ${
          i < rating ? "text-blue-400" : "text-white-600"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="bg-black text-white   px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col lg:flex-row  mb-8 md:mb-16">
          <div className="lg:w-1/2">
            <p className="text-xs sm:text-sm uppercase text-white/60 tracking-wider mb-4 md:mb-6 font-medium">
              <span className="text-blue-400 text-base md:text-lg mr-2">✱</span>
              <span className="text-white/90">TESTIMONIALS</span>
            </p>
            <h4 className="text-[3.5rem] sm:text-4xl md:text-[2.625rem] font-light leading-tight">
              Read what they have to say {" "}
              
              about{" "}
              <span className="text-blue-400 font-bold">working with us</span>
            </h4>
          </div>

          <div className="lg:w-1/2">
            <div className="px-3 md:px-0 py-2 md:py-4">
  <p className="text-base md:text-lg text-white mt-1 md:mt-6 leading-relaxed mb-3 md:mb-8">
    Discover how our clients have achieved success through our
    innovative solutions and dedicated support.
  </p>
</div>



            <div className="relative inline-flex items-center group">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base">
                All Testimonials
              </button>
              <span className="w-10 h-10 md:w-12 md:h-12 bg-blue-400 text-black rounded-full flex items-center justify-center group-hover:rotate-45 group-hover:bg-white transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="md:w-5 md:h-5"
                >
                  <path
                    d="M16.8569 9.67962L8.24994 18.2866L6.83594 16.8726L15.4419 8.26562H7.85694V6.26562H18.8569V17.2656H16.8569V9.67962Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

     
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
          
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-6 md:p-8 h-auto md:h-[400px]">
              <div className="text-center mb-4 md:mb-6">
                <div className="text-5xl md:text-7xl font-jakarta font-bold text-white">
                  4.9
                </div>

                <div className="flex justify-center font-bold gap-1 mb-3 md:mb-4">
                  {renderStars(5)}
                </div>

                <p className="text-white text-base md:text-lg">(40+ Reviews)</p>
              </div>
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-4">
                  Customer experiences that
                  <br className="hidden md:block" />
                  speak for themselves
                </h3>
              </div>
              <div className="flex justify-center">
                <div className="flex -space-x-2 md:-space-x-3 mt-4">
                  {testimonials.slice(0, 5).map((testimonial) => (
                    <img
                      key={testimonial.id}
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-800 bg-gray-700"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

      
          <div className="w-full lg:w-2/3">
            <div className="rounded-3xl p-4 sm:p-6 md:pr-8 md:pl-8 md:pt-8">
           
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">●</span>
                </div>
                <span className="text-white font-bold text-base md:text-lg">
                  {testimonials[currentTestimonial].company}
                </span>
              </div>

           
              <div className="flex justify-left font-bold gap-1 mb-3 md:mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

             
              <p className="text-white text-base md:text-xl font-bold leading-relaxed mb-6 md:mb-8">
                {testimonials[currentTestimonial].text}
              </p>

              
              <div className="flex items-center pt-2 md:pt-4 gap-3 md:gap-4">
                <img
                  src={
                    testimonials[currentTestimonial].avatar ||
                    "/placeholder.svg"
                  }
                  alt={testimonials[currentTestimonial].author}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-700"
                />
                <div>
                  <h4 className="text-white font-semibold text-base md:text-lg">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-white text-sm md:text-base">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>
            </div>

          
            <div className="flex gap-3 md:gap-4 justify-center md:justify-end mt-4 md:mt-0">
  <button
    onClick={prevTestimonial}
    className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 hover:bg-gray-700 rounded-xl md:rounded-2xl flex items-center justify-center transition-colors duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="text-white w-4 h-4 md:w-5 md:h-5"
    >
      <path
        d="M4.33214 7.98982H16.5042V9.98946H4.33276L9.69616 15.3529L8.28195 16.7671L0.503784 8.98896L8.28196 1.21078L9.69617 2.625L4.33214 7.98982Z"
        fill="currentColor"
      />
    </svg>
  </button>
  <button
    onClick={nextTestimonial}
    className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 hover:bg-gray-700 rounded-xl md:rounded-2xl flex items-center justify-center transition-colors duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="text-white w-4 h-4 md:w-5 md:h-5"
    >
      <path
        d="M13.6679 10.0102L1.49581 10.0102L1.49581 8.01054L13.6672 8.00982L8.30384 2.64642L9.71805 1.23221L17.4962 9.01038L9.71804 16.7886L8.30383 15.3743L13.6679 10.0102Z"
        fill="currentColor"
      />
    </svg>
  </button>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}