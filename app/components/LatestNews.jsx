"use client";

export default function LatestNews() {
  const articles = [
    {
      id: 1,
      title: "UI/UX Design Principles for Better User Engagement",
      image:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/post-1.jpg",
      readMore: true,
    },
    {
      id: 2,
      title: "Why Your Business Needs a Mobile-Optimized Website",
      image:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/post-2.jpg",
      readMore: true,
    },
    {
      id: 3,
      title: "Content Marketing Essentials for Growing Your Brand",
      image:
        "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/post-3.jpg",
      readMore: true,
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs sm:text-sm uppercase text-white/60 tracking-wider mb-4 md:mb-6 font-medium">
          <span className="text-blue-400 text-base ml-4 md:ml-0 md:text-lg mr-2">
            ✱
          </span>
          <span className="text-white/90">LATEST NEWS</span>
        </p>

        <div className="grid lg:grid-cols-[60%_40%] items-start mb-16 px-4 md:px-0">
          <div>
            <h2 className="text-[3rem] sm:text-5xl lg:text-5xl leading-tight font-poppins max-w-5xl">
              Insights on digital{" "}
              <span className="text-blue-400 font-bold">innovation</span>
              <br />
              and growth
            </h2>
          </div>

          <div>
            <p className="text-[16px] ds56 mt-2 md:mt-0 text-white text-bold leading-relaxed">
              Explore the latest trends, strategies, and tools driving digital
              innovation and helping businesses thrive in a rapidly evolving
              digital landscape.
            </p>
          </div>
        </div>

        <div className="px-4 md:px-0 grid md:grid-cols-3 gap-8 md:gap-6 md:gap-8">
          {articles.map((article) => (
            <div key={article.id} className="group">
              <div className="relative overflow-hidden rounded-xl md:rounded-3xl group cursor-pointer">
                <div className="absolute inset-0 z-10 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-tr before:from-gray-300/30 before:to-transparent before:opacity-0 before:scale-0 before:transition-all before:duration-500 group-hover:before:opacity-100 group-hover:before:scale-150" />

                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-56 md:h-80 object-cover transition-transform duration-500 transform group-hover:scale-110 pointer-events-none"
                  draggable={false}
                />
              </div>

              <h3 className="text-[1rem] md:text-lg  text-white mt-3 mb-2">
                {article.title}
              </h3>

              {article.readMore && (
                <button className="flex items-center text-[16px] md:text-lg text-blue-400 font-semibold hover:text-white transition-colors duration-300">
                  Read More
                  <svg
                    className="w-5 h-5 md:w-4 md:h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17l9.2-9.2M17 17V7H7"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
