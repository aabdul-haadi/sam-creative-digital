import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, BarChart, FileText, Target, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Keyword Research & Analysis',
    description: 'In-depth research to identify high-value keywords and search trends in your industry.'
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Strategic content planning aligned with your business goals and target audience.'
  },
  {
    icon: BarChart,
    title: 'Performance Tracking',
    description: 'Regular monitoring and reporting of your content\'s performance and SEO metrics.'
  },
  {
    icon: Target,
    title: 'Competitor Analysis',
    description: 'Comprehensive analysis of competitor strategies and market positioning.'
  },
  {
    icon: Users,
    title: 'Audience Research',
    description: 'Deep understanding of your target audience\'s needs and search behavior.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Planning',
    description: 'Long-term strategy development for sustainable organic growth.'
  }
];

const SeoStrategy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="section bg-background-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent opacity-5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium text-sm">SEO & Content Strategy</span>
          </div>
          <h2 className="mb-6">Boost Your <span className="text-primary">Online Presence</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We help businesses improve their search engine rankings and create engaging content that converts visitors into customers.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:bg-opacity-20 transition-all duration-300">
                  <Icon size={24} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-muted">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary">
            Get Your SEO Analysis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SeoStrategy;