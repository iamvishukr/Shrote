export default function ServiceCard() {
  return (
    <div className="bg-black text-white px-8 py-12 rounded-2xl max-w-7xl mx-auto">
  <div className="flex flex-col md:flex-row gap-8">
   
    <div className="md:w-2/5 text-[#F5F5F4] text-[16px] font-jakarta leading-relaxed space-y-4">
       <div className=" dsdd">
            <h2 className="text-2xl mb-12 md:-mb-[-25px] md:text-[40px] font-light leading-tight">
              Innovative{" "}
              <span className="text-blue-400 font-bold">features</span> for your
              digital success
            </h2>
          </div>
      <p>
        Our digital marketing services are designed to elevate your brand and
        reach your target audience effectively. We develop customized
        strategies that include SEO, PPC advertising, social media marketing,
        content marketing, and email campaigns. 
      </p>
      <p>
        With a focus on data–driven insights, we build customized strategies
        that drive traffic, boost engagement, and maximize ROI. Let us help
        you reach your business goals with impactful digital marketing.
      </p>
    </div>
    
    
    <div className="md:w-3/5 overflow-hidden">
      <img
        src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/service-single-img.jpg"
        alt="Digital Marketing"
        className="w-full h-auto rounded-2xl transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
</div>
  );
}
