export default function Footer() {
  return (
    <footer className="  ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-between ">
          
          {/* Left Section */}
          <div className="text-gray-500 text-[14px] font-medium">
            © {new Date().getFullYear()}, made with ❤️ by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline opacity-80"
            >
              Marsweb
            </a>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex space-x-6 text-sm text-gray-600 mt-2 md:mt-0">
            <a href="#" target="_blank" className="text-indigo-600 font-medium opacity-80 hover:text-indigo-600">
              License
            </a>
            <a href="#" target="_blank" className="text-indigo-600 font-medium opacity-80 hover:text-indigo-600">
              More Themes
            </a>
            <a href="#" target="_blank" className="text-indigo-600 font-medium opacity-80 hover:text-indigo-600">
              Documentation
            </a>
            <a
              href="#"
              target="_blank"
              className="hidden sm:inline text-indigo-600 font-medium opacity-80 hover:text-indigo-600"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
