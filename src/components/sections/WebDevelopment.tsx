import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShoppingCart, Rocket, X, ExternalLink, Package } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
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
    title: 'WordPress & E-commerce',
    description: 'Custom WordPress solutions and e-commerce platforms built for success.',
    icon: ShoppingCart,
    projects: [
      {
        title: 'Luxury Fashion Store',
        description: 'Full-featured e-commerce platform with custom theme',
        image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Digital Magazine',
        description: 'Custom WordPress publishing platform',
        image: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Artisan Marketplace',
        description: 'Multi-vendor e-commerce solution',
        image: 'https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    packages: {
      basic: [
        'Custom WordPress Theme',
        'Basic E-commerce Setup',
        'Mobile Responsive Design',
        '3 Page Templates'
      ],
      advanced: [
        'Everything in Basic',
        'WooCommerce Integration',
        'Custom Product Pages',
        'Payment Gateway Setup'
      ],
      premium: [
        'Everything in Advanced',
        'Multi-vendor Support',
        'Custom Plugin Development',
        'Advanced Analytics Integration'
      ]
    }
  },
  {
    title: 'SaaS Products',
    description: 'Scalable, secure, and user-friendly SaaS solutions.',
    icon: Code,
    projects: [
      {
        title: 'Project Management Tool',
        description: 'Full-stack SaaS application',
        image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Real-time data visualization platform',
        image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'HR Management System',
        description: 'Enterprise HR solution',
        image: 'https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    packages: {
      basic: [
        'MVP Development',
        'Basic Authentication',
        'Core Features',
        'Basic API Integration'
      ],
      advanced: [
        'Everything in Basic',
        'Advanced User Roles',
        'Custom API Development',
        'Performance Optimization'
      ],
      premium: [
        'Everything in Advanced',
        'Microservices Architecture',
        'Advanced Security Features',
        'Scalability Planning'
      ]
    }
  },
  {
    title: 'React Animated Websites',
    description: 'Dynamic and engaging web experiences with modern animations.',
    icon: Rocket,
    projects: [
      {
        title: 'Creative Agency Website',
        description: 'Fully animated React application',
        image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Product Launch Page',
        description: 'Interactive product showcase',
        image: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Portfolio Platform',
        description: 'Dynamic artist portfolio system',
        image: 'https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ],
    packages: {
      basic: [
        'Basic Animations',
        'Responsive Design',
        '3 Interactive Components',
        'Performance Optimization'
      ],
      advanced: [
        'Everything in Basic',
        'Custom Animations',
        'Interactive 3D Elements',
        'Advanced State Management'
      ],
      premium: [
        'Everything in Advanced',
        'Complex Animation Systems',
        'Three.js Integration',
        'Premium Performance'
      ]
    }
  }
];

const WebDevelopment: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showPackages, setShowPackages] = useState<number | null>(null);

  return (
    <section className="section bg-background-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent opacity-5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium text-sm">Web Development</span>
          </div>
          <h2 className="mb-6">Expert <span className="text-primary">Web Solutions</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We create powerful web solutions that drive business growth and deliver exceptional user experiences.
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
                className="card group hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
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
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{services[selectedService].title} Projects</h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-background-lighter rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services[selectedService].projects.map((project, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                      <p className="text-text-muted">{project.description}</p>
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
                  className="p-2 hover:bg-background-lighter rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['basic', 'advanced', 'premium'].map((tier) => (
                  <div key={tier} className="card">
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
                        className="btn btn-primary w-full"
                        onClick={() => setShowPackages(null)}
                      >
                        Order Direct
                      </a>
                      <a
                        href="https://fiverr.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline w-full"
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

export default WebDevelopment;