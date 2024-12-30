import { Link } from "react-router-dom";
// import FlowerAnimation from "../Utils/FlowerAnimation";
// import BlackholeAnimation from "../Utils/BlackholeAnimation";
import Typewriter from 'typewriter-effect';

import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaArrowRight,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
// import { BiLeftArrowAlt, BiRightArrow, BiRightArrowAlt } from "react-icons/bi";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black text-white pt-24 pb-6">
      <div className="absolute inset-0 z-0">
        {/* <FlowerAnimation /> */}
        {/* < BlackholeAnimation />  */}
      </div>

      <h1 className="text-3xl text-center font-bold">
        Let’s create something amazing together –
        <span className="text-yellow-500">
          <Typewriter
            options={{
              strings: ["we’re just a message away !!! 👀"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>

      <div className="relative  z-10 flex flex-col md:flex-row mx-6 md:mx-12 lg:mx-24 xl:mx-48 py-12">
        <div className="w-full border border-gray-800 md:w-1/2 bg-black/80 backdrop-blur-sm p-6 md:p-8 lg:p-12">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-end">
            Get In <span className="text-blue-600"> Touch</span>
            <div className="h-0.5 bg-white mt-2"></div>
          </h1>

          <div className="space-y-4">
            <Link
              to="https://wa.me/7667983607?text=Hello!%20I%20need%20a%20website%20for%20my%20business"
              target="_blank"
              className="flex items-center justify-between text-white border border-white/30 rounded p-3 md:p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <FaWhatsapp className="text-xl md:text-2xl text-green-500" />
                <span className="text-lg md:text-xl">WhatsApp</span>
              </div>
              <FaArrowRight />
            </Link>
            <Link
              to="https://www.linkedin.com/company/shrote-consultancy-services/"
              target="_blank"
              className="flex items-center justify-between text-white border border-white/30 rounded p-3 md:p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <FaLinkedin className="text-xl text-blue-500 md:text-2xl" />
                <span className="text-lg md:text-xl ">LinkedIn</span>
              </div>
              <FaArrowRight />
            </Link>

            <Link
              to="https://www.instagram.com/shroteconsultancy?igsh=MTVhdTFjaWN0cjVncw=="
              target="_blank"
              className="flex items-center justify-between text-white border border-white/30 rounded p-3 md:p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <FaInstagram className="text-xl md:text-2xl text-pink-500" />
                <span className="text-lg md:text-xl">Instagram</span>
              </div>
              <FaArrowRight />
            </Link>

            <Link
              to="https://www.facebook.com/profile.php?id=61569121190721"
              target="_blank"
              className="flex items-center justify-between text-white border border-white/30 rounded p-3 md:p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <FaFacebook className="text-xl md:text-2xl text-blue-500" />
                <span className="text-lg md:text-xl">Facebook</span>
              </div>
              <FaArrowRight />
            </Link>

            <Link
              to="https://x.com/Shrote_services?t=RlqvR_syDwl03FuUpCTK9w&s=09"
              target="_blank"
              className="flex items-center justify-between text-white border border-white/30 rounded p-3 md:p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <FaTwitter className="text-xl md:text-2xl text-blue-500" />
                <span className="text-lg md:text-xl">Twitter</span>
              </div>
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 bg-white/95 backdrop-blur-sm text-black">
          <h1 className="text-[#1a2b3b] text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-blue-600"> Connect</span> With Us
            <div className="h-0.5 bg-red-500 mt-2"></div>
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 md:p-4 border border-gray-400 bg-gray-100 rounded focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 md:p-4 border border-gray-400 bg-gray-100 rounded focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Contact No."
              className="w-full p-3 md:p-4 border border-gray-400 bg-gray-100 rounded focus:outline-none"
            />

            <textarea
              placeholder="Project Brief"
              rows="4"
              className="w-full p-3 md:p-4 border border-gray-400 bg-gray-100 rounded resize-none focus:outline-none"
            ></textarea>

            <div
              className="g-recaptcha"
              data-sitekey="your-recaptcha-site-key"
            ></div>

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
