import Link from "next/link";
import React from "react";

function ContactHero() {
  return (
    <>
      <section
        className="relative w-full h-[200px] md:h-[300px] flex items-center  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbyrbuqbg/image/upload/v1742121548/contactus-banner_xktxxm.png')", // replace with your actual image path
        }}
      >
        <div className=" md:ml-[35px]  relative z-10 mt-24 md:mt-28 px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-jakarta">
            Contact <span className="text-blue-400 font-bold">us</span>
          </h1>

          <div className="flex  gap-2 text-sm sm:text-lg mb-8">
            <Link href="/" className="hover:underline hover:text-blue-400">
              <span className="text-gray-300">Home</span>
            </Link>
            <span className="text-blue-400">★</span>
            <span className="text-blue-400">Contact us</span>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default ContactHero;
