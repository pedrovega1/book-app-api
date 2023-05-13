import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="flex items-center justify-between bg-white p-6">
      <div className="flex items-center">
        <Link to="/" className="navbar-brand flex">
          <img
            src="https://www.winnipegfreepress.com/wp-content/uploads/sites/2/2022/07/WFPbookClubLogo.png"
            alt="site logo"
            className="h-24"
          />
          <span className="text-uppercase fw-7 fs-24 ls-1 mt-7">BookHub</span>
        </Link>
      </div>
      <div className="hidden lg:flex items-center justify-end w-full ">
        <ul className="flex lg:flex-row lg:items-center">
          <li className="lg:mr-10 hover:text-gray-900">
            <Link
              to="/"
              className="block lg:inline-block uppercase hover:scale-95"
            >
              Home
            </Link>
          </li>
          <li className="lg:mx-10 hover:text-gray-900 ">
            <Link
              to="book"
              className="block lg:inline-block uppercase hover:scale-95"
            >
              Book
            </Link>
          </li>
          <li className="lg:ml-10 hover:text-gray-900">
            <Link
              to="about"
              className="block lg:inline-block uppercase hover:scale-95"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      {/* MOBILE NAVBAR */}
      <div className="flex items-center">
        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} className="text-gray-700 " />
        </button>

        <ul
          className={`${
            showMenu
              ? "fixed bottom-0 right-0 w-64 rounded-lg h-screen bg-white z-10 transform translate-x-0 transition ease-in duration-300ы"
              : "fixed bottom-0 right-0 w-64 rounded-lg h-screen bg-white z-10 transform translate-x-full transition ease-out duration-300"
          }flex lg:flex-row lg:items-center mt-4 lg:mt-0 `}
        >
          <button
            className="lg:hidden"
            onClick={closeMenu}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="text-gray-700 transform hover:scale-150 transition duration-500"
            />
          </button>
          <li className="lg:mr-10 hover:text-gray-900">
            <Link to="/" className="block lg:inline-block uppercase">
              Home
            </Link>
          </li>
          <li className="lg:mx-10 hover:text-gray-900 ">
            <Link to="book" className="block lg:inline-block uppercase">
              Book
            </Link>
          </li>
          <li className="lg:ml-10 hover:text-gray-900">
            <Link to="about" className="block lg:inline-block uppercase">
              About
            </Link>
          </li>
        </ul>
      </div>
      {showMenu && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-0"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
