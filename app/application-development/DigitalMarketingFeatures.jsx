import { CheckCircle } from "lucide-react";

export default function DigitalMarketingFeatures() {
  const features = [
    "Content Marketing That Tells Your Brand's Story",
    "Personalized Email Marketing To Nurture Leads",
    "Social Media Marketing That Engages And Converts",
    "Comprehensive SEO Services For Visibility",
    "Performance Analytics & Reporting",
    "Performance Analytics & Reporting",
  ];

  return (
    <div className="bg-black text-white px-8 py-12 rounded-2xl max-w-7xl mx-auto">
  <h2 className="text-[40px] font-jakarta mb-6 leading-tight">
    Key <span className="text-blue-400 font-bold font-jakarta">feature</span> of digital marketing
  </h2>

  <p className="text-gray-300 text-[16px] font-jakarta mb-4 leading-relaxed max-w-4xl">
    Our digital marketing approach is a data-driven strategy that combines
    targeted outreach with creative content. We focus on reaching the right
    audience through precision techniques like SEO, PPC, and social media
    advertising, supported by engaging content marketing and email campaigns.
  </p>

  <p className="text-gray-300 text-[16px] font-jakarta mb-8 leading-relaxed max-w-4xl">
    We utilize audience segmentation to divide your customer base into
    distinct groups based on demographics, interests, and behaviors. This
    allows us to deliver personalized content and messaging, ensuring
    relevance and higher engagement rates.
  </p>


  <div className="grid md:grid-cols-2 gap-10 items-center">
   
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-lg">
          <CheckCircle className="text-lime-400 mr-3" size={22} />
          {feature}
        </li>
      ))}
    </ul>

    
    <div className="overflow-hidden rounded-2xl">
      <img
        src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/service-entry-img.jpg"
        alt="Team working"
        className="w-full h-auto rounded-2xl transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
</div>

  );
}
