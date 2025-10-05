"use client";

import { FileText, Settings, BarChart3, Headphones } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 61 60"
          fill="none"
          className="w-12 h-12"
        >
          <path
            d="M40.7464 6.42856H47.1749C48.3116 6.42856 49.4017 6.88009 50.2054 7.68381C51.0091 8.48754 51.4607 9.57763 51.4607 10.7143V53.5714C51.4607 54.7081 51.0091 55.7981 50.2054 56.6019C49.4017 57.4056 48.3116 57.8571 47.1749 57.8571H12.8892C11.7526 57.8571 10.6625 57.4056 9.85877 56.6019C9.05504 55.7981 8.60352 54.7081 8.60352 53.5714V10.7143C8.60352 9.57763 9.05504 8.48754 9.85877 7.68381C10.6625 6.88009 11.7526 6.42856 12.8892 6.42856H19.3178"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.4602 2.14285H23.6031C21.2362 2.14285 19.3174 4.06163 19.3174 6.42857V8.57142C19.3174 10.9384 21.2362 12.8571 23.6031 12.8571H36.4602C38.8272 12.8571 40.746 10.9384 40.746 8.57142V6.42857C40.746 4.06163 38.8272 2.14285 36.4602 2.14285Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3174 23.5714H40.746"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3174 34.2857H40.746"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3174 45H40.746"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Personalized Approach",
      description:
        "We customize strategies to fit your brand's specific needs, ensuring alignment.",
    },
    {
      number: "02",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 60 61"
          fill="none"
          className="w-12 h-12"
        >
          <path
            d="M22.4143 10.2754L24.2571 5.51825C24.5679 4.71281 25.1147 4.02001 25.8259 3.53059C26.5371 3.04116 27.3795 2.77794 28.2428 2.77539H31.7571C32.6204 2.77794 33.4629 3.04116 34.174 3.53059C34.8852 4.02001 35.432 4.71281 35.7428 5.51825L37.5857 10.2754L43.8428 13.8754L48.9 13.104C49.742 12.9897 50.5991 13.1283 51.3622 13.5022C52.1253 13.8761 52.76 14.4685 53.1857 15.204L54.9 18.204C55.3393 18.9512 55.5416 19.814 55.4804 20.6786C55.4192 21.5432 55.0973 22.369 54.5571 23.0468L51.4285 27.0325V34.2325L54.6428 38.2182C55.183 38.8961 55.5049 39.7218 55.5661 40.5864C55.6274 41.451 55.425 42.3139 54.9857 43.0611L53.2714 46.0611C52.8457 46.7966 52.211 47.3889 51.4479 47.7629C50.6848 48.1368 49.8278 48.2754 48.9857 48.1611L43.9285 47.3897L37.6714 50.9897L35.8285 55.7468C35.5178 56.5523 34.971 57.2451 34.2598 57.7345C33.5486 58.2239 32.7061 58.4871 31.8428 58.4897H28.2428C27.3795 58.4871 26.5371 58.2239 25.8259 57.7345C25.1147 57.2451 24.5679 56.5523 24.2571 55.7468L22.4143 50.9897L16.1571 47.3897L11.1 48.1611C10.2579 48.2754 9.40086 48.1368 8.63775 47.7629C7.87465 47.3889 7.23993 46.7966 6.81426 46.0611L5.09997 43.0611C4.66069 42.3139 4.4583 41.451 4.51951 40.5864C4.58072 39.7218 4.90266 38.8961 5.44283 38.2182L8.5714 34.2325V27.0325L5.35711 23.0468C4.81694 22.369 4.49501 21.5432 4.4338 20.6786C4.37259 19.814 4.57498 18.9512 5.01426 18.204L6.72854 15.204C7.15421 14.4685 7.78893 13.8761 8.55204 13.5022C9.31514 13.1283 10.1722 12.9897 11.0143 13.104L16.0714 13.8754L22.4143 10.2754Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 43.4897C37.1008 43.4897 42.8571 37.7333 42.8571 30.6325C42.8571 23.5317 37.1008 17.7754 30 17.7754C22.8992 17.7754 17.1428 23.5317 17.1428 30.6325C17.1428 37.7333 22.8992 43.4897 30 43.4897Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 17.7754V30.6325H42.8571"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.0005 30.6328L20.9148 39.7185"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Experienced Team",
      description:
        "Combines industry knowledge and creativity to exceptional results for your brand.",
    },
    {
      number: "03",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 61 60"
          fill="none"
          className="w-12 h-12"
        >
          <path
            d="M40.7464 6.42856H47.1749C48.3116 6.42856 49.4017 6.88009 50.2054 7.68381C51.0091 8.48754 51.4607 9.57763 51.4607 10.7143V53.5714C51.4607 54.7081 51.0091 55.7981 50.2054 56.6019C49.4017 57.4056 48.3116 57.8571 47.1749 57.8571H12.8892C11.7526 57.8571 10.6625 57.4056 9.85877 56.6019C9.05504 55.7981 8.60352 54.7081 8.60352 53.5714V10.7143C8.60352 9.57763 9.05504 8.48754 9.85877 7.68381C10.6625 6.88009 11.7526 6.42856 12.8892 6.42856H19.3178"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.4602 2.14285H23.6031C21.2362 2.14285 19.3174 4.06163 19.3174 6.42857V8.57142C19.3174 10.9384 21.2362 12.8571 23.6031 12.8571H36.4602C38.8272 12.8571 40.746 10.9384 40.746 8.57142V6.42857C40.746 4.06163 38.8272 2.14285 36.4602 2.14285Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3174 23.5714H40.746"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3174 34.2857H40.746"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3174 45H40.746"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Data-Driven Decisions",
      description:
        "We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.",
    },
    {
      number: "04",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 60 61"
          fill="none"
          className="w-12 h-12"
        >
          <path
            d="M6.42878 26.3467H10.7145C11.2828 26.3467 11.8279 26.5724 12.2297 26.9743C12.6316 27.3762 12.8574 27.9212 12.8574 28.4895V39.2038C12.8574 39.7721 12.6316 40.3172 12.2297 40.7191C11.8279 41.1209 11.2828 41.3467 10.7145 41.3467H6.42878C5.29214 41.3467 4.20205 40.8951 3.39832 40.0914C2.5946 39.2877 2.14307 38.1976 2.14307 37.061V30.6324C2.14307 29.4958 2.5946 28.4057 3.39832 27.6019C4.20205 26.7982 5.29214 26.3467 6.42878 26.3467Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.5717 41.3467H49.286C48.7177 41.3467 48.1726 41.1209 47.7708 40.7191C47.3689 40.3172 47.1431 39.7721 47.1431 39.2038V28.4895C47.1431 27.9212 47.3689 27.3762 47.7708 26.9743C48.1726 26.5724 48.7177 26.3467 49.286 26.3467H53.5717C54.7083 26.3467 55.7984 26.7982 56.6022 27.6019C57.4059 28.4057 57.8574 29.4958 57.8574 30.6324V37.061C57.8574 38.1976 57.4059 39.2877 56.6022 40.0914C55.7984 40.8951 54.7083 41.3467 53.5717 41.3467Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.7144 53.1324C42.9876 53.1324 45.1678 52.2293 46.7753 50.6219C48.3827 49.0144 49.2858 46.8342 49.2858 44.561V41.3467"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.3575 47.7754C36.7783 47.7754 38.1409 48.3398 39.1456 49.3445C40.1502 50.3491 40.7146 51.7117 40.7146 53.1325C40.7146 54.5533 40.1502 55.9159 39.1456 56.9206C38.1409 57.9253 36.7783 58.4897 35.3575 58.4897H28.9289C27.5081 58.4897 26.1455 57.9253 25.1408 56.9206C24.1362 55.9159 23.5718 54.5533 23.5718 53.1325C23.5718 51.7117 24.1362 50.3491 25.1408 49.3445C26.1455 48.3398 27.5081 47.7754 28.9289 47.7754H35.3575Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.7144 26.3468V22.0611C10.7144 16.9462 12.7462 12.0408 16.363 8.42404C19.9798 4.80727 24.8852 2.77539 30.0001 2.77539C35.115 2.77539 40.0204 4.80727 43.6371 8.42404C47.2539 12.0408 49.2858 16.9462 49.2858 22.0611V26.3468"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.5718 17.7754V24.204"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.4287 17.7754V24.204"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.5718 32.7754C23.5718 38.4754 36.4289 38.4754 36.4289 32.7754"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Ongoing Support",
      description:
        "We provide continuous support and maintenance to keep your digital assets at their best.",
    },
  ];

  return (
    <section className="section-padding relative">
      
      <div className="absolute jidsmd z-0 hidden md:block">
        <img
          src="/how-work-bg-shape.png"
          alt="Rotating Shape"
          className="animate-spin-slow opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <p className="text-xs sm:text-sm uppercase text-white/60 tracking-wider mb-4 md:mb-6 font-medium">
              <span className="text-blue-400 text-base md:text-lg mr-2">✱</span>
              <span className="text-white/90">KEY BENEFITS</span>
            </p>
            <h2 className="px-4 text-[3.2rem]  leading-[1.1] md:px-0 md:text-5xl md:leading-tight">
              Discover the{" "}
              <span className="text-blue2 font-bold">benefits</span> of
              <br />
              choosing us today
            </h2>
          </div>

          <div className="relative lg:pt-16">
            
            <div className="relative z-0 block sad md:hidden mb-4">
              <img
                src="/how-work-bg-shape.png"
                alt="Rotating Shape"
                className="animate-spin-slow opacity-80 mx-auto"
              />
            </div>

            
            <div className="relative z-10 -mt-[200px] md:-mt-0 px-4 md:px-0">
              <p className="text-lg text-white leading-relaxed">
                Experience unparalleled creativity, data-driven strategies, and
                dedicated support that drive real results for your brand.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-1/3 w-3 h-3 bg-blue-400 rounded-full"></div>

        <div className="max-w-[90%] mx-auto md:max-w-none grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {steps.map((step, index) => (
    <div
      key={index}
      className="bg-[#0e140e] rounded-3xl p-5 card-hover"
    >
      <div className="text-3xl font-bold text-white mb-4 md:mb-8">{step.number}</div>
      <div className="text-blue-400 mb-4 md:mb-8">{step.icon}</div>
      <h3 className="text-2xl font-bold mb-2 md:mb-4">{step.title}</h3>
      <p className="text-white ds56 md:mb-4 leading-relaxed">
        {step.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
