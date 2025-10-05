"use client";

export default function WhyChoose() {
  return (
    <section className="relative gfd md:mb-16 lg:mb-16 overflow-hidden bg-transparent">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-0 items-start">
          <div className="order-1 lg:order-none  py-20 px-8">
            <div className="max-w-4xl  mx-auto">
              <div className="section-tag mb-4">WHY CHOOSE</div>

              <h2 className="text-7xl ddd md:text-5xl lg:text-5xl mb-8 lg:mb-32 leading-tight">
                Expertise for{" "}
                <span className="text-blue-400 font-bold">your digital</span>{" "}
                growth journey
              </h2>

              <p className=" text-base lg:text-lg leading-relaxed mb-8 block lg:hidden electromotion">
                Our dedicated team is committed to understanding your unique
                needs, ensuring that we provide innovative strategies that drive
                results. With a focus on quality and integrity.
              </p>

              <div className="space-y-6 lg:space-y-8">
                <div className="relative group  bg-gray-900 rounded-2xl p-6 lg:p-8 overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 via-gray-200/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0" />
                  <div className="relative z-10">
                    <h3 className="vishu lg:text-2xl font-bold mb-3 lg:mb-4">
                      Data-Driven Approach
                    </h3>
                    <p className="electromotion text-base lg:text-lg leading-relaxed">
                      We leverage data and insights to make informed decisions
                      that lead to more effective and efficient solutions.
                    </p>
                  </div>
                </div>

                <div className="relative group bg-gray-900 rounded-2xl p-6 lg:p-8 overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 via-gray-200/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0" />
                  <div className="relative z-10">
                    <h3 className="vishu lg:text-2xl font-bold mb-3 lg:mb-4">
                      Competitive Pricing
                    </h3>
                    <p className="electromotion text-base lg:text-lg leading-relaxed">
                      We offer our top-quality services at competitive prices,
                      providing you with great value for your investment.
                    </p>
                  </div>
                </div>

                <div className="relative group bg-gray-900 rounded-2xl p-6 lg:p-8 overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 via-gray-200/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0" />
                  <div className="relative z-10">
                    <h3 className="vishu lg:text-2xl font-bold mb-3 lg:mb-4">
                      Ethical Business Practices
                    </h3>
                    <p className="electromotion text-base lg:text-lg leading-relaxed">
                      We maintain the highest level of professionalism and
                      ethical standards in all our business dealings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full order-0 lg:order-none py-0 md:py-20 lg:py-20 px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative z-10 mb-12 mt-16 lg:mb-12 hidden lg:block">
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  Our dedicated team is committed to understanding your unique
                  needs, ensuring that we provide innovative strategies that
                  drive results. With a focus on quality and integrity.
                </p>
              </div>

              <div className="relative w-full h-[500px] md:h-[600px]  lg:h-[700px] mt-8 lg:mt-12">
                <div className="absolute inset-0 z-10 w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/why-choose-image.jpg"
                    alt="Team meeting"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-0 -right-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-0 pointer-events-none">
                  <img
                    src="/why-choose-bg-shape.png"
                    alt="Decorative shape"
                    className="w-full h-full object-contain opacity-20 animate-spin-slow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
