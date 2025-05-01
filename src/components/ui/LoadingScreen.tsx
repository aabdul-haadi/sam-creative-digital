import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../logo.png'; // ✅ Adjust path based on your structure

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 10;
        return next >= 100 ? 100 : next;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mb-8 w-28 h-28"
      >
        <img
          src={logo}
          alt="SAM CREATIVE Logo"
          className="w-full h-full object-contain animate-pulse"
        />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        className="text-primary font-bold text-2xl md:text-3xl tracking-wider"
      >
        SAM CREATIVE
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
        className="text-text-muted mt-2 tracking-wide text-sm md:text-base"
      >
        DIGITAL AGENCY
      </motion.p>

      {/* Optional progress bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: 'easeOut', duration: 0.2 }}
        className="mt-6 h-1 bg-primary rounded-full"
        style={{ width: `${Math.min(progress, 100)}%`, maxWidth: '200px' }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
