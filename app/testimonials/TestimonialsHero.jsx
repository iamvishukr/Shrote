"use client";

import Link from "next/link";

export default function TestimonialsHero() {
  return (
    <section className="relative mt-[68px] md:mt-0 w-full min-h-[80vh] overflow-hidden font-sans">
  <img
    src="https://www.sassafras.com/wp-content/uploads/2020/05/testimonial-w.jpg"
    alt="Client photo"
    className=" md:w-full h-[80vh] object-cover brightness-75"
  />

      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          padding: "1rem",
          textShadow: "0 2px 5px rgba(0,0,0,0.7)",
          maxWidth: "800px",
        }}
      >
        <h3
          style={{
            fontSize: "1.7rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Here's what our clients have to say about working with us
        </h3>
        <blockquote
          style={{
            fontStyle: "italic",
            fontSize: "1.9rem",
            lineHeight: "1.6",
            borderLeft: "6px solid rgba(255,255,255,0.7)",
            paddingLeft: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          Shrote Technology is trusted by a wide range of companies,
          universities and government agencies. Read our latest customer
          testimonials.
          <div className="flex md:ml-20  gap-2 text-[20px] sm:text-xl ">
            <Link href="/" className="hover:underline hover:text-blue-400">
              <span className="text-gray-600">Home</span>
            </Link>
            <span className="text-blue-400">★</span>
            <span className="text-gray-600">Testimonials</span>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
