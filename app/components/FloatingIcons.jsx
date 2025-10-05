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
      <div className="w-[50px] fixed top-1/2 right-0 bg-[#222222] transform -translate-y-1/2 border-t border-l border-b border-gray-600 rounded-l-[10px] z-[10000]">
        <button
          onClick={() => setShowForm(true)}
          className="w-full h-[50px] flex items-center justify-center border-b border-gray-600"
        >
          <MailIcon size={25} className="text-gray-300" />
        </button>

        <a
          href="tel:+1234567890"
          className="w-full h-[50px] flex items-center justify-center"
        >
          <PhoneCall size={25} className="text-gray-300" />
        </a>
      </div>

      <div
        className={`fixed top-1/2 right-0 w-64 bg-slate-900 rounded-l-xl transform transition-transform duration-300 z-[10001] ${
          showForm ? "translate-x-0" : "translate-x-full"
        } -translate-y-1/2`}
      >
        <div className="flex justify-between items-center p-3 border-b border-gray-700">
          <h2 className="text-lg font-bold text-white">Contact Us</h2>
          <button
            onClick={() => setShowForm(false)}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✖
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-4 flex flex-col gap-2"
          noValidate
        >
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
            className={`border p-2 rounded placeholder-gray-400 bg-slate-800 text-white ${
              errors.name ? "border-red-500" : "border-gray-600"
            }`}
          />

          {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`border p-2 rounded placeholder-gray-400 bg-slate-800 text-white ${
              errors.email ? "border-red-500" : "border-gray-600"
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email}</p>
          )}

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
            className={`border p-2 rounded placeholder-gray-400 bg-slate-800 text-white ${
              errors.mobile ? "border-red-500" : "border-gray-600"
            }`}
          />

          {errors.mobile && (
            <p className="text-red-400 text-xs">{errors.mobile}</p>
          )}

          <textarea
            name="message"
            rows="3"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`border p-2 rounded placeholder-gray-400 bg-slate-800 text-white ${
              errors.message ? "border-red-500" : "border-gray-600"
            }`}
          />
          {errors.message && (
            <p className="text-red-400 text-xs">{errors.message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-900 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {success && <p className="text-sm text-green-400">{success}</p>}
        </form>
      </div>
    </>
  );
}
