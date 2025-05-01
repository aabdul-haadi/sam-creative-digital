import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Zap, Users, Shield } from 'lucide-react';
import ReactPlayer from 'react-player';

const AiSolutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: Bot,
      title: 'Advanced AI',
      description: 'Custom-trained AI models for your specific business needs'
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: '24/7 automated customer support with human-like interactions'
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Seamless integration with your website, WhatsApp, and social media'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with data encryption and privacy controls'
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium text-sm">AI Solutions</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Custom <span className="text-primary">AI Solutions</span></h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Transform your customer service with our intelligent AI chatbot solutions. Get a custom-trained AI assistant that understands your business and serves your customers 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-background-lighter">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=zT_hEpZBzs8"
                width="100%"
                height="100%"
                controls
                light={true}
              />
            </div>
          </div>

          <div>
            <div className="space-y-8">
              <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 bg-background-light rounded-lg border border-background-lighter hover:border-primary/20 transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-text-muted">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="btn btn-primary ml-6" // <-- updated margin-left to a valid Tailwind class
              >
                Create Your AI Assistant
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSolutions;
