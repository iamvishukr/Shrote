"use client";

import { useState } from "react";
import { MailIcon, PhoneCall } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function FloatingIcons() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error as user types
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
    if (!formData.mobile.trim())
      tempErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile))
      tempErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.message.trim())
      tempErrors.message = "Message cannot be empty";
    else if (formData.message.length < 10)
      tempErrors.message = "Message must be at least 10 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return; // Stop if validation fails

    setLoading(true);
    setSuccess(null);

    try {
      await addDoc(collection(db, "sideEnq"), {
        ...formData,
        timestamp: new Date(),
      });

      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "41cea524-32f1-47ce-8c82-995b98110cbc",
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            message: formData.message,
            subject: "New Floating Contact Inquiry",
            from_name: "Shrote Website - Floating Sidebar Contact"
          }),
        });
      } catch (err) {
        console.error("Web3Forms submission failed:", err);
      }

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } catch (error) {
      console.log("Error adding document: ", error);
      setSuccess("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-[10000] flex flex-col items-center bg-slate-950/80 backdrop-blur-md border-t border-l border-b border-white/10 rounded-l-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden">
        <button
          onClick={() => setShowForm(true)}
          className="w-12 h-12 flex items-center justify-center border-b border-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-300"
          aria-label="Contact Form"
        >
          <MailIcon size={20} className="transition-transform duration-300 hover:scale-110" />
        </button>

        <a
          href="tel:+917667983607"
          className="w-12 h-12 flex items-center justify-center hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-300"
          aria-label="Call Us"
        >
          <PhoneCall size={20} className="transition-transform duration-300 hover:scale-110" />
        </a>
      </div>

      <div
        className={`fixed top-1/2 right-0 w-80 max-w-[90vw] bg-slate-950/95 backdrop-blur-lg border-t border-l border-b border-white/10 rounded-l-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] transform transition-all duration-500 ease-out z-[10001] ${
          showForm ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } -translate-y-1/2`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-base font-semibold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Quick Enquiry</h2>
          <button
            onClick={() => setShowForm(false)}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
          >
            ✖
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-5 flex flex-col gap-4"
          noValidate
        >
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => {
                const value = e.target.value;

                const regex = /^[A-Za-z\s]*$/;
                if (regex.test(value)) {
                  handleChange(e);
                }
              }}
              className={`w-full px-3 py-2 bg-slate-900/50 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 ${
                errors.name ? "border-red-500/60 focus:border-red-500/60" : "border-white/10 focus:border-blue-500/60"
              }`}
            />
            {errors.name && <p className="text-red-400 text-xs pl-1">{errors.name}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-slate-900/50 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 ${
                errors.email ? "border-red-500/60 focus:border-red-500/60" : "border-white/10 focus:border-blue-500/60"
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs pl-1">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="mobile"
              placeholder="Your Mobile"
              value={formData.mobile}
              maxLength={13}
              onChange={(e) => {
                const value = e.target.value;

                const regex = /^[0-9]*$/;
                if (regex.test(value)) {
                  handleChange(e);
                }
              }}
              className={`w-full px-3 py-2 bg-slate-900/50 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 ${
                errors.mobile ? "border-red-500/60 focus:border-red-500/60" : "border-white/10 focus:border-blue-500/60"
              }`}
            />
            {errors.mobile && (
              <p className="text-red-400 text-xs pl-1">{errors.mobile}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              name="message"
              rows="3"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-slate-900/50 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 resize-none ${
                errors.message ? "border-red-500/60 focus:border-red-500/60" : "border-white/10 focus:border-blue-500/60"
              }`}
            />
            {errors.message && (
              <p className="text-red-400 text-xs pl-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-2 rounded-lg hover:opacity-95 disabled:opacity-50 transition-all duration-300 text-sm shadow-[0_4px_20px_0_rgba(59,130,246,0.3)] hover:shadow-[0_4px_25px_0_rgba(59,130,246,0.5)] active:scale-98"
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>

          {success && (
            <p className={`text-center text-sm font-medium ${success.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
              {success}
            </p>
          )}
        </form>
      </div>
    </>
  );
}
