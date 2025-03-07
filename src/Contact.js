import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Header */}
      <section className="text-center py-20 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          📞 Get In Touch With Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto"
        >
          We're here to assist you! Reach out through any of the channels below.
        </motion.p>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">📍 Our Office</h3>
            <p className="text-gray-600">
              123 Dream Street, Luxury City, Country 45678
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">📞 Phone</h3>
            <p className="text-gray-600">+123 456 7890</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">📧 Email</h3>
            <p className="text-gray-600">contact@realestate.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">🌐 Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Facebook
              </a>
              <a href="#" className="text-sky-500 hover:text-sky-700">
                Twitter
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                Instagram
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-50 p-8 rounded-3xl shadow-2xl space-y-6"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ✉️ Send Us a Message
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl text-lg font-semibold shadow-lg transition-all"
          >
            Send Message 🚀
          </button>
        </motion.form>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
