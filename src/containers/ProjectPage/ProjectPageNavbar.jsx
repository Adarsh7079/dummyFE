import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.webp";

const Navbar = ({ isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="sticky top-0 z-50 bg-black border-gold">
        <nav className="flex items-center justify-between p-4 text-transparent bg-clip-text bg-gold px-4 md:px-20">
          <div className="w-[50%] flex items-center">
            <img src={logo} alt="Logo" className="w-[30%] md:w-[23%] mr-4" />
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <p>|</p>
            <Link to="/city" className="hover:text-gray-300">
              City
            </Link>
            <p>|</p>
            <Link to="/projects/m3m/golfhills" className="hover:text-gray-300">
              Projects
            </Link>
            <p>|</p>
            <Link to="/blogs" className="hover:text-gray-300">
              Blogs
            </Link>
            <p>|</p>
            <Link to="/news" className="hover:text-gray-300">
              News & Updates
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Items */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-black text-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-6 p-4">
            <Link to="/" className="block p-4 hover:bg-gray-700" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/city" className="block p-4 hover:bg-gray-700" onClick={toggleMenu}>
              City
            </Link>
            <Link to="/projects/m3m/golfhills" className="block p-4 hover:bg-gray-700" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/blogs" className="block p-4 hover:bg-gray-700" onClick={toggleMenu}>
              Blogs
            </Link>
            <Link to="/news" className="block p-4 hover:bg-gray-700" onClick={toggleMenu}>
              News & Updates
            </Link>
          </div>
        </div>

        <hr className="gradient-hr border-gold" />

        {!isHomePage && (
          <div className="navigationSection flex space-x-3 text-TNavGrey pl-4 pt-2 pb-2 md:pl-24">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <p>&gt;</p>
            <Link to="/projects/m3m/golfhills" className="hover:text-gray-300">
              Projects
            </Link>
            <p>&gt;</p>
            <Link to="/" className="hover:text-gray-300">
              M3M
            </Link>
            <p>&gt;</p>
            <Link to="/projects/m3m/golfhills" className="hover:text-gray-300">
              Golf Hills
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
