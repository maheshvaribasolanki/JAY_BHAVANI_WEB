import React, { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="w-full bg-white shadow-lg px-4 md:px-10 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <IoIosHome className="text-blue-600 text-4xl" />
        <span className="text-3xl font-extrabold bg-blue-600 bg-clip-text text-transparent tracking-wide">
          Jay Bhavani
        </span>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 font-serif">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="relative inline-block text-blue-700 font-semibold transition duration-300 hover:text-blue-600 group"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * item.length }}
          >
            {item}
            <motion.span
              className="absolute left-0 bottom-0 border-b-2 w-0 bg-blue-600"
              layoutId="underline"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </motion.a>
        ))}

        <motion.button
          className="bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 font-serif"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.4 }}
          >
            {["Home", "About", "Services", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-blue-700 font-semibold hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.a>
            ))}

            <motion.button
              className="bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 font-serif"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
