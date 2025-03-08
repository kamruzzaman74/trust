import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const team = [
  {
    img: "/kjj.jpg",
    name: "Kamruzzaman Sohag",
    role: "Technical Specialist ⚙️",
    desc: "Ensuring flawless technical operations and advanced software support to keep every project running smoothly.",
  },
  {
    img: "/kt4.png",
    name: "Engr. Abu Jayed",
    role: "Lead Engineer 🏗️",
    desc: "Combining innovative design and engineering precision to create iconic, lasting structures.",
  },
  {
    img: "/kt2.png",
    name: "Engr. Abu Bakkar",
    role: "Project Manager 📊",
    desc: "Mastermind behind seamless project execution, ensuring timely delivery and premium quality.",
  },
  {
    img: "/kq1.png",
    name: "Engr. Fahim Abrar",
    role: "Civil Engineer 🏠",
    desc: "Delivering structural excellence with unmatched dedication to safety and compliance.",
  },
];

const About = () => {
  return (
    <>
    <section className="bg-gradient-to-br from-blue-50 to-white py-28 px-6 md:px-20 text-gray-800">
      <Navbar />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-6xl font-extrabold text-center text-gradient-to-r from-indigo-600 to-purple-700 mb-10"
      >
        Meet Our Elite Team 🌟
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto mb-20 leading-relaxed font-serif"
      >
        Welcome to <span className="font-semibold text-blue-700">Trust Builders & Engineering Limited</span> — where creativity meets precision. Our dynamic team is dedicated to shaping the future with innovation, passion, and unparalleled expertise in engineering and technology. 🏗️💡
      </motion.p>

      {/* Team Section - New Design */}
      <div className="flex flex-wrap justify-center gap-16">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start w-80 p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-500"
          >
            {/* Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md mb-6">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-md text-indigo-600 mt-1 italic">{member.role}</p>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed font-serif">
              {member.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call To Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Ready to build something extraordinary?
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Let’s bring your vision to life with our expert team and innovative solutions.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
        >
          Connect with Us 🚀
        </a>
      </motion.div>

      
    </section>
     <Footer />
     </>
  );
};

export default About;
