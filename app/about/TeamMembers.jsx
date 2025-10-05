import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Senior Project Manager",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/team-1.jpg", // replace with real image
    socials: {
      facebook: "#",
      instagram: "#",
      pinterest: "#",
    },
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    role: "Marketing Director",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/team-2.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      pinterest: "#",
    },
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Product Manager",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/team-3.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      pinterest: "#",
    },
  },
  {
    id: 4,
    name: "Jessica Taylor",
    role: "Communications Specialist",
    image:
      "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/team-4.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      pinterest: "#",
    },
  },
];

const TeamMemberss = () => {
  return (
    <div className="bg-black text-white py-12 md:mt-16 px-4 sm:px-8 md:px-16">
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
        <div className="-mb-12 md:-mb-0">
          <p className="text-xs sm:text-sm uppercase text-white/60 tracking-wider mb-4 md:mb-6 font-medium">
            <span className="text-blue-400 text-base md:text-lg mr-2">✱</span>
            <span className="text-white/90">OUR TEAM</span>
          </p>
          <h2 className="px-2 text-[30px] leading-[1.1] md:px-0 md:text-[40px] lg:text-[50px] md:leading-tight font-jakarta">
            Dynamic <span className="text-blue-400 font-bold">team</span> of digital experts
          </h2>
        </div>

        <div className=" md:pt-12 ">
          <p className="text-[16px] text-white leading-relaxed dsddd mb-8 font-jakarta">
            Our digital services empower brands with innovative strategies and
            solutions for sustainable growth and engagement.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200">
              Learn More
            </button>
            <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 cursor-pointer group">
              <ArrowUpRight className="w-6 h-6 text-black transition-transform duration-200 group-hover:rotate-45" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex flex-col justify-end items-center text-center bg-gradient-to-t from-black/70 to-transparent p-4 transition-all duration-300">
              <div className="transition-transform duration-300 group-hover:-translate-y-4">
                <h4 className="text-white font-semibold text-[20px] font-jakarta">
                  <a href={member.profileLink}>{member.name}</a>
                </h4>
                <p className="text-gray-200 text-[16px] font-jakarta">
                  {member.role}
                </p>
              </div>

              <div className="flex justify-center gap-3 mt-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {" "}
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  {" "}
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />{" "}
                  </svg>{" "}
                </Link>{" "}
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  {" "}
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />{" "}
                  </svg>{" "}
                </Link>{" "}
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  {" "}
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />{" "}
                  </svg>{" "}
                </Link>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberss;
