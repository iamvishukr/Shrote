export default function Objectives() {
  return (
    <div className="px-8  py-24">
      
      <h2 className="text-4xl font-bold text-center">
        Project <span className="text-green-700 italic">Challenges</span>
      </h2>
      <p className="text-center text-gray-300 mt-2 max-w-2xl mx-auto">
        The Project Needed A Website That Looked Modern But Was Easy For Everyone To Use.
        It Also Had To Help People Quickly Find Mental Health Experts Near Them Based On Their Location.
      </p>

      
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10 mt-12">
        
        <div >
          <h3 className="text-3xl font-jakarta mb-3">Mobile App Design</h3>
          <p className="text-gray-300 font-jakarta leading-relaxed">
            One Of The Key Project Challenges Was Creating A Design That Blended Aesthetics With User-Friendliness.
            The Platform Had To Work Well For Two Different Groups—Mental Health Professionals And People Looking For Help.
            Each Of Them Had Unique Expectations From The Platform. So, Creating A Design That Was Both Approachable
            And Professional Was Necessary. It Required Careful Selection Of Typography, Layout, Colors, And Content
            Structure. This Was Another Challenge That We Faced. The Main Goal Was To Make A Design That’s Easy For
            Everyone To Use, Helps Them Find Information Quickly, And Makes Them Feel Comfortable The Whole Time.
          </p>
          <img
            src="https://www.webskitters.com/wp-content/uploads/2025/07/webdesign.webp"
            alt="Mobile App Design"
            className="rounded-xl mt-5 w-full"
          />
        </div>


        
        <div className="border-l border-gray-600 pl-8">
          <h3 className="text-3xl font-jakarta mb-3">Mobile App Development</h3>
          <p className="text-gray-300 font-jakarta leading-relaxed">
            Geo-Targeted Search Functionality Was The Major Development Challenge. As MHISA Wanted To Provide Users
            With Mental Healthcare Professionals From Their Region, This Feature Was A Top Priority. This Included
            Smooth Integration Of Location-Based Data, Filtering Options, And Great Responsiveness With Fast Load Times
            And High Website Performance. So, The Challenge Was To Build A System That Was Both Technically Good And
            Helpful To The Users. This Ensured An Ease With Which Help Seekers Can Find Support Without Delay Or Problems.
            It Needed Accurate Backend Logic And A User-Friendly Frontend To Allow Smooth And Location-Specific Results.
          </p>
          <img
            src="https://www.webskitters.com/wp-content/uploads/2025/07/webdevelopment.png"
            alt="Mobile App Development"
            className="rounded-xl mt-5 w-full"
          />
        </div>
      </div>
    </div>
  );
}
