import Link from "next/link";
import React from "react";

function MapSection() {
  return (
    <section className="px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-3xl md:p-6 md:p-8 border border-gray-800 overflow-hidden">
          {/* Google Map Embed */}
          <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.7587890958227!2d77.59261257502449!3d12.92035529087414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15088e245cc9%3A0x85cd7f62dd8f3530!2sShrote%20Technology!5e0!3m2!1sen!2sin!4v1728127399999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />

            {/* Address & Links Card */}
            <div className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-[85%] sm:max-w-xs hidden sm:block">
              <div className="flex items-start gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                <p className="text-gray-900 text-sm sm:text-base">
                  25th Main Rd, Putlanpalya, Jayanagara 9th Block, Jayanagar,
                  Bengaluru, Karnataka 560041
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">
                Bengaluru, Karnataka, India
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.google.com/maps/dir//25th+Main+Rd,+Putlanpalya,+Jayanagara+9th+Block,+Jayanagar,+Bengaluru,+Karnataka+560041/@12.9203424,77.5124033,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bae15088e245cc9:0x85cd7f62dd8f3530!2m2!1d77.5948052!2d12.9203553!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Directions
                </Link>
                <Link
                  href="https://www.google.com/maps/place/Shrote+Technology/@20.4243735,66.7961528,5z/data=!4m10!1m2!2m1!1sshrote+technology!3m6!1s0x3bae15088e245cc9:0x85cd7f62dd8f3530!8m2!3d12.9203553!4d77.5948052!15sChFzaHJvdGUgdGVjaG5vbG9neVoTIhFzaHJvdGUgdGVjaG5vbG9neZIBEHNvZnR3YXJlX2NvbXBhbnmqAUgKDS9nLzExeWZ6M2c0emYQATIeEAEiGrFpGplIpiC8ertmIyUvJj_7jLpxbSnTi6LSMhUQAiIRc2hyb3RlIHRlY2hub2xvZ3ngAQA!16s%2Fg%2F11yfz3g4zf!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                >
                  View larger map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
