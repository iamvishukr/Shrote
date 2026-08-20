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
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#f5f9fd" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12">
          <div className="w-full lg:w-1/2 bg-white border border-[#e8f0f7] shadow-xl rounded-3xl p-6 md:p-10">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#0d2a4a]">Submit Application</h2>
              <p className="text-[13.5px] text-[#5a7a9a] mt-1">
                Join our engineering & creative team. Fill in your details below.
              </p>
            </div>

            {message && (
              <div
                className={`p-4 mb-6 rounded-xl text-center text-sm font-medium ${
                  message.includes("❌")
                    ? "bg-red-50 border border-red-200 text-red-600"
                    : "bg-[#eef7f5] border border-[#00A88F]/30 text-[#00A88F]"
                }`}
              >
                {message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-xs font-bold text-[#0d2a4a] mb-1.5"
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
                  className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-sm text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all ${
                    errors.name ? "border-red-500" : "border-[#e2eaf2]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 pl-1">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-[#0d2a4a] mb-1.5"
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
                  className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-sm text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all ${
                    errors.email ? "border-red-500" : "border-[#e2eaf2]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 pl-1">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="contact"
                  className="text-xs font-bold text-[#0d2a4a] mb-1.5"
                >
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  placeholder="10-digit mobile number"
                  value={formData.contact}
                  required
                  onChange={handleChange}
                  className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-sm text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all ${
                    errors.contact ? "border-red-500" : "border-[#e2eaf2]"
                  }`}
                />
                {errors.contact && (
                  <p className="text-red-500 text-xs mt-1 pl-1">{errors.contact}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="address"
                  className="text-xs font-bold text-[#0d2a4a] mb-1.5"
                >
                  City / Location <span className="text-red-500">*</span>
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  required
                  placeholder="Current city or location"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-sm text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all ${
                    errors.address ? "border-red-500" : "border-[#e2eaf2]"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1 pl-1">{errors.address}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="qualification"
                  className="text-xs font-bold text-[#0d2a4a] mb-1.5"
                >
                  Qualification <span className="text-red-500">*</span>
                </label>
                <input
                  id="qualification"
                  type="text"
                  name="qualification"
                  placeholder="Highest degree / qualification"
                  value={formData.qualification}
                  required
                  onChange={handleChange}
                  className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-sm text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all ${
                    errors.qualification ? "border-red-500" : "border-[#e2eaf2]"
                  }`}
                />
                {errors.qualification && (
                  <p className="text-red-500 text-xs mt-1 pl-1">
                    {errors.qualification}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="jobTitle"
                  className="text-xs font-bold text-[#0d2a4a] mb-1.5"
                >
                  Applying For Role <span className="text-red-500">*</span>
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  name="jobTitle"
                  placeholder="e.g. React Developer, SEO Executive"
                  value={formData.jobTitle}
                  required
                  onChange={handleChange}
                  className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-sm text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all ${
                    errors.jobTitle ? "border-red-500" : "border-[#e2eaf2]"
                  }`}
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-xs mt-1 pl-1">{errors.jobTitle}</p>
                )}
              </div>

              <div className="md:col-span-2 flex flex-col">
                <label
                  htmlFor="skills"
                  className="text-xs font-bold text-[#0d2a4a] mb-1.5"
                >
                  Key Skills <span className="text-red-500">*</span>
                </label>
                <input
                  id="skills"
                  type="text"
                  name="skills"
                  placeholder="e.g. JavaScript, React.js, Tailwind CSS, Next.js"
                  value={formData.skills}
                  required
                  onChange={handleChange}
                  className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-sm text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all ${
                    errors.skills ? "border-red-500" : "border-[#e2eaf2]"
                  }`}
                />
                {errors.skills && (
                  <p className="text-red-500 text-xs mt-1 pl-1">{errors.skills}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-[#0d2a4a] mb-1.5">
                  Experience (Years)
                </label>
                <input
                  type="number"
                  name="experienceYears"
                  min="0"
                  placeholder="Years (e.g. 2)"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  className="w-full bg-[#f8fafc] border border-[#e2eaf2] rounded-xl px-4 py-3 text-sm text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-[#0d2a4a] mb-1.5">
                  Expected CTC
                </label>
                <input
                  type="text"
                  name="expectedCtc"
                  placeholder="e.g. 6 LPA"
                  value={formData.expectedCtc}
                  onChange={handleChange}
                  className="w-full bg-[#f8fafc] border border-[#e2eaf2] rounded-xl px-4 py-3 text-sm text-[#0d2a4a] placeholder-[#94a3b8] focus:border-[#00A88F] focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div className="md:col-span-2 flex flex-col">
                <label
                  htmlFor="resume"
                  className="text-xs font-bold text-[#0d2a4a] mb-1.5"
                >
                  Resume File (PDF/DOCX) <span className="text-red-500">*</span>
                </label>

                <label
                  htmlFor="resume"
                  className={`flex flex-col items-center justify-center w-full min-h-28 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
                    errors.resume
                      ? "border-red-400 bg-red-50/50"
                      : "border-[#ccdbe8] bg-[#f8fafc] hover:bg-[#eef7f5] hover:border-[#00A88F]"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-xs font-semibold text-[#0d2a4a]">
                      <span className="text-[#00A88F]">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-[11px] text-[#7a9ab5] mt-0.5">
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
                  <p className="text-xs text-[#00A88F] mt-2 font-bold">
                    Selected: {formData.resume.name}
                  </p>
                )}
                {errors.resume && (
                  <p className="text-red-500 text-xs mt-1 pl-1">{errors.resume}</p>
                )}
              </div>

              <div className="md:col-span-2 text-center mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-bold py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 text-[14.5px]"
                  style={{ background: "#00A88F" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#008f79")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#00A88F")}
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Job Application"}
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-[#e8f0f7] shadow-xl bg-white flex items-center justify-center p-4 sm:p-8">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Shrote Team Culture"
              className="w-full h-full max-h-[600px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
