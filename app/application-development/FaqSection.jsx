import { useState } from "react";
import { Plus, Minus, PhoneCall, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1); // Default second item open

  const faqs = [
    {
      question: "What services does your agency offer?",
      answer:
        "We provide a range of services including branding, digital marketing, content creation, e-commerce solutions, and UX/UI design.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Yes, we work with businesses of all sizes and customize our strategies to fit your goals and budget.",
    },
    {
      question: "Can you help with existing websites?",
      answer:
        "Absolutely! We can optimize, redesign, or enhance your current website to improve performance and user experience.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white px-8 py-16 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
      
      <div className="md:col-span-2">
        <h2 className=" text-[30px] leading-[1.1] md:text-[40px] lg:text-[60px] font-jakarta  mb-8">
          Lets address your <span className="text-blue-400">questions</span>{" "}
          today!
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-5 cursor-pointer transition"
              onClick={() => toggleFAQ(index)}
            >
             
              <div className="flex justify-between items-center">
                <h3
                  className={`text-lg font-semibold ${
                    openIndex === index ? "text-blue-400" : "text-white"
                  }`}
                >
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="text-blue-400 w-6 h-6" />
                ) : (
                  <Plus className="text-blue-400 w-6 h-6" />
                )}
              </div>

           
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-[#F5F5F4] text-[16px] font-jakarta leading-relaxed ">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 flex flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="61"
          className="mb-12 text-blue-400  "
          viewBox="0 0 61 61"
          fill="none"
        >
          <path
            d="M19.7854 54.2444L2.64258 58.5301L6.92829 45.6729V7.10151C6.92829 5.96487 7.37982 4.87478 8.18355 4.07105C8.98728 3.26733 10.0774 2.8158 11.214 2.8158H54.0711C55.2078 2.8158 56.2979 3.26733 57.1016 4.07105C57.9053 4.87478 58.3569 5.96487 58.3569 7.10151V49.9587C58.3569 51.0953 57.9053 52.1854 57.1016 52.9891C56.2979 53.7928 55.2078 54.2444 54.0711 54.2444H19.7854Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M32.6426 13.5301V26.3872"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M32.6429 41.3872C33.8263 41.3872 34.7857 40.4278 34.7857 39.2444C34.7857 38.0609 33.8263 37.1015 32.6429 37.1015C31.4594 37.1015 30.5 38.0609 30.5 39.2444C30.5 40.4278 31.4594 41.3872 32.6429 41.3872Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>

        <h3 className="text-[20px] font-jakarta font-semibold text-blue-400 mb-6">
          You have different questions?
        </h3>
        <p className="text-gray-300 mb-6">
          Our team will answer all your questions. <br />
          We ensure a quick response.
        </p>
        <button
  className="flex items-center gap-2 mb-8 bg-blue-400 text-black font-bold 
             px-4 md:px-6 py-3 rounded-xl hover:scale-105 transition 
             w-full sm:w-auto md:w-64 lg:w-80 whitespace-nowrap"
>
  <PhoneCall className="w-5 h-5" />
  +91 8088230479
</button>

      </div>
    </div>
  );
}
