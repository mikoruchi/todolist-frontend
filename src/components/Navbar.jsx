import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between py-5 px-6 md:px-60">
        {/* Logo & Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="font-bold text-3xl text-blue-400">TodoList</div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center ml-10">
            <Link
              to="/"
              className="text-white hover:text-blue-400 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-400 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Daftar
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 px-6 py-4 space-y-4">
          <Link to="/" className="block text-white hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" className="block text-white hover:text-blue-400">
            About
          </Link>
          <Link to="/contact" className="block text-white hover:text-blue-400">
            Contact
          </Link>
          <div className="flex flex-col pt-4 space-y-3">
            <Link
              to="/login"
              className="text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-center bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Daftar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
