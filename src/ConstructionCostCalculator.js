import React, { useState } from "react";
import { motion } from "framer-motion";

function ConstructionCostCalculator() {
  const [area, setArea] = useState(0);
  const [buildingType, setBuildingType] = useState("residential");
  const [materialQuality, setMaterialQuality] = useState("standard");
  const [cost, setCost] = useState(null);

  // Sample static cost data for calculation
  const costData = {
    residential: {
      standard: 3000, // BDT per square foot for standard material
      premium: 5000,  // BDT per square foot for premium material
    },
    commercial: {
      standard: 4500,
      premium: 7000,
    },
  };

  // Handle cost calculation
  const calculateCost = () => {
    const selectedCost = costData[buildingType][materialQuality];
    const totalCost = selectedCost * area;
    setCost(totalCost);
  };

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
          🏗️ AI-Powered Building Construction Cost Calculator (Dhaka)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Calculate the estimated cost of building construction in Dhaka based on your preferences.
        </motion.p>
      </section>

      {/* Form and Image Section */}
      <section className="flex flex-col md:flex-row justify-between gap-16">
        {/* Left Section - Form */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <label htmlFor="area" className="text-lg font-medium text-gray-700">
              Area (in square feet):
            </label>
            <input
              id="area"
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full p-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter area in sq. ft."
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="buildingType" className="text-lg font-medium text-gray-700">
              Building Type:
            </label>
            <select
              id="buildingType"
              value={buildingType}
              onChange={(e) => setBuildingType(e.target.value)}
              className="w-full p-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div className="space-y-4">
            <label htmlFor="materialQuality" className="text-lg font-medium text-gray-700">
              Material Quality:
            </label>
            <select
              id="materialQuality"
              value={materialQuality}
              onChange={(e) => setMaterialQuality(e.target.value)}
              className="w-full p-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={calculateCost}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-lg font-semibold py-3 rounded-full shadow-xl transition-all"
          >
            Calculate Cost
          </motion.button>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src="/tm.webp" // replace with your image path
            alt="Building Construction"
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Result Section */}
      {cost !== null && (
        <section className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Estimated Construction Cost:
            </h2>
            <p className="text-2xl text-gray-700 font-semibold">
              ৳ {cost.toLocaleString("en-IN")}
            </p>
          </motion.div>
        </section>
      )}

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600">
        <p className="text-sm"> - Building Cost Calculator</p>
      </footer>
    </div>
  );
}

export default ConstructionCostCalculator;
