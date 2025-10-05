"use client";

import { useState, useEffect, useRef } from "react";

const WhoWeAre = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    awards: 0,
    partners: 0,
    users: 0,
  });

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Reduced threshold for mobile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      customers: 35000,
      awards: 120,
      partners: 250,
      users: 5000,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        current = Math.min(Math.floor(increment * step), target);
        setCounters((prev) => ({ ...prev, [key]: current }));

        if (step >= steps) {
          clearInterval(intervals.find((interval) => interval === this));
        }
      }, stepDuration);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [isVisible]);

  const formatNumber = (num, suffix) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}k${suffix}`;
    }
    return `${num}${suffix}`;
  };

  const openVideoPopup = () => {
    setIsVideoOpen(true);
  };

  const closeVideoPopup = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-black text-white py-12 px-4 lg:px-12 lg:mb-20 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-5 opacity-0"
            }`}
          >
            <div className="space-y-4 ">
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-blue-400 text-base">✱</span>
                <span className="text-gray-300 uppercase tracking-wider">
                  WHO WE ARE
                </span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-jakarta">
                Experts in{" "}
                <span className="text-blue-400 font-bold">digital</span> brand
                innovation
              </h1>

              <p className="text-[#F5F5F4] font-jakarta text-sm lg:text-base">
                We specialize in transforming brands through cutting-edge
                digital strategies, blending creativity with technology to drive
                growth, enhance engagement, and deliver memorable experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-6">
              <div
                className="relative group  cursor-pointer w-full sm:w-auto"
                onClick={openVideoPopup}
              >
                <div className="relative w-full  h-48 sm:w-80 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/experts-rating-video-bg.jpg"
                    alt="Digital strategy meeting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0  bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="
            relative isolate overflow-visible
            w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-400
            flex items-center justify-center
            group-hover:scale-110 transition-transform duration-300 shadow-lg
            text-white
            before:content-[''] before:absolute before:inset-0 before:rounded-full
            before:bg-current before:opacity-30
            before:animate-ping before:[animation-duration:2s] before:[animation-delay:.2s]
            before:pointer-events-none before:z-0
            after:content-[''] after:absolute after:inset-0 after:rounded-full
            after:bg-current after:opacity-30
            after:animate-ping after:[animation-duration:3s] after:[animation-delay:.8s]
            after:pointer-events-none after:z-0
          "
                    >
                      <svg
                        className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-black ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex  flex-col items-start justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-8 h-8 sm:w-5 sm:h-5 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#F5F5F4] font-jakarta text-sm">
                    (40+ Reviews)
                  </p>

                  <div className="flex -space-x-2">
                    {[
                      "https://randomuser.me/api/portraits/women/44.jpg",
                      "https://randomuser.me/api/portraits/men/46.jpg",
                      "https://randomuser.me/api/portraits/women/68.jpg",
                      "https://randomuser.me/api/portraits/men/21.jpg",
                      "https://randomuser.me/api/portraits/men/22.jpg",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Customer ${i + 1}`}
                        className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border-2 border-black object-cover"
                      />
                    ))}
                  </div>
                </div>

                <button className="text-blue-400 px-4  sm:px-6 sm:py-3 rounded-full font-bold transition-colors duration-300 flex items-center gap-2 group text-2xl sm:text-base">
                  Contact Now
                  <div className="group inline-flex items-center justify-center rounded-lg cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform rotate-[45deg] transition-transform duration-500 group-hover:rotate-0"
                      width="30"
                      height="30"
                      viewBox="0 0 35 35"
                      fill="currentColor"
                    >
                      <path d="M23.6144 13.8266L11.4211 26.0199L9.41797 24.0167L21.6098 11.8234H10.8644V8.99011H26.4477V24.5734H23.6144V13.8266Z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transform transition-all duration-1000 delay-300">
            <div className="relative sm:-mt-16 sm:mr-8 sm:translate-x-3">
              <div className="mb-6 manu sm:mb-12 rounded-2xl sm:rounded-3xl p-4 flex flex-col items-start space-y-4 sm:space-y-6 hover:bg-gray-800 transition-colors duration-300 group">
                <div className="flex w-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full group-hover:text-white transition-colors duration-300 ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="36"
                      viewBox="0 0 39 40"
                      fill="none"
                      className="text-blue-400 group-hover:text-white transition-colors duration-300"
                    >
                      <path
                        d="M13.6385 13.9868C17.1889 13.9868 20.0671 11.1086 20.0671 7.55821C20.0671 4.00781 17.1889 1.12964 13.6385 1.12964C10.0881 1.12964 7.20996 4.00781 7.20996 7.55821C7.20996 11.1086 10.0881 13.9868 13.6385 13.9868Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.2098 35.4153H0.78125V31.1296C0.80399 28.9518 1.37833 26.8154 2.4506 24.9198C3.52288 23.0242 5.05811 21.4313 6.91289 20.2899C8.76768 19.1485 10.8815 18.4958 13.0569 18.3928C15.2323 18.2898 17.3984 18.7399 19.3527 19.701"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.3525 21.1296V38.2725"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.7812 29.7009H37.9241"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <div className="flex items-end space-x-2">
                    <span className="text-4xl sm:text-5xl font-bold text-blue-400">
                      {formatNumber(counters.customers, "+")}
                    </span>
                  </div>
                  <h3 className="text-gray-300 text-base sm:text-lg mt-2">
                    Happy Customer Around the Word
                  </h3>
                </div>
              </div>

              <div className="mb-6 manu sm:mb-12 rounded-2xl sm:rounded-3xl p-4 flex flex-col items-start space-y-4 sm:space-y-6 transition-colors duration-300 group">
                <div className="flex w-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full group-hover:text-white transition-colors duration-300 ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 39 37"
                      fill="none"
                      className="text-blue-400 group-hover:text-white transition-colors duration-300"
                    >
                      <path
                        d="M13.6385 13.8437C17.1889 13.8437 20.0671 10.9656 20.0671 7.41518C20.0671 3.86474 17.1889 0.986572 13.6385 0.986572C10.0881 0.986572 7.20996 3.86474 7.20996 7.41518C7.20996 10.9656 10.0881 13.8437 13.6385 13.8437Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.4955 35.2722H0.78125V32.415C0.78125 29.0051 2.13584 25.7349 4.54702 23.3237C6.9582 20.9125 10.2285 19.5579 13.6384 19.5579C17.0483 19.5579 20.3186 20.9125 22.7298 23.3237C25.1409 25.7349 26.4955 29.0051 26.4955 32.415V35.2722Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.0669 0.986572C26.7719 0.986572 28.407 1.66387 29.6126 2.86946C30.8182 4.07505 31.4955 5.71018 31.4955 7.41518C31.4955 9.12008 30.8182 10.7553 29.6126 11.9609C28.407 13.1664 26.7719 13.8437 25.0669 13.8437"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.6382 20.1008C32.072 21.0266 34.1673 22.6696 35.6469 24.8124C37.1264 26.9552 37.9205 29.4968 37.9239 32.1008V35.2722H33.6382"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <div className="flex items-end space-x-2">
                    <span className="text-4xl sm:text-5xl font-bold text-blue-400">
                      {formatNumber(counters.partners, "+")}
                    </span>
                  </div>
                  <h3 className="text-gray-300 text-base sm:text-lg mt-2">
                    trusted best partners and sponsors
                  </h3>
                </div>
              </div>
            </div>

            <div className="sm:mt-8 space-y-6">
              <div className="mb-6 manu sm:mb-12 rounded-2xl sm:rounded-3xl p-4 flex flex-col items-start space-y-4 sm:space-y-6 hover:bg-gray-800 transition-colors duration-300 group max-w-[280px] min-w-[240px]">
                <div className="flex w-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full group-hover:text-white transition-colors duration-300 ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="36"
                      viewBox="0 0 34 40"
                      fill="none"
                      className="text-blue-400 group-hover:text-white transition-colors duration-300"
                    >
                      <path
                        d="M17.3523 26.8438C21.2972 26.8438 24.4952 23.6459 24.4952 19.701C24.4952 15.7561 21.2972 12.5581 17.3523 12.5581C13.4074 12.5581 10.2095 15.7561 10.2095 19.701C10.2095 23.6459 13.4074 26.8438 17.3523 26.8438Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.3525 12.5582V1.12964"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.4951 38.2724V33.9866H30.2094C30.9672 33.9866 31.6939 33.6856 32.2297 33.1498C32.7655 32.614 33.0665 31.8873 33.0665 31.1295V19.7009C33.0671 16.804 32.2668 13.9634 30.7542 11.4927C29.2416 9.0221 27.0755 7.0177 24.4951 5.70093"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.2095 5.70093C7.62811 7.01692 5.46077 9.021 3.9471 11.4917C2.43343 13.9624 1.63232 16.8034 1.63232 19.7009C1.63232 22.5984 2.43343 25.4395 3.9471 27.9102C5.46077 30.3809 7.62811 32.3849 10.2095 33.7009V38.2724"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <div className="flex items-end space-x-2">
                    <span className="text-4xl sm:text-5xl font-bold text-blue-400">
                      {formatNumber(counters.awards, "+")}
                    </span>
                  </div>
                  <h3 className="text-gray-300 text-base sm:text-lg mt-2">
                    best client support award achieved
                  </h3>
                </div>
              </div>

              <div className="mb-6 manu sm:mb-12 rounded-2xl sm:rounded-3xl p-4 flex flex-col items-start space-y-4 sm:space-y-6 hover:bg-gray-800 transition-colors duration-300 group max-w-[280px] min-w-[240px]">
                <div className="flex w-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full group-hover:text-white transition-colors duration-300 ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 41 41"
                      fill="none"
                      className="text-blue-400 group-hover:text-white transition-colors duration-300"
                    >
                      <path
                        d="M9.98145 17.4152L17.2386 5.81517C17.5198 5.35668 17.915 4.97885 18.3857 4.71848C18.8564 4.45811 19.3864 4.32409 19.9243 4.32946V4.32946C20.3479 4.31417 20.7703 4.38395 21.1664 4.53468C21.5626 4.6854 21.9246 4.91402 22.2309 5.20701C22.5372 5.50001 22.7816 5.85143 22.9498 6.24052C23.118 6.6296 23.2065 7.04845 23.21 7.47231V15.7866H35.7529C36.2163 15.8016 36.6714 15.9146 37.0881 16.1181C37.5048 16.3215 37.8737 16.6109 38.1705 16.9671C38.4674 17.3234 38.6855 17.7384 38.8105 18.1849C38.9355 18.6315 38.9645 19.0994 38.8957 19.558L36.61 34.3009C36.5125 35.0888 36.1306 35.8139 35.5361 36.3401C34.9416 36.8662 34.1753 37.1571 33.3814 37.158H14.6386C13.7464 37.1615 12.8657 36.956 12.0672 36.558L10.01 35.5295"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.98145 17.4152V35.4437"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.20982 17.4152H9.98125V35.4437H3.20982C2.83094 35.4437 2.46758 35.2932 2.19967 35.0253C1.93176 34.7574 1.78125 34.394 1.78125 34.0152V18.8437C1.78125 18.4649 1.93176 18.1015 2.19967 17.8336C2.46758 17.5657 2.83094 17.4152 3.20982 17.4152V17.4152Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <div className="flex items-end space-x-2">
                    <span className="text-4xl sm:text-5xl font-bold text-blue-400">
                      {formatNumber(counters.users, "+")}
                    </span>
                    <span className="text-blue-400 text-xl sm:text-2xl font-semibold">
                      +
                    </span>
                  </div>
                  <h3 className="text-gray-300 text-base sm:text-lg mt-2">
                    active users using our best services
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeVideoPopup}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <iframe
              className="w-full h-full"
              src="https://youtu.be/ZK-rNEhJIDs?si=orLc_QpkgRMlBf1e"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default WhoWeAre;
