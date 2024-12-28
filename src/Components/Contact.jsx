import { FaLinkedin, FaFacebook, FaTwitter, FaEnvelope, FaArrowRight, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row mx-12 my-6">
      <div className="w-full md:w-1/2 bg-black p-8 md:p-16">
        <h1 className="text-white text-5xl font-bold mb-12">
          Get In Touch
          <div className="h-0.5 bg-white mt-2"></div>
        </h1>
        
        <div className="space-y-6">
          <Link to={"https://www.linkedin.com/in/shrote-consultancy-services-54ba72337/"} className="flex items-center justify-between text-white border border-white/30 rounded p-4 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl" />
              <span className="text-xl">LinkedIn</span>
            </div>
            <FaArrowRight />
          </Link>

          <Link to={"https://www.facebook.com/people/Shrote/61569121190721/"} className="flex items-center justify-between text-white border border-white/30 rounded p-4 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4">
              <FaFacebook className="text-2xl" />
              <span className="text-xl">Facebook</span>
            </div>
            <FaArrowRight />
          </Link>

          <Link to={"https://x.com/Shrote_services?t=RlqvR_syDwl03FuUpCTK9w&s=09&mx=2"} className="flex items-center justify-between text-white border border-white/30 rounded p-4 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4">
              <FaTwitter className="text-2xl" />
              <span className="text-xl">Twitter</span>
            </div>
            <FaArrowRight />
          </Link>

          <Link to={"https://www.instagram.com/shroteconsultancy/?igsh=MTVhdTFjaWN0cjVncw%3D%3D"} className="flex items-center justify-between text-white border border-white/30 rounded p-4 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4">
              <FaInstagram className="text-2xl" />
              <span className="text-xl">Instagram</span>
            </div>
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-8 md:p-16">
        <h1 className="text-[#1a2b3b] text-5xl font-bold mb-12">
          Connect With Us
          <div className="h-0.5 bg-red-500 mt-2"></div>
        </h1>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 bg-gray-100 rounded focus:outline-none"
          />
          
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-gray-100 rounded focus:outline-none"
          />
          
          <input
            type="tel"
            placeholder="Contact No."
            className="w-full p-4 bg-gray-100 rounded focus:outline-none"
          />
          
          <textarea
            placeholder="Project Brief"
            rows="4"
            className="w-full p-4 bg-gray-100 rounded resize-none focus:outline-none"
          ></textarea>

          <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>

          <button
            type="submit"
            className="w-full bg-[#1a2b3b] text-white py-4 rounded hover:bg-[#2a3b4b] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

