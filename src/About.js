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
    <section className="relative overflow-hidden py-28 px-6 md:px-20 bg-white text-gray-800">
      <Navbar />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-6"
      >
        🚀 Meet Our Elite Team
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto mb-20 leading-relaxed"
      >
        Welcome to <span className="font-semibold text-blue-700">Trust Builders & Engineering Limited</span> — where creativity meets precision. Our dynamic team of experts is driven by passion, innovation, and excellence to craft extraordinary spaces that inspire and endure. 💡🏡
      </motion.p>

      {/* Team Section */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-tr from-white via-gray-50 to-white border border-gray-200 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500"
          >
            {/* Image */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-md text-blue-600 mt-1 italic">{member.role}</p>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {member.desc}
              </p>
            </div>
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
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to build something extraordinary?
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Let's make your vision a reality with our world-class expertise.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
        >
          connect with  Us  🚀
        </a>
      </motion.div>

      <Footer />
    </section>
  );
};

export default About;
