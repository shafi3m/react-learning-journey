import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://i0.wp.com/zfcthk.com/wp-content/uploads/2022/07/dummy-logo-1b.png?ssl=1"
            className="h-12 sm:h-16"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 font-medium">
          {["/", "/about", "/contact", "/github"].map((path, i) => {
            const labels = ["Home", "About", "Contact", "GitHub"];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition duration-200 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700"
                    } hover:text-orange-600`
                  }
                >
                  {labels[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            to="#"
            className="text-gray-800 hover:text-orange-600 font-medium transition"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="bg-orange-700 hover:bg-orange-800 text-white px-5 py-2 rounded-full font-medium transition"
          >
            Get started
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 pb-4 pt-2 shadow-md">
          <ul className="flex flex-col space-y-4 font-medium">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-700"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-700"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-700"
            >
              Contact
            </NavLink>
            <NavLink
              to="/github"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-700"
            >
              GitHub
            </NavLink>
            <div className="flex flex-col gap-2 pt-4">
              <Link
                to="#"
                className="text-gray-800 hover:text-orange-600 font-medium"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="bg-orange-700 text-white px-4 py-2 rounded-full hover:bg-orange-800 font-medium"
              >
                Get started
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
