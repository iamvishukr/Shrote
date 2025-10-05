"use client";

import { Eye, EyeOff, X } from "lucide-react";
import React, { useState } from "react";
import { getAuth, updatePassword } from "firebase/auth";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(true);

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      setMessage(" Passwords do not match!");
      return;
    }

    if (newPassword.length < 8) {
      setMessage(" Password must be at least 8 characters long.");
      return;
    }

    try {
      setLoading(true);
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        setMessage(" No user is currently signed in.");
        return;
      }

      await updatePassword(user, newPassword);
      setMessage(" Password updated successfully!");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert("Error updating password:", error);
      if (error.code === "auth/requires-recent-login") {
        setMessage(" Please re-login to change your password.");
      } else {
        setMessage(" Failed to update password. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="mb-6 w-full sm:w-[670px] rounded-[5px] shadow bg-white p-6">
  <h2 className="text-[18px] text-slate-600 font-medium mb-3">
    Change Password
  </h2>

  {showAlert && (
    <p className="text-orange-400 bg-orange-100 p-4 rounded-[5px] mb-4 flex justify-between items-start">
      <span>
        <span className="block font-medium text-[18px]">
          Ensure that these requirements are met
        </span>
        <span className="block mt-1 text-[15px]">
          Minimum 8 characters long, uppercase & symbol.
        </span>
      </span>

      <button
        onClick={() => setShowAlert(false)}
        className="ml-3 text-orange-300 hover:text-orange-800"
      >
        <X size={20} />
      </button>
    </p>
  )}

  {/* Inputs stack vertically on mobile */}
  <div className="flex flex-col sm:flex-row gap-4 w-full">
    {/* New Password */}
    <div className="relative w-full sm:w-1/2">
      <label className="font-medium text-gray-600">New Password</label>
      <input
        type={showPassword ? "text" : "password"}
        className="w-full p-2 pr-10 border border-brand rounded-[5px]"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 top-4 right-3 flex items-center text-gray-600"
      >
        {showPassword ? <EyeOff /> : <Eye />}
      </button>
    </div>

    {/* Confirm Password */}
    <div className="relative w-full sm:w-1/2">
      <label className="font-medium text-gray-600">Confirm Password</label>
      <input
        type={showConfirmPassword ? "text" : "password"}
        className="w-full p-2 pr-10 border border-brand rounded-[5px]"
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        className="absolute inset-y-0 top-4 right-3 flex items-center text-gray-600"
      >
        {showConfirmPassword ? <EyeOff /> : <Eye />}
      </button>
    </div>
  </div>

  {message && (
    <p className="mt-3 text-sm font-medium text-red-500">{message}</p>
  )}

  <button
    disabled={loading}
    className="mt-3 px-4 py-2.5 bg-[#7367F0] font-semibold text-[15px] text-white rounded-[5px] hover:bg-[#5a4de3] transition-colors duration-200 disabled:opacity-50"
    onClick={handlePasswordChange}
  >
    {loading ? "Updating..." : "Change Password"}
  </button>
</div>

  );
};

export default ChangePassword;
