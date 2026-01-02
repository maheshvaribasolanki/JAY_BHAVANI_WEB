import {
  FaBuilding,
  FaCalculator,
  FaLeaf,
  FaProjectDiagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    { title: "Structure Design", icon: <FaBuilding /> },
    { title: "Cost Estimation", icon: <FaCalculator /> },
    { title: "Sustainability Check", icon: <FaLeaf /> },
    { title: "Project Management", icon: <FaProjectDiagram /> },
  ];

  return (
    <div className="w-full py-20 px-6 md:px-16 bg-gray-50">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-14 text-blue-600"
      >
        Our Services
      </motion.h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl p-10 text-center shadow-lg transition-all duration-300 hover:shadow-2xl 
            ${
              index % 2 === 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {/* Icon */}
            <div className="text-5xl text-white mb-6 flex justify-center">
              {service.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-white">
              {service.title}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
