"use client";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "@/lib/firebase";

function FormSection() {
  const [result, setResult] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    address: "",
    service: "",
    city: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setResult("Sending...");

  try {
    const response = await addDoc(collection(db, "contactUs"), {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      address: formData.address,
      service: formData.service,
      city: formData.city,
      timestamp: new Date(),
    });

   if (response) {
      setResult("Message sent successfully! ✅");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
        address: "",
        service: "",
        city: "",
      });
    }
    
  } catch (error) {
    console.log("Error adding document: ", error);
    setResult("Something went wrong ❌. Please try again!");
  }
};


  return (
    <section className=" py-8 md:py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <div>
            <h2 className=" text-[1.8rem] md:text-5xl font-bold mb-4 md:mb-6">
              Get in <span className="text-blue-400">touch</span> with us
            </h2>

            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              We'd love to hear from you! Whether you have questions, need
              support, or want to discuss a project, feel free to reach out.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 relative grid md:grid-cols-2">
                <div className="relative p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 text-blue-400 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="51"
                      viewBox="0 0 50 51"
                      fill="none"
                    >
                      <path
                        d="M39.5185 31.1202C38.4948 30.0543 37.2601 29.4845 35.9516 29.4845C34.6536 29.4845 33.4084 30.0438 32.3425 31.1096L29.0078 34.4338C28.7334 34.286 28.4591 34.1488 28.1953 34.0117C27.8154 33.8217 27.4566 33.6423 27.1505 33.4524C24.0269 31.4684 21.1882 28.883 18.4655 25.5377C17.1464 23.8704 16.26 22.4668 15.6163 21.0422C16.4816 20.2507 17.2836 19.4276 18.0645 18.6362C18.36 18.3407 18.6555 18.0346 18.951 17.7392C21.1671 15.5231 21.1671 12.6527 18.951 10.4366L16.07 7.55568C15.7429 7.22854 15.4052 6.89085 15.0886 6.55316C14.4555 5.89888 13.7906 5.2235 13.1047 4.59033C12.0811 3.57726 10.8569 3.03906 9.56949 3.03906C8.28204 3.03906 7.03681 3.57726 5.98152 4.59033C5.97097 4.60088 5.97097 4.60088 5.96042 4.61144L2.37245 8.23106C1.02169 9.58183 0.251331 11.2281 0.0824858 13.1381C-0.170782 16.2196 0.736762 19.0899 1.43325 20.9683C3.14281 25.5799 5.6966 29.8538 9.50617 34.4338C14.1283 39.9529 19.6897 44.3112 26.0425 47.3821C28.4696 48.5324 31.7094 49.8937 35.329 50.1258C35.5506 50.1364 35.7827 50.1469 35.9938 50.1469C38.4315 50.1469 40.4788 49.2711 42.0828 47.5298C42.0933 47.5087 42.1145 47.4982 42.125 47.4771C42.6738 46.8123 43.3069 46.2107 43.9718 45.567C44.4255 45.1343 44.8899 44.6806 45.3436 44.2057C46.3884 43.1188 46.9371 41.8524 46.9371 40.5544C46.9371 39.2459 46.3778 37.9901 45.312 36.9348L39.5185 31.1202ZM43.2964 42.2323C43.2858 42.2429 43.2858 42.2323 43.2964 42.2323C42.8848 42.6755 42.4627 43.0765 42.0089 43.5198C41.323 44.174 40.6265 44.86 39.9722 45.6303C38.9064 46.77 37.6506 47.3082 36.0044 47.3082C35.8461 47.3082 35.6772 47.3082 35.5189 47.2977C32.3847 47.0972 29.4721 45.873 27.2877 44.8283C21.3148 41.9368 16.07 37.8318 11.7117 32.6292C8.1132 28.292 5.70715 24.2819 4.11367 19.9764C3.13226 17.3487 2.77346 15.3015 2.93175 13.3703C3.03728 12.1356 3.51216 11.112 4.38805 10.2361L7.98656 6.63758C8.50365 6.15215 9.0524 5.88833 9.5906 5.88833C10.2554 5.88833 10.7936 6.28934 11.1313 6.62703C11.1419 6.63758 11.1524 6.64813 11.163 6.65869C11.8067 7.2602 12.4188 7.88282 13.0625 8.54765C13.3896 8.88534 13.7273 9.22303 14.065 9.57127L16.9459 12.4522C18.0645 13.5708 18.0645 14.605 16.9459 15.7236C16.6399 16.0296 16.3444 16.3356 16.0384 16.6311C15.1519 17.5387 14.3077 18.3829 13.3896 19.206C13.3685 19.2271 13.3474 19.2377 13.3369 19.2588C12.4293 20.1663 12.5982 21.0528 12.7881 21.6543C12.7987 21.6859 12.8092 21.7176 12.8198 21.7493C13.569 23.5643 14.6243 25.2739 16.2283 27.3106L16.2389 27.3212C19.1515 30.9091 22.2223 33.7056 25.6098 35.8478C26.0425 36.1222 26.4857 36.3438 26.9078 36.5549C27.2877 36.7448 27.6465 36.9242 27.9525 37.1142C27.9948 37.1353 28.037 37.167 28.0792 37.1881C28.438 37.3675 28.7757 37.4519 29.1239 37.4519C29.9998 37.4519 30.5485 36.9031 30.7279 36.7237L34.337 33.1147C34.6958 32.7559 35.2657 32.3232 35.9305 32.3232C36.5848 32.3232 37.123 32.7348 37.4501 33.0936C37.4606 33.1041 37.4607 33.1041 37.4712 33.1147L43.2858 38.9293C44.3728 40.0057 44.3728 41.1137 43.2964 42.2323Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M27.0242 12.0449C29.7891 12.5092 32.3006 13.8178 34.3057 15.8228C36.3107 17.8278 37.6087 20.3394 38.0836 23.1043C38.1997 23.8007 38.8012 24.2862 39.4871 24.2862C39.5715 24.2862 39.6454 24.2756 39.7298 24.2651C40.5108 24.1384 41.0278 23.3997 40.9012 22.6188C40.3314 19.2736 38.7484 16.2238 36.3318 13.8072C33.9152 11.3906 30.8655 9.80768 27.5202 9.23782C26.7393 9.11119 26.0111 9.62828 25.874 10.3986C25.7368 11.169 26.2433 11.9182 27.0242 12.0449Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M49.9469 22.2045C49.0077 16.6959 46.4117 11.6833 42.4227 7.69433C38.4337 3.70536 33.4211 1.10936 27.9126 0.170157C27.1422 0.0329698 26.4141 0.560612 26.2769 1.33097C26.1502 2.11188 26.6673 2.84003 27.4482 2.97721C32.3659 3.81089 36.8508 6.14307 40.4177 9.69937C43.9845 13.2662 46.3062 17.7512 47.1398 22.6688C47.2559 23.3653 47.8574 23.8507 48.5434 23.8507C48.6278 23.8507 48.7017 23.8402 48.7861 23.8296C49.5564 23.7136 50.0841 22.9749 49.9469 22.2045Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <h3 className="text-xl font-semibold mb-5 md:mb-2">
                    Phone Number
                  </h3>

                  <p className="text-gray-300 text-lg">+91 7679 83607</p>

                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-40 w-px bg-gray-800"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 block md:hidden   w-60 h-px "></div>

                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 text-blue-400 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="51"
                      viewBox="0 0 50 51"
                      fill="none"
                    >
                      <path
                        d="M45.6055 7.57031H4.39453C1.9665 7.57031 0 9.54902 0 11.9648V38.332C0 40.7622 1.98096 42.7266 4.39453 42.7266H45.6055C48.0132 42.7266 50 40.7705 50 38.332V11.9648C50 9.55332 48.0413 7.57031 45.6055 7.57031ZM44.99 10.5C44.0922 11.3931 28.6409 26.763 28.1074 27.2937C27.2773 28.1237 26.1738 28.5808 25 28.5808C23.8262 28.5808 22.7227 28.1236 21.8898 27.2909C21.5311 26.934 6.25029 11.7338 5.00996 10.5H44.99ZM2.92969 37.7357V12.563L15.5896 25.1562L2.92969 37.7357ZM5.01182 39.7969L17.6668 27.2224L19.821 29.3652C21.2044 30.7486 23.0437 31.5104 25 31.5104C26.9563 31.5104 28.7956 30.7486 30.1763 29.368L32.3332 27.2224L44.9882 39.7969H5.01182ZM47.0703 37.7357L34.4104 25.1562L47.0703 12.563V37.7357Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <h3 className="text-2xl font-semibold mb-5 md:mb-2">
                    Email Address
                  </h3>
                  <p className="text-gray-300 text-lg">
                    info@shrote.com
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 text-blue-400 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <path
                        d="M41.9192 18.5952C41.9192 27.488 25.8478 48.9523 25.8478 48.9523C25.8478 48.9523 9.77637 27.488 9.77637 18.5952C9.77637 14.3328 11.4696 10.2449 14.4836 7.23095C17.4976 4.21698 21.5854 2.52374 25.8478 2.52374C30.1102 2.52374 34.198 4.21698 37.212 7.23095C40.226 10.2449 41.9192 14.3328 41.9192 18.5952V18.5952Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M25.8474 23.9523C28.806 23.9523 31.2045 21.5538 31.2045 18.5952C31.2045 15.6365 28.806 13.238 25.8474 13.238C22.8887 13.238 20.4902 15.6365 20.4902 18.5952C20.4902 21.5538 22.8887 23.9523 25.8474 23.9523Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 md:mb-1">
                      Address
                    </h3>
                    <p className="text-gray-300 text-lg">
                      25th Main Rd, Putlanpalya, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560041
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-1 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 
                   text-white placeholder-gray-400 focus:outline-none 
                   focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 
                 text-white placeholder-gray-400 focus:outline-none 
                 focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Phone No"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 
                 text-white placeholder-gray-400 focus:outline-none 
                 focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-[10px] px-6 py-4 
               text-white placeholder-gray-400 focus:outline-none 
               focus:border-blue-400 transition-colors"
                >
                  <option value="">Select Service</option>
                  <option value="webDesign">Web Design</option>
                  <option value="webDevelopment">Web Development</option>
                  <option value="portalDevelopment">Portal Development</option>
                  <option value="eCommerceSolution">E-commerce Solution</option>
                  <option value="softwareDevelopment">
                    Software Development
                  </option>
                  <option value="applicationDevelopment">
                    Application Development
                  </option>
                  <option value="multimediaDevelopment">
                    Multimedia Development
                  </option>
                  <option value="seoSem">SEO/SEM</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 
                   text-white placeholder-gray-400 focus:outline-none 
                   focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 
                 text-white placeholder-gray-400 focus:outline-none 
                 focus:border-blue-400 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 
                 text-white placeholder-gray-400 focus:outline-none 
                 focus:border-blue-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-400 text-black font-semibold py-4 px-8 
               rounded-xl hover:bg-blue-300 transition-colors text-lg"
              >
                Submit Message
              </button>
            </form>

            {result && (
              <p className="text-center mt-4 text-sm text-gray-300">{result}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
