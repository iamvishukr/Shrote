import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="border-t border-gray-800 w-full mb-16"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-8 mb-8">
          <div className="space-y-6">
            <Link href="#" className="flex items-center">
              <img
                src="/shrote_logo.png"
                alt="Shrote Logo"
              />
            </Link>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 border border-blue-400 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-lg"> +91 7679 83607</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 border border-blue-400 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-lg">
                 info@shrote.com 
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex flex-row md:ml-28 justify-center gap-6 md:gap-46">
            <div className=" md:w-1/2">
              <h3 className="text-xl sm:text-xl font-semibold mb-4 sm:mb-6">
                Quick Link
              </h3>
              <ul className="space-y-1 sm:space-y-2 ">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-1/2">
              <h3 className="text-xl sm:text-xl font-semibold mb-4 sm:mb-6">
                Support
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            {" "}
            <h3 className=" text-[18px] md:text-xl font-semibold mb-6">
              {" "}
              Subscribe Our Newsletter{" "}
            </h3>{" "}
            <div className="space-y-4">
              {" "}
              <div className="relative w-full">
                {" "}
                <div className="flex flex-col md:flex-row w-full max-w-full">
                  {" "}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow py-3 bg-gray-800 border border-gray-700 rounded-t-lg md:rounded-l-lg md:rounded-tr-none focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 w-full"
                  />{" "}
                  <button className="px-4 py-3 bg-blue-400 text-black font-semibold rounded-b-lg md:rounded-r-lg md:rounded-bl-none hover:bg-blue-500 transition-colors shrink-0">
                    {" "}
                    Subscribe{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              {/* <div className="flex space-x-3 mt-6">
                {" "}
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  {" "}
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />{" "}
                  </svg>{" "}
                </Link>{" "}
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  {" "}
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />{" "}
                  </svg>{" "}
                </Link>{" "}
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  {" "}
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />{" "}
                  </svg>{" "}
                </Link>{" "}
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  {" "}
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />{" "}
                  </svg>{" "}
                </Link>{" "}
              </div>{" "} */}
            </div>{" "}
          </div>{" "} 
        </div>{" "}
        <div className="border-t border-gray-800 pt-4 md:pt-0 -mb-6 md:-mb-8 relative">
          <div className="flex items-center justify-between">
           
            <div className="absolute left-0 right-0 flex mb-8 md:mb-0  justify-center">
              <p className="electromotion text-center">
                copyrights ©
                <span className="text-blue-400"> Shrote Technology</span>. All
                rights reserved.
              </p>
            </div>

            
            <div className="ml-auto z-10 mt-[60px] md:mt-0">
              <div className="flex space-x-3 ">
                {/* <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.920-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </Link> */}
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
