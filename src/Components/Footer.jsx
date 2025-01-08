import { Phone, Mail } from "lucide-react";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="bubbles">
          {[...Array(128)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                "--size": `${2 + Math.random() * 4}rem`,
                "--distance": `${6 + Math.random() * 4}rem`,
                "--position": `${-5 + Math.random() * 95}%`,
                "--time": `${2 + Math.random() * 2}s`,
                "--delay": `${-1 * (2 + Math.random() * 2)}s`,
              }}
            />
          ))}
        </div>
        <div className="content">
          <footer className="text-white">
            <div className="container flex justify-center mx-auto px-4 py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Link to="/" className="text-4xl">
                    <span className="text-blue-400 mr-1">S</span>
                    <span id="logo">
                      <span className="mr-1">h</span>
                      <span className="mr-1">r</span>
                      <span className="mr-1">o</span>
                      <span className="mr-1">t</span>
                      <span className="mr-1">e</span>
                    </span>
                  </Link>
                  <p className="mb-4">
                    Elevate your online presence with our expert team's
                    innovative designs and seamless functionality.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                  <p className="flex items-center gap-4 py-2">
                    <Phone className="text-sm" size={20} /> +91 7667983607
                  </p>
                  <p className="flex items-center gap-4 ">
                    <Mail className="text-sm" size={20} /> info@shrote.com
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                  <span className="flex gap-4">
                    <Link
                      to="https://www.instagram.com/shroteconsultancy/?igsh=MTVhdTFjaWN0cjVncw%3D%3D"
                      aria-label="Instagram"
                    >
                      <BsInstagram className="text-2xl cursor-pointer" />
                    </Link>
                    <Link
                      to="https://x.com/Shrote_services?t=RlqvR_syDwl03FuUpCTK9w&s=09&mx=2"
                      aria-label="Twitter"
                    >
                      <FaXTwitter className="text-2xl cursor-pointer" />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/company/shrote-consultancy-services/"
                      aria-label="LinkedIn"
                    >
                      <BsLinkedin className="text-2xl cursor-pointer" />
                    </Link>
                    <Link
                      to="https://www.facebook.com/people/Shrote/61569121190721/"
                      aria-label="Facebook"
                    >
                      <BsFacebook className="text-2xl cursor-pointer" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className=" py-4">
              <div className="container mx-auto px-4 text-center">
                <p>
                  &copy; {new Date().getFullYear()} <strong>Shrote</strong>. All
                  Rights Reserved
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            ></feColorMatrix>
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Footer;
