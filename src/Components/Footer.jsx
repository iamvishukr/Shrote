import { Mail, Phone, X, XCircle } from "lucide-react";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container flex justify-center mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-blue-500">S</span>hrote
            </h2>
            <p className="mb-4">
              Elevate your online presence with our expert team's innovative
              designs and seamless functionality.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="flex gap-4 py-2">
              <Phone className="text-sm" height={20} /> 7377547571 / 7991133447
            </p>
            <p className="flex gap-4">
              <Mail className="text-sm" height={20} /> shroteconsultancyservices@gmail.com
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <span className="flex gap-4">
              <Link to="https://www.instagram.com/shroteconsultancy/?igsh=MTVhdTFjaWN0cjVncw%3D%3D"><BsInstagram className="text-2xl cursor-pointer" /></Link>
              <Link to="https://x.com/Shrote_services?t=RlqvR_syDwl03FuUpCTK9w&s=09&mx=2"><BsTwitter className="text-2xl cursor-pointer" /></Link>
              <Link to="https://www.linkedin.com/in/shrote-consultancy-services-54ba72337/"><BsLinkedin className="text-2xl cursor-pointer" /></Link>
              <Link to="https://www.facebook.com/people/Shrote/61569121190721/"><BsFacebook className="text-2xl cursor-pointer"/></Link>
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
