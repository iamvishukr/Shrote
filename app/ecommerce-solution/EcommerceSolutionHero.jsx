import Link from "next/link";
import React from "react";

function EcommerceSolutionHero() {
  return (
    <>
     
       <section
  className="relative w-full h-[200px] md:h-[250px] flex items-center  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drfbuv5ll/image/upload/v1742210552/E-Commerce-banner_xft4vl.png')", // replace with your actual image path
      }}
>

        <div className="relative z-10 ml-[35px] text-center mt-16 md:mt-28 px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-jakarta">
  Ecommerce <span className="text-blue-400 font-bold">Solution</span>
</h1>



  <div className="flex  gap-2 text-[10px] sm:text-lg mb-8">
    <Link href="/" className="hover:underline hover:text-blue-400">
      <span className="text-gray-300">Home</span>
    </Link>
    <span className="text-blue-400">★</span>
    <Link href="/services" className="hover:underline hover:text-blue-400">
      <span className="text-gray-300">Services</span>
    </Link>
    <span className="text-blue-400">★</span>
    <span className="text-blue-400">Ecommerce Solution</span>
  </div>
</div>

      </section>

      
      
    </>
  );
}

export default EcommerceSolutionHero;
