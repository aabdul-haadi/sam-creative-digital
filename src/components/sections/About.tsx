import React, { useState } from 'react';
import { CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  // Define local images for each tab
  const tabImages = {
    mission: '/src/assets/img/mission.webp',
    vision: '/src/assets/img/vision.webp',
    values: '/src/assets/img/values.webp',
  };

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary opacity-10 rounded-lg transform rotate-6"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent opacity-10 rounded-lg transform -rotate-6"></div>

            <div className="relative z-10 overflow-hidden rounded-xl h-[300px] lg:h-[400px] w-full">
              <img
                src={tabImages[activeTab]}
                alt={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Image`}
                className="w-full h-full object-cover rounded-xl"
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

          <div>
            <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-4">
              <span className="text-primary font-medium text-sm">About Us</span>
            </div>
            <h2 className="mb-6">
              We Create <span className="text-primary">Digital Solutions</span> For Your Business
            </h2>
            <p className="text-text-muted mb-8">
              SAM CREATIVE is a full-service digital agency founded in 2015. We're a team of strategists, designers, developers, and marketers passionate about creating exceptional digital experiences that drive real business results.
            </p>

            <div className="mb-8">
              <div className="flex space-x-6 border-b border-background-lighter mb-6">
                {['mission', 'vision', 'values'].map((tab) => (
                  <button
                    key={tab}
                    className={`pb-3 px-2 font-medium ${
                      activeTab === tab
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-text-muted hover:text-text'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="min-h-[180px]">
                {activeTab === 'mission' && (
                  <div>
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
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div>
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
                  </div>
                )}

                {activeTab === 'values' && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                      <Clock size={20} className="text-primary mr-2" />
                      Our Core Principles
                    </h4>
                    <p className="text-text-muted">
                      At SAM CREATIVE, we are guided by our commitment to excellence, integrity, innovation, and client success in everything we do.
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
                  </div>
                )}
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Get to Know Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;