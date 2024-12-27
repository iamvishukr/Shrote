import { Mail, Phone } from "lucide-react";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-blue-500">S</span>hrote
            </h2>
            <p className="mb-4">
              Elevate your online presence with our expert team's innovative
              designs and seamless functionality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Information</h4>
            <p className="flex gap-4 py-2">
              <Phone className="text-sm" height={20} /> 7377547571 / 7991133447
            </p>
            <p className="flex gap-4">
              <Mail className="text-sm" height={20} /> contact@Shrote.com
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <span className="flex gap-4">
              <BsInstagram className="text-2xl " />
              <BsLinkedin className="text-2xl " />
              <BsFacebook className="text-2xl "/>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} <strong>Shrote</strong>. All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
