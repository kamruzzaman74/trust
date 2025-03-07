import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-28 px-6 md:px-20 text-white"
      style={{
        backgroundImage: "url('/fancy-bg.jpg')", // Replace with your beautiful background image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-md"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-24 drop-shadow-2xl"
        >
          🚀 Meet Our Amazing Partners
        </motion.h2>

        {/* Partners */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* FinmanBD */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 border border-white/30 backdrop-blur-lg shadow-2xl rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center shadow-xl mb-6">
              <img
                src="mr.jpg"
                alt="FinmanBD Logo"
                className="w-24 h-24 object-contain rounded-full"
              />
            </div>
            <h3 className="text-4xl font-bold text-white">FinmanBD</h3>
            <p className="text-gray-200 mt-4">
              Your <span className="font-semibold">Financial Growth Partner</span> ensuring business success through expert services.
            </p>
          </motion.div>

          {/* GrowMore19 */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 border border-white/30 backdrop-blur-lg shadow-2xl rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-green-800 rounded-full flex items-center justify-center shadow-xl mb-6">
              <img
                src="/ksa.png"
                alt="GrowMore19 Logo"
                className="w-24 h-24 object-contain rounded-full"
              />
            </div>
            <h3 className="text-4xl font-bold text-white">GrowMore19</h3>
            <p className="text-gray-200 mt-4">
              <span className="font-semibold">Technical Innovator</span> building cutting-edge digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-28 bg-white/20 border border-white/30 backdrop-blur-lg shadow-2xl rounded-3xl p-14 text-center"
        >
          <h3 className="text-5xl font-bold text-white mb-8">
            🌟 Why Choose Us?
          </h3>
          <p className="text-gray-200 text-xl leading-relaxed max-w-4xl mx-auto">
            By partnering with FinmanBD and GrowMore19, you get the perfect blend
            of financial expertise and technical excellence, delivering innovative
            solutions that drive lasting success.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl text-white"
            >
              <h4 className="text-3xl font-bold">💡 Expertise</h4>
              <p className="mt-3">Years of proven industry knowledge.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-xl text-white"
            >
              <h4 className="text-3xl font-bold">🚀 Innovation</h4>
              <p className="mt-3">Future-ready solutions crafted today.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-xl text-white"
            >
              <h4 className="text-3xl font-bold">🤝 Trust</h4>
              <p className="mt-3">Strong, reliable, and long-term support.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
