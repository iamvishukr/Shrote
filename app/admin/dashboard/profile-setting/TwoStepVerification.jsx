"use client";

import { SquarePen, Trash2, X } from "lucide-react";
import React, { useState } from "react";

const EnableOtpModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white w-[600px] p-6  rounded-[8px] shadow-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <span className="flex flex-col items-center -mb-8 mt-8">
          <h2 className="text-2xl font-medium text-center   text-gray-700 mb-1">
            Enable One Time Password
          </h2>
          <p className="text-gray-500 text-[16px] mt-1 ">
            Verify Your Mobile Number for SMS
          </p>
        </span>
        <div className="p-12">
          <p className="text-gray-500  font-medium  text-[15px] mb-4">
            Enter your mobile phone number with country code and we will send
            you a verification code.
          </p>

          <label className="block text-gray-600  mb-1 text-[14px]">
            Phone Number
          </label>
          <div className="flex items-center border border-gray-300 rounded-[8px] overflow-hidden mb-3 h-[42px]">
            <span className="flex items-center gap-1 px-3 bg-gray-100 text-gray-600 text-sm h-full">
              <span className="font-semibold">US</span>
              <span className="text-gray-500">(+1)</span>
            </span>

            <input
              type="text"
              placeholder="202 555 0111"
              maxLength={10}
              pattern="\d*"
              inputMode="numeric"
              className="w-full px-3 py-1 outline-none text-sm h-full"
            />
          </div>

          <div className="flex justify-start space-x-3">
            <button className="px-5 py-2 bg-[#7367F0] text-white rounded-[8px] hover:bg-[#5a4de3]">
              Submit
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-gray-200 text-gray-600 rounded-[8px] hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TwoStepVerification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white w-full sm:w-[670px] shadow p-6 rounded-[5px]">
  <h2 className="text-gray-600 font-medium mb-1 text-[18px]">
    Two-steps verification
  </h2>
  <p className="text-gray-400 font-medium text-[15px] mb-4">
    Keep your account secure with authentication step.
  </p>

  <div className="mb-4">
    <label className="block text-gray-600 font-medium text-[15px] mb-2">
      SMS
    </label>
    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
      <input
        type="text"
        className="w-full sm:w-[500px] h-[45px] border rounded-[10px] px-3 placeholder:text-[15px]"
        placeholder="+1(968) 945-8832"
        value=""
        readOnly
      />

      <div className="flex gap-2 sm:gap-4">
        <button
          className="text-gray-400"
          onClick={() => setIsModalOpen(true)}
        >
          <SquarePen size={20} />
        </button>
        <button className="text-gray-400">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  </div>

  <p className="text-[15px] text-[#6D6B77] font-medium">
    Two-factor authentication adds an additional layer of security to your
    account by requiring  more than just a password to log in.{" "}
    <a href="#" className="text-[#7367F0] no-underline hover:underline">
      Learn more.
    </a>
  </p>

  {isModalOpen && <EnableOtpModal onClose={() => setIsModalOpen(false)} />}
</div>

  );
};

export default TwoStepVerification;
