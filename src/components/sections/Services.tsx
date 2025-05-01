import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  ShoppingCart, 
  Palette, 
  Video, 
  Box, 
  FileEdit, 
  Laptop, 
  Share2,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites built with HTML, CSS, and JavaScript that provide seamless user experiences across all devices.',
    icon: Code,
    color: 'bg-primary',
    delay: 0.1
  },
  {
    id: 2,
    title: 'React.js Development',
    description: 'Dynamic and interactive web applications powered by React.js to create responsive and engaging user interfaces.',
    icon: Laptop,
    color: 'bg-accent',
    delay: 0.2
  },
  {
    id: 3,
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platforms that are secure, scalable, and optimized for conversions and user experience.',
    icon: ShoppingCart,
    color: 'bg-success',
    delay: 0.3
  },
  {
    id: 4,
    title: 'WordPress Website',
    description: 'Custom WordPress solutions from themes to plugins that make content management simple and efficient.',
    icon: Share2,
    color: 'bg-primary-dark',
    delay: 0.4
  },
  {
    id: 5,
    title: 'SEO & Content Strategy',
    description: 'Strategic content creation and optimization to improve visibility and drive targeted traffic to your website.',
    icon: FileEdit,
    color: 'bg-warning',
    delay: 0.5
  },
  {
    id: 6,
    title: 'Graphic Design',
    description: 'Eye-catching visuals from logos to brand assets that communicate your message and strengthen your identity.',
    icon: Palette,
    color: 'bg-accent-light',
    delay: 0.6
  },
  {
    id: 7,
    title: '2D/3D Animation',
    description: 'Stunning motion graphics and animations that bring your stories to life and engage your audience.',
    icon: Video,
    color: 'bg-primary-light',
    delay: 0.7
  },
  {
    id: 8,
    title: '3D Modeling',
    description: 'Detailed 3D models and visualizations for products, architectural renderings, and interactive experiences.',
    icon: Box,
    color: 'bg-error',
    delay: 0.8
  }
];

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  delay: number;
}> = ({ title, description, icon: Icon, color, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="card hover:shadow-lg hover:translate-y-[-8px] group"
    >
      <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-6`}>
        <Icon size={24} className="text-background" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-text-muted mb-6">{description}</p>
      
      <a href="#contact" className="inline-flex items-center text-primary font-medium text-sm group-hover:text-primary-light transition-colors duration-300">
        Learn More
        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="section bg-background-light">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium text-sm">What We Offer</span>
          </div>
          <h2 className="mb-6">Our <span className="text-primary">Services</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We provide end-to-end digital solutions to help businesses of all sizes establish their online presence and achieve their goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;