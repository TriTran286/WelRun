// Components/Preloader.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => {
          const next = prev + 1;
          if (next === 100) {
            setTimeout(onLoadingComplete, 300);
          }
          return next;
        });
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  // Animation variants for the title text
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={progress === 100 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center w-full max-w-md px-4">
        {/* Title Section */}
        <motion.div 
          className="mb-12"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timer Icon with pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 0, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-6"
          >
            <Timer 
              className="w-16 h-16 text-[#52d406] mx-auto" 
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Animated Title */}
          <motion.h1 
            className="text-4xl font-bold mb-2 flex justify-center items-center gap-1"
            variants={titleVariants}
          >
            {"WelRun".split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="text-[#52d406] inline-block"
                whileHover={{ scale: 1.2, color: '#52d406' }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle with fade-up animation */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600"
          >
            ランニングへようこそ
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden w-64 mx-auto">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#52d406] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Loading Text */}
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg font-semibold text-[#52d406]">
              {Math.round(progress)}%
            </p>
            <motion.p 
              className="text-gray-600 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
               Running makes you stronger
              
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;