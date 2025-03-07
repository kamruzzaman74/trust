import React from "react";
import { motion } from "framer-motion";

const ConstructionServices = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🏗️ Premium Building Construction Services
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We deliver high-quality, innovative, and sustainable building solutions for every type of project.
        </motion.p>
      </div>

      {/* Image Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            img: "bb.webp",
            title: "Residential Projects",
          },
          {
            img: "bc.webp",
            title: "Commercial Buildings",
          },
          {
            img: "bt.webp",
            title: "Industrial Complexes",
          },
          {
            img: "km.webp",
            title: "Road & Infrastructure",
          },
          
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-3xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-bold text-yellow-400">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <motion.a
          href="/contact"
          className="inline-block px-10 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
          whileHover={{ scale: 1.1 }}
        >
          🏠 Get a Quote Now
        </motion.a>
      </div>
    </section>
  );
};

export default ConstructionServices;
