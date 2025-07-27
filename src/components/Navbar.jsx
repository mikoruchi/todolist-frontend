import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Ganti warna jika scroll lebih dari 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic navbar class
  const navbarClass = scrolled
    ? "bg-gray-900 shadow-md"
    : " from-purple-950 via-purple-900 to-gray-900";

  const textColor = scrolled ? "text-white" : "text-white";
  const hoverColor = scrolled ? "hover:text-yellow-400" : "hover:text-yellow-400";

  return (
    <nav className={`${navbarClass} fixed w-full top-0 left-0 z-50 transition-all duration-300`}>
      <div className="flex items-center justify-between py-7 px-6 md:px-10">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className={`font-semibold text-4xl ${scrolled ? "text-yellow-500" : "text-yellow-500"}`}>
            TodoList
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} focus:outline-none`}
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
          <div className="hidden md:flex space-x-5 items-center ml-15">
            <Link to="/" className={`${textColor} ${hoverColor} transition`}>
              Home
            </Link>
            <Link to="/about" className={`${textColor} ${hoverColor} transition`}>
              About
            </Link>
            <Link to="/contact" className={`${textColor} ${hoverColor} transition`}>
              Contact
            </Link>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-5">
          <Link
            to="/login"
            className={`px-4 py-1 rounded-sm transition ${
              scrolled
                ? "bg-yellow-500 text-white hover:bg-green-500"
                : "bg-yellow-500 text-white hover:bg-green-500"
            }`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`px-4 py-1 rounded-sm transition ${
              scrolled
                ? "bg-gray-600 text-white hover:bg-green-500"
                : "bg-gray-600 text-white hover:bg-green-500"
            }`}
          >
            Daftar
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`${navbarClass} md:hidden px-6 py-4 space-y-3`}>
          <Link to="/" className={`${textColor} ${hoverColor} block`}>
            Home
          </Link>
          <Link to="/about" className={`${textColor} ${hoverColor} block`}>
            About
          </Link>
          <Link to="/contact" className={`${textColor} ${hoverColor} block`}>
            Contact
          </Link>
          <div className="flex flex-col pt-1">
            <Link
              to="/login"
              className="flex-1 text-center bg-yellow-400 text-white px-4 py-2 rounded-sm hover:bg-yellow-500 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="flex-1 mt-4 text-center bg-yellow-400  text-white px-4 py-2 rounded-sm hover:bg-gray-700 transition"
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
