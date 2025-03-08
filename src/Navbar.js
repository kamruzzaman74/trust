import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            Trust Builders
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <a href="/about" className="hover:text-yellow-300">About</a>
            <a href="/properties" className="hover:text-yellow-300">Properties</a>
            <a href="/contact" className="hover:text-yellow-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-700 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <a href="/" className="block px-6 py-3 text-lg hover:bg-blue-800">
          Home
        </a>
        <a href="/about" className="block px-6 py-3 text-lg hover:bg-blue-800">
          About
        </a>
        <a href="/properties" className="block px-6 py-3 text-lg hover:bg-blue-800">
          Properties
        </a>
        <a href="/contact" className="block px-6 py-3 text-lg hover:bg-blue-800">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
