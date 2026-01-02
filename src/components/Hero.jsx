import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="w-full relative bg-blue-500 py-20 overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0, filter: "blur(20px) scale(1.2)" }}
        animate={{ opacity: 0, filter: "blur(0px) scale(1)" }}
        transition={{ duration: 2 }}
        // After animation hide completely
        exit={{ opacity: 0 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Content */}
        <motion.div
          className="text-white"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Designing Dreams,
            <br />
            <span className="text-green-300">Building Reality</span>
          </h1>

          <motion.button
            className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Estimate
          </motion.button>
        </motion.div>

        {/* Optional right empty space */}
        <div className="mt-10 md:mt-0"></div>
      </div>

      {/* Decorative Animated Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
}
