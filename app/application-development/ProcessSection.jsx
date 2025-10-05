import { Database, Layers, Users } from "lucide-react";

export default function ProcessSection() {
  const processes = [
    {
      step: "01",
      title: "Discovery Phase",
      description:
        "Initial consultation to understand your business goals. We learn about your target audience, competitors, and current marketing efforts. Conducting research.",
      image:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/service-process-step-1.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M9.28585 17.1429C13.6252 17.1429 17.143 13.6251 17.143 9.28573C17.143 4.94635 13.6252 1.42859 9.28585 1.42859C4.94647 1.42859 1.42871 4.94635 1.42871 9.28573C1.42871 13.6251 4.94647 17.1429 9.28585 17.1429Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M30.7146 17.1429C35.0539 17.1429 38.5717 13.6251 38.5717 9.28573C38.5717 4.94635 35.0539 1.42859 30.7146 1.42859C26.3752 1.42859 22.8574 4.94635 22.8574 9.28573C22.8574 13.6251 26.3752 17.1429 30.7146 17.1429Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9.28585 38.5715C13.6252 38.5715 17.143 35.0537 17.143 30.7143C17.143 26.3749 13.6252 22.8572 9.28585 22.8572C4.94647 22.8572 1.42871 26.3749 1.42871 30.7143C1.42871 35.0537 4.94647 38.5715 9.28585 38.5715Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M30.7146 38.5715C35.0539 38.5715 38.5717 35.0537 38.5717 30.7143C38.5717 26.3749 35.0539 22.8572 30.7146 22.8572C26.3752 22.8572 22.8574 26.3749 22.8574 30.7143C22.8574 35.0537 26.3752 38.5715 30.7146 38.5715Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      step: "02",
      title: "Implementation",
      description:
        "Initial consultation to understand your business goals. We learn about your target audience, competitors, and current marketing efforts. Conducting research.",
      image:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/service-process-step-2.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="39"
          viewBox="0 0 40 39"
          fill="none"
        >
          <path
            d="M21.5145 19.1904C21.0907 19.3744 20.6336 19.4693 20.1716 19.4693C19.7096 19.4693 19.2525 19.3744 18.8287 19.1904L2.54303 11.6475C2.27858 11.5141 2.05634 11.3099 1.90106 11.0577C1.74579 10.8055 1.66357 10.5151 1.66357 10.2189C1.66357 9.9227 1.74579 9.6324 1.90106 9.3801C2.05634 9.1279 2.27858 8.92374 2.54303 8.79035L18.8287 1.19035C19.2525 1.00633 19.7096 0.911377 20.1716 0.911377C20.6336 0.911377 21.0907 1.00633 21.5145 1.19035L37.8002 8.73321C38.0646 8.86659 38.2869 9.0708 38.4421 9.323C38.5974 9.5752 38.6796 9.8656 38.6796 10.1618C38.6796 10.458 38.5974 10.7483 38.4421 11.0006C38.2869 11.2528 38.0646 11.457 37.8002 11.5904L21.5145 19.1904Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M38.743 20.4761L21.3144 28.5046C20.9422 28.6744 20.5378 28.7623 20.1287 28.7623C19.7195 28.7623 19.3152 28.6744 18.943 28.5046L1.6001 20.4761"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M38.743 29.7618L21.3144 37.7903C20.9422 37.9601 20.5378 38.048 20.1287 38.048C19.7195 38.048 19.3152 37.9601 18.943 37.7903L1.6001 29.7618"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      step: "03",
      title: "Collaboration",
      description:
        "Initial consultation to understand your business goals. We learn about your target audience, competitors, and current marketing efforts. Conducting research.",
      image:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/service-process-step-3.jpg",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20.0006 15.7143C30.2573 15.7143 38.5721 12.5163 38.5721 8.57145C38.5721 4.62656 30.2573 1.42859 20.0006 1.42859C9.74391 1.42859 1.4292 4.62656 1.4292 8.57145C1.4292 12.5163 9.74391 15.7143 20.0006 15.7143Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M1.4292 8.57141V31.4286C1.4292 35.3714 9.74349 38.5714 20.0006 38.5714C30.2578 38.5714 38.5721 35.3714 38.5721 31.4286V8.57141"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M38.5721 20C38.5721 23.9429 30.2578 27.1429 20.0006 27.1429C9.74349 27.1429 1.4292 23.9429 1.4292 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
  
  <div className="mb-12 md:mb-16 text-center lg:text-left">
    <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold mb-4 md:mb-6 leading-snug">
      Our <span className="text-blue-400">process</span> of digital marketing
    </h2>
    <p className="text-[#F5F5F4] text-[16px] font-jakarta leading-relaxed max-w-4xl mx-auto lg:mx-0">
      Our digital marketing process integrates with discovery and research from
      understanding your goals. We learn about your target audience, competitors,
      and current marketing efforts. Then we develop a customized strategy that
      aligns with your business objectives. Our collaborative approach ensures
      transparency and keeps you informed throughout the entire process, while our
      data-driven methods focus on delivering measurable results for sustainable
      growth and success.
    </p>
  </div>


  <div className="space-y-12 md:space-y-16">
    {processes.map((process, index) => (
      <div
        key={process.step}
        className={`flex flex-col mb-[80px] md:mb-0 ${
          index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-8 lg:gap-14`}
      >
      
        <div className="flex-1 w-full border  border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 bg-black/40">
          <div className="flex items-center justify-between  gap-4">
            <span className="text-blue-400 text-2xl md:text-3xl">
              {process.icon}
            </span>
            <div className="flex flex-col text-right">
              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                STEP
              </span>
              <span className="text-blue-400 font-bold text-xl sm:text-2xl md:text-3xl">
                {process.step}
              </span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            {process.title}
          </h3>

          <p className="text-[#F5F5F4] text-sm sm:text-base md:text-lg leading-relaxed">
            {process.description}
          </p>
        </div>

        
        <div className="flex-1  w-full">
          <div className="relative mt-8 md:mt-0 overflow-hidden rounded-2xl shadow-lg">
            <img
              src={process.image || "/placeholder.svg"}
              alt={process.title}
              className="w-full h-56 sm:h-64 md:h-80 lg:h-[420px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
