import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-indigo-100 py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-gradient-to-r from-purple-500 to-blue-600 mb-24"
        >
          🌟 Our Trusted Partners
        </motion.h2>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Partner Card 1 (FinmanBD) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white border-2 border-indigo-500 rounded-lg shadow-xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-105"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center mb-6">
              <img src="/mr.jpg" alt="FinmanBD Logo" className="w-24 h-24 object-contain rounded-full" />
            </div>
            <h3 className="text-2xl font-semibold text-indigo-800">FinmanBD</h3>
            <p className="mt-4 text-gray-600 text-sm">
              Leading financial growth with expert solutions.
            </p>
          </motion.div>

          {/* Partner Card 2 (GrowMore19) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white border-2 border-green-500 rounded-lg shadow-xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-105"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-green-800 rounded-full flex items-center justify-center mb-6">
              <img src="/ksa.png" alt="GrowMore19 Logo" className="w-24 h-24 object-contain rounded-full" />
            </div>
            <h3 className="text-2xl font-semibold text-green-800">GrowMore19</h3>
            <p className="mt-4 text-gray-600 text-sm">
              Empowering growth through innovative strategies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
