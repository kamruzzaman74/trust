import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const properties = [
  {
    img: "/pe.webp",
    title: "🏡 Elite Beachside Villa",
    desc: "Wake up to the sound of waves in this stunning beachfront property with a private infinity pool and breathtaking sunset views.",
  },
  {
    img: "/pw.webp",
    title: "🏙️ Urban Penthouse Suite",
    desc: "Experience luxury in the sky with this premium penthouse featuring floor-to-ceiling windows and exclusive rooftop access.",
  },
];

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function Properties() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Header */}
      <section className="text-center py-28 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          🌟 Premium Real Estate Collection 🌟
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-600"
        >
          Discover world-class properties crafted for those who value elegance, comfort, and prestige.
        </motion.p>
      </section>

      {/* Properties */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid gap-20 md:grid-cols-2">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="group bg-white rounded-3xl shadow-2xl hover:shadow-4xl transform hover:-translate-y-4 transition-all duration-500 p-8 border border-gray-200 relative overflow-hidden"
            >
              {/* Floating animation background */}
              <motion.div
                variants={floatAnimation}
                initial="initial"
                animate="animate"
                className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-300 to-blue-300 opacity-30 blur-3xl rounded-full"
              />
              <motion.div
                variants={floatAnimation}
                initial="initial"
                animate="animate"
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tr from-pink-300 to-yellow-300 opacity-30 blur-3xl rounded-full"
              />

              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={property.img}
                  alt={property.title}
                  className="w-full h-72 object-cover rounded-2xl shadow-md"
                />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <h3 className="text-4xl font-extrabold text-gray-900">
                  {property.title}
                </h3>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  {property.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="text-center py-24 bg-gradient-to-r from-purple-50 to-blue-50">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-gray-900 mb-6"
        >
          Ready to Upgrade Your Lifestyle?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Let's find the perfect property that matches your dreams. Contact our luxury experts today.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-2xl transition-all"
        >
          Get In Touch 🚀
        </motion.a>
      </section>

      <Footer />
    </div>
  );
}

export default Properties;
