import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+923263778850', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary bg-opacity-10 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium text-sm">Contact Us</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Have a question or want to work together? Drop us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-text-muted">samcreativeoficial@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-text-muted">+92 326 3778850</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-text-muted">Karachi, Pakistan</p>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full btn btn-primary mt-8"
            >
              <Send className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-background-light border border-background-lighter focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-background-light border border-background-lighter focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background-light border border-background-lighter focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;