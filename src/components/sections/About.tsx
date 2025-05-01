import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary opacity-10 rounded-lg transform rotate-6"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent opacity-10 rounded-lg transform -rotate-6"></div>
              
              <div className="relative z-10 overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Nexus Digital Agency Team" 
                  className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute top-5 right-5 bg-background-light bg-opacity-80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center mb-2">
                  <Trophy size={18} className="text-primary mr-2" />
                  <span className="font-semibold">Award Winning</span>
                </div>
                <p className="text-sm text-text-muted">
                  Recognized for excellence in digital design
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-4">
              <span className="text-primary font-medium text-sm">About Us</span>
            </div>
            <h2 className="mb-6">
              We Create <span className="text-primary">Digital Solutions</span> For Your Business
            </h2>
            <p className="text-text-muted mb-8">
              Nexus is a full-service digital agency founded in 2015. We're a team of strategists, designers, developers, and marketers passionate about creating exceptional digital experiences that drive real business results.
            </p>
            
            <div className="mb-8">
              <div className="flex space-x-6 border-b border-background-lighter mb-6">
                <button
                  className={`pb-3 px-2 font-medium ${
                    activeTab === 'mission'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-text-muted hover:text-text'
                  }`}
                  onClick={() => handleTabChange('mission')}
                >
                  Our Mission
                </button>
                <button
                  className={`pb-3 px-2 font-medium ${
                    activeTab === 'vision'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-text-muted hover:text-text'
                  }`}
                  onClick={() => handleTabChange('vision')}
                >
                  Our Vision
                </button>
                <button
                  className={`pb-3 px-2 font-medium ${
                    activeTab === 'values'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-text-muted hover:text-text'
                  }`}
                  onClick={() => handleTabChange('values')}
                >
                  Our Values
                </button>
              </div>
              
              <div className="min-h-[180px]">
                {activeTab === 'mission' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                      <Users size={20} className="text-primary mr-2" />
                      Empowering Digital Growth
                    </h4>
                    <p className="text-text-muted">
                      Our mission is to empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in an ever-evolving digital landscape.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                        <span>Creating meaningful digital experiences</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                        <span>Driving business growth through innovation</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
                
                {activeTab === 'vision' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                      <Trophy size={20} className="text-primary mr-2" />
                      Leading Digital Excellence
                    </h4>
                    <p className="text-text-muted">
                      We envision a world where businesses of all sizes can harness the full potential of digital technologies to connect with their audiences, solve complex problems, and achieve extraordinary success.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                        <span>Setting new standards in digital innovation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                        <span>Creating lasting digital transformation</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
                
                {activeTab === 'values' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                      <Clock size={20} className="text-primary mr-2" />
                      Our Core Principles
                    </h4>
                    <p className="text-text-muted">
                      At Nexus, we are guided by our commitment to excellence, integrity, innovation, and client success in everything we do.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                        <span>Unwavering commitment to quality</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                        <span>Collaborative approach to problem-solving</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                        <span>Continuous learning and adaptation</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary">
              Get to Know Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;