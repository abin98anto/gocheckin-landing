import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-20 lg:pt-44 pb-16 lg:pb-24 bg-gradient-to-b from-[#4f358e] to-[#0a0613] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight">
              Effortless Check-ins,
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                Happy Guests
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let guests scan a QR code, upload their ID, and check in within
              seconds. Say goodbye to long queues and tedious paperwork!
            </p>
            <motion.div
              className="relative w-full h-150 rounded-2xl overflow-hidden border border-white/10 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/hero_section_video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#a78bfa33] via-transparent to-slate-900" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
