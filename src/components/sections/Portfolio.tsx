import React from 'react';
import { ExternalLink } from 'lucide-react'; // Ensure you install lucide-react

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1728044849277-9cb3cd94e729?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://honda-tcj.netlify.app/',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1737737351943-82e01f866e53?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://foodies-tcj.netlify.app/',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1597979732130-9d2ad18df38b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://coders-coffee.netlify.app/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Recent Work</h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Explore our latest projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <ExternalLink className="w-8 h-8 text-white" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
