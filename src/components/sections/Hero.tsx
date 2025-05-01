import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer } from 'lucide-react';
import HeroBackground from '../three/HeroBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      <HeroBackground />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-6">
              <span className="text-primary font-medium text-sm">Innovative Digital Solutions</span>
            </div>

            <h1 className="mb-6">
              <span className="text-text">We Create </span>
              <span className="text-primary relative">
                Digital Experiences
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C47.6667 1.83333 127.8 -1.7 199 5.5" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <motion.p
              className="text-text-muted text-lg mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We are a creative digital agency that specializes in delivering cutting-edge web development, design, and digital marketing solutions to help businesses thrive in the digital landscape.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get Started <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className="btn btn-outline">
                Our Services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full opacity-5 blur-3xl transform scale-110"></div>
              <div className="relative z-10 bg-background-light rounded-3xl p-2 shadow-xl border border-background-lighter">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Digital Design Work"
                  className="w-full h-auto rounded-2xl"
                />

                {/* Floating UX/UI badge (optional, can be removed too) */}
                <div className="absolute -bottom-5 -right-5 bg-background-light rounded-2xl p-4 shadow-lg border border-background-lighter">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                      <MousePointer size={18} className="text-background" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold">Modern UX/UI</h5>
                      <p className="text-xs text-text-muted">Intuitive & Interactive</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-10 -left-10 p-4 bg-background-light rounded-2xl shadow-lg border border-background-lighter">
                <div className="flex flex-col">
                  <div className="flex space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-error-light"></div>
                    <div className="w-3 h-3 rounded-full bg-warning-light"></div>
                    <div className="w-3 h-3 rounded-full bg-success-light"></div>
                  </div>
                  <div className="text-xs text-text-muted mb-1">{'<'}WebDevelopment {'/>'}</div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-primary text-background text-xs rounded">HTML</span>
                    <span className="px-2 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded">CSS</span>
                    <span className="px-2 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded">JS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-9 h-14 border-2 border-text rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Hero;
