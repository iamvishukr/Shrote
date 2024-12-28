import React, { forwardRef } from "react";

const Portfolio = forwardRef((_, ref) => {
  const portfolioItems = [
    {
      title: "Partyvines",
      category: "Event management",
      link: "https://www.partyvines.com",
    },
    {
      title: "Shree Collection",
      category: "E-commerce Store",
      link: "https://demo6.crazymarketer.online",
    },
  ];

  return (
    <section id="portfolio" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.category}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
