import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    img: "/an.webp",
    title: "🏛️ Modern Residential Design",
    desc: "Innovative and sustainable home designs tailored to your lifestyle and vision.",
  },
  {
    img: "/An2.webp",
    title: "🏢 Commercial Spaces",
    desc: "Functional, aesthetic, and efficient designs for thriving businesses.",
  },
  {
    img: "/an3.jpg",
    title: "🌿 Landscape Architecture",
    desc: "Blending nature with architecture to create harmonious outdoor spaces.",
  },
];

function ArchitecturalDesign() {
  return (
    <div className="bg-white text-gray-800 py-20 px-6 md:px-16">
      {/* Header */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-gray-900 mb-4"
        >
          🏗️ Our Architectural Design Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Crafting visionary designs that shape extraordinary spaces.
        </motion.p>
      </section>

      {/* Services */}
      <section className="grid gap-16 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl p-6 border border-gray-200 hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
          >
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-white/10 to-pink-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl mb-6">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover rounded-2xl transition-transform transform duration-500"
              />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-all duration-300">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Call To Action */}
      <section className="text-center mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          Let's Build Something Extraordinary!
        </motion.h2>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-block bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white text-lg font-semibold py-3 px-10 rounded-full shadow-xl transition-all mt-4"
        >
          Contact Our Architects 🚀
        </motion.a>
      </section>
    </div>
  );
}

export default ArchitecturalDesign;
