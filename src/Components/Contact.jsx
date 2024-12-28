import { Link } from "react-router-dom";
import FlowerAnimation from "../Utils/FlowerAnimation";
import { FaLinkedin, FaFacebook, FaTwitter, FaEnvelope, FaArrowRight, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
    

      {/* Top Animation */}
      <div className="h-32 ">
        <FlowerAnimation />
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row mx-6 md:mx-12 lg:mx-24 xl:mx-48 my-12 md:my-20 lg:my-36">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-black p-6 md:p-8 lg:p-16">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12">
            Get In Touch
            <div className="h-0.5 bg-white mt-2"></div>
          </h1>

          <div className="space-y-4 lg:space-y-6">
            <Link to="#" className="flex items-center justify-between text-white border border-white/30 rounded p-3 md:p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 md:gap-4">
                <FaLinkedin className="text-xl md:text-2xl" />
                <span className="text-lg md:text-xl">LinkedIn</span>
              </div>
              <FaArrowRight />
            </Link>

            <Link to="#" className="flex items-center justify-between text-white border border-white/30 rounded p-3 md:p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 md:gap-4">
                <FaFacebook className="text-xl md:text-2xl" />
                <span className="text-lg md:text-xl">Facebook</span>
              </div>
              <FaArrowRight />
            </Link>

            <Link to="#" className="flex items-center justify-between text-white border border-white/30 rounded p-3 md:p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 md:gap-4">
                <FaTwitter className="text-xl md:text-2xl" />
                <span className="text-lg md:text-xl">Twitter</span>
              </div>
              <FaArrowRight />
            </Link>

            <Link to="#" className="flex items-center justify-between text-white border border-white/30 rounded p-3 md:p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 md:gap-4">
                <FaInstagram className="text-xl md:text-2xl" />
                <span className="text-lg md:text-xl">Instagram</span>
              </div>
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-16 bg-white text-black">
          <h1 className="text-[#1a2b3b] text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12">
            Connect With Us
            <div className="h-0.5 bg-red-500 mt-2"></div>
          </h1>

          <form className="space-y-4 md:space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 md:p-4 bg-gray-100 rounded focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 md:p-4 bg-gray-100 rounded focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Contact No."
              className="w-full p-3 md:p-4 bg-gray-100 rounded focus:outline-none"
            />

            <textarea
              placeholder="Project Brief"
              rows="4"
              className="w-full p-3 md:p-4 bg-gray-100 rounded resize-none focus:outline-none"
            ></textarea>

            <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>

            <button
              type="submit"
              className="w-full bg-[#1a2b3b] text-white py-3 md:py-4 rounded hover:bg-[#2a3b4b] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>   
    </div>
  );
}

