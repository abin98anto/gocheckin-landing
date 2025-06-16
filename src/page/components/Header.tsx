import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const progress = Math.min(currentScrollY / heroHeight, 1);
      setScrollProgress(progress);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor:
          scrollProgress < 1
            ? `rgba(15, 23, 42, ${0.8 * scrollProgress})`
            : "rgba(2, 6, 23, 0.9)",
        backdropFilter: "blur(10px)",
        boxShadow: isScrolled ? "0 1px 3px 0 rgba(0, 0, 0, 0.1)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex items-center space-x-2">
              <div className=" p-2 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white transition-colors duration-300">
                  Go CheckIn
                </span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className="font-medium text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              whileHover={{
                boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              className="text-gray-600 hover:text-gray-900 p-2"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (you can expand this later) */}
      <motion.div className="lg:hidden bg-white border-t border-gray-100 hidden">
        <div className="max-w-7xl mx-auto px-4 py-4"></div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
