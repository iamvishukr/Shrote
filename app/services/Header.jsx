"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setIsAtTop(scrollPosition < 10);
      setIsScrolled(scrollPosition > 10);
    };
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Web Design", href: "/web-design" },
        { name: "Web Development", href: "/web-development" },
        { name: "Portal Development", href: "/portal-development" },
        { name: "E-commerce Solution", href: "/ecommerce-solution" },
        { name: "Software Development", href: "/software-development" },
        { name: "Data Science Solution", href: "/data-science-solution" },
        { name: "Application Development", href: "/application-development" },
        { name: "SEO & SEM", href: "/seo-sem" },
        { name: "Bulk SMS", href: "/bulk-sms" },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    
    
    {
      name: "Career",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Join Our Team", href: "/join-our-team" },
        { name: "Current Openings", href: "/current-opening" },
        { name: "Internships", href: "/internship" },
      ],
    },
    { name: "Contact us", href: "/contact" },
    
  ];

  const toggleMobileMenu = (index) => {
    if (mobileActiveMenu === index) {
      setMobileActiveMenu(null);
    } else {
      setMobileActiveMenu(index);
    }
  };

  
  const handleNavigation = (href) => {
    window.location.href = href;
    setIsMenuOpen(false);
  };

  return (
    <>
      
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header
        className={`fixed bg-black top-0 w-full  pb-[6px] z-40 pt-[12px] pb-[12px] transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 h-full">
          <div
            className={`flex items-center justify-between md:justify-start h-full ${
              isScrolled ? "py-2" : "py-4 sm:py-6"
            }`}
          >
          
            <div className="flex bg-black items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="https://www.marswebsolution.com/images/logo.png"
                  alt="Artistic Logo"
                  className={`transition-all duration-300 ${
                    isScrolled ? "h-12 w-auto" : "h-16 w-auto sm:h-20 md:h-16"
                  }`}
                />
              </Link>
            </div>

            
            <nav className="hidden md:flex items-center  ml-10">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative group mr-3 md:mr-4 lg:mr-6 last:mr-0"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 md:space-x-2 text-white hover:text-blue-400 transition-colors duration-300 ${
                      isScrolled ? "py-1" : "py-2 md:py-3"
                    } text-sm md:text-base`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 min-w-64  bg-black rounded-[25px] shadow-lg py-2 transition-all duration-300 ${
                        activeDropdown === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <div
                          key={dropdownItem.name}
                          className="relative group/sub"
                        >
                          <Link
                            href={dropdownItem.href}
                            className="flex items-center justify-between text-white px-5 py-2.5 text-black hover:text-white hover:bg-slate-900 rounded-[25px] transition-colors duration-200 font-semibold text-base"
                          >
                            <span>{dropdownItem.name}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            
            <div className="flex items-center md:ml-auto">
              
              <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
                {/* <Link
                  href="https://x.com/MARS_Web"
                  className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 ${
                    isScrolled ? "scale-90" : "scale-100"
                  }`}
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/MARSWebSolutions/"
                  className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 ${
                    isScrolled ? "scale-90" : "scale-100"
                  }`}
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/shrotetechnology/"
                  className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 ${
                    isScrolled ? "scale-90" : "scale-100"
                  }`}
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link> */}

               
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 ml-2 ${
                    isScrolled ? "scale-90" : "scale-100"
                  }`}
                  aria-label="Open sidebar"
                >
                  <div className="grid grid-cols-3 grid-rows-3 gap-1.5 w-5 h-5">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-current rounded-full"
                      ></div>
                    ))}
                  </div>
                </button>
              </div>

              
              <button
                className="md:hidden text-blue-400 p-2 hover:bg-blue-500 rounded-lg transition-colors duration-200 ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                style={{ borderRadius: "5px" }}
              >
                {isMenuOpen ? (
                  <X size={24} className="w-6 h-6 sm:w-7 sm:h-7" />
                ) : (
                  <Menu size={24} className="w-6 h-6 sm:w-7 sm:h-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-gray-900 z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full  overflow-y-auto">
          
          <div className=" bg-black px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="https://www.marswebsolution.com/images/logo.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-white transition-colors duration-200"
            >
              <X size={28} />
            </button>
          </div>

          
          <nav className="px-4 py-6">
            {navItems.map((item, index) => (
              <div key={item.name} className="mb-2">
                
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer ${
                    mobileActiveMenu === index
                      ? "bg-gray-800"
                      : "hover:bg-gray-800"
                  }`}
                  onClick={() =>
                    item.hasDropdown
                      ? toggleMobileMenu(index)
                      : handleNavigation(item.href)
                  }
                >
                  <span className="flex-1 text-white font-medium text-lg">
                    {item.name}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={22}
                      className={`transition-transform duration-300 text-blue-400 ${
                        mobileActiveMenu === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                
                {item.hasDropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileActiveMenu === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-blue-400 ml-4">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium text-base"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavigation(dropdownItem.href);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          
          <div className="px-6 py-4 border-t border-gray-700">
            <div className="flex justify-center space-x-4">
              <Link
                href="https://x.com/Shrote_services"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/people/Shrote/61569121190721/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/shrotetechnology/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

     
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

     
      <div
        className={`fixed top-0 right-0 h-screen w-80 sm:w-96 bg-gray-900 z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
         
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-300 z-10"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>

          
          <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-16 pb-8">
            <div className="space-y-6 md:space-y-8">
             
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-black" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
                  Phone
                </h3>
                <Link
                  href="tel:+91 7679 83607"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  +91 7679 83607
                </Link>
              </div>

              <div className="border-t border-gray-700"></div>

              
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-black" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
                  Email
                </h3>
                <Link
                  href="mailto:info@shrote.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                >
                  info@shrote.com
                </Link>
              </div>

              <div className="border-t border-gray-700"></div>

              
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-black" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
                  Address
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  #1204, 1st Floor, ASHVA Building, 26th Main, 41st Cross,
                  Jayanagar 9th Block Bangalore-560 069, Karnataka, India
                </p>
              </div>

              <div className="border-t border-gray-700"></div>

              
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                  Stay Connected
                </h3>
                <div className="flex justify-center space-x-3 md:space-x-4">
                  <Link
                    href="https://x.com/Shrote_services"
                    className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.facebook.com/people/Shrote/61569121190721/"
                    className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/shrotetechnology/"
                    className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}