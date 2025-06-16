import { ScanText, GalleryHorizontalEnd, BellRing } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const FeaturesOverview: React.FC = () => {
  const data = [
    {
      title: "OCR Technology",
      description:
        "Instantly scan and verify IDs, passports, and other documents with advanced OCR technology.",
      icon: <ScanText color="white" size={128} />,
    },
    {
      title: "Front Desk Management",
      description:
        "Streamline operations with digital forms, automated workflows, and paperless processing.",
      icon: <GalleryHorizontalEnd color="white" size={128} />,
    },
    {
      title: "Real-time Notifications",
      description:
        "Keep staff and visitors informed with automated alerts and status updates.",
      icon: <BellRing color="white" size={128} />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#0a0613] to-[#0a0613]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Features Overview
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need for modern check-in
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {data.map((feature, index) => (
            <Card3D key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card3D: React.FC<{ feature: any }> = ({ feature }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [30, -30]);
  const rotateY = useTransform(mouseX, [-300, 300], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main card */}
      <motion.div
        className="relative bg-[#12101a] p-8 h-96 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          z: isHovered ? 100 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating particles effect */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                y: [-10, -20, -10],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-8 right-6 w-1 h-1 bg-blue-400 rounded-full"
              animate={{
                y: [-5, -15, -5],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </>
        )}

        {/* Content with 3D layering */}
        <motion.div
          className="text-4xl mb-6 relative z-10"
          style={{
            transform: "translateZ(50px)",
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {feature.icon}
        </motion.div>

        <motion.h3
          className="text-white text-2xl font-semibold mb-4 text-center relative z-10"
          style={{
            transform: "translateZ(30px)",
          }}
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {feature.title}
        </motion.h3>

        <motion.p
          className="text-gray-400 text-base text-center relative z-10"
          style={{
            transform: "translateZ(20px)",
          }}
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {feature.description}
        </motion.p>

        {/* Interactive shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{
            transform: `translateX(${mouseX.get() * 0.1}px) translateY(${
              mouseY.get() * 0.1
            }px)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FeaturesOverview;
