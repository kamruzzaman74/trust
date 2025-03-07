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
  <Navbar/>
    <section className="w-full h-screen bg-white flex items-center justify-center px-6 py-10 md:py-0 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 opacity-40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-300 opacity-40 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center md:text-left">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight"
          >
            🏙️ Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
              Perfect Home
            </span>{" "}
            Awaits
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-600 max-w-lg mx-auto md:mx-0"
          >
            Search luxury properties in the best neighborhoods with stunning architecture and exclusive deals.
          </motion.p>

          {/* Search Bar with Gradient Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-[3px] bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full max-w-md mx-auto md:mx-0"
          >
            <div className="bg-white shadow-xl rounded-full flex items-center px-4 py-2">
              <input
                type="text"
                placeholder="🔍 Search location, property type..."
                className="flex-grow px-4 py-2 text-gray-700 focus:outline-none rounded-full"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
              >
                Search
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right Image with Hover Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ rotate: 2, scale: 1.02 }}
          className="w-full"
        >
          <img
            src="nn.jpg"
            alt="Luxury modern home with stunning architecture"
            className="w-full h-[300px] md:h-[450px] object-cover rounded-3xl shadow-2xl border-4 border-white"
          />
        </motion.div>
      </div>
      
    </section>
    <InteriorDesignServices />
    <ConstructionServices/>
    <ArchitecturalDesign/>
    <ConstructionCostCalculator/>
    <Partners/>
    <Footer/>
    </>
  );
}
