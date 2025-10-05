"use client";

import { useState } from "react";
import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    "Hello, I'm interested in your event services!"
  );

  const handleSend = () => {
    const phone = "917667983607";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-[#087525] text-white p-[12px] rounded-full  hover:bg-[#128C7E] transition-transform duration-300 z-50"
      >
        <FaWhatsapp size={28} />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right:1 md:right-5 w-80 bg-white rounded-[20px] border-t border-[#0f1f03] shadow-2xl z-50 overflow-hidden">
          <div className="flex items-center justify-between bg-[#075E54]  text-white pt-3 pl-4 pr-3 pb-2">
            <div>
              <h4 className="badboy flex items-center gap-2">
                <FaWhatsapp size={28} />
                Shrote Team
              </h4>
              <p className="text-xs text-gray-200">
                Typically replies within a minute
              </p>
            </div>

            <button onClick={() => setIsOpen(false)} className=" -mt-16 -mr-2">
              <IoClose size={20} />
            </button>
          </div>

          <div className="p-3 bg-gray-100 h-48 overflow-y-auto text-sm">
            <div className="bg-white p-2 rounded-[10px] shadow w-fit text-gray-800 mb-2">
              Hi there! How can we help you today?
            </div>

            {message && (
              <div className="bg-green-100 p-2 rounded-[10px] shadow ml-auto text-gray-800 break-words max-w-[80%]">
                {message}
              </div>
            )}
          </div>

          <div className="flex items-center bg-white p-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border rounded-full px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-[#25D366] text-white p-2 rounded-full "
            >
              <IoMdSend size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
