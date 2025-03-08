import React from "react";
import { motion } from "framer-motion";

const InteriorDesignServices = () => {
  return (
    <section className="relative py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-rose-500 via-amber-400 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ✨ Design Beyond Imagination
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We create breathtaking spaces tailored to your lifestyle, blending
          creativity and comfort.
        </motion.p>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🏡",
              title: "Elegant Home Interiors",
              desc: "Transform your living space into a cozy, stylish retreat.",
              color: "hover:text-rose-500",
            },
            {
              icon: "🏢",
              title: "Premium Office Designs",
              desc: "Boost productivity with modern, innovative workspaces.",
              color: "hover:text-amber-400",
            },
            {
              icon: "🛋️",
              title: "Luxury Lounge Areas",
              desc: "Relax in spaces designed for both beauty and comfort.",
              color: "hover:text-indigo-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-gray-50 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-200 transition-all hover:scale-105"
              initial={{ opacity: 0, y: 30 * (index + 1) }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3
                className={`text-2xl font-semibold mb-3 transition ${item.color}`}
              >
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Floating Animation Text */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-12"
        >
          <p className="text-lg md:text-xl font-medium text-gray-700">
            🎨 Let's bring your dream interiors to life!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteriorDesignServices;
