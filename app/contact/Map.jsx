import Link from "next/link";
import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

function MapSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm overflow-hidden"
        style={{ border: "1px solid #e8f0f7" }}
      >
        {/* Google Map Embed */}
        <div className="relative w-full h-80 sm:h-96 md:h-[480px] rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.7587890958227!2d77.59261257502449!3d12.92035529087414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15088e245cc9%3A0x85cd7f62dd8f3530!2sShrote%20Technology!5e0!3m2!1sen!2sin!4v1728127399999!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl w-full h-full"
          />

          {/* Address Card */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl max-w-xs border border-white/60 hidden sm:block">
            <div className="flex items-start gap-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                style={{ background: "#00A88F" }}
              >
                <MapPin size={16} />
              </div>
              <div>
                <h4 className="font-bold text-[#0d2a4a] text-[14px]">Bengaluru HQ</h4>
                <p className="text-[#5a7a9a] text-[12px] leading-relaxed mt-1">
                  25th Main Rd, Jayanagara 9th Block, Bengaluru, Karnataka 560041
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-3 border-t border-gray-100 text-[12px] font-semibold">
              <Link
                href="https://maps.google.com/?q=Shrote+Technology+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#00A88F] hover:underline"
              >
                <Navigation size={12} /> Directions
              </Link>
              <Link
                href="https://maps.google.com/?q=Shrote+Technology+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#0d2a4a] hover:underline ml-auto"
              >
                <ExternalLink size={12} /> View Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;

