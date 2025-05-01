import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alice Johnson',
    title: 'CEO, BrightTech',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    quote: 'SAM CREATIVE transformed our brand with stunning visuals and smooth UX. Their attention to detail and creative approach exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Ahmed Khan',
    title: 'Founder, TechVision Pakistan',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    quote: 'As a local business owner, I was impressed by SAM CREATIVE\'s understanding of our market. They delivered a website that perfectly represents our brand identity.',
    rating: 5
  },
  {
    name: 'Fatima Zahra',
    title: 'Marketing Director, StyleHub',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
    quote: 'The team at SAM CREATIVE is exceptional. Their creative designs and marketing strategies helped us establish a strong online presence.',
    rating: 5
  },
  {
    name: 'Muhammad Ali',
    title: 'CEO, Digital Solutions PK',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    quote: 'Working with SAM CREATIVE was a game-changer for our business. Their AI solutions and web development expertise are unmatched.',
    rating: 5
  },
  {
    name: 'Sara Kim',
    title: 'Founder, Bloom Studio',
    image: 'https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg',
    quote: 'Our website traffic doubled thanks to their SEO strategy and redesign. Their commitment to quality and results is truly impressive.',
    rating: 5
  },
  {
    name: 'Zainab Hassan',
    title: 'Owner, Karachi Cuisine',
    image: 'https://images.pexels.com/photos/1181697/pexels-photo-1181697.jpeg',
    quote: 'SAM CREATIVE helped us establish our restaurant\'s digital presence. Their understanding of local market needs is exceptional.',
    rating: 5
  },
  {
    name: 'Mark Lee',
    title: 'CTO, CodeWave',
    image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg',
    quote: 'The team at SAM CREATIVE delivered exceptional results. Their technical expertise and innovative solutions helped us achieve our digital goals.',
    rating: 5
  }
];

const TestimonialPage = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium text-sm">Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Discover why businesses choose SAM CREATIVE for their digital needs
          </p>
        </div>

        <div className="relative h-[400px] max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-background-light rounded-2xl p-8 shadow-xl border border-background-lighter">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonials[index].image}
                      alt={testimonials[index].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[index].rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-primary fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-lg italic text-text-muted mb-6">
                      "{testimonials[index].quote}"
                    </p>
                    <h4 className="text-xl font-semibold">{testimonials[index].name}</h4>
                    <p className="text-primary">{testimonials[index].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-background-light border border-background-lighter hover:bg-primary hover:text-background transition-all duration-300"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-background-light border border-background-lighter hover:bg-primary hover:text-background transition-all duration-300"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? 'bg-primary scale-125' : 'bg-background-lighter'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;