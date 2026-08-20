"use client";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function JoinAgency() {
  const socialLinks = [
    {
      icon: <Twitter className="w-6 h-6" />,
      platform: "Follow Us On Twitter",
      handle: "@artistic_official",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      platform: "Join Us On Linked In",
      handle: "user.artistic_official",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      platform: "Follow On Instagram",
      handle: "@artistic_insta_official",
    },
  ];

  return (
    <section className="w-full py-0 md:py-8 lg:py-8 bg-[#FAFAF9] text-stone-900">
      <div className="  px-6" style={{ padding: "0px 30px" }}>
        <div className="mb-16">
          <p className="text-sm uppercase text-stone-900 tracking-wider mb-6 font-medium">
            <span className="text-blue-600 text-lg">✱</span> JOIN AGENCY
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl vf lg:text-5xl font-light mb-8 leading-[0.9]">
                Join our{" "}
                <span className="text-blue-600 font-normal">agency</span> of
                creative innovators
              </h1>
            </div>

            <div className="lg:pt-8">
              <p className="text-lg sdr electromotion leading-relaxed line-clamp-2">
                Join our creative community to collaborate, innovate, and thrive
                together. We welcome passionate individuals eager to make.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className="group relative p-6 pt-8 mt-2 fv rounded-[3rem] border border-gray-300 shadow-sm bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div
                className="absolute -top-8 left-0 w-16 h-16 rounded-full text-white flex items-center justify-center
             bg-[length:200%_200%]
             bg-[position:bottom_right]
             bg-[linear-gradient(135deg,#2563EB_50%,#2563EB_50%)]
             group-hover:bg-[position:top_left]
             transition-[background-position]
             duration-500
             z-10"
              >
                {social.icon}
              </div>

              <div className="mt-4">
                <h3 className="text-md md:text-md dsq lg:text-2xl font-sm text-stone-900 group-hover:text-blue-600 transition-colors duration-300">
                  {social.platform}
                </h3>

                <p className="electromotion text-stone-500 dsq text-sm mt-1">
                  {social.handle}
                </p>
              </div>

              <div className="absolute top-10 right-8 w-10 h-10 sww rounded-full flex items-center justify-center transition-all duration-300">
                <div className="w-10 h-10 rounded-full border border-gray-300 bg-transparent flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 group-hover:bg-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 43 43"
                    fill="none"
                    className="text-stone-900 group-hover:text-white transition-all duration-300"
                  >
                    <path
                      d="M28.5396 17.1469L13.3776 32.3089L10.8867 29.818L26.047 14.656H12.6853V11.1328H32.0628V30.5104H28.5396V17.1469Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
