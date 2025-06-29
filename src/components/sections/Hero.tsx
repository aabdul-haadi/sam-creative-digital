import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroBackground from '../three/HeroBackground';
import bg1 from './../../assets/bg1.jpg';
import bg2 from './../../assets/bg2.jpg';
import bg3 from './../../assets/bg3.jpg';

const Hero: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [bg1, bg2, bg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      <HeroBackground />

      {/* Background Image Scroller */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((bg, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === bgIndex ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            {/* Black Shade Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-primary font-medium text-sm">Innovative Digital Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
              className="mb-6"
            >
              <span className="text-text">We Create </span>
              <span className="text-primary relative">
                Digital Experiences
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C47.6667 1.83333 127.8 -1.7 199 5.5" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
              className="text-text-muted text-lg mb-8 max-w-lg mx-auto"
            >
              We are a creative digital agency that specializes in delivering cutting-edge web development, design, and digital marketing solutions to help businesses thrive in the digital landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#contact" className="btn btn-primary">
                Get Started <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className="btn btn-outline">
                Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;