import { motion } from "framer-motion";
import Navbar from "./Navbar";
import InteriorDesignServices from "./InteriorDesignServices";
import ConstructionServices from "./ConstructionServices";
import Partners from "./Partners";
import Footer from "./Footer";
import ArchitecturalDesign from "./ArchitecturalDesign";
import ConstructionCostCalculator from "./ConstructionCostCalculator";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-300 opacity-30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-300 opacity-30 rounded-full blur-3xl"
        />

        <div className="relative w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 text-center md:text-left"
          >
            <motion.h1
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">Timeless Designs</span>
            </motion.h1>

            <motion.p
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="text-lg md:text-2xl text-gray-600 max-w-lg mx-auto md:mx-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Experience a blend of innovation and elegance where your dream spaces come to life with unmatched precision.
            </motion.p>
          </motion.div>

          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-full"
          >
            <img
              src="nn.jpg"
              alt="Luxury Home Design"
              className="w-full h-[320px] md:h-[500px] object-cover rounded-3xl shadow-2xl border-[6px] border-white"
            />
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <InteriorDesignServices />
      <ConstructionServices />
      <ArchitecturalDesign />
      <ConstructionCostCalculator />
      <Partners />
      <Footer />
    </>
  );
}
