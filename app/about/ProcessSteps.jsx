"use client";

import { useEffect, useRef } from "react";

export default function ProcessSteps() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.style.opacity = "1";
                  card.style.transform = "translateY(0)";
                }, index * 200);
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M38.5714 30V35.7143C38.5714 36.472 38.2704 37.1988 37.7346 37.7346C37.1988 38.2704 36.472 38.5714 35.7143 38.5714H30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M30 1.42871H35.7143C36.472 1.42871 37.1988 1.72973 37.7346 2.26555C38.2704 2.80136 38.5714 3.52809 38.5714 4.28585V10.0001"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M1.42871 10.0001V4.28585C1.42871 3.52809 1.72973 2.80136 2.26555 2.26555C2.80137 1.72973 3.52809 1.42871 4.28585 1.42871H10.0001"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.0001 38.5714H4.28585C3.52809 38.5714 2.80137 38.2704 2.26555 37.7346C1.72973 37.1988 1.42871 36.472 1.42871 35.7143V30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M32.8574 20.0001C32.8574 20.0001 27.1431 28.5715 20.0002 28.5715C12.8574 28.5715 7.14307 20.0001 7.14307 20.0001C7.14307 20.0001 12.8574 11.4287 20.0002 11.4287C27.1431 11.4287 32.8574 20.0001 32.8574 20.0001Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M20.0003 21.4286C20.7893 21.4286 21.4289 20.789 21.4289 20C21.4289 19.2111 20.7893 18.5715 20.0003 18.5715C19.2114 18.5715 18.5718 19.2111 18.5718 20C18.5718 20.789 19.2114 21.4286 20.0003 21.4286Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      image:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/our-mission-img.jpg",
      title: "Our Mission",
      description:
        "Delivering transformative digital solutions that elevate brands connections.",
    },
    {
      number: "02",
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
      image:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/our-vision-img.jpg",
      title: "Our Vision",
      description:
        "Shaping the future through innovative and impactful digital experiences.",
    },
    {
      number: "03",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M45.5999 6.59998H14.3999C13.6806 6.61973 12.9761 6.80847 12.3432 7.15095C11.7104 7.49343 11.167 7.98003 10.7571 8.5714L2.95709 19.3714C2.3779 20.1899 2.08865 21.1783 2.13523 22.1799C2.18182 23.1815 2.56157 24.1388 3.21423 24.9L26.6142 51.8571C27.0148 52.3733 27.5282 52.7911 28.115 53.0784C28.7018 53.3658 29.3465 53.5152 29.9999 53.5152C30.6533 53.5152 31.2981 53.3658 31.8849 53.0784C32.4717 52.7911 32.9851 52.3733 33.3857 51.8571L56.7857 24.9C57.4383 24.1388 57.8181 23.1815 57.8646 22.1799C57.9112 21.1783 57.622 20.1899 57.0428 19.3714L49.2428 8.5714C48.8328 7.98003 48.2895 7.49343 47.6566 7.15095C47.0238 6.80847 46.3192 6.61973 45.5999 6.59998V6.59998Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M27.7714 6.55713L17.3142 22.7571L29.9999 53.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M32.3571 6.55713L42.7714 22.7571L30 53.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M2.22852 22.7571H57.7714"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      image:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/our-value-img.jpg",
      title: "Our Value",
      description:
        "Integrity, creativity, innovation, collaboration, excellence, results.",
    },
  ];

  return (
    <section className="md:mb-20 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <p className="text-xs sm:text-sm uppercase text-white/60 tracking-wider mb-4 md:mb-6 font-medium">
              <span className="text-blue-400 text-base md:text-lg mr-2">✱</span>
              <span className="text-white/90">OUR APPROACH</span>
            </p>
            <h2 className="px-4 text-[30px] leading-[1.1] md:px-0 md:text-[48px] md:leading-tight font-jakarta">
              Crafting{" "}
              <span className="text-blue-400 font-bold">impactful</span> digital
              experiences
            </h2>
          </div>

          <div className="relative sibu lg:pt-16">
            <div className="relative z-10 px-4 md:px-0">
              <p className="text-lg text-white font-jakarta">
                We blend creativity, strategy, and technology to design digital
                experiences that connect, engage, and inspire. From concept to
                completion, we deliver tailored solutions that elevate brands
                and drive results.
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-[90%] mx-auto md:max-w-none">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                className="relative"
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  opacity: "0",
                  transform: "translateY(50px)",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div className="relative bg-[#151b1f] rounded-3xl p-8 shadow-lg overflow-hidden z-10 group hover:shadow-2xl hover:shadow-blue-400/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-3xl z-10">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute bottom-3 left-3 text-blue-400 p-2 rounded-lg  transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-400/20 group-hover:shadow-lg group-hover:shadow-blue-400/50">
                      <div className="transition-transform duration-300 group-hover:rotate-12">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 pb-4 relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-400">
                      {step.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 right-0 translate-x-[10%] translate-y-[25%] md:translate-x-1/4 md:translate-y-1/4 lg:translate-x-1/3 lg:translate-y-1/3 w-32 md:w-72 lg:w-88 opacity-60 pointer-events-none z-0 max-w-full overflow-hidden">
            <img
              src="/how-work-bg-shape.png"
              alt="Rotating Shape"
              className="animate-spin-slow max-w-full h-auto transition-opacity duration-1000 hover:opacity-80"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.6;
            transform: scale(1);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
