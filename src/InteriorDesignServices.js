import React from "react";
import { motion } from "framer-motion";

const InteriorDesignServices = () => {
  return (
    <section
      className="relative py-24 px-8 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1615873968403-89f4804040d3?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>

      <div className="relative max-w-7xl mx-auto text-center text-white space-y-16">
        {/* Heading */}
        <motion.h2
          className="text-6xl font-extrabold tracking-wide leading-tight bg-gradient-to-r from-pink-500 via-yellow-300 to-purple-500 bg-clip-text text-transparent animate-pulse"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🪄 Elevate Your Space with Style
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <motion.div
            className="group bg-white/10 backdrop-blur-2xl p-10 rounded-3xl border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_50px_rgb(255,255,255,0.4)] transition-all duration-500 hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl font-bold mb-4 group-hover:text-pink-400 transition">
              🏡 Luxury Home Designs
            </h3>
            <p className="text-lg opacity-80">
              Curate the perfect blend of comfort and elegance at home.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="group bg-white/10 backdrop-blur-2xl p-10 rounded-3xl border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_50px_rgb(255,255,255,0.4)] transition-all duration-500 hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-4xl font-bold mb-4 group-hover:text-yellow-300 transition">
              🏢 Chic Commercial Spaces
            </h3>
            <p className="text-lg opacity-80">
              Impress clients with futuristic and functional designs.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="group bg-white/10 backdrop-blur-2xl p-10 rounded-3xl border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_50px_rgb(255,255,255,0.4)] transition-all duration-500 hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-4xl font-bold mb-4 group-hover:text-purple-400 transition">
              🧑‍💻 Modern Office Vibes
            </h3>
            <p className="text-lg opacity-80">
              Boost productivity with spaces designed to inspire.
            </p>
          </motion.div>
        </div>

        {/* Optional CTA */}
        <motion.a
          href="#contact"
          className="inline-block mt-12 px-12 py-4 text-xl font-bold rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
          whileHover={{ scale: 1.1 }}
        >
          🚀 Let's Design Your Dream
        </motion.a>
      </div>
    </section>
  );
};

export default InteriorDesignServices;
