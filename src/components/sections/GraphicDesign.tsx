import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Palette, Image, X, ExternalLink, Package } from 'lucide-react';
import ReactPlayer from 'react-player';

import logo1 from "../../assets/logo/logo1.jpg";
import logo2 from "../../assets/logo/logo2.jpg";
import logo3 from "../../assets/logo/logo3.jpg";
import logo4 from "../../assets/logo/logo4.jpeg";
import logo5 from "../../assets/logo/logo5.jpg";
import logo6 from "../../assets/logo/logo6.jpg";
import logo7 from "../../assets/logo/logo7.jpg";
import logo8 from "../../assets/logo/logo8.jpg";
import logo9 from "../../assets/logo/logo9.jpg";
import logo10 from "../../assets/logo/logo10.jpeg";

import ads1 from "../../assets/ads/ad1.png";
import ads2 from "../../assets/ads/ad2.png";
import ads3 from "../../assets/ads/ad3.png";
// import ads4 from "../../assets/ads/ad4.png";
// import ads5 from "../../assets/ads/ad5.png";
import ads6 from "../../assets/ads/ad6.png";
import ads7 from "../../assets/ads/ad7.png";
import ads8 from "../../assets/ads/ad8.png";
import ads9 from "../../assets/ads/ad9.jpg";
import ads10 from "../../assets/ads/ad10.jpg";
import ads11 from "../../assets/ads/ad11.jpg";
import ads12 from "../../assets/ads/ad12.jpg";
import ads13 from "../../assets/ads/ad13.jpg";
import ads14 from "../../assets/ads/ad14.jpg";
import ads15 from "../../assets/ads/ad15.jpg";
import ads16 from "../../assets/ads/ad16.jpg";
import ads17 from "../../assets/ads/ad17.jpg";






interface Project {
  title: string;
  description: string;
  content: string;
  type: 'video' | 'image';
}

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ElementType;
  projects: Project[];
  packages: {
    basic: string[];
    advanced: string[];
    premium: string[];
  };
}

const services: ServiceCard[] = [
  {
    title: 'Motion Graphics 2D/3D Animation',
    description: 'Bringing ideas to life through stunning animations.',
    icon: Video,
    projects: [
      {
        title: 'Product Showcase',
        description: '3D product animation',
        content: 'https://www.youtube.com/watch?v=sZIDQZNOVb8',
        type: 'video'
      },
      {
        title: 'Explainer Video',
        description: '2D animated explainer',
        content: 'https://www.youtube.com/watch?v=GJ7unPa6flw',
        type: 'video'
      },
      {
        title: 'Product Animation',
        description: '3D product animation framer motion',
        content: 'https://www.youtube.com/shorts/ZFwMcVMf-yY',
        type: 'video'
      }, 
{
  title: 'Website Promotion Video',
  description: 'Showcasing features & enhancing user experience.',
  content: 'https://www.youtube.com/watch?v=zT_hEpZBzs8',
  type: 'video'
}


    ],
    packages: {
      basic: [
        '15-second Animation',
        'Basic Storyboard',
        '2 Revision Rounds',
        'Standard Resolution'
      ],
      advanced: [
        '30-second Animation',
        'Detailed Storyboard',
        '4 Revision Rounds',
        'HD Resolution'
      ],
      premium: [
        '60-second Animation',
        'Complex Storyboard',
        'Unlimited Revisions',
        '4K Resolution'
      ]
    }
  },

  
 {
  title: 'Logo Designing',
  description: 'Creating memorable brand identities.',
  icon: Palette,
  projects: [
    {
      title: 'KU Trading',
      description: 'A clean and professional logo for KU Trading.',
      content: logo1,
      type: 'image'
    },
    {
      title: 'Gear Zone',
      description: 'A modern, sleek logo for Gear Zone.',
      content: logo2,
      type: 'image'
    },
    {
      title: 'Company X',
      description: 'Stylish branding for Company X.',
      content: logo3,
      type: 'image'
    },
    {
      title: 'Global Enterprises',
      description: 'Bold and modern design for Global Enterprises.',
      content: logo4,
      type: 'image'
    },
    {
      title: 'Urhaus',
      description: 'Elegant logo design for Urhaus.',
      content: logo5,
      type: 'image'
    },
    {
      title: 'KU Trading - Brown',
      description: 'Distinctive brown version for KU Trading.',
      content: logo6,
      type: 'image'
    },
    {
      title: 'Gear Zone - Texture',
      description: 'Textured variant for Gear Zone logo.',
      content: logo7,
      type: 'image'
    },
    {
      title: 'Company Y',
      description: 'A sophisticated and modern logo for Company Y.',
      content: logo8,
      type: 'image'
    },
    {
      title: 'AK Resources',
      description: 'Professional design for AK Resources.',
      content: logo9,
      type: 'image'
    },
    {
      title: 'Global Branding',
      description: 'A global, colorful design for branding.',
      content: logo10,
      type: 'image'
    }
    ],
    packages: {
      basic: [
        '2 Logo Concepts',
        'Basic Color Variations',
        '2 Revision Rounds',
        'PNG & JPG Files'
      ],
      advanced: [
        '4 Logo Concepts',
        'Full Color Variations',
        '4 Revision Rounds',
        'All File Formats'
      ],
      premium: [
        '6 Logo Concepts',
        'Brand Guidelines',
        'Unlimited Revisions',
        'Source Files'
      ]
    }
  },
   {
  title: 'Social Media Ad Posts',
  description: 'Eye-catching designs for social media success.',
  icon: Image,
  projects: [
    {
      title: 'Product Campaign',
      description: 'E-commerce ad series',
      content: ads1,
      type: 'image'
    },
    {
      title: 'Event Promotion',
      description: 'Social media event campaign',
      content: ads2,
      type: 'image'
    },
    {
      title: 'Brand Awareness',
      description: 'Social media branding',
      content: ads3,
      type: 'image'
    },
    {
      title: 'Wireless Earbuds Promotion',
      description: 'Promoting wireless earbuds through engaging social media content.',
      content: ads6,
      type: 'image'
    },
    {
      title: 'Product Showcase',
      description: 'Product showcase for fashion and accessories.',
      content: ads7,
      type: 'image'
    },
    {
      title: 'Dental Care Ads',
      description: 'Branding and promotion for dental care products.',
      content: ads8,
      type: 'image'
    },
    {
      title: 'Footwear Campaign',
      description: 'Sneaker culture promotion through creative ad design.',
      content: ads9,
      type: 'image'
    },
    {
      title: 'Fitness Gear',
      description: 'Fitness product ad design for gym equipment.',
      content: ads10,
      type: 'image'
    },
    {
      title: 'Fashion Apparel',
      description: 'Apparel campaign with a modern twist.',
      content: ads11,
      type: 'image'
    },
    {
      title: 'Tech Gadgets Campaign',
      description: 'Tech gadgets promotion with high-quality visuals.',
      content: ads12,
      type: 'image'
    },
    {
      title: 'New Arrival Promotion',
      description: 'Product launch for new arrivals in fashion.',
      content: ads13,
      type: 'image'
    },
    {
      title: 'Skincare Campaign',
      description: 'Skincare brand promotion with elegant visuals.',
      content: ads14,
      type: 'image'
    },
    {
      title: 'Luxury Brand Design',
      description: 'Promoting luxury skincare items with attractive designs.',
      content: ads15,
      type: 'image'
    },
    {
      title: 'Summer Collection',
      description: 'Seasonal promotion for summer products.',
      content: ads16,
      type: 'image'
    },
    {
      title: 'Product Design',
      description: 'Hydrating product campaign for skincare.',
      content: ads17,
      type: 'image'
    }
    ],
    packages: {
      basic: [
        '5 Social Media Posts',
        'Basic Templates',
        '2 Revision Rounds',
        'Standard Resolution'
      ],
      advanced: [
        '10 Social Media Posts',
        'Custom Templates',
        '4 Revision Rounds',
        'High Resolution'
      ],
      premium: [
        '20 Social Media Posts',
        'Premium Templates',
        'Unlimited Revisions',
        'Source Files'
      ]
    }
  }
];

const GraphicDesign: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showPackages, setShowPackages] = useState<number | null>(null);

  return (
    <section className="section bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-accent opacity-5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium text-sm">Graphic Design</span>
          </div>
          <h2 className="mb-6">Creative <span className="text-primary">Design Solutions</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We transform ideas into visually stunning designs that capture attention and communicate your message effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-text-muted mb-6">{service.description}</p>
                
               <div className="flex gap-2">
  <button
    onClick={() => setSelectedService(index)}
    className="flex items-center justify-center w-full px-3 py-1.5 text-sm border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
  >
    <ExternalLink size={16} className="mr-1" />
    View Work
  </button>
  <button
    onClick={() => setShowPackages(index)}
    className="flex items-center justify-center w-full px-3 py-1.5 text-sm border border-gray-300 text-gray-700 rounded-md hover:border-primary hover:text-primary transition-colors duration-200"
  >
    <Package size={16} className="mr-1" />
    View Packages
  </button>
</div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Projects Modal */}
     <AnimatePresence>
  {selectedService !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedService(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-background-light rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">{services[selectedService].title} Projects</h3>
          <button
            onClick={() => setSelectedService(null)}
            className="p-2 hover:bg-background-lighter rounded-full transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services[selectedService].projects.map((project, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg ${
                project.type === 'image' ? '' : 'border border-background-lighter'
              }`}
            >
              {project.type === 'video' ? (
                <div className="aspect-video">
                  <ReactPlayer
                    url={project.content}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
              ) : (
                <img
                  src={project.content}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}

              {project.type === 'image' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h4 className="text-white text-lg font-semibold mb-1">{project.title}</h4>
                  <p className="text-sm text-white/80">{project.description}</p>
                </div>
              )}

              {project.type === 'video' && (
                <div className="p-4 bg-background-lighter">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-text-muted">{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Packages Modal */}
<AnimatePresence>
  {showPackages !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={() => setShowPackages(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-background-light rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">{services[showPackages].title} Packages</h3>
          <button
            onClick={() => setShowPackages(null)}
            className="p-2 hover:bg-background-lighter rounded-full transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['basic', 'advanced', 'premium'].map((tier) => (
            <div
              key={tier}
              className="card transition-all duration-300 hover:-translate-y-2"
            >
              <h4 className="text-xl font-semibold mb-4 capitalize">{tier} Package</h4>
              <ul className="space-y-3 mb-6">
                {services[showPackages].packages[tier as keyof typeof services[0]['packages']].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <a
                  href="#contact"
                  className="btn btn-primary w-full transition duration-200 hover:scale-[1.03]"
                  onClick={() => setShowPackages(null)}
                >
                  Order Direct
                </a>
                <a
                  href="https://fiverr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full transition duration-200 hover:scale-[1.03]"
                >
                  Order on Fiverr
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      {/* Packages Modal */}
      <AnimatePresence>
        {showPackages !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPackages(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background-light rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{services[showPackages].title} Packages</h3>
                <button
                  onClick={() => setShowPackages(null)}
                  className="p-2 hover:bg-background-lighter rounded-full transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['basic', 'advanced', 'premium'].map((tier) => (
                  <div key={tier} className="card transform transition-all duration-300 hover:-translate-y-2">
                    <h4 className="text-xl font-semibold mb-4 capitalize">{tier} Package</h4>
                    <ul className="space-y-3 mb-6">
                      {services[showPackages].packages[tier as keyof typeof services[0]['packages']].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                          <span className="text-text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-3">
                      <a
                        href="#contact"
                        className="btn btn-primary w-full transform transition-all duration-300 hover:scale-105"
                        onClick={() => setShowPackages(null)}
                      >
                        Order Direct
                      </a>
                      <a
                        href="https://fiverr.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline w-full transform transition-all duration-300 hover:scale-105"
                      >
                        Order on Fiverr
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GraphicDesign;