import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t text-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://i0.wp.com/zfcthk.com/wp-content/uploads/2022/07/dummy-logo-1b.png?ssl=1"
                className="h-16"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900">
                Resources
              </h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="hover:text-orange-700 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-orange-700 transition"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900">
                Follow us
              </h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-700 transition">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-700 transition">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900">
                Legal
              </h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-700 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-700 transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 block text-center sm:text-left mb-4 sm:mb-0">
            © 2025{" "}
            <a
              href="https://hiteshchoudhary.com/"
              className="hover:text-orange-700"
              target="_blank"
              rel="noreferrer"
            ></a>
            . All Rights Reserved.
          </span>

          {/* Social Icons (SVG-based) */}
          <div className="flex justify-center space-x-6">
            {/* Facebook */}
            <a
              href="#"
              className="text-gray-500 hover:text-orange-700"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V117.68c0-25.35 12.42-50.06 52.24-50.06h40.42V3.11S293.64 0 263.16 0c-73.22 0-121.07 44.38-121.07 124.72v70.62H85.33V288h56.76v224h92.66V288z" />
              </svg>
            </a>

            {/* Discord */}
            <a
              href="#"
              className="text-gray-500 hover:text-orange-700"
              aria-label="Discord"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 245 240"
              >
                <path d="M104.4 104.2c-5.7 0-10.2 5-10.2 11.2s4.6 11.2 10.2 11.2c5.7 0 10.3-5 10.3-11.2.1-6.2-4.5-11.2-10.3-11.2zm36.3 0c-5.7 0-10.2 5-10.2 11.2s4.6 11.2 10.2 11.2c5.7 0 10.3-5 10.3-11.2s-4.5-11.2-10.3-11.2z" />
                <path d="M189.5 20H55.5C43.1 20 33 30.2 33 42.7v154.7c0 12.5 10.1 22.7 22.5 22.7h112.7l-5.3-18.6 12.8 11.8 12.1 11.1 21.5 19.7V42.7c0-12.5-10.1-22.7-22.5-22.7z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="text-gray-500 hover:text-orange-700"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M459.4 151.7c.3 4.1.3 8.2.3 12.3 0 125.5-95.6 270.1-270.1 270.1-53.7 0-103.6-15.7-145.5-42.6 7.5.9 15.1 1.2 22.6 1.2 44.6 0 85.5-15.1 118.1-40.8-41.9-.8-77.1-28.4-89.3-66.4 5.8.9 11.6 1.5 17.7 1.5 8.5 0 16.6-1.2 24.3-3.3-43.7-8.7-76.5-47.3-76.5-93.5v-1.2c13 7.3 27.9 11.7 43.7 12.3-25.9-17.3-43-47.1-43-80.9 0-17.7 4.7-34.1 13.1-48.3 47.9 58.8 119.3 97.3 199.9 101.3-1.5-7-2.3-14.3-2.3-21.5 0-52.6 42.6-95.2 95.2-95.2 27.4 0 52.3 11.6 69.7 30.1 21.8-4.1 42.3-12.3 60.6-23.2-7.3 22.9-22.9 42.3-43.4 54.6 19.5-2.3 38.2-7.5 55.5-15.1-13.2 19.4-29.8 36.6-49 50.2z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="text-gray-500 hover:text-orange-700"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 .297C5.37.297 0 5.666 0 12.297c0 5.289 3.438 9.77 8.207 11.387.599.11.793-.26.793-.577v-2.234c-3.338.724-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.242 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.623-5.476 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 22.062 24 17.584 24 12.297 24 5.666 18.627.297 12 .297z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Dribbble */}
            <a
              href="#"
              className="text-gray-500 hover:text-orange-700"
              aria-label="Dribbble"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.89 4.255 10.745 9.84 11.78a12.01 12.01 0 0 0 1.13-.05 11.978 11.978 0 0 0 11.03-11.73A12 12 0 0 0 12 0zM2.24 12a9.748 9.748 0 0 1 2.008-5.963 21.26 21.26 0 0 1 6.08 5.427 48.28 48.28 0 0 0-7.78.536c-.03-.3-.04-.6-.04-.91zm9.76 9.76c-1.76-.01-3.42-.53-4.83-1.42.63-2.05 1.96-3.82 3.78-5.05 1.23 1.69 2.15 3.49 2.77 5.34-.58.17-1.19.27-1.72.33zm4.46-1.62a20.82 20.82 0 0 0-2.51-5.18c1.88-.2 3.89.05 5.7.67a9.785 9.785 0 0 1-3.2 4.51zm-5.17-7.34A23.15 23.15 0 0 0 6.5 6.6a9.8 9.8 0 0 1 13.44.47c-1.86 1.42-4.23 2.24-6.68 2.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
