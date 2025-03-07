import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6 text-black">
      <div className="max-w-7xl mx-auto">

        {/* Footer top section */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-5xl font-extrabold text-blue-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Trust Builders & Engineering Consultation
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Transforming Real Estate & Engineering Solutions with Precision and Trust.
          </motion.p>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-8 mt-6">
          <motion.a
            href="https://www.facebook.com"
            className="text-4xl text-blue-600 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            className="text-4xl text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            className="text-4xl text-blue-700 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedinIn />
          </motion.a>
        </div>

        {/* Footer bottom section */}
        <div className="text-center mt-12">
          <motion.p
            className="text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            &copy; 2025 growMore19. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


