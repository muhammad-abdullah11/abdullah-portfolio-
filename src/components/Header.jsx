import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import PorfilePic from "../assests/Abdullah_logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow-lg z-50 flex justify-between items-center px-6 py-4 ">
      {/* Left: Logo */}
      <img
        src={PorfilePic}
        alt="Abdullah Logo"
        className="h-[50px] w-auto object-contain"
      />

      {/* Center: Desktop Nav */}
      <nav className="hidden md:flex gap-6 font-medium">
        <Link to="/" className="hover:text-red-600 transition">About Me</Link>
        <Link to="/services" className="hover:text-red-600 transition">Services</Link>
        <Link to="/recent-work" className="hover:text-red-600 transition">Recent Work</Link>
        <Link to="/resume" className="hover:text-red-600 transition">Resume</Link>
        <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
      </nav>

      {/* Right: Download CV (always visible) */}
      <a
        href="/CV.docx"
        download
        className="hidden md:block px-6 py-2 rounded-lg bg-red-600 text-white text-sm md:text-base font-semibold hover:bg-red-700 transition"
      >
        Download CV
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-gray-700 z-[60]" // keep above overlay
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu}></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-start gap-6 p-6 mt-16 font-medium">
          <Link onClick={toggleMenu} to="/" className="hover:text-red-600">About Me</Link>
          <Link onClick={toggleMenu} to="/services" className="hover:text-red-600">Services</Link>
          <Link onClick={toggleMenu} to="/recent-work" className="hover:text-red-600">Recent Work</Link>
          <Link onClick={toggleMenu} to="/resume" className="hover:text-red-600">Resume</Link>
          <Link onClick={toggleMenu} to="/contact" className="hover:text-red-600">Contact</Link>

          <a
            href="/CV.docx"
            download
            className="mt-4 px-6 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
