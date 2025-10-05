"use client";
import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase"; 


const JoinOurTeam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    qualification: "",
    skills: "",
    experienceYears: "",
    experienceMonths: "",
    expectedCtc: "",
    jobTitle: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const role = urlParams.get("role");

      if (role) {
        
        const decodedRole = decodeURIComponent(role);
        setFormData((prev) => ({ ...prev, jobTitle: decodedRole }));
      }
      
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Enter a valid email";
    if (!formData.contact.trim())
      tempErrors.contact = "Contact number is required";
    else if (!/^[0-9]{10}$/.test(formData.contact))
      tempErrors.contact = "Enter a valid 10-digit number";
    if (!formData.address.trim()) tempErrors.address = "Address is required";
    if (!formData.qualification.trim())
      tempErrors.qualification = "Qualification is required";
    if (!formData.skills.trim()) tempErrors.skills = "Key skills are required";
    if (!formData.resume) tempErrors.resume = "Please upload your resume";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage("");

  // ✅ Run validation first
  const isValid = validate();
  if (!isValid) {
    setIsSubmitting(false);
    setMessage("Please fill all required fields ❌"); // Show realtime message
    return;
  }

  const submissionData = new FormData();
  Object.keys(formData).forEach((key) => {
    if (formData[key]) submissionData.append(key, formData[key]);
  });

  try {
    const res = await fetch("/api/uploadResume", {
      method: "POST",
      body: submissionData,
    });

    const data = await res.json();

    if (data.success) {
      setMessage("Form submitted successfully ✅");
      setFormData({
        name: "",
        email: "",
        contact: "",
        address: "",
        qualification: "",
        skills: "",
        experienceYears: "",
        experienceMonths: "",
        expectedCtc: "",
        jobTitle: "",
        resume: null,
      });
      const fileInput = document.getElementById("resume") ;
      if (fileInput) fileInput.value = "";
    } else {
      setMessage(`Submission failed: ${data.error} ❌`);
    }
  } catch (error) {
    
    setMessage("Plz Enter Valid Details");
  } finally {
    setIsSubmitting(false);
  }
};





  return (
    <div className="  from-blue-50 to-indigo-100 py-12 mb-[-200px] md:-mb-[170px] lg:-mb-[170px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch justify-between ">
          <div className="w-full lg:w-1/2 bg-gray-900  lg:mb-[150px] shadow-xl rounded-2xl p-6 ">
            {message && (
              <div
                className={`p-3 mb-6 rounded-xl text-center ${
                  message.includes("❌")
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border text-gray-300 border-gray-300 p-3 bg-slate-900 rounded-xl transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border bg-slate-900 text-gray-300 rounded-xl p-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="contact"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  placeholder="Enter your 10-digit contact number"
                  value={formData.contact}
                  required
                  onChange={handleChange}
                  className={`w-full border bg-slate-900 text-gray-300 rounded-xl p-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                    errors.contact ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.contact && (
                  <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  required
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full border bg-slate-900 text-gray-300 rounded-xl p-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="qualification"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Qualification <span className="text-red-500">*</span>
                </label>
                <input
                  id="qualification"
                  type="text"
                  name="qualification"
                  required
                  placeholder="Enter your highest qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className={`w-full border bg-slate-900 text-gray-300 rounded-xl p-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                    errors.qualification ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.qualification && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.qualification}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="skills"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Key Skills <span className="text-red-500">*</span>
                </label>
                <input
                  id="skills"
                  type="text"
                  name="skills"
                  required
                  placeholder="Enter your key skills (separated by commas)"
                  value={formData.skills}
                  onChange={handleChange}
                  className={`w-full border bg-slate-900 text-gray-300 rounded-xl p-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                    errors.skills ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.skills && (
                  <p className="text-red-500 text-xs mt-1">{errors.skills}</p>
                )}
              </div>
              {/* <div className="flex flex-col">
                <label
                  htmlFor="jobTitle"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Job Title
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  name="jobTitle"
                  placeholder="Applied for"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full border bg-slate-900 text-gray-300 border-gray-300 rounded-xl p-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div> */}

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-300 mb-1">
                  Experience <span className="text-gray-400">(optional)</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleChange}
                    className="w-full border bg-slate-900 text-gray-300 border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Years</option>
                    {[...Array(21).keys()].map((yr) => (
                      <option key={yr} value={yr} className="text-gray-300">
                        {yr} {yr === 1 ? "Year" : "Years"}
                      </option>
                    ))}
                  </select>
                  <select
                    name="experienceMonths"
                    value={formData.experienceMonths}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border text-gray-300 border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Months</option>
                    {[...Array(12).keys()].map((mo) => (
                      <option key={mo} value={mo}>
                        {mo} {mo === 1 ? "Month" : "Months"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="expectedCtc"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Expected CTC <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  id="expectedCtc"
                  type="text"
                  name="expectedCtc"
                  placeholder="Enter your expected CTC (e.g., 5 LPA)"
                  value={formData.expectedCtc}
                  
                  onChange={handleChange}
                  className="w-full border bg-slate-900 text-gray-300 border-gray-300 rounded-xl p-3 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="md:col-span-2 flex flex-col">
  <label
    htmlFor="resume"
    className="text-sm md:text-base font-medium text-gray-300 mb-1"
  >
    Resume <span className="text-red-500">*</span>
  </label>

  <label
    htmlFor="resume"
    className={`flex flex-col items-center justify-center w-full 
                min-h-32 sm:min-h-40 md:min-h-48 
                border-2  rounded-xl cursor-pointer 
                transition-all duration-200
                ${
                  errors.resume
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300  bg-slate-900 hover:bg-slate-800"
                }`}
  >
    <div className="flex flex-col items-center z-10 justify-center p-4 sm:p-6 md:p-8 text-center">
      <svg
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-xs sm:text-sm md:text-base text-gray-500">
        <span className="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
        PDF, DOC, DOCX (MAX. 5MB)
      </p>
    </div>

    <input
      id="resume"
      name="resume"
      type="file"
      onChange={handleChange}
      className="hidden"
      accept=".pdf,.doc,.docx"
      required
    />
  </label>

  {formData.resume && (
    <p className="text-sm sm:text-base md:text-lg text-blue-400 mt-2">
      {formData.resume.name}
    </p>
  )}
  {errors.resume && (
    <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
  )}
</div>


              <div className="md:col-span-2 text-center mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-950 text-white w-full py-3 rounded-xl hover:bg-[#0b1326] transition-all duration-200 font-medium text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2 mb-[150px] shadow-xl rounded-2xl  ">
            <img
              src="https://www.marswebsolution.com/images/job.png"
              alt="Team Collaboration"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
