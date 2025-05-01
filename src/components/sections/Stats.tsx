import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Briefcase, Award, Clock } from 'lucide-react';

// Counter animation component
const AnimatedCounter: React.FC<{
  value: number;
  duration?: number;
  inView: boolean;
  delay?: number;
}> = ({ value, duration = 2000, inView, delay = 0 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = value;
    const totalDuration = duration;
    const incrementTime = totalDuration / end;
    
    // Add delay before starting
    const timer = setTimeout(() => {
      // Don't use setInterval for smoother animation with easing
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, duration, inView, delay]);
  
  return <span>{count}</span>;
};

// Stat card component
const StatCard: React.FC<{
  icon: React.ReactNode;
  value: number;
  label: string;
  inView: boolean;
  delay: number;
}> = ({ icon, value, label, inView, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: delay * 0.2 }}
      className="relative bg-background-light rounded-xl p-8 overflow-hidden group"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent opacity-5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:bg-opacity-20 transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-4xl md:text-5xl font-bold mb-2 text-primary">
          <AnimatedCounter 
            value={value} 
            inView={inView} 
            delay={delay * 200} 
          />
          <span className="ml-1">+</span>
        </h3>
        
        <p className="text-text-muted">{label}</p>
      </div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const stats = [
    {
      id: 1,
      icon: <Users size={32} className="text-primary" />,
      value: 120,
      label: "Happy Clients",
      delay: 0
    },
    {
      id: 2,
      icon: <Briefcase size={32} className="text-primary" />,
      value: 450,
      label: "Projects Completed",
      delay: 1
    },
    {
      id: 3,
      icon: <Award size={32} className="text-primary" />,
      value: 25,
      label: "Awards Won",
      delay: 2
    },
    {
      id: 4,
      icon: <Clock size={32} className="text-primary" />,
      value: 8,
      label: "Years Experience",
      delay: 3
    }
  ];
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-background to-background-light opacity-50 z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"></div>
      
      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium text-sm">Our Achievements</span>
          </div>
          <h2 className="mb-6">The <span className="text-primary">Numbers</span> Speak For Us</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Over the years, we've achieved remarkable milestones and earned the trust of businesses worldwide through our commitment to excellence and innovation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              inView={inView}
              delay={stat.delay}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary">
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;