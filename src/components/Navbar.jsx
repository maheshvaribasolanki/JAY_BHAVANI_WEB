import React, { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg px-4 md:px-10 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <IoIosHome className="text-blue-600 text-4xl" />
        <span className="text-3xl font-extrabold bg-blue-600 bg-clip-text text-transparent tracking-wide">
          Jay Bhavani
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 font-serif">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="relative inline-block text-blue-700 font-semibold transition duration-300 hover:text-blue-600 group"
          >
            {item}
            <span className="absolute left-0 bottom-0 border-b-2 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}

        <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 font-serif">
          Login
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiOutlineX className="text-3xl text-blue-600" />
          ) : (
            <HiOutlineMenu className="text-3xl text-blue-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-blue-700 font-semibold hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 font-serif">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
