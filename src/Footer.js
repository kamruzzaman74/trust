import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h3
          className="text-4xl font-semibold text-yellow-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Trust Builders & Engineering Consultation
        </motion.h3>
        <motion.p
          className="text-lg text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Leading the way in real estate and engineering with dedication and trust.
        </motion.p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-8">
          <motion.a
            href="https://www.facebook.com"
            className="text-3xl text-blue-600 hover:text-blue-400 transition duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            className="text-3xl text-blue-400 hover:text-blue-300 transition duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            className="text-3xl text-blue-700 hover:text-blue-500 transition duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedinIn />
          </motion.a>
        </div>

        {/* Footer bottom */}
        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          &copy; 2025 growMore19. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;


