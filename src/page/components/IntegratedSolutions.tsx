import React from "react";
import { motion } from "framer-motion";

const IntegratedSolutions: React.FC = () => {
  const processSteps = [
    {
      image: "/src/assets/scan-qr.jpg",
      description: "Scan the QR code.",
    },
    {
      image: "/src/assets/fill-details.jpg",
      description: "Enter the details.",
    },
    {
      image: "/src/assets/reception.png",
      description: "Room Booked seamlessly.",
    },
  ];

  return (
    <section
      id="solutions"
      className="py-10 bg-gradient-to-b from-[#0a0613] to-[#120c21]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Seamless CheckIn
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionize your guest registration. Guests can now scan a QR
            code, upload their ID, and be checked in within seconds, drastically
            reducing wait times and eliminating paperwork
          </p>
        </div>

        <div className="relative w-full h-[500px] flex justify-center items-center">
          {/* Central Process Flow */}
          <div className="relative w-full max-w-6xl">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6c47ff] to-transparent transform -translate-y-1/2 z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-[#6c47ff] to-[#9d7aff]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 3, delay: 1.5 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Process Steps */}
            <div className="relative z-10 flex justify-between items-center">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-gradient-to-b from-[#1a112b] to-[#0a0613] rounded-2xl p-8 shadow-2xl border border-[#6c47ff]/20 w-64 h-80"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.4 + 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(108, 71, 255, 0.3)",
                  }}
                >
                  {/* Image Container */}
                  <motion.div
                    className="rounded-xl overflow-hidden mb-6 shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 1,
                      delay: index * 0.4 + 0.8,
                      type: "spring",
                      stiffness: 150,
                    }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.p
                    className="text-gray-300 text-center text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.4 + 1.2 }}
                    viewport={{ once: true }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSolutions;
