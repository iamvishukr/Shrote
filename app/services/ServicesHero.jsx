import Link from "next/link";
import React from "react";

function ServicesHero({name}) {
  return (
    <>
     
      <section
  className="relative w-full h-[200px] md:h-[250px] flex items-center  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drfbuv5ll/image/upload/v1742187982/Portfolio-Banner_zzao0x.jpg')", // replace with your actual image path
      }}
>

        <div className="relative z-10 ml-[35px] text-center mt-16 md:mt-28 px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-jakarta">
  {name} <span className="text-blue-400 font-bold">Services</span>
</h1>



  <div className="flex  gap-2 text-sm sm:text-lg mb-8">
    <Link href="/" className="hover:underline hover:text-blue-400">
      <span className="text-gray-300">Home</span>
    </Link>
    <span className="text-blue-400">★</span>
    <span className="text-blue-400">{name} Services </span>
  </div>
</div>

      </section>

      
     
    </>
  );
}

export default ServicesHero;
