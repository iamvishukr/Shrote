import React from 'react';

const testimonials = [
  {
    name: 'Anmol Gupta',
    position: 'CEO & Founder',
    company: 'Partyvines',
    // image: '/assets/img/testimonials/AnmolGupta.jpeg',
    quote: "I'm thrilled with the exceptional service provided by Partyvines for my event management website. Their expertise, dedication, and creative approach resulted in a stunning and functional platform that exceeded my expectations. Partyvines is a top-notch choice for anyone seeking professional and innovative web solutions."
  },
  {
    name: 'Samrat Pandey',
    position: 'Owner',
    company: 'Shree Collection',
    // image: '/assets/img/testimonials/SamratPandey.jpeg',
    quote: "Exceptional service from Shree Collection! They've created an outstanding e-commerce store for me, and I couldn't be happier. The website is fantastic, and their service exceeded my expectations."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              <p className="italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

